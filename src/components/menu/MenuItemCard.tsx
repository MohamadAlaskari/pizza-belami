"use client";

import type { MenuItem, MenuItemOption, ExtraItem } from "@/types";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useCart } from "@/hooks/useCart";
import React, { useState, useEffect } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { PlusCircle, MinusCircle, ShoppingCart } from "lucide-react";

interface MenuItemCardProps {
  item: MenuItem;
}

export function MenuItemCard({ item }: MenuItemCardProps) {
  const { addToCart } = useCart();
  const [selectedOption, setSelectedOption] = useState<MenuItemOption>(item.options[0]);
  const [quantity, setQuantity] = useState(1);
  const [selectedExtras, setSelectedExtras] = useState<ExtraItem[]>([]);
  const [currentPrice, setCurrentPrice] = useState(0);

  useEffect(() => {
    let price = selectedOption.price;
    selectedExtras.forEach(extra => price += extra.price);
    setCurrentPrice(price * quantity);
  }, [selectedOption, selectedExtras, quantity]);

  const handleAddToCart = () => {
    addToCart(item, selectedOption, quantity, selectedExtras);
    setQuantity(1); // Reset quantity after adding
    setSelectedExtras([]); // Reset extras
  };

  const handleOptionChange = (value: string) => {
    const newOption = item.options.find(opt => (opt.size || opt.name) === value) || item.options[0];
    setSelectedOption(newOption);
  };

  const handleExtraChange = (extra: ExtraItem, checked: boolean) => {
    setSelectedExtras(prev =>
      checked ? [...prev, extra] : prev.filter(e => e.id !== extra.id)
    );
  };

  return (
    <Card className="flex flex-col overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 rounded-lg">
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
      <CardContent className="p-4 flex-grow">
        <CardTitle className="text-xl mb-1">{item.name}</CardTitle>
        {item.description && <CardDescription className="text-sm mb-3 h-10 line-clamp-2">{item.description}</CardDescription>}

        {item.options.length > 1 ? (
          <div className="mb-3">
            <Label htmlFor={`options-${item.id}`} className="text-xs font-medium text-muted-foreground">Größe/Option</Label>
            <Select
              value={selectedOption.size || selectedOption.name}
              onValueChange={handleOptionChange}
            >
              <SelectTrigger id={`options-${item.id}`} className="w-full mt-1">
                <SelectValue placeholder="Größe wählen" />
              </SelectTrigger>
              <SelectContent>
                {item.options.map((opt) => (
                  <SelectItem key={opt.size || opt.name} value={opt.size || opt.name!}>
                    {opt.size || opt.name} - {opt.price.toFixed(2)} €
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        ) : (
          <p className="text-lg font-semibold text-primary mb-3">{item.options[0].price.toFixed(2)} €</p>
        )}

        {item.availableExtras && item.availableExtras.length > 0 && (
          <div className="mb-3">
            <Label className="text-xs font-medium text-muted-foreground">Extras</Label>
            <div className="space-y-2 mt-1 max-h-32 overflow-y-auto pr-2">
              {item.availableExtras.map(extra => (
                <div key={extra.id} className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <Checkbox
                      id={`extra-${item.id}-${extra.id}`}
                      checked={selectedExtras.some(e => e.id === extra.id)}
                      onCheckedChange={(checked) => handleExtraChange(extra, !!checked)}
                    />
                    <Label htmlFor={`extra-${item.id}-${extra.id}`} className="cursor-pointer">{extra.name}</Label>
                  </div>
                  <span>+ {extra.price.toFixed(2)} €</span>
                </div>
              ))}
            </div>
            <Separator className="my-2"/>
          </div>
        )}

        <div className="flex items-center justify-between mb-3">
          <Label htmlFor={`quantity-${item.id}`} className="text-xs font-medium text-muted-foreground">Menge</Label>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" onClick={() => setQuantity(Math.max(1, quantity - 1))} className="h-8 w-8">
              <MinusCircle className="h-4 w-4" />
            </Button>
            <span id={`quantity-${item.id}`} className="w-8 text-center font-medium">{quantity}</span>
            <Button variant="outline" size="icon" onClick={() => setQuantity(quantity + 1)} className="h-8 w-8">
              <PlusCircle className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <p className="text-lg font-bold text-right text-primary mb-1">
          Gesamt: {currentPrice.toFixed(2)} €
        </p>
      </CardContent>
      <CardFooter className="p-4 border-t">
        <Button onClick={handleAddToCart} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
          <ShoppingCart className="mr-2 h-4 w-4" /> In den Warenkorb
        </Button>
      </CardFooter>
    </Card>
  );
}
