import { useState } from "react";
import {
  ArrowRight,
  Check,
  ChevronRight,
  Percent,
  ShoppingCart,
  Star,
  Zap,
  Shield,
} from "lucide-react";
import implant from "@/assets/implant-product.jpg";

type Product = {
  sku: string;
  name: string;
  badge: string;
  discount: string;
  specs: string[];
  rating: number;
  reviews: number;
  price: string;
  old: string;
  stock: number;
};

const products: Product[] = [
  {
    sku: "PF-US-200",
    name: "PerfectIA Ultra Soft 200cc",
    badge: "Más vendido",
    discount: "-16%",
    specs: ["Perfil bajo", "Nano superficie", "Gel cohesivo ultra blando"],
    rating: 4.9,
    reviews: 142,
    price: "USD 1840",
    old: "USD 2200",
    stock: 12,
  },
  {
    sku: "PF-US-300",
    name: "PerfectIA Ultra Soft 300cc",
    badge: "Nuevo",
    discount: "-17%",
    specs: ["Perfil moderado", "Nano superficie", "Gel cohesivo ultra blando"],
    rating: 4.8,
    reviews: 98,
    price: "USD 2050",
    old: "USD 2480",
    stock: 9,
  },
  {
    sku: "PF-FP-350",
    name: "PerfectIA Forma Plus 350cc",
    badge: "Premium",
    discount: "-15%",
    specs: ["Perfil alto", "Nano superficie", "Gel cohesivo forma plus"],
    rating: 4.9,
    reviews: 63,
    price: "USD 2390",
    old: "USD 2800",
    stock: 7,
  },
  {
    sku: "PF-AN-280",
    name: "PerfectIA Anatomico 280cc",
    badge: "Exclusivo",
    discount: "-16%",
    specs: ["Anatómico", "Nano superficie", "Gel cohesivo direccional"],
    rating: 5,
    reviews: 41,
    price: "USD 2600",
    old: "USD 3100",
    stock: 5,
  },
];

const plans = [
  {
    icon: Zap,
    title: "Crédito Inmediato",
    subtitle: "Aprobación en 24h",
    items: [
      "Financiación hasta USD 50.000",
      "Cuotas desde 6 a 48 meses",
      "Tasa preferencial médicos certificados",
      "Sin aval adicional",
    ],
    cta: "Solicitar crédito",
    featured: false,
  },
  {
    icon: Star,
    title: "Plan Clínica Partner",
    subtitle: "Para clínicas afiliadas",
    items: [
      "Línea de crédito revolvente",
      "0% interés primeros 3 meses",
      "Descuento por volumen hasta 20%",
      "Gestor de cuenta dedicado",
    ],
    cta: "Unirse al programa",
    featured: true,
  },
  {
    icon: Shield,
    title: "Financiación Diferida",
    subtitle: "Pago al cobrar al paciente",
    items: [
      "Recibe el implante hoy",
      "Pago a 90 días post-cirugía",
      "Sin intereses adicionales",
      "Requiere historial previo",
    ],
    cta: "Ver condiciones",
    featured: false,
  },
];

