export const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">Bereit loszulegen?</h2>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">WhatsApp (bevorzugt):</h3>
            <div className="space-y-2">
              <div>
                <a 
                  href="https://wa.me/436704055549?text=Hi%20Haris,%20ich%20brauche%20eine%20Website!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  Haris: +43 670 405 5549
                </a>
              </div>
              <div>
                <a 
                  href="https://wa.me/436764002129?text=Hi%20Abderrahmen,%20ich%20brauche%20eine%20Website!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  Abderrahmen: +43 676 400 2129
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">E-Mail:</h3>
            <a 
              href="mailto:info@princeberg.com"
              className="text-accent hover:underline"
            >
              info@princeberg.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};