"use client"; // Needed for form handling

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
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import { useToast } from "@/hooks/use-toast";
import type { Metadata } from 'next'; // Import for metadata
import React from "react";

// This metadata object would typically be in a server component or page.tsx directly
// For client components, we can't set metadata this way directly.
// We'll set it in a wrapping server component if needed, or just define it for reference.
// For this page, since it's mostly static info + a client form, we can export metadata from page.tsx itself.

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name muss mindestens 2 Zeichen lang sein." }),
  email: z.string().email({ message: "Bitte geben Sie eine gültige E-Mail Adresse an." }),
  subject: z.string().min(3, { message: "Betreff muss mindestens 3 Zeichen lang sein." }),
  message: z.string().min(10, { message: "Nachricht muss mindestens 10 Zeichen lang sein." }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

// This needs to be defined in page.tsx or a Server Component
// export const metadata: Metadata = {
//   title: 'Kontakt',
//   description: 'Kontaktieren Sie Pizza Belami in Bremen. Adresse, Telefon, E-Mail und Kontaktformular.',
// };

function ContactForm() {
  const { toast } = useToast();
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { name: "", email: "", subject: "", message: "" },
  });

  async function onSubmit(data: ContactFormValues) {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("Contact form submitted:", data);
    toast({
      title: "Nachricht gesendet!",
      description: "Vielen Dank für Ihre Nachricht. Wir werden uns bald bei Ihnen melden.",
    });
    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Ihr Name" {...field} />
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
                  <Input placeholder="Ihre E-Mail" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Betreff</FormLabel>
              <FormControl>
                <Input placeholder="Betreff Ihrer Nachricht" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nachricht</FormLabel>
              <FormControl>
                <Textarea placeholder="Ihre Nachricht an uns..." rows={5} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground" disabled={form.formState.isSubmitting}>
          {form.formState.isSubmitting ? "Wird gesendet..." : "Nachricht senden"}
        </Button>
      </form>
    </Form>
  );
}


export default function ContactPage() {
  // Since this page now contains client components like the form,
  // the entire page needs to be a client component if metadata is not handled by a parent server component.
  // Or, the form itself is a client component, and the page is a server component.
  // For simplicity of this generation, the whole page is client due to form.

  React.useEffect(() => {
    // This is a workaround if metadata can't be set directly in a client component.
    // Proper way is to have this page as a server component and import ContactForm as client.
    document.title = "Kontakt | Pizza Belami";
  }, []);


  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">Kontaktieren Sie Uns</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Wir freuen uns auf Ihre Nachricht oder Ihren Besuch!
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl">Unsere Kontaktdaten</CardTitle>
            <CardDescription>So erreichen Sie Pizza Belami:</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-3">
              <MapPin className="h-6 w-6 text-primary mt-1 shrink-0" />
              <div>
                <h3 className="font-semibold">Adresse</h3>
                <p className="text-muted-foreground">Am Dobben 125, 28203 Bremen</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="h-6 w-6 text-primary mt-1 shrink-0" />
              <div>
                <h3 className="font-semibold">Telefon</h3>
                <a href="tel:+494211234567" className="text-muted-foreground hover:text-primary">0421 / 123 45 67</a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="h-6 w-6 text-primary mt-1 shrink-0" />
              <div>
                <h3 className="font-semibold">E-Mail</h3>
                <a href="mailto:info@pizzabelami.de" className="text-muted-foreground hover:text-primary">info@pizzabelami.de</a>
              </div>
            </div>
            <div className="mt-4 aspect-video rounded-md overflow-hidden border">
              <Image 
                src="https://placehold.co/600x400.png" 
                alt="Karte von Bremen mit Standort von Pizza Belami" 
                width={600} 
                height={400} 
                className="w-full h-full object-cover"
                data-ai-hint="map bremen" 
              />
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl">Schreiben Sie uns</CardTitle>
            <CardDescription>Nutzen Sie das Formular für Ihre Anfragen.</CardDescription>
          </CardHeader>
          <CardContent>
            <ContactForm />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

// If this were a server component, metadata would be here:
// export const metadata: Metadata = {
//   title: 'Kontakt',
//   description: 'Kontaktieren Sie Pizza Belami in Bremen. Adresse, Telefon, E-Mail und Kontaktformular.',
// };
