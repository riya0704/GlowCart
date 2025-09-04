'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useRouter } from 'next/navigation';
import { Mail, Eye } from 'lucide-react';

export default function RegisterPage() {
  const router = useRouter();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/products');
  };

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <div className="flex-shrink-0 rounded-b-[40px] bg-secondary p-8 text-center">
        <h1 className="font-headline text-4xl font-bold text-primary">
          Join The Glow!
        </h1>
      </div>

      <div className="flex-grow px-8 py-8">
        <form onSubmit={handleRegister} className="space-y-6">
          <div className="relative">
            <Input
              id="fullName"
              type="text"
              placeholder="Full Name"
              className="h-14 rounded-xl border-border bg-card pl-4 pr-10 text-base"
              required
            />
          </div>
          <div className="relative">
            <Input
              id="email"
              type="email"
              placeholder="Email Address"
              className="h-14 rounded-xl border-border bg-card pl-4 pr-10 text-base"
              required
            />
            <Mail className="absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
          </div>
          <div className="relative">
            <Input
              id="password"
              type="password"
              placeholder="Password"
              className="h-14 rounded-xl border-border bg-card pl-4 pr-10 text-base"
              required
            />
            <Eye className="absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
          </div>
          <div className="relative">
            <Input
              id="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              className="h-14 rounded-xl border-border bg-card pl-4 pr-10 text-base"
              required
            />
            <Eye className="absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
          </div>
          <Button type="submit" size="lg" className="w-full rounded-xl">
            Create Account
          </Button>
        </form>
      </div>

      <div className="pb-8 text-center text-sm">
        <p className="text-muted-foreground">
          Already a Member?{' '}
          <Link
            href="/login"
            className="font-semibold text-primary hover:underline"
          >
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
}
