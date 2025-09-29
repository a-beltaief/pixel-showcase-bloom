import { MessageCircle, Linkedin } from "lucide-react";
import harisImage from "@/assets/haris-new.jpg";
import abderrahmenImage from "@/assets/abderrahmen-new.jpg";

export const Founders = () => {
  const founders = [
    {
      name: "Haris Muranovic",
      role: "Developer",
      image: harisImage,
      whatsapp: "+43 670 405 5549",
      whatsappLink: "https://wa.me/436704055549?text=Hi%20Haris,%20ich%20interessiere%20mich%20für%20eine%20Website!",
      linkedin: "https://www.linkedin.com/in/muranovic/"
    },
    {
      name: "Abderrahmen Beltaief",
      role: "Designer",
      image: abderrahmenImage,
      whatsapp: "+43 676 400 2129",
      whatsappLink: "https://wa.me/436764002129?text=Hi%20Abderrahmen,%20ich%20interessiere%20mich%20für%20eine%20Website!",
      linkedin: "https://www.linkedin.com/in/abeltaief/"
    }
  ];

  return (
    <section className="py-16 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Team
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {founders.map((founder, index) => (
            <div key={index} className="bg-card rounded-xl p-6 border border-card-border">
              <div className="flex items-center gap-4 mb-4">
                <img 
                  src={founder.image} 
                  alt={founder.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-xl font-bold text-primary">{founder.name}</h3>
                  <p className="text-foreground-muted">{founder.role}</p>
                </div>
              </div>
              
              <div className="space-y-3">
                <a 
                  href={founder.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary hover:underline text-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp: {founder.whatsapp}
                </a>
                
                <a 
                  href={founder.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary hover:underline text-sm"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};