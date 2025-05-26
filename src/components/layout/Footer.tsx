import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 py-8 md:flex-row md:py-6">
        <p className="text-sm text-muted-foreground">
          &copy; {currentYear} Pizza Belami. Alle Rechte vorbehalten.
        </p>
        <nav className="flex gap-4">
          <Link href="/imprint" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Impressum
          </Link>
          <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Datenschutz
          </Link>
        </nav>
      </div>
    </footer>
  );
}
