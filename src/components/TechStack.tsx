export const TechStack = () => {
  const technologies = [
    { name: "Google Cloud", icon: "☁️" },
    { name: "Vercel", icon: "▲" },
    { name: "Supabase", icon: "⚡" },
    { name: "React", icon: "⚛️" },
    { name: "OpenAI", icon: "🤖" },
    { name: "Claude", icon: "🧠" },
    { name: "Stripe", icon: "💳" },
    { name: "Mollie", icon: "💰" },
  ];

  return (
    <section className="py-12 px-6 bg-background border-t border-card-border">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-foreground-muted mb-8">
          Wir bauen auf Technologie, der Millionen vertrauen.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {technologies.map((tech, index) => (
            <div 
              key={index}
              className="flex items-center gap-2 bg-card border border-card-border rounded-lg px-4 py-2 text-sm font-medium text-foreground hover:border-primary/50 transition-colors"
            >
              <span className="text-lg">{tech.icon}</span>
              {tech.name}
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-4 text-sm text-foreground-muted">
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            EU-Server
          </span>
          <span>·</span>
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            DSGVO-konform
          </span>
          <span>·</span>
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            Enterprise-Grade Security
          </span>
        </div>
      </div>
    </section>
  );
};
