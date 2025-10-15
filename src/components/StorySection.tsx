import { Check } from "lucide-react";

export const StorySection = () => {
  const timeline = [
    {
      year: "2024",
      title: "Die Idee",
      description: "In einem Uni-Projekt entwickeln wir ein revolutionäres System für effiziente Web-Entwicklung - ohne Qualitätsverlust."
    },
    {
      year: "Mai 2025",
      title: "Das Spinoff",
      description: "Aus dem Uni-Projekt wird PRINCEBERG. Unser System bewährt sich bei ersten Kunden."
    },
    {
      year: "Heute",
      title: "Ihre Chance",
      description: "Unser System ermöglicht Premium-Websites zum Bruchteil der üblichen Kosten - in nur 14 Tagen."
    }
  ];

  return (
    <section id="story" className="py-16 px-6 bg-background-secondary">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Vom Uni-Projekt zum Game-Changer
          </h2>
        </div>

        <div className="space-y-8 mb-12">
          {timeline.map((item, index) => (
            <div key={index} className="bg-card rounded-xl p-6 border border-card-border">
              <div className="flex items-start gap-4">
                <div className="bg-primary text-primary-foreground px-3 py-1 rounded-lg font-bold text-sm flex-shrink-0">
                  {item.year}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
                  <p className="text-foreground-muted leading-relaxed">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};