export const ProcessSection = () => {
  return (
    <section className="py-24 px-6 bg-background-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            <span className="block text-foreground-muted font-light">14 Tage vom ersten</span>
            <span className="block text-gradient">"Hallo" zum großen "Wow"</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Day 1 */}
          <div className="portfolio-card p-8 text-center">
            <div className="text-4xl mb-4">📞</div>
            <h3 className="text-xl font-bold text-accent mb-3">Tag 1: Der Anruf</h3>
            <p className="text-foreground-muted">
              5 Minuten, die alles verändern. Wir hören zu, stellen Fragen, verstehen.
            </p>
          </div>

          {/* Day 2-3 */}
          <div className="portfolio-card p-8 text-center">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-bold text-accent mb-3">Tag 2-3: Die Strategie-Session</h3>
            <p className="text-foreground-muted">
              Videocall oder Kaffee in Wien. Wir tauchen tief ein in Ihre Vision.
            </p>
          </div>

          {/* Day 4-7 */}
          <div className="portfolio-card p-8 text-center">
            <div className="text-4xl mb-4">🎨</div>
            <h3 className="text-xl font-bold text-accent mb-3">Tag 4-7: Design-Phase</h3>
            <p className="text-foreground-muted">
              Während Sie schlafen, designen wir. Drei Varianten. Sie wählen.
            </p>
          </div>

          {/* Day 8-12 */}
          <div className="portfolio-card p-8 text-center">
            <div className="text-4xl mb-4">👨‍💻</div>
            <h3 className="text-xl font-bold text-accent mb-3">Tag 8-12: Development-Sprint</h3>
            <p className="text-foreground-muted">
              Code. Kaffee. Code. Kein Schlaf. Ihre Website entsteht.
            </p>
          </div>

          {/* Day 13 */}
          <div className="portfolio-card p-8 text-center">
            <div className="text-4xl mb-4">🔍</div>
            <h3 className="text-xl font-bold text-accent mb-3">Tag 13: Review & Polish</h3>
            <p className="text-foreground-muted">
              Sie testen, wir optimieren. Bis jedes Detail stimmt.
            </p>
          </div>

          {/* Day 14 */}
          <div className="portfolio-card p-8 text-center">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-bold text-accent mb-3">Tag 14: Launch</h3>
            <p className="text-foreground-muted">
              Ihre neue Website geht live. Die Konkurrenz wird blass.
            </p>
          </div>
        </div>

        {/* Post-Launch */}
        <div className="text-center mt-12">
          <div className="inline-block portfolio-card p-8 max-w-2xl">
            <div className="text-4xl mb-4">📈</div>
            <h3 className="text-2xl font-bold text-gradient mb-4">Tag 15+: Evolution</h3>
            <p className="text-lg text-foreground-muted mb-6">
              Wir bleiben in Kontakt. Ihre Website wächst mit Ihrem Business.
            </p>
            
            <div className="bg-accent-muted p-6 rounded-xl text-left">
              <h4 className="font-semibold text-accent mb-3">Was nach dem Launch passiert:</h4>
              <ul className="space-y-2 text-foreground-muted">
                <li>• 30 Tage kostenloser Support per WhatsApp</li>
                <li>• Monatliche Performance-Reports</li>
                <li>• Kostenlose Sicherheitsupdates</li>
                <li>• Priorität bei zukünftigen Projekten</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Timeline Visualization */}
        <div className="mt-16">
          <div className="portfolio-card p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
              Der PRINCEBERG-Timeline im Überblick:
            </h3>
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-center">
                <div className="w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center font-bold mb-2 mx-auto">1</div>
                <p className="font-semibold text-sm">Anruf</p>
              </div>
              <div className="hidden md:block flex-1 h-px bg-accent mx-4"></div>
              <div className="text-center">
                <div className="w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center font-bold mb-2 mx-auto">2-3</div>
                <p className="font-semibold text-sm">Strategie</p>
              </div>
              <div className="hidden md:block flex-1 h-px bg-accent mx-4"></div>
              <div className="text-center">
                <div className="w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center font-bold mb-2 mx-auto">4-7</div>
                <p className="font-semibold text-sm">Design</p>
              </div>
              <div className="hidden md:block flex-1 h-px bg-accent mx-4"></div>
              <div className="text-center">
                <div className="w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center font-bold mb-2 mx-auto">8-12</div>
                <p className="font-semibold text-sm">Development</p>
              </div>
              <div className="hidden md:block flex-1 h-px bg-accent mx-4"></div>
              <div className="text-center">
                <div className="w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center font-bold mb-2 mx-auto">13</div>
                <p className="font-semibold text-sm">Review</p>
              </div>
              <div className="hidden md:block flex-1 h-px bg-accent mx-4"></div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-accent to-green-500 text-white rounded-full flex items-center justify-center font-bold mb-2 mx-auto">🚀</div>
                <p className="font-semibold text-sm">Launch</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};