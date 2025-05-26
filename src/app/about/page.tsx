import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, ChefHat } from "lucide-react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Über Uns',
  description: 'Erfahren Sie mehr über die Geschichte und das Team von Pizza Belami in Bremen.',
};

export default function AboutPage() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">Über Pizza Belami</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Eine kleine Geschichte über unsere Leidenschaft für gutes Essen und Gastfreundschaft in Bremen.
        </p>
      </section>

      <Card className="shadow-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/2">
            <Image
              src="https://placehold.co/600x450.png"
              alt="Team von Pizza Belami in der Küche"
              width={600}
              height={450}
              className="object-cover w-full h-64 md:h-full"
              data-ai-hint="restaurant team kitchen"
            />
          </div>
          <div className="md:w-1/2 p-6 md:p-8">
            <CardHeader className="p-0 mb-4">
              <CardTitle className="text-2xl md:text-3xl flex items-center gap-2">
                <ChefHat className="h-8 w-8 text-primary" />
                Unsere Geschichte
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0 space-y-4 text-muted-foreground">
              <p>
                Willkommen bei Pizza Belami! Ehemals bekannt als Pizza Belami 2, sind wir im Herzen von Bremen, Am Dobben 125, 
                seit vielen Jahren Ihr zuverlässiger Partner für authentische italienische Pizza und eine Vielfalt 
                anderer köstlicher Gerichte. Unsere Mission war schon immer einfach: frische Zutaten, traditionelle Rezepte 
                und ein freundlicher Service, der Sie sich wie zu Hause fühlen lässt.
              </p>
              <p>
                Wir glauben, dass gutes Essen Menschen zusammenbringt. Deshalb legen wir größten Wert auf die Qualität 
                unserer Produkte – vom handgemachten Teig bis zur sorgfältig ausgewählten Tomatensauce und den frischesten Belägen. 
                Ob Sie eine klassische Margherita, eine unserer Spezialpizzen oder einen saftigen Burger bevorzugen, 
                jedes Gericht wird mit Liebe und Sorgfalt zubereitet.
              </p>
              <p>
                Unser Team ist das Herzstück von Pizza Belami. Mit Leidenschaft und Engagement arbeiten wir jeden Tag daran, 
                Ihnen ein unvergessliches Geschmackserlebnis zu bieten. Wir sind stolz darauf, ein lokales Unternehmen zu sein 
                und die Bremer Gemeinschaft mit unseren Speisen zu verwöhnen.
              </p>
            </CardContent>
          </div>
        </div>
      </Card>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold flex items-center gap-2">
            <Users className="h-8 w-8 text-primary" />
            Unser Versprechen
          </h2>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground pl-2">
            <li><span className="font-semibold text-foreground">Frische Zutaten:</span> Wir verwenden nur hochwertige und frische Produkte für den besten Geschmack.</li>
            <li><span className="font-semibold text-foreground">Traditionelle Rezepte:</span> Authentischer Genuss nach bewährten Methoden.</li>
            <li><span className="font-semibold text-foreground">Freundlicher Service:</span> Bei uns sind Sie mehr als nur ein Gast.</li>
            <li><span className="font-semibold text-foreground">Lokale Verbundenheit:</span> Wir sind stolz, ein Teil von Bremen zu sein.</li>
          </ul>
          <p className="text-muted-foreground">
            Kommen Sie vorbei oder bestellen Sie online und überzeugen Sie sich selbst von der Qualität und dem Geschmack, 
            den Pizza Belami zu bieten hat. Wir freuen uns auf Sie!
          </p>
        </div>
        <div className="rounded-lg overflow-hidden shadow-md">
          <Image
            src="https://placehold.co/500x350.png"
            alt="Freundliche Atmosphäre im Pizza Belami"
            width={500}
            height={350}
            className="object-cover w-full"
            data-ai-hint="cozy restaurant atmosphere"
          />
        </div>
      </section>
    </div>
  );
}
