import { CategoryTabs } from "@/components/menu/CategoryTabs";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Speisekarte',
  description: 'Entdecken Sie unsere vielfältige Speisekarte bei Pizza Belami. Pizza, Pasta, Burger, Salate und mehr online bestellen.',
};

export default function MenuPage() {
  return (
    <div className="space-y-8">
      <section className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">Unsere Speisekarte</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Frisch zubereitet mit den besten Zutaten – für jeden Geschmack ist etwas dabei!
        </p>
      </section>
      
      <CategoryTabs />
    </div>
  );
}
