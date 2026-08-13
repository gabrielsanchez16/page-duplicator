import { useEffect, useRef, useState } from "react";

const links = [
  { label: "Inicio", href: "#inicio", id: "inicio" },
  { label: "Tecnología", href: "#tecnologia", id: "tecnologia" },
  { label: "Ecosistema", href: "#ecosistema", id: "ecosistema" },
  { label: "App", href: "#app", id: "app" },
  { label: "Para Médicos", href: "#medicos", id: "medicos" },
  { label: "Trazabilidad", href: "#trazabilidad", id: "trazabilidad" }
  
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState(0);
  const [dotX, setDotX] = useState<number | null>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      let current = 0;
      links.forEach((l, i) => {
        const el = document.getElementById(l.id);
        if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.35) current = i;
      });
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    const measure = () => {
      const list = listRef.current;
      const bar = barRef.current;
      if (!list || !bar) return;
      const item = list.children[active] as HTMLElement | undefined;
      if (!item) return;
      const itemRect = item.getBoundingClientRect();
      const barRect = bar.getBoundingClientRect();
      setDotX(itemRect.left + itemRect.width / 2 - barRect.left);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [active]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled ? "bg-background/80 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-[72px] max-w-[1400px] items-center justify-between px-6 lg:px-10">
        <a href="#inicio" className="text-xl tracking-tight">
          <span className="font-semibold">Perfect</span>
          <span className="font-light text-muted-foreground">IA</span>
        </a>

        <ul ref={listRef} className="hidden items-center gap-9 lg:flex">
          {links.map((l, i) => (
            <li key={l.label}>
              <a
                href={l.href}
                className={`text-[13px] uppercase tracking-[0.16em] transition-colors hover:text-foreground ${
                  i === active ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contacto"
          className="rounded-full border border-border bg-surface/60 px-7 py-3 text-[12px] uppercase tracking-[0.18em] text-foreground transition-colors hover:bg-surface-2"
        >
          Contacto
        </a>
      </nav>

      <div ref={barRef} className="relative mx-auto h-px w-full max-w-[1400px]">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, oklch(1 0 0 / 14%) 18%, oklch(1 0 0 / 22%) 50%, oklch(1 0 0 / 14%) 82%, transparent 100%)",
          }}
        />
        {dotX !== null && (
          <div
            className="absolute top-1/2 transition-[left] duration-700 ease-out"
            style={{ left: dotX, transform: "translate(-50%, -50%)" }}
          >
            <span
              className="block size-1.5 rounded-full"
              style={{
                background: "var(--glow)",
                boxShadow:
                  "0 0 6px 2px color-mix(in oklab, var(--glow) 80%, transparent), 0 0 22px 8px color-mix(in oklab, var(--glow) 45%, transparent)",
              }}
            />
          </div>
        )}
      </div>
    </header>
  );
}
