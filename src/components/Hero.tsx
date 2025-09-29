import FaultyTerminal from "./FaultyTerminal";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 bg-background overflow-hidden">
      {/* FaultyTerminal Background Effect */}
      <div className="absolute inset-0">
        <FaultyTerminal
          scale={1.5}
          gridMul={[2, 1]}
          digitSize={1.2}
          timeScale={1}
          pause={false}
          scanlineIntensity={1}
          glitchAmount={1}
          flickerAmount={1}
          noiseAmp={1}
          chromaticAberration={0}
          dither={0}
          curvature={0}
          tint="#ffffff"
          mouseReact={true}
          mouseStrength={0.5}
          pageLoadAnimation={false}
          brightness={1}
        />
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-blue-600" style={{ textShadow: '2px 2px 4px rgba(255, 255, 255, 0.8)' }}>
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
            className="bg-white text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
          >
            WhatsApp-Kontakt
          </a>
        </div>
      </div>
    </section>
  );
};