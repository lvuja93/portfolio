import SectionTitle from '@/components/ui/SectionTitle';
import MiniBlock from '@/components/ui/MiniBlock';

type HomeT = {
  nav: {
    about: string;
    experience: string;
    projects: string;
  };
  cta: {
    contact: string;
  };
  placeholders: {
    about: string;
    projects: string;
    contact: string;
  };
};

export default function Sections({ t }: { t: HomeT }) {
  return (
    <>
      <section id="about" className="mx-auto w-full max-w-6xl px-5 py-10">
        <SectionTitle title={t.nav.about} />
        <p className="mt-3 max-w-3xl text-zinc-700 dark:text-zinc-300">
          {t.placeholders.about}
        </p>
      </section>

      <section id="experience" className="mx-auto w-full max-w-6xl px-5 py-10">
        <SectionTitle title={t.nav.experience} />
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <MiniBlock
            title="Microsoft 365 / Exchange"
            items={['Tenant', 'Mail flow', 'Security', 'Troubleshooting']}
          />
          <MiniBlock
            title="AD / GPO"
            items={['User lifecycle', 'Policies', 'Hardening', 'Diagnostics']}
          />
          <MiniBlock
            title="Networking"
            items={['VLAN', 'VPN', 'Firewalls', 'Routing / DNS']}
          />
          <MiniBlock
            title="Virtualization / Backup"
            items={['Hyper-V', 'VM ops', 'Recovery', 'Monitoring']}
          />
        </div>
      </section>

      <section id="projects" className="mx-auto w-full max-w-6xl px-5 py-10">
        <SectionTitle title={t.nav.projects} />
        <p className="mt-3 max-w-3xl text-zinc-700 dark:text-zinc-300">
          {t.placeholders.projects}
        </p>
      </section>

      <section id="contact" className="mx-auto w-full max-w-6xl px-5 py-12">
        <SectionTitle title={t.cta.contact} />
        <div className="mt-6 rounded-3xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900/30">
          <p className="text-zinc-700 dark:text-zinc-300">
            {t.placeholders.contact}
          </p>
        </div>
      </section>
    </>
  );
}
