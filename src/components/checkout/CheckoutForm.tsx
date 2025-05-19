"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { useCart } from "@/hooks/useCart";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import React, { useState } from "react";

const formSchema = z.object({
  name: z.string().min(2, "Name muss mindestens 2 Zeichen haben."),
  email: z.string().email("Ungültige E-Mail-Adresse."),
  phone: z.string().min(5, "Telefonnummer ist erforderlich."),
  deliveryOption: z.enum(["delivery", "pickup"], {
    required_error: "Bitte Lieferoption wählen.",
  }),
  address: z.string().optional(),
  city: z.string().optional(),
  zip: z.string().optional(),
  paymentMethod: z.enum(["paypal", "creditcard", "cash"], {
    required_error: "Bitte Bezahlmethode wählen.",
  }),
  notes: z.string().optional(),
}).refine(data => {
  if (data.deliveryOption === "delivery") {
    return !!data.address && !!data.city && !!data.zip;
  }
  return true;
}, {
  message: "Adresse, Stadt und PLZ sind für die Lieferung erforderlich.",
  path: ["address"], // you can specify a path to show the error, e.g. on the address field
});

export function CheckoutForm() {
  const { cartItems, getCartTotal, clearCart } = useCart();
  const { toast } = useToast();
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      deliveryOption: "delivery",
      address: "",
      city: "",
      zip: "",
      paymentMethod: "cash",
      notes: "",
    },
  });

  const deliveryOption = form.watch("deliveryOption");

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    console.log("Order submitted:", { ...values, items: cartItems, total: getCartTotal() });
    
    toast({
      title: "Bestellung erfolgreich!",
      description: "Vielen Dank für Ihre Bestellung. Sie erhalten in Kürze eine Bestätigung.",
      variant: "default",
    });
    clearCart();
    router.push("/"); // Redirect to homepage or an order confirmation page
    setIsSubmitting(false);
  }

  if (cartItems.length === 0 && typeof window !== 'undefined') {
     router.push("/menu"); // Redirect if cart is empty on client
     return <p>Ihr Warenkorb ist leer. Sie werden zur Speisekarte weitergeleitet...</p>;
  }


  return (
    <Card className="w-full max-w-2xl mx-auto shadow-xl">
      <CardHeader>
        <CardTitle className="text-2xl">Bestellung abschließen</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <section>
              <h3 className="text-lg font-semibold mb-3">Kontaktinformationen</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Vollständiger Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Max Mustermann" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>E-Mail</FormLabel>
                      <FormControl>
                        <Input placeholder="max@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem className="mt-4">
                    <FormLabel>Telefonnummer</FormLabel>
                    <FormControl>
                      <Input placeholder="0123 456789" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </section>

            <Separator />

            <section>
              <h3 className="text-lg font-semibold mb-3">Lieferoption</h3>
              <FormField
                control={form.control}
                name="deliveryOption"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-col sm:flex-row gap-4"
                      >
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="delivery" />
                          </FormControl>
                          <FormLabel className="font-normal">Lieferung</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="pickup" />
                          </FormControl>
                          <FormLabel className="font-normal">Abholung</FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {deliveryOption === "delivery" && (
                <div className="space-y-4 mt-4">
                  <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Straße und Hausnummer</FormLabel>
                        <FormControl>
                          <Input placeholder="Musterstraße 123" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="zip"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>PLZ</FormLabel>
                          <FormControl>
                            <Input placeholder="12345" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                     <FormField
                      control={form.control}
                      name="city"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Stadt</FormLabel>
                          <FormControl>
                            <Input placeholder="Musterstadt" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              )}
            </section>
            
            <Separator />

            <section>
              <h3 className="text-lg font-semibold mb-3">Bezahlmethode</h3>
              <FormField
                control={form.control}
                name="paymentMethod"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-col sm:flex-row gap-4"
                      >
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="cash" />
                          </FormControl>
                          <FormLabel className="font-normal">Bar bei Lieferung/Abholung</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="paypal" />
                          </FormControl>
                          <FormLabel className="font-normal">PayPal</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="creditcard" />
                          </FormControl>
                          <FormLabel className="font-normal">Kreditkarte</FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </section>

            <Separator />
            
            <FormField
              control={form.control}
              name="notes"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Anmerkungen (optional)</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Zusätzliche Wünsche oder Hinweise für Ihre Bestellung..."
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="text-xl font-bold text-right">
              Gesamtsumme: {getCartTotal().toFixed(2)} €
            </div>

            <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-3" disabled={isSubmitting || cartItems.length === 0}>
              {isSubmitting ? "Bestellung wird bearbeitet..." : `Kostenpflichtig bestellen (${getCartTotal().toFixed(2)} €)`}
            </Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter className="text-xs text-muted-foreground p-6">
        <p>Mit Klick auf "Kostenpflichtig bestellen" geben Sie eine verbindliche Bestellung ab. Sie erhalten eine Bestätigung per E-Mail. Es gelten unsere AGB und Datenschutzbestimmungen.</p>
      </CardFooter>
    </Card>
  );
}
