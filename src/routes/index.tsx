import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/eclat/Nav";
import { Hero } from "@/components/eclat/Hero";
import { Sobre } from "@/components/eclat/Sobre";
import { Procedimentos } from "@/components/eclat/Procedimentos";
import { Diferenciais } from "@/components/eclat/Diferenciais";
import { Resultados } from "@/components/eclat/Resultados";
import { AntesDepois } from "@/components/eclat/AntesDepois";
import { Especialistas } from "@/components/eclat/Especialistas";
import { Depoimentos } from "@/components/eclat/Depoimentos";
import { Faq } from "@/components/eclat/Faq";
import { Agendamento } from "@/components/eclat/Agendamento";
import { Contato } from "@/components/eclat/Contato";
import { Footer } from "@/components/eclat/Footer";

const titulo = "ÉCLAT — Estética Facial de Luxo em São Paulo | Lumina";
const descricao =
  "Tratamentos faciais personalizados que realçam sua beleza de forma elegante, segura e natural. Harmonização, botox, preenchimento e bioestimuladores.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: titulo },
      { name: "description", content: descricao },
      { property: "og:title", content: titulo },
      { property: "og:description", content: descricao },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Sobre />
        <Procedimentos />
        <Diferenciais />
        <Resultados />
        <AntesDepois />
        <Especialistas />
        <Depoimentos />
        <Faq />
        <Agendamento />
        <Contato />
      </main>
      <Footer />
    </>
  );
}
