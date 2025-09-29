export const Footer = () => {
  return (
    <footer className="py-16 px-6 bg-primary text-primary-foreground">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-3xl font-bold tracking-tight">
              PRINCEBERG
            </h3>
            <p className="text-lg opacity-90">
              Zwei Studenten. Eine Mission. Ihre Website.
            </p>
          </div>

          {/* Direct Contact */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold">Direktkontakt:</h4>
            <div className="space-y-2 opacity-90">
              <p>Haris Muranovic: <a href="tel:+436704055549" className="hover:underline">+43 670 405 5549</a></p>
              <p>Abderrahmen Beltaief: <a href="tel:+436764002129" className="hover:underline">+43 676 400 2129</a></p>
              <p><a href="mailto:hello@princeberg.com" className="hover:underline">hello@princeberg.com</a></p>
            </div>
          </div>

          {/* Address */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold">Adresse:</h4>
            <div className="space-y-1 opacity-90">
              <p>Wambachergasse 16</p>
              <p>1130 Wien</p>
              <p>Österreich</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            
            {/* Quick Links */}
            <div className="flex flex-wrap gap-6 text-sm opacity-90">
              <button 
                onClick={() => document.getElementById('story')?.scrollIntoView({ behavior: 'smooth' })}
                className="hover:underline"
              >
                Story
              </button>
              <button 
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                className="hover:underline"
              >
                Portfolio
              </button>
              <a href="/blog" className="hover:underline">Blog</a>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="hover:underline"
              >
                Kontakt
              </button>
            </div>

            {/* Copyright */}
            <div className="text-sm opacity-75">
              <p>© 2024 PRINCEBERG | Handcrafted with ❤️ in Wien</p>
            </div>
          </div>

          {/* Legal Links */}
          <div className="text-center mt-6">
            <div className="flex justify-center gap-6 text-sm opacity-75">
              <a href="#" className="hover:underline">Impressum</a>
              <a href="#" className="hover:underline">Datenschutz</a>
              <a href="#" className="hover:underline">AGB</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};