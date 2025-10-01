export const Footer = () => {
  return (
    <footer className="py-12 px-6 bg-background-secondary border-t border-card-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center">
          
          {/* Logo */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold tracking-tight">
              PRINCEBERG
            </h3>
          </div>

          {/* Copyright */}
          <div>
            <p className="text-foreground-muted">
              © 2025 PRINCEBERG. Alle Rechte vorbehalten.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};