import { openingHoursData } from "@/data/menuData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock } from "lucide-react";

export function OpeningHoursDisplay() {
  const today = new Date().toLocaleDateString('de-DE', { weekday: 'long' });
  
  return (
    <Card className="w-full max-w-md shadow-lg">
      <CardHeader className="bg-secondary/50 rounded-t-lg">
        <CardTitle className="flex items-center gap-2 text-xl font-semibold text-secondary-foreground">
          <Clock className="h-6 w-6" />
          Unsere Öffnungszeiten
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6 space-y-2">
        {Object.entries(openingHoursData).map(([day, hours]) => (
          <div key={day} className={`flex justify-between items-center py-1 ${day === today ? 'font-bold text-primary' : 'text-foreground/80'}`}>
            <span>{day}:</span>
            <span>{hours}</span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
