import { useEffect, useState } from "react";

const links = [
  { label: "Inicio", href: "#inicio" },
  { label: "Tecnología", href: "#tecnologia" },
  { label: "Ecosistema", href: "#ecosistema" },
  { label: "App", href: "#app" },
  { label: "Trazabilidad", href: "#trazabilidad" },
  { label: "Para Médicos", href: "#medicos" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-[72px] max-w-[1400px] items-center justify-between px-6 lg:px-10">
        <a href="#inicio" className="text-xl tracking-tight">
          <span className="font-semibold">Perfect</span>
          <span className="font-light text-muted-foreground">IA</span>
        </a>

        <ul className="hidden items-center gap-9 lg:flex">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="text-[13px] uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-foreground"
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
    </header>
  );
}
