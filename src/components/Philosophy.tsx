import { Check } from "lucide-react";

export const Philosophy = () => {
  const points = [
    "Keine Investoren, keine Kompromisse",
    "Direkte Kommunikation statt Meeting-Marathon",
    "Faire Preise durch schlanke Struktur"
  ];

  return (
    <section className="py-12 px-6 bg-background-secondary">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Warum wir anders arbeiten:
        </h2>
        
        <div className="space-y-6">
          {points.map((point, index) => (
            <div key={index} className="flex items-center justify-center gap-4 text-xl">
              <Check className="w-6 h-6 text-accent flex-shrink-0" />
              <span>{point}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};