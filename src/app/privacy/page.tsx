import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Datenschutz',
  description: 'Datenschutzerklärung von Pizza Belami 2 - Belami Bites in Bremen.',
};

export default function PrivacyPage() {
  return (
    <div className="container mx-auto py-12">
      <Card className="max-w-3xl mx-auto shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-primary">Datenschutzerklärung</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-muted-foreground">
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">1. Datenschutz auf einen Blick</h2>
            <h3 className="text-lg font-semibold text-foreground mt-2 mb-1">Allgemeine Hinweise</h3>
            <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie unsere Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.</p>
            {/* Weitere allgemeine Hinweise hier einfügen */}
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">2. Allgemeine Hinweise und Pflichtinformationen</h2>
            <h3 className="text-lg font-semibold text-foreground mt-2 mb-1">Datenschutz</h3>
            <p>Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.</p>
            <p>Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.</p>
            <p>Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.</p>
            {/* Verantwortliche Stelle, Widerruf Ihrer Einwilligung, etc. hier einfügen */}
          </section>
          
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">3. Datenerfassung auf unserer Website</h2>
            <h3 className="text-lg font-semibold text-foreground mt-2 mb-1">Cookies</h3>
            <p>Unsere Internetseiten verwenden teilweise so genannte Cookies. Cookies richten auf Ihrem Rechner keinen Schaden an und enthalten keine Viren. Cookies dienen dazu, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen. Cookies sind kleine Textdateien, die auf Ihrem Rechner abgelegt werden und die Ihr Browser speichert.</p>
            <p>Die meisten der von uns verwendeten Cookies sind so genannte „Session-Cookies“. Sie werden nach Ende Ihres Besuchs automatisch gelöscht. Andere Cookies bleiben auf Ihrem Endgerät gespeichert, bis Sie diese löschen. Diese Cookies ermöglichen es uns, Ihren Browser beim nächsten Besuch wiederzuerkennen.</p>
            <p>[Platzhalter für Cookie-Einstellungen und Einwilligungsbanner-Informationen]</p>
            {/* Server-Log-Dateien, Kontaktformular, etc. hier einfügen */}
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">4. Online-Bestellsystem</h2>
            <p>Im Rahmen unseres Online-Bestellsystems erheben und verarbeiten wir folgende Daten: Name, Anschrift, E-Mail-Adresse, Telefonnummer, Bestelldaten, Zahlungsdaten (abhängig von gewählter Methode). Diese Daten werden zur Abwicklung Ihrer Bestellung, zur Lieferung und zur Rechnungsstellung verwendet. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO.</p>
            {/* Details zu Zahlungsdienstleistern, etc. hier einfügen */}
          </section>

          {/* Weitere Abschnitte nach Bedarf (z.B. Analyse Tools, Plugins, etc.) */}
          
          <p className="mt-8 text-sm">
            Stand: {new Date().toLocaleDateString('de-DE')}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
