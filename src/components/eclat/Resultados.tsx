import { useRef } from "react";
import gal1 from "@/assets/gal-1.jpg";
import gal2 from "@/assets/gal-2.jpg";
import gal3 from "@/assets/gal-3.jpg";
import proc1 from "@/assets/proc-1.jpg";
import { Reveal, VeilImage } from "./Reveal";

const itens = [
  { src: gal1, alt: "Retrato editorial em seda ivory", legenda: "Harmonização · 6 meses" },
  { src: gal2, alt: "Gesto de autocuidado facial", legenda: "Skinbooster · 3 sessões" },
  { src: gal3, alt: "Retrato de mulher madura com pele luminosa", legenda: "Bioestimulador · 1 ano" },
  { src: proc1, alt: "Detalhe de pele iluminada", legenda: "Preenchimento · 4 meses" },
];

export function Resultados() {
  const track = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: number) => {
    const el = track.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.6, behavior: "smooth" });
  };

  return (
    <section id="resultados" className="bg-warmwhite py-28 md:py-44">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <Reveal>
          <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-6">
            <div className="min-w-0">
              <p className="eclat-kicker">04 — Resultados</p>
              <h2 className="eclat-display mt-8 text-[clamp(2.5rem,6vw,5rem)] text-ink">
                Beleza que <span className="italic text-taupe">permanece</span>
              </h2>
            </div>
            <div className="hidden shrink-0 gap-3 md:flex">
              {[-1, 1].map((d) => (
                <button
                  key={d}
                  type="button"
                  onClick={() => scrollBy(d)}
                  aria-label={d < 0 ? "Anterior" : "Próximo"}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 text-ink/60 transition-colors duration-500 hover:border-gold hover:text-ink"
                >
                  {d < 0 ? "←" : "→"}
                </button>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      <div
        ref={track}
        className="mt-16 flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-6 md:gap-10 md:px-12 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {itens.map((it, i) => (
          <figure
            key={it.legenda}
            className={`w-[78vw] shrink-0 snap-center md:w-[38vw] ${i % 2 ? "md:mt-16" : ""}`}
          >
            <VeilImage
              src={it.src}
              alt={it.alt}
              width={1104}
              height={1408}
              className="aspect-[4/5]"
            />
            <figcaption className="eclat-kicker mt-6 text-[0.6rem]">{it.legenda}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}