export const SuccessStories = () => {
  const testimonials = [
    {
      result: "450% mehr Umsatz",
      company: "Boutique Eleganz"
    },
    {
      result: "1.2 Mio Funding erhalten", 
      company: "TechFlow"
    },
    {
      result: "Von Seite 5 auf Platz 1",
      company: "Huber Holzbau"
    }
  ];

  return (
    <section className="py-24 px-6 bg-background-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="text-center p-6">
              <div className="text-2xl font-bold text-accent mb-2">
                "{testimonial.result}"
              </div>
              <div className="text-foreground-muted">
                {testimonial.company}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};