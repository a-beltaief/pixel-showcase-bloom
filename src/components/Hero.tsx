import HeroVisual from "./HeroVisual";

export const Hero = () => {
  return (
    <section className="relative py-20 md:py-32 px-6 bg-background overflow-hidden min-h-[600px] md:min-h-[700px] flex items-center justify-center">
      {/* Background Visual - Chaos to Solution */}
      <HeroVisual />
      
      {/* Text content - positioned above the visual */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-primary">
          PRINCEBERG
        </h1>
        
        <h2 className="text-2xl md:text-3xl text-primary mb-6">
          Eine Software. Deine Prozesse. Kein Workaround.
        </h2>
        
        <p className="text-xl md:text-2xl text-foreground mb-6 max-w-3xl mx-auto">
          Statt 10 Tools: eines. Maßgeschneidert für dein Business. Prototyp in 7 Tagen.
        </p>
        
        {/* Live Project Counter */}
        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center gap-2 bg-muted/50 backdrop-blur-sm px-4 py-2 rounded-full border border-border/50">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            <span className="text-xs uppercase tracking-wider text-muted-foreground">Live</span>
            <span className="text-sm font-semibold text-foreground">3 Projekte in Entwicklung</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a 
            href="/termine"
            className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-hover transition-colors"
          >
            Erstgespräch buchen
          </a>
          <a 
            href="#system"
            className="border border-primary text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary/10 transition-colors backdrop-blur-sm"
          >
            So funktioniert's
          </a>
        </div>
      </div>
    </section>
  );
};
