import { HeroSection } from "@/components/home/HeroSection";
import { OpeningHoursDisplay } from "@/components/home/OpeningHoursDisplay";
import { FeaturedItems } from "@/components/home/FeaturedItems";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Willkommen bei Pizza Belami',
  description: 'Pizza Belami in Bremen - Ihre Pizzeria für frische Pizza, Burger und mehr. Entdecken Sie unsere Speisekarte und bestellen Sie online.',
};

export default function HomePage() {
  return (
    <div className="space-y-12 md:space-y-16">
      <HeroSection />
      
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center lg:items-start justify-center">
            <div className="lg:w-1/2 flex justify-center">
               {/* Placeholder for an image or another component */}
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <OpeningHoursDisplay />
            </div>
          </div>
        </div>
      </section>
      
      <FeaturedItems />

      <section className="py-8 md:py-12 bg-secondary/30 rounded-lg">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Über Pizza Belami</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            Seit Jahren verwöhnen wir unsere Gäste in Bremen mit hausgemachter Pizza nach traditionellen Rezepten, frischen Zutaten und einer Prise Leidenschaft. 
            Bei Pizza Belami finden Sie nicht nur Klassiker, sondern auch kreative Spezialitäten, die Ihren Gaumen verzaubern werden. 
            Wir sind stolz darauf, ein Teil der Nachbarschaft zu sein und freuen uns auf Ihren Besuch oder Ihre Bestellung!
          </p>
          <div className="flex justify-center gap-4">
            <video 
              src="/videos/restaurant-cooking.mp4" 
              width="600" height="337" 
              controls 
              className="rounded-lg shadow-md"
              poster="https://placehold.co/600x337.png/E5472E/F2EFE9?text=Video+Laden"
              data-ai-hint="restaurant cooking"
            >
              Ihr Browser unterstützt das Video-Tag nicht.
            </video>
          </div>
        </div>
      </section>
    </div>
  );
}
