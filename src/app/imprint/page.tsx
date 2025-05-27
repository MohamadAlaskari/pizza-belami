import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Impressum',
  description: 'Impressum von Pizza Belami in Bremen.',
};

export default function ImprintPage() {
  return (
    <div className="container mx-auto py-12">
      <Card className="max-w-3xl mx-auto shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-primary">Impressum</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          <h2 className="text-xl font-semibold text-foreground">Angaben gemäß § 5 TMG</h2>
          <p>
            Pizza Belami<br />
            Inhaber: [Platzhalter für Inhabername]<br />
            Am Dobben 125<br />
            28203 Bremen
          </p>

          <h3 className="text-lg font-semibold text-foreground mt-4">Kontakt</h3>
          <p>
            Telefon: 0421 / 123 45 67<br />
            E-Mail: info@pizzabelami.de
          </p>

          <h3 className="text-lg font-semibold text-foreground mt-4">Umsatzsteuer-ID</h3>
          <p>
            Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:<br />
            DE [Platzhalter für USt-IdNr.]
          </p>
          
          <h3 className="text-lg font-semibold text-foreground mt-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h3>
          <p>
            [Platzhalter für Inhabername]<br />
            Am Dobben 125<br />
            28203 Bremen
          </p>

          <h3 className="text-lg font-semibold text-foreground mt-4">EU-Streitschlichtung</h3>
          <p>
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
            <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline"> https://ec.europa.eu/consumers/odr</a>.<br />
            Unsere E-Mail-Adresse finden Sie oben im Impressum.
          </p>
          <p>
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
          </p>
          <p className="mt-6 text-sm">
            Dieses Impressum wurde mit Hilfe von [Platzhalter für Impressum-Generator oder Quelle, falls zutreffend] erstellt.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
