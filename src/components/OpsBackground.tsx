'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';

type Channel = 'ops' | 'dev' | 'mixed';

function pickChannel(pathname: string): Channel {
  const p = (pathname || '').toLowerCase();
  if (p.includes('projects') || p.includes('dev') || p.includes('code'))
    return 'dev';
  if (p.includes('experience') || p.includes('about') || p.includes('contact'))
    return 'ops';
  return 'mixed';
}

function nowStamp() {
  const d = new Date();
  const hh = String(d.getHours()).padStart(2, '0');
  const mm = String(d.getMinutes()).padStart(2, '0');
  const ss = String(d.getSeconds()).padStart(2, '0');
  return `${hh}:${mm}:${ss}`;
}

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduced(!!mq.matches);
    update();
    mq.addEventListener?.('change', update);
    return () => mq.removeEventListener?.('change', update);
  }, []);
  return reduced;
}

/** ------------------ LOG LIBRARIES ------------------ **/

const OPS_BASE = [
  '[OK] m365: service health nominal',
  '[OK] entra: token issuance stable',
  '[OK] exchange: mailflow normal',
  '[OK] backup: last run completed',
  '[OK] hyper-v: replication healthy',
  '[INFO] vpn: active sessions steady',
  '[OK] rds: fslogix profiles mounted',
  '[INFO] firewall: policy synced',
  '[OK] monitoring: alerts quiet',
  '[INFO] storage: iops within baseline',
  '[OK] smtp: connector healthy',
  '[INFO] dns: resolution latency low',
];

const OPS_FLAVOR = [
  '[WARN] backup: retry scheduled',
  '[WARN] hyper-v: checkpoint age exceeds target',
  '[ERROR] exchange: outbound queue delay (auto-recovered)',
  '[FAILED] backup: verification mismatch (quarantined)',
];

const DEV_BASE = [
  '[INFO] nextjs: route cache hit',
  '[OK] build: compiled successfully',
  '[INFO] react: hydration complete',
  '[INFO] node: event loop stable',
  '[INFO] ts: typecheck passed',
  '[OK] lint: no warnings',
  '[OK] ci: tests passed',
  '[INFO] bundle: chunk split applied',
  '[INFO] perf: LCP within target',
  '[OK] deploy: edge updated',
];

const DEV_FLAVOR = [
  '[WARN] api: 429 rate limit (retry ok)',
  '[ERROR] prisma: transaction aborted (retry succeeded)',
  '[FAILED] deploy: rollback initiated (previous stable restored)',
  '[ERROR] build: chunk size threshold exceeded (auto-split)',
];

const HTTP_COMMON = [
  '[INFO] api: 200 GET /health',
  '[INFO] api: 200 GET /api/projects',
  '[INFO] api: 200 GET /api/me',
  '[WARN] api: 401 GET /api/me (unauthorized)',
  '[WARN] api: 403 POST /api/admin (forbidden)',
  '[WARN] api: 404 GET /api/notes/123 (not found)',
  '[WARN] api: 429 GET /api/search (rate limited)',
  '[ERROR] api: 500 POST /api/notes (internal error)',
  '[ERROR] api: 502 GET /api (bad gateway)',
  '[ERROR] api: 503 GET /api (service unavailable)',
  '[ERROR] api: 504 GET /api (gateway timeout)',
];

const NGINX_STYLE = [
  '[INFO] nginx: 200 GET / (cache HIT)',
  '[WARN] nginx: 404 GET /favicon.ico',
  '[WARN] nginx: 401 GET /api/auth/session',
  '[ERROR] nginx: 502 upstream prematurely closed connection',
  '[ERROR] nginx: 504 upstream timed out',
];

const NEXT_STYLE = [
  '[INFO] nextjs: GET / (RSC) 200',
  '[INFO] nextjs: GET /projects 200 (cache HIT)',
  '[WARN] nextjs: GET /api/auth/session 401',
  '[WARN] nextjs: GET /_next/image 404',
  '[ERROR] nextjs: POST /api/upload 500',
];

function getBuckets(channel: Channel) {
  if (channel === 'ops') {
    return {
      base: [...OPS_BASE, ...HTTP_COMMON],
      flavor: [...OPS_FLAVOR, ...NGINX_STYLE],
    };
  }
  if (channel === 'dev') {
    return {
      base: [...DEV_BASE, ...HTTP_COMMON],
      flavor: [...DEV_FLAVOR, ...NEXT_STYLE, ...NGINX_STYLE],
    };
  }
  return {
    base: [...OPS_BASE, ...DEV_BASE, ...HTTP_COMMON],
    flavor: [...OPS_FLAVOR, ...DEV_FLAVOR, ...NEXT_STYLE, ...NGINX_STYLE],
  };
}

function formatLikeRealLog(message: string) {
  const ip = `192.168.1.${10 + Math.floor(Math.random() * 200)}`;
  const ms = 8 + Math.floor(Math.random() * 220);
  const rid = Math.random().toString(16).slice(2, 10);

  const styles = [
    () => `${nowStamp()} ${message} · ${ms}ms`,
    () => `${nowStamp()} [rid=${rid}] ${message} · ${ms}ms`,
    () => `${nowStamp()} ${ip} ${message} · ${ms}ms`,
  ];
  return styles[Math.floor(Math.random() * styles.length)]();
}

