import { Check, CircleCheck, Send } from "lucide-react";
import implant from "@/assets/implant-product.jpg";

const features = [
  "Pasaporte digital del implante",
  "Recordatorios y controles",
  "Asistente IA 24/7",
  "Documentos y resultados",
  "Chat con tu médico",
  "Alertas y recomendaciones",
];

const timeline = [
  { label: "Cirugía", date: "12 MAY, 2024" },
  { label: "1er Control", date: "26 MAY, 2024" },
  { label: "2do Control", date: "12 JUN, 2024" },
  { label: "Próximo control", date: "12 JUL, 2024" },
];

function Phone({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div
      className={`rounded-[2rem] border border-border bg-surface/90 p-4 shadow-[0_30px_80px_-30px_oklch(0_0_0)] ${className ?? ""}`}
    >
      <div className="mx-auto mb-4 h-1 w-10 rounded-full bg-border" />
      {children}
    </div>
  );
}

export function AppSection() {
  return (
    <div className="mx-auto max-w-[1400px] px-6 pb-6 lg:px-10">
      <section id="app" className="panel scroll-mt-24 px-6 py-14 md:px-14">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_1.05fr]">
          <div>
            <p className="eyebrow">App PerfectIA</p>
            <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-tight md:text-[42px]">
              Tu implante.
              <br />
              Siempre contigo.
            </h2>
            <p className="mt-5 max-w-md text-base text-muted-foreground">
              Toda la información y el control de tu implante en la palma de tu mano.
            </p>

            <ul className="mt-9 grid gap-4 sm:grid-cols-2">
              {features.map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm">
                  <Check className="size-4 shrink-0 text-foreground/70" strokeWidth={1.8} />
                  {f}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap gap-4">
              {[
                { small: "Descárgalo en el", big: "App Store" },
                { small: "Disponible en", big: "Google Play" },
              ].map((s) => (
                <a
                  key={s.big}
                  href="#app"
                  className="flex items-center gap-3 rounded-xl border border-border bg-surface/70 px-5 py-3 transition-colors hover:bg-surface-2"
                >
                  <span className="size-7 rounded-md bg-surface-2" />
                  <span className="text-left">
                    <span className="block text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
                      {s.small}
                    </span>
                    <span className="block text-sm font-semibold">{s.big}</span>
                  </span>
                </a>
              ))}
            </div>
          </div>

          <div className="flex items-end justify-center gap-4">
            <Phone className="hidden w-[170px] translate-y-6 sm:block">
              <p className="text-sm font-medium">Timeline</p>
              <ul className="mt-4 space-y-4">
                {timeline.map((t) => (
                  <li key={t.label} className="flex gap-3">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-muted-foreground" />
                    <span>
                      <span className="block text-xs font-semibold">{t.label}</span>
                      <span className="block text-[11px] text-muted-foreground">{t.date}</span>
                    </span>
                  </li>
                ))}
              </ul>
              <button className="btn-chrome mt-5 w-full rounded-full px-3 py-2 text-xs font-medium">
                Agregar recordatorio
              </button>
            </Phone>

            <Phone className="w-[210px] -translate-y-4">
              <p className="text-sm font-medium">PerfectIA</p>
              <p className="mt-3 text-[11px] text-muted-foreground">Pasaporte del implante</p>
              <p className="text-lg font-semibold tracking-tight">PF-2039-AX7</p>
              <p className="mt-2 flex items-center gap-1.5 text-[11px] text-muted-foreground">
                <CircleCheck className="size-3.5" /> Verificado
              </p>
              <img
                src={implant}
                alt="Implante PerfectIA"
                width={816}
                height={816}
                loading="lazy"
                className="mx-auto my-3 w-full"
              />
              <p className="text-[11px] text-muted-foreground">Implantado</p>
              <p className="text-xs">12 MAY, 2024</p>
            </Phone>

            <Phone className="hidden w-[160px] translate-y-2 md:block">
              <p className="text-sm font-medium">Asistente IA</p>
              <div className="mt-4 space-y-2 text-[11px]">
                <p className="ml-auto w-fit rounded-xl bg-surface-2 px-3 py-2">
                  ¿Puedo hacer ejercicio?
                </p>
                <p className="w-fit rounded-xl bg-surface-2 px-3 py-2 text-muted-foreground">
                  Te recomendamos esperar 6 semanas después de la cirugía.
                </p>
                <p className="ml-auto w-fit rounded-xl bg-surface-2 px-3 py-2">
                  ¿Tienes alguna otra duda?
                </p>
              </div>
              <div className="mt-4 flex items-center justify-between rounded-full border border-border px-3 py-2 text-[11px] text-muted-foreground">
                Escribe tu pregunta <Send className="size-3.5" />
              </div>
            </Phone>
          </div>
        </div>
      </section>
    </div>
  );
}
