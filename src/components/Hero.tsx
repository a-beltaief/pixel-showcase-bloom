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
        
        <h2 className="text-2xl md:text-3xl text-foreground-muted mb-6">
          Professionelle Websites. Ohne Investoren-Nonsens.
        </h2>
        
        <p className="text-lg md:text-xl text-foreground mb-4">
          <strong>Haris & Abderrahmen</strong> - JKU-Studenten mit einem simplen Plan:
        </p>
        
        <p className="text-xl md:text-2xl text-foreground mb-4">
          Faire Preise. Echte Qualität. In 14 Tagen online.
        </p>
        
        <p className="text-2xl md:text-3xl font-semibold text-primary mb-8">
          Ab 50€/Monat. Kein Kleingedrucktes.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a 
            href="#story"
            className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-hover transition-colors"
          >
            Unsere Story
          </a>
          <a 
            href="https://wa.me/436704055549?text=Hi,%20ich%20interessiere%20mich%20für%20eine%20Website!"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-primary text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary/10 transition-colors"
          >
            Direkt starten
          </a>
        </div>
      </div>
    </section>
  );
};