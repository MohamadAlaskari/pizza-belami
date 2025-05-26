"use client";

import type { CartItem, MenuItem, MenuItemOption, ExtraItem } from "@/types";
import type { Dispatch, ReactNode, SetStateAction } from "react";
import React, { createContext, useContext, useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: MenuItem, selectedOption: MenuItemOption, quantity: number, selectedExtras: ExtraItem[]) => void;
  removeFromCart: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  getItemCount: () => number;
  isClient: boolean;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const { toast } = useToast();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const storedCart = localStorage.getItem("pizzaBelamiCart");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    if (isClient) {
      localStorage.setItem("pizzaBelamiCart", JSON.stringify(cartItems));
    }
  }, [cartItems, isClient]);

  const addToCart = (item: MenuItem, selectedOption: MenuItemOption, quantity: number, selectedExtras: ExtraItem[]) => {
    setCartItems((prevItems) => {
      const cartItemId = `${item.id}-${selectedOption.size || selectedOption.name}-${selectedExtras.map(e => e.id).join('-')}`;
      const existingItem = prevItems.find((i) => i.id === cartItemId);

      let unitPrice = selectedOption.price;
      selectedExtras.forEach(extra => unitPrice += extra.price);

      if (existingItem) {
        toast({ title: "Aktualisiert", description: `${item.name} Menge im Warenkorb aktualisiert.` });
        return prevItems.map((i) =>
          i.id === cartItemId ? { ...i, quantity: i.quantity + quantity, unitPrice } : i
        );
      } else {
        toast({ title: "Hinzugefügt!", description: `${item.name} zum Warenkorb hinzugefügt.` });
        return [
          ...prevItems,
          {
            id: cartItemId,
            menuItemId: item.id,
            name: item.name,
            selectedOption,
            selectedExtras,
            quantity,
            unitPrice,
            imageUrl: item.imageUrl,
            // Spreading other MenuItem properties for convenience, but ensure CartItem type matches
            category: item.category,
            options: item.options,
            description: item.description,
            aiHint: item.aiHint,
            tags: item.tags,
            availableExtras: item.availableExtras,
          },
        ];
      }
    });
  };

  const removeFromCart = (itemId: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
    toast({ title: "Entfernt", description: "Artikel aus dem Warenkorb entfernt." });
  };

  const updateQuantity = (itemId: string, quantity: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity: Math.max(0, quantity) } : item
      ).filter(item => item.quantity > 0) // Remove if quantity is 0
    );
  };

  const clearCart = () => {
    setCartItems([]);
    toast({ title: "Warenkorb geleert", description: "Alle Artikel wurden entfernt." });
  };

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + item.unitPrice * item.quantity, 0);
  };

  const getItemCount = () => {
    return cartItems.reduce((count, item) => count + item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getCartTotal,
        getItemCount,
        isClient,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
