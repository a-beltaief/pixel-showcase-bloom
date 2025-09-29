export const Footer = () => {
  return (
    <footer className="py-12 px-6 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <div className="text-2xl font-bold">PRINCEBERG © 2025</div>
        
        <div>
          <a href="mailto:info@princeberg.com" className="hover:underline">
            info@princeberg.com
          </a>
        </div>
        
        <div className="flex justify-center gap-6 text-sm">
          <a href="#" className="hover:underline">Impressum</a>
          <a href="#" className="hover:underline">Datenschutz</a>
        </div>
        
        <div className="pt-6 border-t border-primary-foreground/20">
          <div className="text-sm">WhatsApp:</div>
          <div className="space-y-1 text-sm opacity-90">
            <div>Haris: +43 670 405 5549</div>
            <div>Abderrahmen: +43 676 400 2129</div>
          </div>
        </div>
      </div>
    </footer>
  );
};