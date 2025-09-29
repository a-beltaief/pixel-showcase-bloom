export const VideoSection = () => {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <div className="portfolio-card p-12 bg-primary text-primary-foreground">
          <div className="text-8xl mb-8">▶️</div>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            2 Minuten, die alles erklären
          </h3>
          <p className="text-xl opacity-80 mb-8">
            Lernen Sie uns kennen, bevor wir uns kennenlernen
          </p>
          
          {/* Video Placeholder */}
          <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/20">
            <div className="text-6xl mb-4">🎥</div>
            <p className="text-lg opacity-90">
              [VIDEO PLACEHOLDER - Haris & Abderrahmen stellen sich vor]
            </p>
            <p className="text-sm opacity-70 mt-4">
              Video wird bald verfügbar sein
            </p>
          </div>

          <div className="mt-8 text-left max-w-2xl mx-auto">
            <h4 className="text-xl font-semibold mb-4">Was Sie im Video erfahren:</h4>
            <ul className="space-y-2 text-lg opacity-90">
              <li>• Warum wir KI studieren, aber nicht für Websites nutzen</li>
              <li>• Unsere Geschichte als Studenten an der JKU</li>
              <li>• Wie wir arbeiten und was uns antreibt</li>
              <li>• Echte Beispiele unserer handgefertigten Websites</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};