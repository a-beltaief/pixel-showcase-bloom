export const ProcessSection = () => {
  return (
    <section className="py-12 px-6 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">
          In 14 Tagen online
        </h2>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-card-border"></div>
          
          <div className="space-y-12">
            <div className="relative flex items-center justify-center">
              <div className="bg-accent text-accent-foreground w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg z-10">
                1
              </div>
              <div className="absolute left-1/2 ml-8 text-left">
                <div className="font-semibold">Gespräch</div>
              </div>
            </div>
            
            <div className="relative flex items-center justify-center">
              <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg z-10">
                7
              </div>
              <div className="absolute right-1/2 mr-8 text-right">
                <div className="font-semibold">Entwicklung</div>
              </div>
            </div>
            
            <div className="relative flex items-center justify-center">
              <div className="bg-accent text-accent-foreground w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg z-10">
                14
              </div>
              <div className="absolute left-1/2 ml-8 text-left">
                <div className="font-semibold">Launch</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};