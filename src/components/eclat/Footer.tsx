export function Footer() {
  return (
    <footer className="bg-ivory pb-12">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="eclat-rule" />
        <p className="eclat-display mt-16 text-[clamp(4rem,22vw,20rem)] leading-[0.8] tracking-[0.06em] text-ink/90 select-none">
          ÉCLAT
        </p>
        <div className="mt-16 grid grid-cols-[minmax(0,1fr)_auto] items-end gap-8 border-t border-gold/30 pt-8">
          <p className="eclat-kicker min-w-0 text-[0.6rem]">
            Uma coleção Lumina · São Paulo
          </p>
          <nav className="flex shrink-0 gap-8">
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noreferrer"
              className="eclat-link eclat-kicker text-[0.6rem]"
            >
              WhatsApp
            </a>
            <a href="#topo" className="eclat-link eclat-kicker text-[0.6rem]">
              Voltar ao topo
            </a>
          </nav>
        </div>
        <p className="mt-10 text-xs text-ink/40">
          © {new Date().getFullYear()} ÉCLAT por Lumina. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}