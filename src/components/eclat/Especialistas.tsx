import esp1 from "@/assets/esp-1.jpg";
import esp2 from "@/assets/esp-2.jpg";
import { Reveal, VeilImage } from "./Reveal";

const time = [
  {
    img: esp1,
    nome: "Dra. Helena Vasques",
    papel: "Diretora Clínica · Dermatologia",
    bio: "Formada em São Paulo, especializada em Paris. Assina os protocolos de harmonização da casa há doze anos.",
  },
  {
    img: esp2,
    nome: "Dr. Rafael Monteiro",
    papel: "Estética Avançada · Bioestimulação",
    bio: "Referência em tecnologias de firmeza e colágeno. Acredita que técnica boa é aquela que ninguém percebe.",
  },
];

export function Especialistas() {
  return (
    <section id="especialistas" className="bg-warmwhite py-28 md:py-44">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <Reveal className="max-w-2xl">
          <p className="eclat-kicker">06 — Especialistas</p>
          <h2 className="eclat-display mt-8 text-[clamp(2.5rem,5.5vw,4.75rem)] text-ink">
            Mãos que <span className="italic text-taupe">conhecem</span> rostos.
          </h2>
        </Reveal>

        <div className="mt-20 grid gap-16 md:grid-cols-2 md:gap-12 lg:gap-24">
          {time.map((p, i) => (
            <article key={p.nome} className={i === 1 ? "md:mt-28" : ""}>
              <VeilImage
                src={p.img}
                alt={`Retrato de ${p.nome}`}
                width={1008}
                height={1312}
                className="aspect-[3/4]"
              />
              <Reveal delay={80}>
                <h3 className="eclat-display mt-8 text-3xl text-ink md:text-4xl">{p.nome}</h3>
                <p className="eclat-kicker mt-4 text-[0.6rem]">{p.papel}</p>
                <div className="eclat-rule mt-8 max-w-xs" />
                <p className="mt-6 max-w-sm leading-[1.9] text-ink/65">{p.bio}</p>
              </Reveal>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}