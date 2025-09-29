export const ProcessSection = () => {
  return (
    <section className="py-12 px-6 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Unser Prozess
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-primary-foreground font-bold text-xl">1</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Erstberatung</h3>
            <p className="text-muted-foreground">Wir verstehen Ihre Anforderungen und definieren das Projekt gemeinsam.</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-primary-foreground font-bold text-xl">2</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Entwicklung</h3>
            <p className="text-muted-foreground">Professionelle Umsetzung mit regelmäßigen Updates zum Fortschritt.</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-primary-foreground font-bold text-xl">3</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Launch</h3>
            <p className="text-muted-foreground">Website geht live mit vollständiger Dokumentation und Support.</p>
          </div>
        </div>
      </div>
    </section>
  );
};