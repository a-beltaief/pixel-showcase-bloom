export const WhyWeCalls = () => {
  return (
    <section className="py-24 px-6 bg-background-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            <span className="block text-gradient">Der Anruf, der Ihr Business verändert</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="text-6xl">📞</div>
            <blockquote className="text-2xl md:text-3xl font-bold text-accent italic">
              "Hi, hier ist Haris von PRINCEBERG. Haben Sie 2 Minuten Zeit für eine verrückte Idee?"
            </blockquote>
            
            <div className="space-y-4 text-lg text-foreground-muted leading-relaxed">
              <p>
                Wir wissen: Cold Calls sind 2024 etwa so beliebt wie Fax-Geräte. 
                <span className="text-foreground font-semibold"> Aber hier ist der Twist:</span>
              </p>
              
              <p className="text-xl font-bold text-gradient">
                Ein 2-Minuten-Gespräch verrät uns mehr über Ihr Business als 20 Fragebögen.
              </p>
            </div>
          </div>

          <div className="portfolio-card p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Was ein Gespräch enthüllt:
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-2xl mr-4">🎯</span>
                <div>
                  <strong className="text-accent">Ihre Stimme</strong> verrät, was Sie wirklich begeistert
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-2xl mr-4">💡</span>
                <div>
                  <strong className="text-accent">Ihre spontanen Antworten</strong> zeigen echte Pain Points
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-2xl mr-4">🔍</span>
                <div>
                  <strong className="text-accent">Ihre Fragen</strong> enthüllen versteckte Chancen
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-2xl mr-4">⚡</span>
                <div>
                  <strong className="text-accent">Ihre Reaktion</strong> zeigt, ob wir zusammenpassen
                </div>
              </li>
            </ul>
            
            <div className="mt-8 p-6 bg-accent-muted rounded-2xl">
              <p className="text-foreground font-semibold">
                Keine Scripts. Keine Sales-Pitches. Nur zwei Entwickler, die verstehen wollen.
              </p>
              <p className="text-foreground-muted mt-2">
                Und wenn die Chemie nicht stimmt? Dann hatten wir wenigstens ein nettes Gespräch.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};