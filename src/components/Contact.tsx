import { useState, useEffect } from "react";
import { z } from 'zod';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

// Define validation schema with Zod
const contactSchema = z.object({
  name: z.string()
    .trim()
    .nonempty({ message: "Name darf nicht leer sein" })
    .max(100, { message: "Name darf maximal 100 Zeichen lang sein" }),
  email: z.string()
    .trim()
    .email({ message: "Ungültige E-Mail-Adresse" })
    .max(255, { message: "E-Mail darf maximal 255 Zeichen lang sein" }),
  message: z.string()
    .trim()
    .nonempty({ message: "Nachricht darf nicht leer sein" })
    .max(1000, { message: "Nachricht darf maximal 1000 Zeichen lang sein" })
});

export const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const { toast } = useToast();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('contact');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear specific field error when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormErrors({});
    setIsSubmitting(true);

    try {
      // Validate form data with Zod
      const validatedData = contactSchema.parse(formData);
      
      console.log('✅ Formular validiert, sende Anfrage:', validatedData);
      console.log('🚀 Rufe Supabase Edge Function auf...');

      // Call the Supabase Edge Function
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: validatedData,
      });

      console.log('📡 Supabase Antwort:', { data, error });

      if (error) {
        console.error('❌ Supabase function error:', error);
        throw new Error(error.message || 'Fehler beim Versenden der Nachricht');
      }

      if (!data?.success) {
        console.error('❌ Function returned error:', data);
        throw new Error(data?.error || 'Unbekannter Fehler beim Versenden');
      }

      console.log('✅ Contact form submission successful:', data);

      // Show success message
      toast({
        title: "Nachricht gesendet! ✅",
        description: "Vielen Dank für Ihre Anfrage. Ich melde mich bald bei Ihnen zurück.",
        duration: 5000,
      });

      // Reset form
      setFormData({ name: '', email: '', message: '' });

    } catch (error: any) {
      console.error('Contact form submission error:', error);

      if (error instanceof z.ZodError) {
        // Handle validation errors
        const errors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            errors[err.path[0] as string] = err.message;
          }
        });
        setFormErrors(errors);
        
        toast({
          title: "Validierungsfehler ❌",
          description: "Bitte überprüfen Sie Ihre Eingaben.",
          variant: "destructive",
        });
      } else {
        // Handle other errors
        toast({
          title: "Fehler beim Versenden ❌",
          description: error.message || "Ein unerwarteter Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Content */}
          <div className={`transform transition-all duration-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
              Lassen Sie uns über Ihr 
              <span className="text-gradient block">nächstes Projekt</span>
              <span className="block">sprechen</span>
            </h2>
            
            <p className="text-xl text-foreground-muted leading-relaxed mb-8">
              Haben Sie eine Idee für eine moderne Webseite? Ich helfe Ihnen dabei, 
              Ihre Vision in ein einzigartiges digitales Erlebnis zu verwandeln.
            </p>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="group cursor-pointer">
                <h3 className="text-lg font-semibold mb-2 group-hover:text-accent transition-colors">
                  E-Mail
                </h3>
                <p className="text-foreground-muted group-hover:text-foreground transition-colors">
                  info@princeberg.com
                </p>
              </div>
              
              <div className="group cursor-pointer">
                <h3 className="text-lg font-semibold mb-2 group-hover:text-accent transition-colors">
                  Telefon
                </h3>
                <p className="text-foreground-muted group-hover:text-foreground transition-colors">
                  +436764002129
                </p>
              </div>
              
              <div className="group cursor-pointer">
                <h3 className="text-lg font-semibold mb-2 group-hover:text-accent transition-colors">
                  Standort
                </h3>
                <p className="text-foreground-muted group-hover:text-foreground transition-colors">
                  Wien, Österreich
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className={`transform transition-all duration-800 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <div className="card-gradient p-8 rounded-3xl border border-card-border">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-3">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    className={`w-full px-4 py-4 bg-background border rounded-2xl focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 text-foreground ${
                      formErrors.name ? 'border-red-500 focus:ring-red-500' : 'border-card-border'
                    } ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                    placeholder="Ihr vollständiger Name"
                  />
                  {formErrors.name && (
                    <p className="mt-2 text-sm text-red-500">{formErrors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-3">
                    E-Mail Adresse
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    className={`w-full px-4 py-4 bg-background border rounded-2xl focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 text-foreground ${
                      formErrors.email ? 'border-red-500 focus:ring-red-500' : 'border-card-border'
                    } ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                    placeholder="ihre.email@example.com"
                  />
                  {formErrors.email && (
                    <p className="mt-2 text-sm text-red-500">{formErrors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-3">
                    Nachricht
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    rows={6}
                    className={`w-full px-4 py-4 bg-background border rounded-2xl focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 text-foreground resize-none ${
                      formErrors.message ? 'border-red-500 focus:ring-red-500' : 'border-card-border'
                    } ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                    placeholder="Erzählen Sie mir von Ihrem Projekt..."
                  />
                  {formErrors.message && (
                    <p className="mt-2 text-sm text-red-500">{formErrors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full btn-hero text-center relative ${
                    isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      </div>
                      <span className="opacity-0">Nachricht senden</span>
                    </>
                  ) : (
                    <>
                      Nachricht senden
                      <span className="ml-2">→</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};