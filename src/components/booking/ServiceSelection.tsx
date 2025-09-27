import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface AppointmentType {
  id: string;
  name: string;
  duration_minutes: number;
  price_cents: number;
  description: string;
  icon: string;
}

interface ServiceSelectionProps {
  appointmentTypes: AppointmentType[];
  onServiceSelect: (service: AppointmentType) => void;
}

export const ServiceSelection = ({ appointmentTypes, onServiceSelect }: ServiceSelectionProps) => {
  const formatDuration = (minutes: number) => {
    if (minutes < 60) {
      return `${minutes} Min`;
    }
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    if (remainingMinutes === 0) {
      return `${hours} Std`;
    }
    return `${hours}h ${remainingMinutes}min`;
  };

  const formatPrice = (priceCents: number) => {
    if (priceCents === 0) {
      return "Kostenlos";
    }
    return `${(priceCents / 100).toFixed(2)} €`;
  };

  return (
    <div>
      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold mb-2">Wählen Sie Ihren Service</h2>
        <p className="text-foreground-muted">
          Alle Termine sind unverbindlich und können jederzeit kostenlos storniert werden.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {appointmentTypes.map((service) => (
          <Card key={service.id} className="transition-all duration-200 hover:shadow-md hover:border-primary/20 cursor-pointer group">
            <CardHeader className="pb-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="text-2xl">{service.icon}</div>
                  <div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {service.name}
                    </CardTitle>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge variant="secondary" className="text-xs">
                        {formatDuration(service.duration_minutes)}
                      </Badge>
                      <Badge variant={service.price_cents === 0 ? "default" : "outline"} className="text-xs">
                        {formatPrice(service.price_cents)}
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <CardDescription className="mb-4 leading-relaxed">
                {service.description}
              </CardDescription>
              <Button 
                onClick={() => onServiceSelect(service)}
                className="w-full"
                size="lg"
              >
                Termin buchen
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8 p-6 bg-muted/50 rounded-lg border">
        <h3 className="font-semibold mb-2">📋 Was Sie erwartet:</h3>
        <ul className="space-y-1 text-sm text-foreground-muted">
          <li>• Persönliches Gespräch per Video-Call oder Telefon</li>
          <li>• Individuelle Beratung zu Ihrem Projekt</li>
          <li>• Konkrete Handlungsempfehlungen</li>
          <li>• Unverbindlich und kostenlos stornierbar</li>
        </ul>
      </div>
    </div>
  );
};