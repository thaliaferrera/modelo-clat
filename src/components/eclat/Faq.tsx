import { useState } from "react";
import { Reveal } from "./Reveal";

const perguntas = [
  [
    "O resultado parece natural?",
    "Essa é a nossa única métrica. Trabalhamos em doses conservadoras e em etapas, sempre preservando movimento e expressão.",
  ],
  [
    "Quanto tempo dura a recuperação?",
    "A maioria dos protocolos permite retomar a rotina no mesmo dia. Quando há edema leve, ele costuma se dissipar em 48 horas.",
  ],
  [
    "Como funciona a primeira consulta?",
    "São 90 minutos de avaliação facial, análise de fotos e conversa. Você sai com um plano escrito — e sem nenhum compromisso.",
  ],
  [
    "Vocês atendem homens?",
    "Sim. Cerca de um terço dos nossos pacientes são homens, com protocolos desenhados para traços masculinos.",
  ],
  [
    "Existe idade ideal para começar?",
    "Existe momento ideal, não idade. Prevenção, correção e sustentação pedem abordagens distintas em cada fase.",
  ],
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-ivory py-28 md:py-44">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-4">
            <p className="eclat-kicker">08 — Perguntas</p>
            <h2 className="eclat-display mt-8 text-[clamp(2.5rem,5vw,4.25rem)] text-ink">
              Antes de
              <span className="block italic text-taupe">agendar</span>
            </h2>
          </Reveal>

          <div className="lg:col-span-7 lg:col-start-6">
            {perguntas.map(([q, a], i) => {
              const aberto = open === i;
              return (
                <div key={q} className="border-t border-gold/30 last:border-b">
                  <button
                    type="button"
                    onClick={() => setOpen(aberto ? null : i)}
                    aria-expanded={aberto}
                    className="grid w-full grid-cols-[minmax(0,1fr)_auto] items-center gap-6 py-8 text-left"
                  >
                    <span className="eclat-display min-w-0 text-2xl text-ink md:text-3xl">{q}</span>
                    <span
                      className={`shrink-0 text-gold transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                        aberto ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      aberto ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <p className="max-w-xl overflow-hidden leading-[1.9] text-ink/65">
                      <span className="block pb-8">{a}</span>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}