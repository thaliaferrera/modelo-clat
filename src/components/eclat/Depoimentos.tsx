import { useEffect, useState } from "react";

const vozes = [
  {
    txt: "Saí de lá parecendo eu mesma em um dia bom. Ninguém perguntou o que eu fiz — perguntaram se eu tinha viajado.",
    nome: "Marina C.",
    ctx: "Harmonização Facial",
  },
  {
    txt: "É raro encontrar quem diga não. Ouvi um 'ainda não é a hora' e foi aí que confiei de verdade.",
    nome: "Beatriz L.",
    ctx: "Bioestimuladores",
  },
  {
    txt: "A consulta parecia uma conversa entre amigas, com o rigor de um consultório suíço.",
    nome: "Ana Paula M.",
    ctx: "Skinbooster",
  },
];

export function Depoimentos() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % vozes.length), 7000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="bg-champagne/45 py-28 md:py-44">
      <div className="mx-auto max-w-4xl px-6 text-center md:px-12">
        <p className="eclat-kicker">07 — Depoimentos</p>
        <div className="relative mt-14 min-h-[22rem] md:min-h-[20rem]">
          {vozes.map((v, idx) => (
            <figure
              key={v.nome}
              aria-hidden={idx !== i}
              className={`absolute inset-0 transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                idx === i ? "opacity-100 blur-0" : "pointer-events-none opacity-0 blur-[2px]"
              }`}
            >
              <blockquote className="eclat-display text-[clamp(1.6rem,3.6vw,3rem)] leading-[1.25] text-ink italic">
                “{v.txt}”
              </blockquote>
              <figcaption className="eclat-kicker mt-10 text-[0.6rem]">
                {v.nome} · {v.ctx}
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-12 flex justify-center gap-4">
          {vozes.map((v, idx) => (
            <button
              key={v.nome}
              type="button"
              onClick={() => setI(idx)}
              aria-label={`Depoimento de ${v.nome}`}
              className={`h-px w-10 transition-colors duration-700 ${
                idx === i ? "bg-ink" : "bg-ink/25"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}