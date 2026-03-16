import escritorioImage from "@/assets/Escritorio.jpeg";

const AboutSection = () => {
  return (
    <section className="py-16 md:py-24 bg-section-gray">
      <div className="container px-4 md:px-8">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-8">
          Quem é a <span className="text-primary">FBN?</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed">
            <p>
              Desde <strong className="text-primary">1996</strong>,{" "}
              o foco da FBN sempre foi o <strong className="text-primary">cliente</strong>.
            </p>
            <p>
              Somos a consultoria ideal para mais de{" "}
              <strong className="text-primary">1.200 empresas</strong>, mais de{" "}
              <strong className="text-primary">10.000 pessoas</strong> onde pautamos nossas ações
              pela satisfação de nossos clientes.
            </p>
            <p>
              Com a FBN, você protege o seu patrimônio para crescer com mais segurança!
              <strong className="block text-primary mt-3 text-2xl md:text-3xl font-extrabold leading-tight">
                Confiança não tem preço, tem valor!
              </strong>
            </p>
          </div>
          <div className="rounded-xl overflow-hidden border border-border bg-card md:-mt-16 lg:-mt-20">
            <img
              src={escritorioImage}
              alt="Escritório da FBN"
              className="w-full h-full object-cover min-h-[260px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
