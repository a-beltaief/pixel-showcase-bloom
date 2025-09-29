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
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-8">
            <span className="block text-2xl md:text-3xl font-normal text-foreground-muted mb-4">PRINCEBERG</span>
            <span className="block font-light text-foreground-muted">Zwei AI-Experten, die</span>
            <span className="block text-gradient">Ihre Website von Hand crafted</span>
          </h1>
          
          <div className="text-xl md:text-2xl text-foreground-muted max-w-4xl mx-auto leading-relaxed mb-8 space-y-4">
            <p className="text-2xl md:text-3xl font-semibold text-foreground">
              Wir könnten KI nutzen. Stattdessen investieren wir unser Herzblut.
            </p>
            <p>
              <strong className="text-foreground">Wir sind Haris und Abderrahmen</strong> – zwei AI-Studenten an der JKU Linz, 
              die täglich mit künstlicher Intelligenz arbeiten. Und genau deshalb wissen wir:{" "}
              <span className="text-accent font-semibold">Ihre Website verdient mehr als einen Algorithmus.</span>
            </p>
            <p>
              Während alle auf den KI-Zug aufspringen, gehen wir den anderen Weg: 
              <span className="font-semibold text-foreground"> Echte Handarbeit. Echte Expertise. Echte Resultate.</span>
            </p>
            <p className="text-lg italic">
              Ja, wir werden Sie anrufen. Weil WhatsApp-Nachrichten keine Visionen transportieren.
            </p>
          </div>

          <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <button 
              className="btn-hero group"
              onClick={() => document.getElementById('story')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Unsere Geschichte erfahren
              <span className="inline-block ml-2 transform transition-transform group-hover:translate-x-1">→</span>
            </button>
            
            <button 
              className="btn-ghost group"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Direkt durchstarten
              <span className="inline-block ml-2 transform transition-transform group-hover:translate-x-1">↗</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};