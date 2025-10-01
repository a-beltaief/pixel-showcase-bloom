export const SuccessStories = () => {
  const testimonials = [
    {
      text: "Endlich eine professionelle Website zum fairen Preis",
      company: "Café Central, Wien"
    },
    {
      text: "In 2 Wochen online - hätte nie gedacht, dass es so schnell geht",
      company: "Maier Consulting, Linz"
    },
    {
      text: "Support funktioniert wirklich - Antwort innerhalb einer Stunde",
      company: "Blumen Schmid, Graz"
    },
    {
      text: "35% mehr Anfragen seit dem Relaunch",
      company: "Zahnarztpraxis Dr. Weber"
    },
    {
      text: "Faire Preise, ehrliche Beratung, top Ergebnis",
      company: "Fitness Studio PowerUp"
    }
  ];

  return (
    <section className="py-12 px-6 bg-background-secondary overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Was unsere Kunden sagen</h2>
        
        {/* Scrolling testimonials */}
        <div className="relative">
          <div className="flex animate-scroll space-x-8">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 bg-card rounded-xl p-6 border border-card-border w-80"
              >
                <div className="text-lg font-medium text-primary mb-3">
                  "{testimonial.text}"
                </div>
                <div className="text-foreground-muted text-sm">
                  - {testimonial.company}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};