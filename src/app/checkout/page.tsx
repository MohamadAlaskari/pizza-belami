import { CheckoutForm } from "@/components/checkout/CheckoutForm";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kasse',
  description: 'Schließen Sie Ihre Bestellung bei Pizza Belami ab. Geben Sie Ihre Lieferdetails und Bezahlmethode an.',
};

export default function CheckoutPage() {
  return (
    <div className="container mx-auto py-8">
      <CheckoutForm />
    </div>
  );
}
