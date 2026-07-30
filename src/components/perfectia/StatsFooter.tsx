import { Award, Facebook, Globe, Instagram, Linkedin, Sparkles, User, Youtube, ShieldCheck } from "lucide-react";

const stats = [
  { icon: User, value: "25K+", label: "Implantes colocados" },
  { icon: Sparkles, value: "98.9%", label: "Satisfacción global" },
  { icon: Globe, value: "40+", label: "Países" },
  { icon: Award, value: "15 Años", label: "De innovación" },
  { icon: ShieldCheck, value: "Garantía", label: "De por vida" },
];

const certs = ["FDA", "CE", "ISO 13485", "SFDA", "INVÍMA"];

const socials = [Instagram, Youtube, Linkedin, Facebook];

export function StatsFooter() {
  return (
    <div id="trazabilidad" className="mx-auto max-w-[1400px] scroll-mt-24 px-6 lg:px-10">
      <section className="panel px-6 py-12 md:px-12">
        <div className="grid grid-cols-2 gap-y-10 md:grid-cols-3 lg:grid-cols-5">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center text-center">
              <div className="flex size-12 items-center justify-center rounded-full border border-border bg-surface-2/50">
                <s.icon className="size-4.5 text-foreground/80" strokeWidth={1.5} />
              </div>
              <p className="mt-5 text-2xl font-light tracking-tight">{s.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <footer id="contacto" className="mt-24 scroll-mt-24 border-t border-border py-14">
        <div className="grid gap-12 lg:grid-cols-3">
          <div>
            <p className="text-xl tracking-tight">
              <span className="font-semibold">Perfect</span>
              <span className="font-light text-muted-foreground">IA</span>
            </p>
            <p className="mt-3 max-w-xs text-sm text-muted-foreground">
              Inteligencia. Tecnología. Confianza. Belleza que evoluciona contigo.
            </p>
          </div>

          <ul className="flex flex-wrap items-start justify-center gap-8 text-sm text-muted-foreground">
            {certs.map((c) => (
              <li key={c} className="transition-colors hover:text-foreground">
                {c}
              </li>
            ))}
          </ul>

          <div className="lg:text-right">
            <p className="eyebrow">Síguenos</p>
            <div className="mt-4 flex gap-3 lg:justify-end">
              {socials.map((Icon, i) => (
                <a
                  key={i}
                  href="#contacto"
                  aria-label="Red social PerfectIA"
                  className="flex size-11 items-center justify-center rounded-full border border-border bg-surface/50 text-muted-foreground transition-colors hover:bg-surface-2 hover:text-foreground"
                >
                  <Icon className="size-4" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-14 text-center text-xs text-muted-foreground">
          © 2024 PerfectIA. Todos los derechos reservados.
        </p>
      </footer>
    </div>
  );
}
