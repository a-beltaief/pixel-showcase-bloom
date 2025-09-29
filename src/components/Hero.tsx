import FaultyTerminal from "./FaultyTerminal";
import PillNav from "./PillNav";

export const Hero = () => {
  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Preise', href: '#pricing' },
    { label: 'Kontakt', href: '#contact' }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden" style={{ backgroundColor: '#1a1a1a' }}>
      {/* Navigation */}
      <PillNav
        logoText="PRINCEBERG"
        items={navItems}
        activeHref="/"
        baseColor="#ffffff"
        pillColor="#000000"
        hoveredPillTextColor="#ffffff"
        pillTextColor="#000000"
        initialLoadAnimation={true}
      />

      {/* FaultyTerminal Background Effect */}
      <div className="absolute inset-0" style={{ opacity: 0.5 }}>
        <FaultyTerminal
          scale={1}
          gridMul={[2, 1]}
          digitSize={1.5}
          timeScale={0.3}
          pause={false}
          scanlineIntensity={0.3}
          glitchAmount={1}
          flickerAmount={1}
          noiseAmp={1}
          chromaticAberration={0}
          dither={0}
          curvature={0.2}
          tint="#0066FF"
          mouseReact={true}
          mouseStrength={0.2}
          pageLoadAnimation={true}
          brightness={1}
        />
      </div>

      {/* Milky white overlay */}
      <div className="absolute inset-0 bg-white/20 backdrop-blur-[1px]"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="relative inline-block mb-6">
          <div className="absolute inset-0 bg-white/30 rounded-full blur-xl transform scale-110"></div>
          <h1 className="relative text-5xl md:text-7xl font-bold tracking-tight text-blue-600">
            PRINCEBERG
          </h1>
        </div>
        
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