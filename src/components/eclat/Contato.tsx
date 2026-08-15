import { Reveal } from "./Reveal";

const blocos = [
  ["Endereço", ["Rua Haddock Lobo, 1.420 — Jardins", "São Paulo · SP"]],
  ["Horários", ["Seg a Sex · 9h às 20h", "Sábados · 9h às 14h"]],
  ["Contato", ["+55 11 99999-9999", "contato@eclat.lumina.com"]],
] as const;

export function Contato() {
  return (
    <section id="contato" className="bg-warmwhite py-28 md:py-40">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <Reveal>
          <p className="eclat-kicker">10 — Contato</p>
        </Reveal>
        <div className="mt-14 grid gap-12 md:grid-cols-3">
          {blocos.map(([t, linhas], i) => (
            <Reveal key={t} delay={i * 90}>
              <div className="border-t border-gold/30 pt-8">
                <h3 className="eclat-kicker text-[0.6rem]">{t}</h3>
                <ul className="mt-6 space-y-2">
                  {linhas.map((l) => {
                    const isEmail = l.includes("@");
                    const isTel = /^\+?\d[\d\s.-]*\d$/.test(l);
                    const itemClass = "eclat-display text-2xl text-ink md:text-3xl";
                    if (isEmail) {
                      return (
                        <li key={l}>
                          <a href={`mailto:${l}`} className={itemClass}>
                            {l}
                          </a>
                        </li>
                      );
                    }
                    if (isTel) {
                      return (
                        <li key={l}>
                          <a href={`tel:${l.replace(/[^\d+]/g, "")}`} className={itemClass}>
                            {l}
                          </a>
                        </li>
                      );
                    }
                    return (
                      <li key={l} className={itemClass}>
                        {l}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
