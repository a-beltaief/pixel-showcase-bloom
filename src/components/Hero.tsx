import { useEffect, useState } from "react";

export const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float" style={{animationDelay: "2s"}}></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-6">
            <span className="block font-light text-foreground-muted">Webdesign</span>
            <span className="block text-gradient">Portfolio</span>
          </h1>
          
          <p className={`text-xl md:text-2xl text-foreground-muted max-w-3xl mx-auto leading-relaxed mb-12 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            Moderne Webseiten, die begeistern und konvertieren. 
            Entdecken Sie einzigartige digitale Erlebnisse mit 
            <span className="text-accent font-medium"> perfekter Balance aus Design und Funktionalität</span>.
          </p>

          <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <button 
              className="btn-hero group"
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Projekte ansehen
              <span className="inline-block ml-2 transform transition-transform group-hover:translate-x-1">→</span>
            </button>
            
            <button 
              className="btn-ghost group"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Kontakt aufnehmen
              <span className="inline-block ml-2 transform transition-transform group-hover:translate-x-1">↗</span>
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <div className="flex flex-col items-center text-foreground-muted">
            <span className="text-sm font-medium mb-3 tracking-wide">Scroll</span>
            <div className="w-6 h-10 border-2 border-card-border rounded-full flex justify-center">
              <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};