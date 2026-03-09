import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    question: "Como funciona o estudo da FBN?",
    answer: `O Estudo FBN é uma análise feita por especialistas para identificar o plano mais adequado para sua empresa.
    Avaliamos o perfil dos colaboradores, região de atendimento, rede hospitalar desejada e custo-benefício entre as operadoras. Com base nisso, apresentamos as melhores opções de plano para sua empresa tomar a decisão com mais segurança.`,
  },
  {
    question: "Quais são as condições para contratar um plano de saúde empresarial?",
    answer:
      "Para contratar um plano de saúde empresarial é necessário possuir um CNPJ ativo e atender ao número mínimo de vidas exigido pela operadora, que geralmente começa a partir de 2 ou 3 pessoas. Dependendo do plano, também é possível incluir sócios, colaboradores e seus dependentes.",
  },
  {
    question: "O plano empresarial tem carência?",
    answer:
      "A carência pode variar conforme a operadora e o plano escolhido. Em alguns casos, podem existir condições especiais com redução ou isenção de carência.",
  },
  {
    question: "Posso incluir dependentes no plano?",
    answer:
      "Sim. Em muitos planos empresariais é possível incluir cônjuge, filhos e outros dependentes, conforme as regras da operadora.",
  },
  {
    question: "Como faco para iniciar meu estudo?",
    answer:
      "Clique em [CTA_ESTUDO] e envie suas informacoes basicas. A equipe da FBN entra em contato para montar a melhor proposta.",
  },
];

const FAQSection = () => {
  const scrollToForm = () => {
    document.getElementById("formulario-estudo")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container px-4 md:px-8 max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-center text-foreground mb-4">
          Perguntas <span className="text-primary">Frequentes</span>
        </h2>
        <p className="text-center text-muted-foreground mb-10">
          Tire suas duvidas antes de solicitar seu estudo.
        </p>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={faq.question} value={`item-${index + 1}`}>
              <AccordionTrigger className="text-left font-semibold text-foreground">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed whitespace-pre-line">
                {faq.answer.split("[CTA_ESTUDO]").map((part, partIndex, allParts) => (
                  <span key={`${faq.question}-part-${partIndex}`}>
                    <span className="whitespace-pre-line">{part}</span>
                    {partIndex < allParts.length - 1 && (
                      <Button variant="link" className="h-auto p-0 align-baseline font-semibold" onClick={scrollToForm}>
                        Realizar Estudo
                      </Button>
                    )}
                  </span>
                ))}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
