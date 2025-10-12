export const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-card-border">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="text-2xl font-bold tracking-tight hover:text-accent transition-colors duration-300 cursor-pointer">
            PRINCEBERG
          </a>

          {/* Navigation Links */}
          <div className="flex items-center gap-8">
            <button 
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-foreground-muted hover:text-accent transition-colors duration-300 font-medium"
            >
              Projekte
            </button>
            <a 
              href="/termine"
              className="text-foreground-muted hover:text-accent transition-colors duration-300 font-medium"
            >
              Termine
            </a>
            <a 
              href="/jobs"
              className="text-foreground-muted hover:text-accent transition-colors duration-300 font-medium"
            >
              Jobs
            </a>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-foreground-muted hover:text-accent transition-colors duration-300 font-medium"
            >
              Kontakt
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};