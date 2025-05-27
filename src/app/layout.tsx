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
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon', sizes: 'any' },
      { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', type: 'image/png' },
    ],
  },
  manifest: '/manifest.json',
  other: {
    'apple-mobile-web-app-title': 'Pizza Belami',
  },
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
