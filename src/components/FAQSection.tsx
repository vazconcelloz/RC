import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    question: "O que é o seguro de Responsabilidade Civil Profissional?",
    answer: `É um seguro que protege o profissional da saúde contra custos relacionados a reclamações, processos judiciais e administrativos decorrentes da sua atuação profissional.`,
  },
  {
    question: "Quem deve contratar esse tipo de seguro?",
    answer:
      "Qualquer profissional da área da saúde que tenha contato direto com pacientes, como médicos, dentistas, enfermeiros, fisioterapeutas, entre outros.",
  },
  {
    question: "O seguro cobre erros médicos e falhas profissionais?",
    answer:
      "Sim! Ele pode cobrir situações relacionadas a alegações de erro, omissão ou falha profissional, desde que estejam dentro das condições previstas na apólice.",
  },
  {
    question: "Posso contratar com retroatividade?",
    answer:
      "Sim! E isso é um dos pontos mais importantes do seguro. A retroatividade garante cobertura para atendimentos realizados antes da contratação. Na prática, isso significa que você não fica exposto por procedimentos realizados no passado.",
  },
  {
    question: "Existe carência para utilização do seguro?",
    answer:
      "Não necessariamente. Em muitos casos, a cobertura começa após a contratação, conforme as condições da apólice. Clique em [CTA_ESTUDO] para entender como funciona a carência e a retroatividade no seu caso específico.",
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
          Tire suas dúvidas antes de realizar seu estudo.
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
                        Realizar estudo
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
