import type { Metadata } from 'next';
import { Inter } from 'next/font/google'; 
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Toaster } from '@/components/ui/toaster';
import { CartProvider } from '@/context/CartContext';

const inter = Inter({ 
  variable: '--font-inter', 
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'Pizza Belami - Pizza & Mehr in Bremen',
    template: '%s | Pizza Belami',
  },
  description: 'Leckere Pizza, Burger, Salate und mehr von Pizza Belami in Bremen. Jetzt online bestellen!',
  keywords: ['Pizza', 'Pizza Belami', 'Bremen', 'Restaurant', 'Lieferservice', 'Online bestellen'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${inter.variable} antialiased font-sans`}> 
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