/**
 * Tipično:
 * 70% OK/INFO
 * 20% WARN
 * 10% ERROR/FAILED
 */
function weightedPick(base: string[], flavor: string[]) {
  const all = [...base, ...flavor];
  const okInfo = all.filter((x) => x.includes('[OK]') || x.includes('[INFO]'));
  const warns = all.filter((x) => x.includes('[WARN]'));
  const bad = all.filter(
    (x) => x.includes('[ERROR]') || x.includes('[FAILED]')
  );

  const r = Math.random();
  let picked: string;

  if (r < 0.7 && okInfo.length)
    picked = okInfo[Math.floor(Math.random() * okInfo.length)];
  else if (r < 0.9 && warns.length)
    picked = warns[Math.floor(Math.random() * warns.length)];
  else if (bad.length) picked = bad[Math.floor(Math.random() * bad.length)];
  else picked = all[Math.floor(Math.random() * all.length)];

  return formatLikeRealLog(picked);
}

/** ------------------ COMPONENT ------------------ **/

export default function OpsBackground({
  opacity = 0.16,
  // minimal lines; real amount is computed from document height
  minLines = 120,
}: {
  opacity?: number;
  minLines?: number;
}) {
  const pathname = usePathname() || '';
  const channel = pickChannel(pathname);
  const reducedMotion = usePrefersReducedMotion();
  const { base, flavor } = useMemo(() => getBuckets(channel), [channel]);

  const [docHeight, setDocHeight] = useState(0);
  const [linesNeeded, setLinesNeeded] = useState(minLines);
  const [rows, setRows] = useState<string[]>([]);

  const timerRef = useRef<number | null>(null);

  // columns must match Tailwind breakpoints below: columns-1 sm:columns-2 lg:columns-3
  const getCols = () => {
    const w = window.innerWidth;
    if (w >= 1024) return 3; // lg
    if (w >= 640) return 2; // sm
    return 1;
  };

  const recalc = () => {
    const doc = document.documentElement;
    const body = document.body;

    const h = Math.max(
      doc.scrollHeight,
      body.scrollHeight,
      doc.offsetHeight,
      body.offsetHeight,
      window.innerHeight
    );

    // for leading-6 (24px) + browser font rendering, 28px is safer
    const linePx = 28;
    const cols = getCols();

    const linesPerCol = Math.ceil(h / linePx) + 20; // buffer
    const needed = Math.max(minLines, linesPerCol * cols + 80);

    setDocHeight(h);
    setLinesNeeded(needed);
  };

  // Recalc on mount, resize, route change, and when document size changes
  useEffect(() => {
    recalc();

    const onResize = () => recalc();
    window.addEventListener('resize', onResize);

    const ro = new ResizeObserver(() => recalc());
    ro.observe(document.documentElement);

    // late measurements (fonts/images/layout settling)
    const t1 = window.setTimeout(recalc, 200);
    const t2 = window.setTimeout(recalc, 800);

    return () => {
      window.removeEventListener('resize', onResize);
      ro.disconnect();
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [channel]);

  // Build enough lines for full page
  useEffect(() => {
    const next: string[] = [];
    for (let i = 0; i < linesNeeded; i++) next.push(weightedPick(base, flavor));
    setRows(next);
  }, [linesNeeded, base, flavor]);

  // Slow tick: rotate 1 line to keep it alive
  useEffect(() => {
    if (reducedMotion) return;

    const tick = () => {
      setRows((prev) => {
        if (!prev.length) return prev;
        const next = prev.slice(1);
        next.push(weightedPick(base, flavor));
        return next;
      });

      timerRef.current = window.setTimeout(tick, 1200);
    };

    timerRef.current = window.setTimeout(tick, 1200);
    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, [base, flavor, reducedMotion]);

  return (
    <div
      className="pointer-events-none absolute left-0 top-0 z-[-10] w-full overflow-hidden"
      style={{ height: docHeight ? `${docHeight}px` : '100vh' }}
    >
      {/* subtle glow */}
      <div className="absolute -top-40 left-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-fg/10 blur-3xl" />
      <div className="absolute -bottom-48 left-2/3 h-96 w-96 -translate-x-1/2 rounded-full bg-fg/10 blur-3xl" />

      {/* console wallpaper */}
      <div className="absolute inset-0 p-6 sm:p-10" style={{ opacity }}>
        <div className="columns-1 sm:columns-2 lg:columns-3 [column-gap:18px]">
          {rows.map((line, idx) => (
            <div
              key={idx}
              className="break-inside-avoid font-mono text-[11px] leading-6 text-fg/90"
            >
              {line}
            </div>
          ))}
        </div>
      </div>

      {/* gentle top wash for readability */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.26)_0%,rgba(0,0,0,0.16)_25%,transparent_60%)]" />

      {/* scanline */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(255,255,255,0.04)_50%,transparent_100%)] opacity-[0.05]" />

      {/* soft vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.10)_78%,rgba(0,0,0,0.22)_100%)]" />
    </div>
  );
}
