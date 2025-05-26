import { Pizza } from 'lucide-react';
import Link from 'next/link';

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center gap-2 text-2xl font-bold text-primary hover:text-primary/90 ${className}`}>
      <Pizza className="h-8 w-8" />
      <span>Pizza Belami</span>
    </Link>
  );
}
