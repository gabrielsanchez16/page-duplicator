import { ArrowRight, ChevronDown, Play } from "lucide-react";
import heroAsset from "@/assets/perfectia-caja.png.asset.json";

const leftSpecs = [
  { title: "Gel Ultra Soft", desc: "Sensación natural" },
  { title: "Nano Superficie", desc: "Biocompatibilidad superior" },
];

const rightSpecs = [
  { title: "ID Inteligente", desc: "RFID · QR · IA Verificada" },
  { title: "Pasaporte Digital", desc: "Garantía de por vida" },
];

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-[72px]">
      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="relative grid grid-cols-1 items-center gap-8 pt-10 lg:grid-cols-[1fr_minmax(0,640px)_1fr] lg:gap-4">
          <div className="order-2 hidden space-y-28 lg:order-1 lg:block lg:text-right">
            {leftSpecs.map((s) => (
              <div key={s.title} className="border-b border-border pb-3">
                <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-foreground">
                  {s.title}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="relative order-1 mx-auto w-full max-w-[640px] lg:order-2">
            <div
              className="pointer-events-none absolute inset-0 -z-10 blur-3xl"
              style={{
                background:
                  "radial-gradient(circle at 50% 45%, oklch(0.5 0.16 245 / 35%), transparent 65%)",
              }}
            />
            <img
              src={heroAsset.url}
              alt="Caja PerfectIA con implante mamario inteligente sostenido por una mano robótica"
              width={1920}
              height={1536}
              className="w-full select-none"
              style={{
                maskImage:
                  "radial-gradient(ellipse at 50% 45%, black 55%, transparent 82%)",
              }}
            />
          </div>

          <div className="order-3 hidden space-y-28 lg:block">
            {rightSpecs.map((s) => (
              <div key={s.title} className="border-b border-border pb-3">
                <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-foreground">
                  {s.title}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10 -mt-6 pb-24 text-center">
          <p className="eyebrow">La evolución de la confianza</p>
          <h1 className="mx-auto mt-6 max-w-4xl text-balance text-5xl font-semibold leading-[1.08] tracking-tight md:text-6xl lg:text-[68px]">
            El futuro de los implantes mamarios{" "}
            <span className="text-fade">inteligentes.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Tecnología avanzada que combina lo mejor de la innovación China y Americana para
            ofrecer seguridad, belleza natural y tranquilidad total.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#tecnologia"
              className="btn-chrome inline-flex items-center gap-3 rounded-full px-8 py-4 text-[12px] font-semibold uppercase tracking-[0.18em] transition-transform hover:scale-[1.02]"
            >
              Conoce PerfectIA <ArrowRight className="size-4" />
            </a>
            <a
              href="#tecnologia"
              className="inline-flex items-center gap-3 rounded-full border border-border bg-surface/50 px-8 py-4 text-[12px] font-semibold uppercase tracking-[0.18em] text-foreground transition-colors hover:bg-surface-2"
            >
              Ver tecnología <Play className="size-3.5 fill-current" />
            </a>
          </div>

          <div className="mt-12 flex flex-col items-center gap-1 text-muted-foreground">
            <ChevronDown className="size-4 animate-bounce" />
            <span className="text-[11px] uppercase tracking-[0.3em]">Desliza para explorar</span>
          </div>
        </div>
      </div>
    </section>
  );
}
