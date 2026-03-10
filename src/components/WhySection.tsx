import { CarFront, ShieldCheck, FileSearch, Headset } from "lucide-react";
import logoAmigaDaOficina from "@/assets/Amiga-da-oficina.png";

const features = [
  {
    icon: CarFront,
    title: "Especialistas em veículos \n premium e blindados",
    description: "Protegemos veículos de alto valor e blindados com coberturas dimensionadas para cada necessidade.",
  },
  {
    icon: ShieldCheck,
    title: "Atendimento eficiente de verdade",
    description: "O mercado oferece respostas genéricas e tabelas. Nós entregamos soluções adaptadas à sua realidade.",
  },
  {
    icon: FileSearch,
    title: "Cobertura realmente \n adequada",
    description: "Estruturamos o seguro considerando as necessidades reais do seu veículo e perfil de uso."
  },
  {
    icon: Headset,
    title: "Suporte durante todo o contrato",
    description: "Continuamos ao seu lado após a contratação, acompanhando reajustes e auxiliando em sinistros.",
  },
];

const WhySection = () => {
  return (
    <section className="pt-0 pb-13 md:pt-1 md:pb-24 bg-background">
      <div className="container px-4 md:px-8">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-center text-foreground">
          Por que{" "}
          <span className="text-primary">mais de 10.000</span>{" "}
          clientes escolheram a FBN?
        </h2>

        <div className="relative mt-6 max-w-5xl mx-auto rounded-xl border border-primary/20 bg-primary/5 px-5 py-4 pr-20 md:px-6 md:py-5 md:pr-24 text-center overflow-hidden">
          <img
            src={logoAmigaDaOficina}
            alt="Selo Empresa Amiga da Oficina"
            className="absolute right-3 top-[42%] w-20 -translate-y-1/2 rotate-12 opacity-80 pointer-events-none select-none md:right-5 md:w-24"
            loading="lazy"
          />
          <h3 className="text-sm md:text-base font-heading font-bold text-primary">
            Reconhecimento no mercado automotivo
          </h3>
          <p className="mt-2 text-sm md:text-base text-muted-foreground leading-relaxed">
            Empresa “Amiga da Oficina”, título concedido pelo Sindirepa, Sindicato nacional da reparação automotiva;
          </p>
        </div>

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
