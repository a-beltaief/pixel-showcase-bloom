export const Footer = () => {
  return (
    <footer className="py-12 px-6 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <div className="text-2xl font-bold">PRINCEBERG</div>
        <div className="text-sm opacity-90">Das System für individuelle Unternehmenssoftware</div>
        <div className="text-sm opacity-90">Spinoff eines Uni-Projekts | Seit Mai 2025</div>
        
        <div className="space-y-2">
          <div>Haris: +43 670 405 5549 | Abderrahmen: +43 676 400 2129</div>
          <div>
            <a href="mailto:info@princeberg.com" className="hover:underline">
              info@princeberg.com
            </a>
          </div>
        </div>
        
        <div className="flex justify-center gap-6 text-sm pt-6 border-t border-primary-foreground/20">
          <a href="/impressum" className="hover:underline">Impressum</a>
          <a href="/datenschutz" className="hover:underline">Datenschutz</a>
          <a href="/agb" className="hover:underline">AGB</a>
        </div>
      </div>
    </footer>
  );
};
