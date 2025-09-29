export const Founders = () => {
  return (
    <section className="py-24 px-6 bg-background-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            <span className="block text-foreground-muted font-light">Haris & Abderrahmen:</span>
            <span className="block text-gradient">Die Gesichter hinter PRINCEBERG</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Haris */}
          <div className="relative overflow-hidden rounded-3xl p-8 text-white" style={{
            background: 'linear-gradient(135deg, hsl(240 73% 65%) 0%, hsl(269 61% 70%) 100%)'
          }}>
            <div className="space-y-6">
              <div className="text-6xl">👨‍💻</div>
              <div>
                <h3 className="text-3xl font-bold mb-2">Haris Muranovic</h3>
                <p className="text-xl font-medium opacity-90">Der Architekt</p>
              </div>
              
              <p className="text-lg leading-relaxed opacity-90">
                Während andere Informatik-Studenten Gaming-PCs bauen, baut Haris digitale Erlebnisse. 
                Seine Obsession: Websites, die so intuitiv sind, dass seine Oma sie bedienen kann, 
                aber so sophisticated, dass Tech-Bros beeindruckt sind.
              </p>

              <div className="grid grid-cols-1 gap-4 text-sm">
                <div>
                  <strong>Spezialgebiet:</strong> User Experience, die süchtig macht
                </div>
                <div>
                  <strong>Geheimwaffe:</strong> Kann sich in jeden Kunden hineinversetzen
                </div>
                <div>
                  <strong>Fun Fact:</strong> Hat mal eine Website gebaut, während er im Zug von Wien nach Linz saß
                </div>
              </div>

              <div className="pt-4 border-t border-white/20">
                <p className="font-semibold mb-3">📱 WhatsApp: +43 670 405 5549</p>
                <a 
                  href="https://wa.me/436704055549?text=Hi%20Haris,%20ich%20habe%20eure%20Story%20gelesen%20und%20bin%20interessiert!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white/20 backdrop-blur-sm px-6 py-3 rounded-2xl font-semibold hover:bg-white/30 transition-all duration-300 hover:scale-105"
                >
                  → Mit Haris schreiben
                </a>
              </div>
            </div>
          </div>

          {/* Abderrahmen */}
          <div className="relative overflow-hidden rounded-3xl p-8 text-white" style={{
            background: 'linear-gradient(135deg, hsl(317 100% 74%) 0%, hsl(355 83% 67%) 100%)'
          }}>
            <div className="space-y-6">
              <div className="text-6xl">🚀</div>
              <div>
                <h3 className="text-3xl font-bold mb-2">Abderrahmen Beltaief</h3>
                <p className="text-xl font-medium opacity-90">Der Visionär</p>
              </div>
              
              <p className="text-lg leading-relaxed opacity-90">
                Abderrahmen sieht Möglichkeiten, wo andere Probleme sehen. Seine Superpower: 
                Aus einer vagen Idee eine digitale Strategie zu entwickeln, die tatsächlich funktioniert. 
                Bonus: Er erklärt es so, dass es jeder versteht.
              </p>

              <div className="grid grid-cols-1 gap-4 text-sm">
                <div>
                  <strong>Spezialgebiet:</strong> Conversion-Optimierung, die Umsätze verdreifacht
                </div>
                <div>
                  <strong>Geheimwaffe:</strong> Findet immer den einen Hebel, der alles verändert
                </div>
                <div>
                  <strong>Fun Fact:</strong> Codet am besten zwischen Mitternacht und 4 Uhr morgens
                </div>
              </div>

              <div className="pt-4 border-t border-white/20">
                <p className="font-semibold mb-3">📱 WhatsApp: +43 676 400 2129</p>
                <a 
                  href="https://wa.me/436764002129?text=Hi%20Abderrahmen,%20ich%20habe%20eure%20Story%20gelesen%20und%20bin%20interessiert!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white/20 backdrop-blur-sm px-6 py-3 rounded-2xl font-semibold hover:bg-white/30 transition-all duration-300 hover:scale-105"
                >
                  → Mit Abderrahmen schreiben
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};