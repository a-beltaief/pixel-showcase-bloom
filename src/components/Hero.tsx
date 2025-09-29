import PixelBlast from "./PixelBlast";
import PillNav from "./PillNav";

export const Hero = () => {
  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Preise', href: '#pricing' },
    { label: 'Kontakt', href: '#contact' },
    { label: 'Blog', href: '/blog' }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-white">
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

      {/* PixelBlast Background Effect */}
      <div className="absolute inset-0">
        <PixelBlast
          variant="circle"
          pixelSize={6}
          color="#0066FF"
          patternScale={3}
          patternDensity={1.2}
          pixelSizeJitter={0.5}
          enableRipples
          rippleSpeed={0.4}
          rippleThickness={0.12}
          rippleIntensityScale={1.5}
          liquid
          liquidStrength={0.12}
          liquidRadius={1.2}
          liquidWobbleSpeed={5}
          speed={0.6}
          edgeFade={0.25}
          transparent
        />
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h1 
          className="text-black font-bold tracking-tight mb-6"
          style={{
            fontFamily: 'Figtree, sans-serif',
            fontWeight: 700,
            letterSpacing: '-2px',
            fontSize: 'clamp(2rem, 4vw, 2.6rem)'
          }}
        >
          PRINCEBERG
        </h1>
        
        <h2 className="text-2xl md:text-3xl text-black/90 mb-6">
          Handgefertigte Websites im Monatsabo
        </h2>
        
        <p className="text-xl md:text-2xl text-black/95 mb-3">
          <strong>Haris & Abderrahmen</strong> - JKU-Studenten
        </p>
        
        <p className="text-2xl md:text-3xl font-semibold text-black mb-8">
          Ab 50€/Monat. Alles inklusive.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a 
            href="#pricing"
            className="bg-black text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-800 transition-colors"
          >
            Pakete ansehen
          </a>
          <a 
            href="https://wa.me/436704055549?text=Hi,%20ich%20interessiere%20mich%20für%20eine%20Website!"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-600 transition-colors"
          >
            WhatsApp-Kontakt
          </a>
        </div>
      </div>
    </section>
  );
};