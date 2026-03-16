import { Building2, ShieldCheck, FileSearch, Headset } from "lucide-react";

const features = [
  {
    icon: Building2,
    title: "Especialistas em \n responsabilidade civil",
    description: "Protegemos operações empresariais e profissionais com coberturas dimensionadas para cada exposição.",
  },
  {
    icon: ShieldCheck,
    title: "Atendimento consultivo \n de verdade",
    description: "O mercado oferece respostas genéricas. Nós entregamos soluções alinhadas ao seu risco real.",
  },
  {
    icon: FileSearch,
    title: "Apólice realmente \n adequada",
    description: "Estruturamos limites, coberturas e cláusulas considerando o seu segmento e rotina operacional."
  },
  {
    icon: Headset,
    title: "Suporte durante todo o \n contrato",
    description: "Continuamos ao seu lado após a contratação, acompanhando renovações, notificações e sinistros.",
  },
];

const WhySection = () => {
  return (
    <section className="pt-0 pb-13 md:pt-1 md:pb-24 bg-background">
      <div className="container px-4 md:px-8">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-center text-foreground">
          Como a{" "}
          <span className="text-primary">FBN</span>{" "}
          te protege contra os riscos de Responsabilidade Civil?
        </h2>


        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-sm font-heading font-bold text-foreground leading-snug whitespace-pre-line">
                {feature.title}
              </h3>
              <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySection;
