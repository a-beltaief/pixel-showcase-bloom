import DitherBackground from "./DitherBackground";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 bg-background overflow-hidden">
      {/* Dither Background Effect */}
      <div className="absolute inset-0 opacity-25">
        <DitherBackground
          waveColor={[0.2, 0.4, 1.0]}
          disableAnimation={false}
          enableMouseInteraction={true}
          mouseRadius={0.3}
          waveAmplitude={0.25}
          waveFrequency={2.5}
          waveSpeed={0.03}
        />
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-primary">
          PRINCEBERG
        </h1>
        
        <h2 className="text-2xl md:text-3xl text-foreground-muted mb-6">
          Handgefertigte Websites im Monatsabo
        </h2>
        
        <p className="text-xl md:text-2xl text-foreground mb-3">
          <strong>Haris & Abderrahmen</strong> - JKU-Studenten
        </p>
        
        <p className="text-2xl md:text-3xl font-semibold text-primary mb-8">
          Ab 50€/Monat. Alles inklusive.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a 
            href="#pricing"
            className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-hover transition-colors"
          >
            Pakete ansehen
          </a>
          <a 
            href="https://wa.me/436704055549?text=Hi,%20ich%20interessiere%20mich%20für%20eine%20Website!"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-primary text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary/10 transition-colors"
          >
            WhatsApp-Kontakt
          </a>
        </div>
      </div>
    </section>
  );
};