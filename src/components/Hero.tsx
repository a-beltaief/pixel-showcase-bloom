export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 bg-background overflow-hidden">
      {/* Subtle Background Pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          background: `radial-gradient(circle at 20% 80%, hsl(216, 100%, 50%) 0%, transparent 50%),
                      radial-gradient(circle at 80% 20%, hsl(216, 100%, 60%) 0%, transparent 50%),
                      radial-gradient(circle at 40% 40%, hsl(216, 100%, 70%) 0%, transparent 50%)`,
          filter: 'blur(40px)'
        }}
      />
      
      {/* Subtle Dot Pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(216, 100%, 50%) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />
      
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