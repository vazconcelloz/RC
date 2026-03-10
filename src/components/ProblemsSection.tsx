const ProblemsSection = () => {
  return (
    <section className="relative overflow-hidden pt-12 pb-8 md:pt-16 md:pb-10 bg-muted/30 border-t border-border/60">
      <div className="container px-4 md:px-8">
        <div className="max-w-3xl text-center mx-auto">
          <p className="text-sm md:text-base font-heading font-semibold text-primary"></p>
          <h2 className="mt-2 text-2xl md:text-3xl font-heading font-bold text-foreground">
            Escolher o seguro errado pode custar caro
          </h2>
          <p className="mt-3 text-sm md:text-base text-muted-foreground leading-relaxed">
            Muitos proprietários só descobrem que escolheram o seguro errado quando acontece um <strong>sinistro</strong>.
          </p>

          <p className="mt-3 text-base md:text-lg font-bold leading-relaxed">
            <span className="text-primary">Por isso, escolher a corretora certa é tão importante quanto escolher o seguro.</span>
          </p>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 md:h-14 bg-gradient-to-b from-transparent to-background" />
    </section>
  );
};

export default ProblemsSection;