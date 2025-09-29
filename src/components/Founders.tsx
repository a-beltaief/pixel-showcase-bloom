import ProfileCard from './ProfileCard';
import harisPortrait from '@/assets/haris-portrait.png';
import abderrahmenPortrait from '@/assets/abderrahmen-portrait.png';

export const Founders = () => {
  const handleHarisContact = () => {
    window.open('https://wa.me/436704055549?text=Hi%20Haris,%20ich%20interessiere%20mich%20für%20eine%20Website!', '_blank');
  };

  const handleAbderrahmenContact = () => {
    window.open('https://wa.me/436764002129?text=Hi%20Abderrahmen,%20ich%20interessiere%20mich%20für%20eine%20Website!', '_blank');
  };

  return (
    <section className="py-24 px-6 bg-background-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            <span className="block text-foreground-muted font-light">Die Köpfe hinter</span>
            <span className="block text-gradient">PRINCEBERG</span>
          </h2>
          <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
            Zwei JKU-Studenten, die mit Leidenschaft und Expertise Ihre digitale Vision verwirklichen.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8">
          {/* Haris */}
          <div className="flex justify-center">
            <ProfileCard
              avatarUrl={harisPortrait}
              name="Haris Muranovic"
              title="Der Architekt"
              handle="haris.princeberg"
              status="Ready to craft"
              contactText="WhatsApp"
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={true}
              onContactClick={handleHarisContact}
              miniAvatarUrl={harisPortrait}
            />
          </div>

          {/* Abderrahmen */}  
          <div className="flex justify-center">
            <ProfileCard
              avatarUrl={abderrahmenPortrait}
              name="Abderrahmen Beltaief"
              title="Der Visionär"
              handle="abder.princeberg"
              status="Ready to craft"
              contactText="WhatsApp"
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={true}
              onContactClick={handleAbderrahmenContact}
              miniAvatarUrl={abderrahmenPortrait}
            />
          </div>
        </div>

        {/* Info Cards */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="bg-card rounded-3xl p-8 border border-card-border hover:bg-card-hover transition-all duration-300">
            <h3 className="text-2xl font-bold text-foreground mb-4">Haris Muranovic</h3>
            <p className="text-foreground-muted mb-6">
              User Experience, die süchtig macht. Kann sich in jeden Kunden hineinversetzen und 
              baut Websites, die so intuitiv sind, dass sie jeder bedienen kann.
            </p>
            <div className="space-y-2 text-sm text-foreground-muted">
              <div><strong>Spezialgebiet:</strong> Intuitive User Interfaces</div>
              <div><strong>Fun Fact:</strong> Codet im Zug von Wien nach Linz</div>
            </div>
          </div>

          <div className="bg-card rounded-3xl p-8 border border-card-border hover:bg-card-hover transition-all duration-300">
            <h3 className="text-2xl font-bold text-foreground mb-4">Abderrahmen Beltaief</h3>
            <p className="text-foreground-muted mb-6">
              Conversion-Optimierung, die Umsätze verdreifacht. Findet immer den einen Hebel, 
              der alles verändert und erklärt es so, dass es jeder versteht.
            </p>
            <div className="space-y-2 text-sm text-foreground-muted">
              <div><strong>Spezialgebiet:</strong> Digitale Strategien</div>
              <div><strong>Fun Fact:</strong> Beste Ideen zwischen Mitternacht und 4 Uhr</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};