import proc1 from "@/assets/proc-1.jpg";
import proc2 from "@/assets/proc-2.jpg";
import gal1 from "@/assets/gal-1.jpg";
import gal2 from "@/assets/gal-2.jpg";
import { Reveal, VeilImage } from "./Reveal";

type Proc = {
  n: string;
  nome: string;
  tempo: string;
  texto: string;
  img?: string;
  alt?: string;
};

const principais: Proc[] = [
  {
    n: "I",
    nome: "Harmonização Facial",
    tempo: "90 min",
    texto:
      "Um estudo de proporções antes de qualquer agulha. Reequilibramos ângulos e volumes para que o rosto ganhe coerência — e ninguém saiba dizer o porquê.",
    img: proc1,
    alt: "Detalhe de maçã do rosto com pele luminosa",
  },
  {
    n: "II",
    nome: "Toxina Botulínica",
    tempo: "30 min",
    texto:
      "Expressão preservada, cansaço suspenso. Aplicação em micro doses que suaviza linhas mantendo intacta a sua forma de sorrir.",
    img: proc2,
    alt: "Detalhe do olhar feminino com pele natural",
  },
  {
    n: "III",
    nome: "Preenchimento",
    tempo: "60 min",
    texto:
      "Devolver volume é devolver luz. Trabalhamos contornos com ácido hialurônico de alta reticulação, em camadas quase invisíveis.",
    img: gal2,
    alt: "Mulher tocando o rosto em gesto de autocuidado",
  },
  {
    n: "IV",
    nome: "Bioestimuladores",
    tempo: "75 min",
    texto:
      "O resultado que amadurece com o tempo. Estimulamos a produção natural de colágeno para uma firmeza que se revela mês após mês.",
    img: gal1,
    alt: "Retrato editorial de mulher com pele firme e natural",
  },
];

const complementares = [
  ["V", "Skinbooster", "Hidratação profunda que devolve o brilho de dentro para fora."],
  ["VI", "Fios de PDO", "Sustentação delicada para contornos que pedem elevação sutil."],
  ["VII", "Ultrassom Microfocado", "Firmeza sem cortes, camada a camada, em uma única sessão."],
];

export function Procedimentos() {
  return (
    <section id="procedimentos" className="bg-ivory py-28 md:py-44">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <Reveal className="max-w-3xl">
          <p className="eclat-kicker">02 — Rituais</p>
          <h2 className="eclat-display mt-8 text-[clamp(2.5rem,6vw,5.5rem)] text-ink">
            Sete gestos, <span className="italic text-taupe">um rosto só</span>.
          </h2>
        </Reveal>

        <div className="mt-24 space-y-28 md:space-y-40">
          {principais.map((p, i) => {
            const flip = i % 2 === 1;
            return (
              <article
                key={p.nome}
                className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16"
              >
                <VeilImage
                  src={p.img!}
                  alt={p.alt!}
                  width={1200}
                  height={1504}
                  className={`aspect-[4/5] lg:col-span-7 ${flip ? "lg:order-2 lg:col-start-6" : ""}`}
                />
                <Reveal
                  className={`lg:col-span-4 ${flip ? "lg:order-1 lg:col-start-2" : "lg:col-start-9"}`}
                >
                  <span className="eclat-display text-5xl text-champagne">{p.n}</span>
                  <h3 className="eclat-display mt-6 text-[clamp(2rem,3.4vw,3rem)] text-ink">
                    {p.nome}
                  </h3>
                  <div className="eclat-rule mt-8" />
                  <p className="mt-8 leading-[1.9] text-ink/70">{p.texto}</p>
                  <p className="eclat-kicker mt-8 text-[0.6rem]">Sessão · {p.tempo}</p>
                </Reveal>
              </article>
            );
          })}
        </div>

        <div className="mt-28 md:mt-40">
          <div className="eclat-rule" />
          <ul>
            {complementares.map(([n, nome, txt], i) => (
              <li key={nome}>
                <Reveal delay={i * 90}>
                  <div className="group grid grid-cols-[auto_minmax(0,1fr)] items-baseline gap-6 py-10 transition-colors duration-700 md:grid-cols-[6rem_minmax(0,20rem)_minmax(0,1fr)] md:gap-10">
                    <span className="eclat-kicker">{n}</span>
                    <h3 className="eclat-display text-[clamp(1.75rem,3vw,2.75rem)] text-ink transition-colors duration-700 group-hover:text-taupe">
                      {nome}
                    </h3>
                    <p className="col-span-2 max-w-md leading-[1.9] text-ink/60 md:col-span-1">
                      {txt}
                    </p>
                  </div>
                </Reveal>
                <div className="eclat-rule" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}