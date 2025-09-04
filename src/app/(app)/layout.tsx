import type { ReactNode } from 'react';
import Header from '@/components/Header';

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <Header />
      <main>{children}</main>
    </div>
  );
}
