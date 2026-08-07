import clinicaImg from "@/assets/clinica.jpg";
import { Reveal, VeilImage } from "./Reveal";

export function Sobre() {
  return (
    <section id="sobre" className="relative bg-warmwhite py-28 md:py-44">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-4 lg:pt-10">
            <p className="eclat-kicker">01 — A Casa</p>
            <h2 className="eclat-display mt-8 text-[clamp(2.5rem,5.5vw,4.5rem)] text-ink">
              Um endereço
              <span className="block italic text-taupe">discreto</span>
              para a beleza.
            </h2>
          </Reveal>

          <VeilImage
            src={clinicaImg}
            alt="Recepção da clínica com paredes de textura ivory e luz natural"
            width={1408}
            height={1008}
            className="aspect-[4/3] lg:col-span-8"
          />
        </div>

        <div className="mt-20 grid gap-14 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-5 lg:col-start-4" delay={80}>
            <p className="text-lg leading-[1.9] text-ink/75">
              A ÉCLAT nasceu de uma convicção simples: a beleza mais poderosa é aquela que não se
              anuncia. Cada protocolo é desenhado à mão, respeitando a arquitetura única do seu
              rosto e o tempo natural da sua pele.
            </p>
          </Reveal>
          <Reveal className="lg:col-span-3" delay={160}>
            <p className="leading-[1.9] text-ink/60">
              Aqui não existem fórmulas prontas. Existe escuta, precisão técnica e um cuidado quase
              artesanal com o detalhe — do primeiro café à última consulta de acompanhamento.
            </p>
            <div className="eclat-rule mt-10" />
            <dl className="mt-10 grid grid-cols-2 gap-8">
              {[
                ["12", "anos de prática"],
                ["9.400", "protocolos únicos"],
              ].map(([n, l]) => (
                <div key={l}>
                  <dt className="eclat-display text-4xl text-ink">{n}</dt>
                  <dd className="eclat-kicker mt-3 text-[0.6rem]">{l}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}