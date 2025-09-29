import { Clock, MessageCircle, Palette, Code, Rocket } from "lucide-react";

export const Timeline = () => {
  const timelineSteps = [
    {
      day: "Tag 1-2",
      title: "Beratung",
      icon: <MessageCircle className="w-5 h-5" />
    },
    {
      day: "Tag 3-5",
      title: "Design",
      icon: <Palette className="w-5 h-5" />
    },
    {
      day: "Tag 6-12",
      title: "Entwicklung",
      icon: <Code className="w-5 h-5" />
    },
    {
      day: "Tag 13-14",
      title: "Launch",
      icon: <Rocket className="w-5 h-5" />
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
        </div>

        {/* Simplified Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-primary/20 transform -translate-y-1/2 hidden md:block"></div>
          
          {/* Timeline Steps */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {timelineSteps.map((step, index) => (
              <div key={index} className="relative text-center">
                {/* Timeline Dot - Desktop */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-primary rounded-full border-4 border-background z-10 hidden md:block"></div>
                
                {/* Content */}
                <div className="md:pt-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-xl mb-4">
                    <span className="text-primary">{step.icon}</span>
                  </div>
                  <div className="text-sm font-semibold text-primary mb-1">
                    {step.day}
                  </div>
                  <h3 className="font-bold text-foreground">
                    {step.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};