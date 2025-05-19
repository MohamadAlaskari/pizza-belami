"use client";

import { useCart } from "@/hooks/useCart";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CartItemCard } from "./CartItemCard";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";

export function CartDisplay() {
  const { cartItems, getCartTotal, clearCart, isClient } = useCart();

  if (!isClient) {
    // Or a loading skeleton
    return <div className="text-center py-10">Warenkorb wird geladen...</div>;
  }

  if (cartItems.length === 0) {
    return (
      <div className="text-center py-10">
        <ShoppingCart className="mx-auto h-16 w-16 text-muted-foreground mb-4" />
        <h2 className="text-2xl font-semibold mb-2">Ihr Warenkorb ist leer</h2>
        <p className="text-muted-foreground mb-6">Fügen Sie einige leckere Artikel aus unserer Speisekarte hinzu!</p>
        <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
          <Link href="/menu">Zur Speisekarte</Link>
        </Button>
      </div>
    );
  }

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl">Ihr Warenkorb</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="divide-y">
          {cartItems.map((item) => (
            <CartItemCard key={item.id} item={item} />
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-end gap-4 p-6 bg-secondary/30 rounded-b-lg">
        <div className="text-2xl font-bold">
          Gesamtsumme: {getCartTotal().toFixed(2)} €
        </div>
        <div className="flex gap-4 w-full sm:w-auto">
          <Button variant="outline" onClick={clearCart} className="flex-1 sm:flex-none">
            Warenkorb leeren
          </Button>
          <Button asChild className="flex-1 sm:flex-none bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="/checkout">Zur Kasse</Link>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
