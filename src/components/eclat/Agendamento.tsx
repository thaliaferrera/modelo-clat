import { useState, type FormEvent } from "react";
import { Reveal } from "./Reveal";

const campos = [
  { id: "nome", label: "Nome", type: "text", autoComplete: "name" },
  { id: "email", label: "E-mail", type: "email", autoComplete: "email" },
  { id: "telefone", label: "Telefone", type: "tel", autoComplete: "tel" },
];

export function Agendamento() {
  const [enviado, setEnviado] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEnviado(true);
  };

  return (
    <section id="agendamento" className="bg-ink py-28 text-ivory md:py-44">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-24">
          <Reveal className="lg:col-span-5">
            <p className="eclat-kicker text-champagne/80">09 — Agendamento</p>
            <h2 className="eclat-display mt-8 text-[clamp(2.75rem,6vw,5.5rem)] text-ivory">
              Reserve sua
              <span className="block italic text-champagne">avaliação</span>
            </h2>
            <p className="mt-10 max-w-sm leading-[1.9] text-ivory/60">
              Atendemos por agenda fechada, com um número limitado de avaliações por semana. Conte
              um pouco sobre você e retornamos em até 24 horas.
            </p>
          </Reveal>

          <Reveal className="lg:col-span-6 lg:col-start-7" delay={120}>
            {enviado ? (
              <p className="eclat-display text-3xl text-champagne">
                Recebemos o seu pedido. Em breve entraremos em contato.
              </p>
            ) : (
              <form onSubmit={onSubmit} className="space-y-10">
                {campos.map((c) => (
                  <div key={c.id}>
                    <label htmlFor={c.id} className="eclat-kicker text-[0.6rem] text-ivory/50">
                      {c.label}
                    </label>
                    <input
                      id={c.id}
                      name={c.id}
                      type={c.type}
                      required
                      autoComplete={c.autoComplete}
                      className="mt-3 w-full border-b border-ivory/25 bg-transparent pb-3 text-lg text-ivory outline-none transition-colors duration-500 focus:border-gold"
                    />
                  </div>
                ))}
                <div>
                  <label htmlFor="interesse" className="eclat-kicker text-[0.6rem] text-ivory/50">
                    O que você gostaria de tratar
                  </label>
                  <textarea
                    id="interesse"
                    name="interesse"
                    rows={3}
                    className="mt-3 w-full resize-none border-b border-ivory/25 bg-transparent pb-3 text-lg text-ivory outline-none transition-colors duration-500 focus:border-gold"
                  />
                </div>
                <button
                  type="submit"
                  className="border border-champagne/60 px-12 py-4 text-[0.7rem] tracking-[0.32em] uppercase transition-colors duration-700 hover:bg-champagne hover:text-ink"
                >
                  Enviar pedido
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}