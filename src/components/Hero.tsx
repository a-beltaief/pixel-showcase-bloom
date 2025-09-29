export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
          PRINCEBERG
        </h1>
        
        <h2 className="text-2xl md:text-3xl text-foreground-muted mb-8">
          Handgefertigte Websites von AI-Experten
        </h2>
        
        <p className="text-xl md:text-2xl text-foreground mb-4">
          <strong>Haris & Abderrahmen</strong> - JKU-Studenten mit einer Mission:
        </p>
        
        <p className="text-2xl md:text-3xl font-semibold text-primary mb-12">
          Ihre Website. 2 Wochen. 2.900€.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a 
            href="https://wa.me/436704055549?text=Hi,%20ich%20brauche%20eine%20Website%20für%202.900€"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-hover transition-colors"
          >
            WhatsApp-Kontakt
          </a>
          <a 
            href="#portfolio"
            className="border border-card-border text-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-card-border/20 transition-colors"
          >
            Projekte ansehen
          </a>
        </div>
      </div>
    </section>
  );
};