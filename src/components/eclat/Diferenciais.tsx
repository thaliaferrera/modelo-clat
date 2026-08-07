import { Reveal } from "./Reveal";

const itens = [
  [
    "Consulta sem pressa",
    "Noventa minutos dedicados a entender o seu rosto, sua rotina e o que você não quer mudar.",
  ],
  [
    "Protocolo autoral",
    "Nenhum plano se repete. Cada combinação é desenhada para uma única pessoa: você.",
  ],
  [
    "Insumos de origem",
    "Trabalhamos exclusivamente com marcas de referência internacional, rastreáveis e certificadas.",
  ],
  [
    "Acompanhamento contínuo",
    "O retorno faz parte do tratamento. Ajustamos o resultado até ele parecer sempre ter estado ali.",
  ],
];

export function Diferenciais() {
  return (
    <section className="bg-blush py-28 md:py-44">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="grid gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start">
            <p className="eclat-kicker">03 — Assinatura</p>
            <h2 className="eclat-display mt-8 text-[clamp(2.5rem,5vw,4.25rem)] text-ink">
              O que nos torna
              <span className="block italic text-taupe">inconfundíveis</span>
            </h2>
          </Reveal>

          <div className="lg:col-span-7 lg:col-start-6">
            {itens.map(([t, d], i) => (
              <Reveal key={t} delay={i * 100}>
                <div className="grid grid-cols-[auto_minmax(0,1fr)] gap-6 border-t border-gold/30 py-10 md:gap-12">
                  <span className="eclat-display text-2xl text-gold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0">
                    <h3 className="eclat-display text-3xl text-ink md:text-4xl">{t}</h3>
                    <p className="mt-4 max-w-lg leading-[1.9] text-ink/65">{d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}