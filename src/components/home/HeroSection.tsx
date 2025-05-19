import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative h-[calc(100vh-12rem)] min-h-[400px] md:h-[calc(100vh-8rem)] md:min-h-[500px] flex items-center justify-center text-center rounded-lg overflow-hidden shadow-lg">
      <Image
        src="https://placehold.co/1200x800.png"
        alt="Leckere Pizza von Belami Bites"
        layout="fill"
        objectFit="cover"
        quality={80}
        className="z-0"
        data-ai-hint="pizza restaurant interior"
        priority
      />
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      <div className="relative z-20 p-6 space-y-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white drop-shadow-md">
          Herzlich Willkommen bei <span className="text-accent">Belami Bites</span>!
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-200 drop-shadow-sm max-w-2xl mx-auto">
          Ihr lokaler Treffpunkt für frische Pizza, saftige Burger und vieles mehr in Bremen.
        </p>
        <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 shadow-md transition-transform hover:scale-105">
          <Link href="/menu">Jetzt bestellen</Link>
        </Button>
      </div>
    </section>
  );
}
