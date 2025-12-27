import PixelBlast from "./PixelBlast";

export const Hero = () => {
  return (
    <section className="relative py-20 md:py-32 flex items-center justify-center px-6 bg-background overflow-hidden">
      {/* PixelBlast Background Effect */}
      <div className="absolute inset-0 opacity-20">
        <PixelBlast
          variant="circle"
          pixelSize={4}
          color="#0066FF"
          patternScale={2.5}
          patternDensity={1.1}
          pixelSizeJitter={0.3}
          enableRipples={true}
          rippleSpeed={0.3}
          rippleThickness={0.08}
          rippleIntensityScale={1.2}
          speed={0.4}
          edgeFade={0.3}
          transparent={true}
        />
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-primary">
          PRINCEBERG
        </h1>
        
        <h2 className="text-2xl md:text-3xl text-primary mb-6">
          Deine Software. Nur für dich gebaut.
        </h2>
        
        <p className="text-xl md:text-2xl text-foreground mb-4 max-w-3xl mx-auto">
          Schluss mit 10 Tools die nicht zusammenpassen. Eine Lösung, die exakt das macht was dein Business braucht.
        </p>
        
        <div className="bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-semibold mb-6 inline-block">
          Erster Prototyp in 7 Tagen – oder du entscheidest neu.
        </div>
        
        <p className="text-2xl md:text-3xl font-semibold text-primary mb-8">
          Wir bauen. Du arbeitest. System läuft.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a 
            href="/termine"
            className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-hover transition-colors"
          >
            Erstgespräch buchen
          </a>
          <a 
            href="#system"
            className="border border-primary text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary/10 transition-colors"
          >
            So funktioniert's
          </a>
        </div>
      </div>
    </section>
  );
};
