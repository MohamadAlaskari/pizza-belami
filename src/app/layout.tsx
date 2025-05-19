import type { Metadata } from 'next';
import { Inter } from 'next/font/google'; // Changed from Geist_Sans
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Toaster } from '@/components/ui/toaster';
import { CartProvider } from '@/context/CartContext';

const inter = Inter({ // Changed from Geist_Sans to Inter
  variable: '--font-inter', // Using a new variable name for Inter
  subsets: ['latin'],
});

// Geist Mono is not explicitly used in this plan, but keeping it if scaffolded
// const geistMono = Geist_Mono({
//   variable: '--font-geist-mono',
//   subsets: ['latin'],
// });

export const metadata: Metadata = {
  title: {
    default: 'Belami Bites - Pizza & Mehr in Bremen',
    template: '%s | Belami Bites',
  },
  description: 'Leckere Pizza, Burger, Salate und mehr von Pizza Belami 2 in Bremen. Jetzt online bestellen!',
  keywords: ['Pizza', 'Belami Bites', 'Bremen', 'Restaurant', 'Lieferservice', 'Online bestellen'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${inter.variable} antialiased font-sans`}> {/* Use the new Inter font variable */}
        <CartProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow container mx-auto px-4 py-8">
              {children}
            </main>
            <Footer />
          </div>
          <Toaster />
        </CartProvider>
      </body>
    </html>
  );
}
