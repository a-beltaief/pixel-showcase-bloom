import { Clock, MessageCircle, Palette, Code, Rocket } from "lucide-react";

export const Timeline = () => {
  const timelineSteps = [
    {
      day: "Tag 1-2",
      title: "Beratung & Konzept",
      description: "Ausführliches Gespräch über Ihre Wünsche und Ziele",
      icon: <MessageCircle className="w-5 h-5" />,
      color: "text-blue-500"
    },
    {
      day: "Tag 3-5",
      title: "Design-Entwurf",
      description: "Erstellung des visuellen Konzepts und Layouts",
      icon: <Palette className="w-5 h-5" />,
      color: "text-purple-500"
    },
    {
      day: "Tag 6-12",
      title: "Entwicklung",
      description: "Programmierung und technische Umsetzung",
      icon: <Code className="w-5 h-5" />,
      color: "text-green-500"
    },
    {
      day: "Tag 13-14",
      title: "Launch",
      description: "Finaler Test und Website-Veröffentlichung",
      icon: <Rocket className="w-5 h-5" />,
      color: "text-orange-500"
    }
  ];

  return (
    <section className="py-16 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Clock className="w-6 h-6 text-primary" />
            <h2 className="text-3xl font-bold">In 14 Tagen online</h2>
          </div>
          <p className="text-lg text-foreground-muted">
            Von der ersten Idee bis zur fertigen Website - so läuft unser bewährter Prozess
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden md:block">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 via-green-500 to-orange-500 transform -translate-y-1/2"></div>
            
            {/* Timeline Steps */}
            <div className="grid grid-cols-4 gap-8">
              {timelineSteps.map((step, index) => (
                <div key={index} className="relative">
                  {/* Timeline Dot */}
                  <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 ${step.color.replace('text-', 'bg-')} rounded-full border-4 border-background z-10`}></div>
                  
                  {/* Content */}
                  <div className="text-center pt-8">
                    <div className={`inline-flex items-center justify-center w-12 h-12 ${step.color.replace('text-', 'bg-')}/10 rounded-xl mb-4`}>
                      <span className={step.color}>{step.icon}</span>
                    </div>
                    <div className={`text-sm font-semibold ${step.color} mb-2`}>
                      {step.day}
                    </div>
                    <h3 className="font-bold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-foreground-muted">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="md:hidden space-y-8">
          {timelineSteps.map((step, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className={`w-12 h-12 ${step.color.replace('text-', 'bg-')}/10 rounded-xl flex items-center justify-center`}>
                  <span className={step.color}>{step.icon}</span>
                </div>
                {index < timelineSteps.length - 1 && (
                  <div className={`w-0.5 h-12 ${step.color.replace('text-', 'bg-')} mt-4`}></div>
                )}
              </div>
              <div className="flex-1 pb-8">
                <div className={`text-sm font-semibold ${step.color} mb-1`}>
                  {step.day}
                </div>
                <h3 className="font-bold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-foreground-muted">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-card rounded-2xl p-8 border border-card-border max-w-md mx-auto">
            <h3 className="text-xl font-bold mb-3">Bereit zu starten?</h3>
            <p className="text-foreground-muted mb-6">
              Lassen Sie uns gemeinsam Ihr Projekt realisieren
            </p>
            <a 
              href="https://wa.me/436704055549?text=Hi,%20ich%20möchte%20eine%20Website%20in%2014%20Tagen!"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary-hover transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Jetzt starten
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};