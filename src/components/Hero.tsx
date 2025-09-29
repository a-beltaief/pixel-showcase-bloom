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
          All-in System. All-in Service. Deine Website in 14 Tagen.
        </h2>
        
        <div className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-semibold mb-6 inline-block">
          Website nach 14 Tage noch immer nicht geliefert? 100% Stornierung ohne wenn und aber
        </div>
        
        <p className="text-xl md:text-2xl text-foreground mb-4">
          <strong>Von der JKU zum Startup</strong> - seit Mai 2025 am Markt
        </p>
        
        <p className="text-2xl md:text-3xl font-semibold text-primary mb-8">
          Wir machen. Du entspannst. Website läuft.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a 
            href="/termine"
            className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-hover transition-colors"
          >
            Termin buchen
          </a>
          <a 
            href="#pricing"
            className="border border-primary text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary/10 transition-colors"
          >
            Pakete ansehen
          </a>
        </div>
      </div>
    </section>
  );
};