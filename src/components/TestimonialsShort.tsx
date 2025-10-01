export const TestimonialsShort = () => {
  const testimonials = [
    {
      quote: "Vom Erstgespräch bis Launch: 12 Tage",
      client: "Café Wien"
    },
    {
      quote: "Endlich faire Preise",
      client: "Dr. Weber"
    },
    {
      quote: "Support in Minuten, nicht Tagen",
      client: "PowerUp Linz"
    }
  ];

  return (
    <section className="py-16 px-6 bg-background-secondary">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Kundenstimmen
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card rounded-xl p-6 border border-card-border text-center">
              <p className="text-lg font-medium text-foreground mb-4 italic">
                "{testimonial.quote}"
              </p>
              <p className="text-foreground-muted text-sm">
                - {testimonial.client}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};