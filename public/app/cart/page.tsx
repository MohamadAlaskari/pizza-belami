import { CartDisplay } from "@/components/cart/CartDisplay";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Warenkorb',
  description: 'Überprüfen Sie Ihren Warenkorb und gehen Sie zur Kasse bei Pizza Belami.',
};

export default function CartPage() {
  return (
    <div className="container mx-auto py-8">
      <CartDisplay />
    </div>
  );
}
