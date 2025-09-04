import Link from 'next/link';
import { Button } from '@/components/ui/button';
import GlowCartLogo from '@/components/GlowCartLogo';

export default function OnboardingPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background p-8 text-center">
      <div className="flex flex-col items-center justify-center space-y-6">
        <GlowCartLogo className="h-24 w-24 text-primary" />
        <h1 className="text-5xl font-bold tracking-tight text-foreground">
          GlowCart
        </h1>
        <p className="max-w-md text-lg text-muted-foreground">
          Discover Your Radiance. Shop the finest collection of cosmetics and
          skincare products.
        </p>
        <Button asChild size="lg" className="mt-4">
          <Link href="/login">Get Started</Link>
        </Button>
      </div>
    </main>
  );
}
