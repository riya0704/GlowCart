'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useRouter } from 'next/navigation';
import { Mail, Eye } from 'lucide-react';
import { Chrome, Facebook } from 'lucide-react';

const AppleIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" />
    <path d="M10 2c1 .5 2 2 2 5" />
  </svg>
);

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/products');
  };

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <div className="flex-shrink-0 rounded-b-[40px] bg-secondary p-8 text-center">
        <h1 className="font-headline text-4xl font-bold text-primary">
          Hello Again!
        </h1>
        <p className="mt-2 text-muted-foreground">
          Welcome back you've been missed.
        </p>
      </div>

      <div className="flex-grow px-8 py-8">
        <form onSubmit={handleLogin} className="space-y-6">
          <div className="relative">
            <Input
              id="email"
              type="email"
              placeholder="Enter your email Id"
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
          <div className="text-right">
            <Link
              href="#"
              className="text-sm font-medium text-primary hover:underline"
            >
              Forgot password
            </Link>
          </div>
          <Button
            type="submit"
            size="lg"
            className="w-full rounded-xl"
          >
            Log In
          </Button>
        </form>

        <div className="my-8 flex items-center">
          <div className="flex-grow border-t border-border" />
          <span className="mx-4 flex-shrink text-sm text-muted-foreground">
            Or Continue With
          </span>
          <div className="flex-grow border-t border-border" />
        </div>

        <div className="flex justify-center space-x-4">
          <Button variant="outline" size="icon" className="h-14 w-14 rounded-xl border-border bg-card">
            <Chrome className="h-6 w-6" />
          </Button>
          <Button variant="outline" size="icon" className="h-14 w-14 rounded-xl border-border bg-card">
            <AppleIcon className="h-6 w-6" />
          </Button>
          <Button variant="outline" size="icon" className="h-14 w-14 rounded-xl border-border bg-card">
            <Facebook className="h-6 w-6" />
          </Button>
        </div>
      </div>

      <div className="pb-8 text-center text-sm">
        <p className="text-muted-foreground">
          Not a Member?{' '}
          <Link
            href="/register"
            className="font-semibold text-primary hover:underline"
          >
            Register Now
          </Link>
        </p>
      </div>
    </div>
  );
}
