import Link from 'next/link';
import { UserCircle, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import GlowCartLogo from './GlowCartLogo';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/products" className="mr-6 flex items-center space-x-2">
          <GlowCartLogo className="h-6 w-6 text-primary" />
          <span className="font-bold">GlowCart</span>
        </Link>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" aria-label="Shopping Bag">
              <ShoppingBag className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" asChild aria-label="User Profile">
              <Link href="/profile">
                <UserCircle className="h-6 w-6" />
              </Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
