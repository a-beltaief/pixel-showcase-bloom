import { Check } from "lucide-react";

export const StorySection = () => {
  const timeline = [
    {
      year: "2024",
      title: "Die Idee",
      description: "An der JKU entwickeln wir ein Framework für effiziente Web-Entwicklung."
    },
    {
      year: "Mai 2025",
      title: "Das Spinoff",
      description: "Aus dem Projekt wird PRINCEBERG. Erste Kunden sind begeistert."
    },
    {
      year: "Heute",
      title: "Ihre Chance",
      description: "Unser Framework ermöglicht Premium-Websites zum Bruchteil der üblichen Kosten."
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

        <div className="bg-card rounded-xl p-8 border border-card-border text-center">
          <p className="text-lg leading-relaxed text-foreground">
            <strong className="text-primary">Das Beste:</strong> Wir gehören uns selbst. 
            Keine Investoren. Keine Kompromisse. Nur zufriedene Kunden.
          </p>
        </div>
      </div>
    </section>
  );
};