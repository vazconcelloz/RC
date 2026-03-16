const ProblemsSection = () => {
  return (
    <section className="relative overflow-hidden pt-12 pb-8 md:pt-16 md:pb-10 bg-muted/30 border-t border-border/60">
      <div className="container px-4 md:px-8">
        <div className="max-w-3xl text-center mx-auto">
          <p className="text-sm md:text-base font-heading font-semibold text-primary"></p>
          <h2 className="mt-2 text-2xl md:text-3xl font-heading font-bold text-foreground">
            Um único erro pode gerar um prejuízo milionário...
          </h2>
          <p className="mt-3 text-sm md:text-base text-muted-foreground leading-relaxed">
            Muitas empresas e profissionais só descobrem falhas na apólice quando recebem uma reclamação de terceiros ou uma notificação judicial.
          </p>

          <p className="mt-3 text-base md:text-lg font-bold leading-relaxed">
            <span className="text-primary">Por isso, escolher a corretora certa é tão importante quanto definir os limites e coberturas do seu seguro de Responsabilidade Civil.</span>
          </p>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 md:h-14 bg-gradient-to-b from-transparent to-background" />
    </section>
  );
};

export default ProblemsSection;