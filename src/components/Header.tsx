import Link from 'next/link';
import { Bell, Search, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ViorraLogo from './ViorraLogo';
import { Input } from './ui/input';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 pb-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/products" className="mr-6 flex items-center space-x-2">
          <ViorraLogo className="h-8 w-auto text-primary" />
        </Link>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="flex items-center space-x-1">
            <Button
              variant="ghost"
              size="icon"
              aria-label="Notifications"
              className="relative"
            >
              <Bell className="h-5 w-5" />
              <span className="absolute right-2 top-2 block h-2 w-2 rounded-full bg-primary ring-2 ring-background" />
            </Button>
            <Button variant="ghost" size="icon" aria-label="Shopping Bag">
              <ShoppingBag className="h-5 w-5" />
            </Button>
          </nav>
        </div>
      </div>
      <div className="container">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search for all products"
            className="h-12 rounded-full bg-secondary pl-10 text-base"
          />
        </div>
      </div>
    </header>
  );
}
