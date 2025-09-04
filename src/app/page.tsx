import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import ViorraLogo from '@/components/ViorraLogo';
import { Progress } from '@/components/ui/progress';

export default function OnboardingPage() {
  return (
    <main className="relative flex min-h-screen flex-col justify-end text-white">
      <Image
        src="https://picsum.photos/800/1200"
        alt="Cosmetics"
        fill
        className="object-cover"
        data-ai-hint="cosmetics product"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      <div className="relative z-10 flex flex-col items-center p-8 text-center">
        <ViorraLogo className="h-16 w-auto" />
        <p className="mt-2 text-lg">Your Beauty, Delivered.</p>
        <Button asChild size="lg" className="mt-8 w-full max-w-sm">
          <Link href="/products">Get Started</Link>
        </Button>
        <Progress value={33} className="mt-6 h-2 w-full max-w-sm bg-white/20" />
      </div>
    </main>
  );
}
