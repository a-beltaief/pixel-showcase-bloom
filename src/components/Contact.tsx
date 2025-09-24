import { useState, useEffect } from "react";

export const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('contact');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Content */}
          <div className={`transform transition-all duration-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
              Lassen Sie uns über Ihr 
              <span className="text-gradient block">nächstes Projekt</span>
              <span className="block">sprechen</span>
            </h2>
            
            <p className="text-xl text-foreground-muted leading-relaxed mb-8">
              Haben Sie eine Idee für eine moderne Webseite? Ich helfe Ihnen dabei, 
              Ihre Vision in ein einzigartiges digitales Erlebnis zu verwandeln.
            </p>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="group cursor-pointer">
                <h3 className="text-lg font-semibold mb-2 group-hover:text-accent transition-colors">
                  E-Mail
                </h3>
                <p className="text-foreground-muted group-hover:text-foreground transition-colors">
                  hello@portfolio.dev
                </p>
              </div>
              
              <div className="group cursor-pointer">
                <h3 className="text-lg font-semibold mb-2 group-hover:text-accent transition-colors">
                  Telefon
                </h3>
                <p className="text-foreground-muted group-hover:text-foreground transition-colors">
                  +49 (0) 123 456 789
                </p>
              </div>
              
              <div className="group cursor-pointer">
                <h3 className="text-lg font-semibold mb-2 group-hover:text-accent transition-colors">
                  Standort
                </h3>
                <p className="text-foreground-muted group-hover:text-foreground transition-colors">
                  Berlin, Deutschland
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className={`transform transition-all duration-800 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <div className="card-gradient p-8 rounded-3xl border border-card-border">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-3">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-4 bg-background border border-card-border rounded-2xl focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 text-foreground"
                    placeholder="Ihr vollständiger Name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-3">
                    E-Mail Adresse
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-4 bg-background border border-card-border rounded-2xl focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 text-foreground"
                    placeholder="ihre.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-3">
                    Nachricht
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-4 bg-background border border-card-border rounded-2xl focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 text-foreground resize-none"
                    placeholder="Erzählen Sie mir von Ihrem Projekt..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-hero text-center"
                >
                  Nachricht senden
                  <span className="ml-2">→</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};