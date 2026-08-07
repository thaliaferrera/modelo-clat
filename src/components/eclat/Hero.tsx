import { useEffect, useState } from "react";
import heroImg from "@/assets/hero.jpg";

export function Hero() {
  const [y, setY] = useState(0);

  useEffect(() => {
    const onScroll = () => setY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="topo" className="relative min-h-[100svh] overflow-hidden bg-ivory">
      <div className="absolute inset-y-0 right-0 w-full md:w-[58%]">
        <img
          src={heroImg}
          alt="Retrato de mulher com pele natural e luminosa sob luz suave"
          width={1408}
          height={1760}
          className="h-full w-full object-cover object-[62%_center]"
          style={{ transform: `translate3d(0, ${y * 0.12}px, 0) scale(1.06)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ivory via-ivory/50 to-transparent md:from-ivory/85 md:via-ivory/10" />
      </div>

      <div className="relative mx-auto flex min-h-[100svh] max-w-[1600px] flex-col justify-end px-6 pt-32 pb-16 md:justify-center md:px-12 md:pb-24">
        <div className="max-w-[46rem]">
          <p className="eclat-kicker animate-fade-in">Coleção ÉCLAT — Estética Facial</p>
          <h1 className="eclat-display mt-8 text-[clamp(3rem,10.5vw,8.5rem)] text-ink">
            Realce sua
            <span className="block italic text-taupe">beleza</span>
            com naturalidade.
          </h1>
          <div className="eclat-rule mt-10 max-w-md" />
          <p className="mt-8 max-w-md text-base leading-relaxed text-ink/70 md:text-lg">
            Tratamentos personalizados que valorizam sua beleza de forma elegante, segura e natural.
          </p>
          <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
            <a
              href="#agendamento"
              className="group inline-flex items-center justify-center border border-ink px-10 py-4 text-[0.7rem] tracking-[0.32em] uppercase transition-colors duration-700 hover:bg-ink hover:text-ivory"
            >
              Agendar Avaliação
            </a>
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noreferrer"
              className="eclat-link inline-flex items-center gap-3 self-start text-[0.7rem] tracking-[0.32em] text-ink/70 uppercase"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex">
        <span className="eclat-kicker text-[0.6rem]">Role</span>
        <span className="h-16 w-px animate-pulse bg-gold/60" />
      </div>
    </section>
  );
}