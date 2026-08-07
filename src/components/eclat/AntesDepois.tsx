import { useCallback, useEffect, useRef, useState } from "react";
import antes from "@/assets/antes.jpg";
import depois from "@/assets/depois.jpg";
import { Reveal } from "./Reveal";

export function AntesDepois() {
  const [pos, setPos] = useState(50);
  const box = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const move = useCallback((clientX: number) => {
    const el = box.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setPos(Math.min(100, Math.max(0, ((clientX - r.left) / r.width) * 100)));
  }, []);

  useEffect(() => {
    const up = () => (dragging.current = false);
    const mv = (e: PointerEvent) => dragging.current && move(e.clientX);
    window.addEventListener("pointerup", up);
    window.addEventListener("pointermove", mv);
    return () => {
      window.removeEventListener("pointerup", up);
      window.removeEventListener("pointermove", mv);
    };
  }, [move]);

  return (
    <section className="bg-ivory py-28 md:py-44">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="grid gap-14 lg:grid-cols-12 lg:items-center lg:gap-20">
          <Reveal className="lg:col-span-4">
            <p className="eclat-kicker">05 — Antes e Depois</p>
            <h2 className="eclat-display mt-8 text-[clamp(2.5rem,5vw,4.25rem)] text-ink">
              A diferença
              <span className="block italic text-taupe">está no sutil</span>
            </h2>
            <div className="eclat-rule mt-10" />
            <p className="mt-8 max-w-sm leading-[1.9] text-ink/65">
              Arraste para revelar. Nenhum retoque, nenhuma maquiagem — apenas a mesma luz, seis
              meses depois.
            </p>
          </Reveal>

          <Reveal className="lg:col-span-8" delay={120}>
            <div
              ref={box}
              onPointerDown={(e) => {
                dragging.current = true;
                move(e.clientX);
              }}
              className="relative aspect-[4/3] w-full touch-none overflow-hidden select-none"
              style={{ boxShadow: "var(--shadow-luxe)" }}
            >
              <img
                src={depois}
                alt="Rosto após o tratamento facial"
                width={1008}
                height={1312}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover object-top"
              />
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
              >
                <img
                  src={antes}
                  alt="Rosto antes do tratamento facial"
                  width={1008}
                  height={1312}
                  loading="lazy"
                  className="h-full w-full object-cover object-top"
                />
              </div>

              <div
                className="pointer-events-none absolute inset-y-0 w-px bg-gold"
                style={{ left: `${pos}%` }}
              >
                <span className="absolute top-1/2 left-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-gold bg-ivory/85 text-[0.65rem] tracking-[0.2em] text-ink backdrop-blur-sm">
                  ‹ ›
                </span>
              </div>

              <span className="eclat-kicker absolute top-6 left-6 text-[0.6rem] text-ink/70">
                Antes
              </span>
              <span className="eclat-kicker absolute top-6 right-6 text-[0.6rem] text-ink/70">
                Depois
              </span>
            </div>
            <label className="sr-only" htmlFor="ba">
              Comparar antes e depois
            </label>
            <input
              id="ba"
              type="range"
              min={0}
              max={100}
              value={pos}
              onChange={(e) => setPos(Number(e.target.value))}
              className="mt-8 w-full accent-[var(--color-gold)]"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}