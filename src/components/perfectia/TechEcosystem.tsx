import {
  ArrowRight,
  Building2,
  Cloud,
  Droplet,
  Grid3x3,
  Layers,
  Plus,
  Scan,
  Search,
  Shield,
  Stethoscope,
  User,
} from "lucide-react";

const tech = [
  { icon: Droplet, title: "Gel Ultra Soft", desc: "Máxima suavidad y naturalidad." },
  { icon: Grid3x3, title: "Nano Superficie", desc: "Menor fricción, mayor integración." },
  { icon: Layers, title: "Memoria de Forma", desc: "Se adapta a tu cuerpo de forma inteligente." },
  { icon: Shield, title: "Alta Resistencia", desc: "Seguridad comprobada, diseñada para durar." },
  { icon: Plus, title: "Biocompatible", desc: "Materiales seguros, probados y confiables." },
];

const ecosystem = [
  { icon: User, title: "Paciente", desc: "Tu salud, tu historia." },
  { icon: Stethoscope, title: "Cirujano", desc: "Expertos certificados." },
  { icon: Building2, title: "Clínica", desc: "Procedimientos seguros." },
  { icon: Cloud, title: "PerfectIA Cloud", desc: "Datos protegidos.", highlight: true },
  { icon: Scan, title: "Trazabilidad", desc: "Cada implante, cada paso." },
  { icon: Search, title: "Soporte IA", desc: "Acompañamiento inteligente 24/7." },
];

export function TechEcosystem() {
  return (
    <div className="mx-auto max-w-[1400px] space-y-6 px-6 pb-6 lg:px-10">
      <section id="tecnologia" className="panel scroll-mt-24 px-6 py-14 md:px-12">
        <p className="eyebrow text-center">Tecnología que marca la diferencia</p>
        <div className="mt-12 grid grid-cols-2 gap-y-12 md:grid-cols-3 lg:grid-cols-5">
          {tech.map((t) => (
            <div key={t.title} className="flex flex-col items-center px-3 text-center">
              <div className="flex size-14 items-center justify-center rounded-2xl border border-border bg-surface-2/60">
                <t.icon className="size-5 text-foreground/80" strokeWidth={1.5} />
              </div>
              <h3 className="mt-5 text-[13px] font-semibold uppercase tracking-[0.13em]">
                {t.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="ecosistema" className="panel scroll-mt-24 px-6 py-14 md:px-12">
        <p className="eyebrow text-center">Nuestro ecosistema</p>
        <div className="mt-12 grid grid-cols-2 gap-y-12 md:grid-cols-3 lg:grid-cols-6">
          {ecosystem.map((e) => (
            <a
              key={e.title}
              href="#trazabilidad"
              className="group flex flex-col items-center px-3 text-center"
            >
              <div
                className={`flex size-16 items-center justify-center rounded-full border border-border bg-surface-2/60 transition-shadow ${
                  e.highlight ? "shadow-[0_0_40px_-6px_oklch(1_0_0/25%)]" : ""
                } group-hover:shadow-[0_0_40px_-6px_oklch(1_0_0/20%)]`}
              >
                <e.icon className="size-5 text-foreground/85" strokeWidth={1.5} />
              </div>
              <h3 className="mt-5 text-base">{e.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{e.desc}</p>
              <ArrowRight className="mt-2 size-4 text-muted-foreground transition-transform group-hover:translate-x-1" />
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
