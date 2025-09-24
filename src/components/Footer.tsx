export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 bg-background-secondary border-t border-card-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          
          {/* Logo/Brand */}
          <div>
            <h3 className="text-2xl font-bold tracking-tight mb-2">
              Portfolio<span className="text-accent">.</span>
            </h3>
            <p className="text-foreground-muted">
              Moderne Webentwicklung aus Berlin
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <div className="flex flex-wrap justify-center gap-6">
              <button 
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-foreground-muted hover:text-accent transition-colors duration-300 font-medium"
              >
                Projekte
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-foreground-muted hover:text-accent transition-colors duration-300 font-medium"
              >
                Kontakt
              </button>
              <a 
                href="/impressum" 
                className="text-foreground-muted hover:text-accent transition-colors duration-300 font-medium"
              >
                Impressum
              </a>
              <a 
                href="/datenschutz" 
                className="text-foreground-muted hover:text-accent transition-colors duration-300 font-medium"
              >
                Datenschutz
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="text-right">
            <div className="flex justify-end gap-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-card border border-card-border flex items-center justify-center text-foreground-muted hover:text-accent hover:border-accent transition-all duration-300 hover:scale-110"
              >
                <span className="font-bold">G</span>
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-card border border-card-border flex items-center justify-center text-foreground-muted hover:text-accent hover:border-accent transition-all duration-300 hover:scale-110"
              >
                <span className="font-bold">L</span>
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-card border border-card-border flex items-center justify-center text-foreground-muted hover:text-accent hover:border-accent transition-all duration-300 hover:scale-110"
              >
                <span className="font-bold">X</span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-card-border text-center">
          <p className="text-foreground-muted">
            © {currentYear} Portfolio. Alle Rechte vorbehalten. Mit ❤️ in Berlin entwickelt.
          </p>
        </div>
      </div>
    </footer>
  );
};