export function MedicosSection() {
  const [tab, setTab] = useState<"tienda" | "financiacion">("tienda");

  return (
    <div className="mx-auto max-w-[1400px] px-6 pb-6 lg:px-10">
      <section id="medicos" className="panel scroll-mt-24 px-6 py-14 md:px-14">
        <div className="flex flex-wrap items-start justify-between gap-6">
          <div>
            <p className="eyebrow">Área exclusiva</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-[44px]">
              Para <span className="text-fade">Médicos</span>
            </h2>
            <p className="mt-4 max-w-md text-base text-muted-foreground">
              Accede a nuestro catálogo profesional, gestiona pedidos y solicita financiación para
              tu clínica.
            </p>
          </div>
          <button className="flex items-center gap-2 rounded-full border border-border bg-surface/70 px-7 py-4 text-sm font-medium transition-colors hover:bg-surface-2">
            <ShoppingCart className="size-4" strokeWidth={1.6} /> Carrito
          </button>
        </div>

        <div className="mt-10 flex gap-10 border-b border-border">
          {(
            [
              ["tienda", "Tienda de implantes"],
              ["financiacion", "Financiación"],
            ] as const
          ).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setTab(key)}
              className={`-mb-px border-b-2 pb-4 text-[13px] uppercase tracking-[0.16em] transition-colors ${
                tab === key
                  ? "border-foreground text-foreground"
                  : "border-transparent text-muted-foreground hover:text-foreground/80"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {tab === "tienda" ? (
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {products.map((p) => (
              <article
                key={p.sku}
                className="rounded-3xl border border-border bg-surface/50 p-6 transition-colors hover:bg-surface"
              >
                <div className="flex items-start justify-between">
                  <span className="rounded-full border border-border bg-surface-2 px-3 py-1 text-xs">
                    {p.badge}
                  </span>
                  <span className="rounded-full bg-surface-2 px-2.5 py-1 text-xs text-muted-foreground">
                    {p.discount}
                  </span>
                </div>

                <img
                  src={implant}
                  alt={p.name}
                  width={816}
                  height={816}
                  loading="lazy"
                  className="mx-auto my-2 w-[60%]"
                />

                <p className="text-xs text-muted-foreground">{p.sku}</p>
                <h3 className="mt-1 text-xl">{p.name}</h3>

                <ul className="mt-4 space-y-2">
                  {p.specs.map((s) => (
                    <li key={s} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="size-3.5" strokeWidth={1.8} /> {s}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex items-center gap-2">
                  <span className="flex">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star
                        key={i}
                        className={`size-3.5 ${
                          i <= Math.round(p.rating)
                            ? "fill-foreground text-foreground"
                            : "text-muted-foreground"
                        }`}
                      />
                    ))}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {p.rating} ({p.reviews})
                  </span>
                </div>

                <div className="mt-5 flex items-baseline gap-3">
                  <span className="text-3xl font-semibold tracking-tight">{p.price}</span>
                  <span className="text-sm text-muted-foreground line-through">{p.old}</span>
                </div>
                <p className="mt-2 text-xs text-muted-foreground">
                  {p.stock} unidades disponibles
                </p>

                <button className="mt-6 flex w-full items-center justify-center gap-3 rounded-full border border-border bg-surface-2/50 py-4 text-[12px] uppercase tracking-[0.16em] transition-colors hover:bg-surface-2">
                  <ShoppingCart className="size-4" strokeWidth={1.6} /> Agregar al pedido
                </button>
              </article>
            ))}
          </div>
        ) : (
          <div className="mt-10 space-y-6">
            <div className="grid gap-6 lg:grid-cols-3">
              {plans.map((plan) => (
                <article
                  key={plan.title}
                  className={`flex flex-col rounded-3xl border p-7 ${
                    plan.featured
                      ? "border-border bg-surface-2/40"
                      : "border-border bg-surface/40"
                  }`}
                >
                  {plan.featured && (
                    <span className="mb-5 w-fit rounded-full border border-border bg-surface-2 px-3 py-1 text-[10px] uppercase tracking-[0.16em]">
                      Recomendado
                    </span>
                  )}
                  <div className="flex size-12 items-center justify-center rounded-2xl border border-border bg-surface-2/60">
                    <plan.icon className="size-5" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-6 text-xl">{plan.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{plan.subtitle}</p>

                  <ul className="mt-6 flex-1 space-y-3">
                    {plan.items.map((i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check className="mt-0.5 size-3.5 shrink-0" strokeWidth={1.8} /> {i}
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`mt-8 flex w-full items-center justify-center gap-2 rounded-full py-4 text-[12px] font-semibold uppercase tracking-[0.14em] transition-transform hover:scale-[1.01] ${
                      plan.featured
                        ? "btn-chrome"
                        : "border border-border bg-surface-2/40 text-foreground"
                    }`}
                  >
                    {plan.cta} <ChevronRight className="size-4" />
                  </button>
                </article>
              ))}
            </div>

            <div className="rounded-3xl border border-border bg-surface/40 p-7">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="flex items-center gap-2 text-lg">
                    <Percent className="size-4 text-muted-foreground" /> Simulador de cuotas
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Calcula la cuota mensual para tu pedido en segundos.
                  </p>
                </div>
                <button className="flex items-center gap-2 rounded-full border border-border bg-surface-2/50 px-6 py-3.5 text-[12px] font-semibold uppercase tracking-[0.14em] transition-colors hover:bg-surface-2">
                  Abrir simulador <ArrowRight className="size-4" />
                </button>
              </div>

              <div className="mt-6 grid gap-5 md:grid-cols-3">
                {[
                  { label: "Monto", value: "USD 10.000", note: "Referencia ejemplo" },
                  { label: "Plazo", value: "24 meses", note: "Cuotas fijas" },
                  { label: "Cuota est.", value: "USD 458", note: "Tasa 8.5% anual" },
                ].map((c) => (
                  <div
                    key={c.label}
                    className="rounded-2xl border border-border bg-surface-2/30 px-6 py-7 text-center"
                  >
                    <p className="text-xs text-muted-foreground">{c.label}</p>
                    <p className="mt-2 text-2xl font-semibold tracking-tight">{c.value}</p>
                    <p className="mt-2 text-xs text-muted-foreground">{c.note}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
