"use client";

import Link from "next/link";
import { Menu, ShoppingCart, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Logo } from "@/components/common/Logo";
import { NavItem } from "./NavItem";
import { useCart } from "@/hooks/useCart";
import { Badge } from "@/components/ui/badge";
import React from 'react';

const navLinks = [
  { href: "/", label: "Startseite" },
  { href: "/menu", label: "Speisekarte" },
  { href: "/about", label: "Über Uns" },
  { href: "/contact", label: "Kontakt" },
];

export function Header() {
  const { getItemCount, isClient } = useCart();
  const [sheetOpen, setSheetOpen] = React.useState(false);
  const itemCount = isClient ? getItemCount() : 0;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <Logo />
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navLinks.map((link) => (
            <NavItem key={link.href} href={link.href}>
              {link.label}
            </NavItem>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Button asChild variant="default" size="sm" className="hidden sm:inline-flex bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="/menu">Jetzt bestellen</Link>
          </Button>
          <Link href="/cart" aria-label="Warenkorb">
            <Button variant="outline" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {itemCount > 0 && (
                <Badge
                  variant="destructive"
                  className="absolute -top-2 -right-2 h-5 w-5 p-0 flex items-center justify-center rounded-full text-xs bg-accent text-accent-foreground"
                >
                  {itemCount}
                </Badge>
              )}
            </Button>
          </Link>
          <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Menü öffnen</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background p-6">
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-center mb-6">
                  <Logo />
                   <SheetClose asChild>
                    <Button variant="ghost" size="icon">
                      <X className="h-6 w-6" />
                       <span className="sr-only">Menü schließen</span>
                    </Button>
                  </SheetClose>
                </div>
                <nav className="flex flex-col space-y-4">
                  {navLinks.map((link) => (
                    <NavItem key={link.href} href={link.href} className="text-lg" onClick={() => setSheetOpen(false)}>
                      {link.label}
                    </NavItem>
                  ))}
                </nav>
                <Button asChild variant="default" size="lg" className="mt-8 bg-primary hover:bg-primary/90 text-primary-foreground" onClick={() => setSheetOpen(false)}>
                  <Link href="/menu">Jetzt bestellen</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
