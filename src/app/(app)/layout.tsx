import type { ReactNode } from 'react';
import Header from '@/components/Header';
import BottomNav from '@/components/BottomNav';

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <Header />
      <main className="pb-20">{children}</main>
      <BottomNav />
    </div>
  );
}
