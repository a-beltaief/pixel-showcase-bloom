import harisPortrait from '@/assets/haris-portrait.jpg';
import abderrahmenPortrait from '@/assets/abderrahmen-portrait.jpg';
import { Linkedin } from 'lucide-react';

export const Founders = () => {
  return (
    <section className="py-12 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Haris */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-48 h-48 rounded-2xl overflow-hidden flex-shrink-0">
              <img 
                src={harisPortrait} 
                alt="Haris Muranovic" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2">Haris Muranovic</h3>
              <p className="text-lg text-foreground-muted mb-6">
                Developer
              </p>
              <div className="flex flex-col gap-3 items-start">
                <a 
                  href="https://wa.me/436704055549?text=Hi%20Haris,%20ich%20brauche%20eine%20Website!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-accent text-accent-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                >
                  WhatsApp: +43 670 405 5549
                </a>
                <a 
                  href="https://www.linkedin.com/in/muranovic/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Abderrahmen */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-48 h-48 rounded-2xl overflow-hidden flex-shrink-0">
              <img 
                src={abderrahmenPortrait} 
                alt="Abderrahmen Beltaief" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2">Abderrahmen Beltaief</h3>
              <p className="text-lg text-foreground-muted mb-6">
                Designer
              </p>
              <div className="flex flex-col gap-3 items-start">
                <a 
                  href="https://wa.me/436764002129?text=Hi%20Abderrahmen,%20ich%20brauche%20eine%20Website!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-accent text-accent-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                >
                  WhatsApp: +43 676 400 2129
                </a>
                <a 
                  href="https://www.linkedin.com/in/abeltaief/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};