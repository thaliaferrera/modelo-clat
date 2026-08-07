import { useEffect, useState } from "react";

const links = [
  { href: "#sobre", label: "Casa" },
  { href: "#procedimentos", label: "Rituais" },
  { href: "#resultados", label: "Resultados" },
  { href: "#especialistas", label: "Especialistas" },
  { href: "#agendamento", label: "Agendar" },
];

export function Nav() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        solid ? "bg-ivory/90 py-4 backdrop-blur-md" : "py-7"
      }`}
    >
      <div className="mx-auto grid max-w-[1600px] grid-cols-[minmax(0,1fr)_auto] items-center gap-6 px-6 md:px-12 lg:grid-cols-3">
        <a href="#topo" className="eclat-display min-w-0 text-2xl tracking-[0.28em] text-ink">
          ÉCLAT
        </a>
        <nav className="hidden justify-center gap-10 lg:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="eclat-link eclat-kicker text-ink/70">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex shrink-0 items-center justify-end gap-6">
          <span className="eclat-kicker hidden xl:inline">por Lumina</span>
          <button
            type="button"
            aria-label="Abrir menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-8 w-8 flex-col items-end justify-center gap-[6px] lg:hidden"
          >
            <span
              className={`h-px bg-ink transition-all duration-500 ${open ? "w-6 translate-y-[3px] rotate-45" : "w-6"}`}
            />
            <span
              className={`h-px bg-ink transition-all duration-500 ${open ? "w-6 -translate-y-[4px] -rotate-45" : "w-4"}`}
            />
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden bg-ivory transition-[max-height,opacity] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] lg:hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-6 px-6 pt-8 pb-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="eclat-display text-3xl text-ink"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}