import Link from 'next/link';
import { Home, Tag, Heart, UserCircle } from 'lucide-react';

const navItems = [
  { href: '/products', icon: Home, label: 'Home' },
  { href: '#', icon: Tag, label: 'Offers' },
  { href: '#', icon: Heart, label: 'Wishlist' },
  { href: '/profile', icon: UserCircle, label: 'Profile' },
];

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 z-50 w-full border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-md items-center justify-around px-2">
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="flex flex-col items-center justify-center space-y-1 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <item.icon className="h-6 w-6" />
            <span
              className={
                item.label === 'Home'
                  ? 'font-semibold text-primary'
                  : ''
              }
            >
              {item.label}
            </span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
