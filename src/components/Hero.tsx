import FaultyTerminal from "./FaultyTerminal";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 bg-background overflow-hidden">
      {/* FaultyTerminal Background Effect */}
      <div className="absolute inset-0 opacity-50">
        <FaultyTerminal
          scale={2.0}
          gridMul={[3, 2]}
          digitSize={0.8}
          timeScale={0.3}
          scanlineIntensity={0.5}
          glitchAmount={0.3}
          flickerAmount={0.4}
          noiseAmp={0.6}
          tint="#1E40AF"
          mouseReact={true}
          mouseStrength={0.2}
          pageLoadAnimation={false}
          brightness={0.4}
        />
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-white drop-shadow-lg">
          PRINCEBERG
        </h1>
        
        <h2 className="text-2xl md:text-3xl text-white/90 mb-6 drop-shadow-md">
          Handgefertigte Websites im Monatsabo
        </h2>
        
        <p className="text-xl md:text-2xl text-white/95 mb-3 drop-shadow-md">
          <strong>Haris & Abderrahmen</strong> - JKU-Studenten
        </p>
        
        <p className="text-2xl md:text-3xl font-semibold text-white mb-8 drop-shadow-lg">
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