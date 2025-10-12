import { MessageCircle, Linkedin, HelpCircle } from "lucide-react";
import harisImage from "@/assets/haris-new.jpg";
import { Link } from "react-router-dom";

export const Founders = () => {
  const founders = [
    {
      name: "Haris Muranovic",
      role: "Founding Developer",
      image: harisImage,
      whatsapp: "+43 670 405 5549",
      whatsappLink: "https://wa.me/436704055549?text=Hi%20Haris,%20ich%20interessiere%20mich%20für%20eine%20Website!",
      linkedin: "https://www.linkedin.com/in/muranovic/"
    },
    {
      name: "You?",
      role: "Account Manager Position - Bewirb dich jetzt!",
      isOpenPosition: true
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
              {founder.isOpenPosition ? (
                <>
                  <div className="flex items-center gap-6 mb-6">
                    <div className="w-24 h-24 rounded-full bg-card-border flex items-center justify-center">
                      <HelpCircle className="w-12 h-12 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary">{founder.name}</h3>
                      <p className="text-muted-foreground">{founder.role}</p>
                    </div>
                  </div>
                  
                  <Link 
                    to="/jobs"
                    className="inline-flex items-center justify-center w-full px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors font-medium"
                  >
                    Zu den Stellenausschreibungen →
                  </Link>
                </>
              ) : (
                <>
                  <div className="flex items-center gap-6 mb-6">
                    <img 
                      src={founder.image} 
                      alt={founder.name}
                      className="w-24 h-24 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="text-xl font-bold text-primary">{founder.name}</h3>
                      <p className="text-muted-foreground">{founder.role}</p>
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
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};