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
    answer: `O Estudo FBN e uma analise feita por especialistas para identificar o seguro automotivo mais adequado para o seu perfil.
    Avaliamos o tipo de veiculo, rotina de uso, regiao de circulacao e coberturas necessarias. Com base nisso, apresentamos opcoes com melhor equilibrio entre protecao e investimento.`,
  },
  {
    question: "Quais informacoes sao necessarias para cotar um seguro automotivo?",
    answer:
      "Normalmente solicitamos dados basicos do condutor principal, informacoes do veiculo e historico de uso. Esses dados ajudam a montar uma cotacao precisa e alinhada ao seu risco.",
  },
  {
    question: "O seguro automotivo tem carencia?",
    answer:
      "Em geral, o seguro passa a valer conforme as regras da proposta e a confirmacao de vigencia da seguradora. A equipe da FBN orienta cada etapa para que voce saiba exatamente quando sua cobertura inicia.",
  },
  {
    question: "Posso personalizar as coberturas do meu seguro?",
    answer:
      "Sim. E possivel ajustar franquia, cobertura para terceiros, vidros, carro reserva, assistencia 24h e outras protecoes adicionais conforme sua necessidade.",
  },
  {
    question: "Como faco para iniciar minha cotacao?",
    answer:
      "Clique em [CTA_ESTUDO] e envie suas informacoes basicas. A equipe da FBN entra em contato para montar a melhor proposta de seguro automotivo.",
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
