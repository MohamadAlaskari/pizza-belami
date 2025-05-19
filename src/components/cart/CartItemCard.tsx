"use client";

import type { CartItem } from "@/types";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCart } from "@/hooks/useCart";
import { Trash2, Plus, Minus } from "lucide-react";

interface CartItemCardProps {
  item: CartItem;
}

export function CartItemCard({ item }: CartItemCardProps) {
  const { updateQuantity, removeFromCart } = useCart();

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity < 1) {
      removeFromCart(item.id);
    } else {
      updateQuantity(item.id, newQuantity);
    }
  };

  return (
    <div className="flex items-center gap-4 p-4 border-b">
      <Image
        src={item.imageUrl || "https://placehold.co/100x100.png"}
        alt={item.name}
        width={80}
        height={80}
        className="rounded-md object-cover aspect-square"
        data-ai-hint={item.aiHint || "food item"}
      />
      <div className="flex-grow">
        <h3 className="font-semibold">{item.name}</h3>
        <p className="text-sm text-muted-foreground">
          {item.selectedOption.size || item.selectedOption.name}
          {item.selectedExtras.length > 0 && (
            <span className="block text-xs">
              Extras: {item.selectedExtras.map(e => e.name).join(', ')}
            </span>
          )}
        </p>
        <p className="text-sm text-primary">{item.unitPrice.toFixed(2)} € / Stück</p>
      </div>
      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8"
          onClick={() => handleQuantityChange(item.quantity - 1)}
        >
          <Minus className="h-4 w-4" />
        </Button>
        <Input
          type="number"
          value={item.quantity}
          onChange={(e) => handleQuantityChange(parseInt(e.target.value))}
          className="h-8 w-12 text-center px-1"
          min="0"
        />
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8"
          onClick={() => handleQuantityChange(item.quantity + 1)}
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>
      <div className="font-semibold w-20 text-right">
        {(item.unitPrice * item.quantity).toFixed(2)} €
      </div>
      <Button
        variant="ghost"
        size="icon"
        className="text-destructive hover:bg-destructive/10"
        onClick={() => removeFromCart(item.id)}
      >
        <Trash2 className="h-5 w-5" />
      </Button>
    </div>
  );
}
