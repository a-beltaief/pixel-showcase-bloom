import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import sushiNight from "@/assets/sushi-night-2.png";

export const BookingSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    package: "",
    date: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const whatsappMessage = `Hi, ich möchte einen Termin vereinbaren:
    
Name: ${formData.name}
E-Mail: ${formData.email}
Telefon: ${formData.phone}
Paket: ${formData.package}
Wunschtermin: ${formData.date}
Nachricht: ${formData.message}`;

    const whatsappUrl = `https://wa.me/436704055549?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-16 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ihr Projekt startet hier
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Name*</label>
                <Input
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">E-Mail*</label>
                <Input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Telefon</label>
                <Input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Paket</label>
                <div className="flex gap-4">
                  {["Basic", "Premium", "Enterprise"].map((pkg) => (
                    <label key={pkg} className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="package"
                        value={pkg}
                        checked={formData.package === pkg}
                        onChange={(e) => setFormData({ ...formData, package: e.target.value })}
                        className="text-primary"
                      />
                      <span className="text-sm">{pkg}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Wunschtermin</label>
                <Input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Nachricht</label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full"
                />
              </div>

              <Button type="submit" className="w-full">
                Termin vereinbaren →
              </Button>
            </form>
          </div>

          <div className="bg-card rounded-xl p-8 border border-card-border">
            <div className="text-center mb-6">
              <img 
                src={sushiNight} 
                alt="Sushi Night - 2024" 
                className="w-48 h-auto mx-auto rounded-lg"
              />
            </div>
            <h3 className="text-xl font-bold mb-4 text-primary">Oder direkt via WhatsApp</h3>
            <p className="text-foreground-muted mb-6">
              Für schnelle Fragen oder wenn Sie lieber direkt sprechen möchten:
            </p>
            <a
              href="https://wa.me/436704055549?text=Hi,%20ich%20interessiere%20mich%20für%20eine%20Website!"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary-hover transition-colors inline-block"
            >
              +43 670 405 5549
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};