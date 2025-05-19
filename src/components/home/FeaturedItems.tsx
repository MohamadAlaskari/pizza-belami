import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import type { MenuItem } from '@/types';
import { menuData } from '@/data/menuData';

const featuredItems = menuData.filter(item => item.tags?.includes('vegetarian') || item.id === 'pizza-salami' || item.id === 'spezial-belami').slice(0, 3);


export function FeaturedItems() {
  if (featuredItems.length === 0) return null;

  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Beliebte Auswahl</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredItems.map((item) => (
          <Card key={item.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="p-0">
              <div className="aspect-[3/2] relative w-full">
                <Image
                  src={item.imageUrl}
                  alt={item.name}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 group-hover:scale-105"
                  data-ai-hint={item.aiHint}
                />
              </div>
            </CardHeader>
            <CardContent className="flex-grow p-4">
              <CardTitle className="text-xl mb-2">{item.name}</CardTitle>
              {item.description && <p className="text-sm text-muted-foreground mb-2 line-clamp-2">{item.description}</p>}
              <p className="text-lg font-semibold text-primary">
                ab {item.options[0].price.toFixed(2)} €
              </p>
            </CardContent>
            <CardFooter className="p-4">
              <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href={`/menu#${item.category.toLowerCase()}`}>Details</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
