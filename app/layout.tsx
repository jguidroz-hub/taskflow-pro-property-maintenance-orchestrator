import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { SessionProvider } from 'next-auth/react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TaskFlow Pro - Property Maintenance Orchestrator',
  description: 'Value Proposition: Streamlines maintenance request communication, scheduling, and workload balancing for property managers and landlords, reducing tenant frustration and team burnout.

Target Customer: Small to medium-sized property management companies, individual landlords with multiple properties, and maintenance teams.

---
Category: Micro-SaaS
Target Market: Small to medium-sized property management companies, individual landlords with multiple properties, and maintenance teams.
Source Hypothesis ID: 91932b41-72ff-4dbe-a783-8267e84f7b7f
Promotion Type: automatic',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>
          <nav className="border-b">
            <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
              <a href="/" className="font-bold text-lg">TaskFlow Pro - Property Maintenance Orchestrator</a>
              <div className="flex items-center gap-4">
                <a href="/dashboard" className="text-sm hover:text-blue-600">Dashboard</a>
                <a href="/pricing" className="text-sm hover:text-blue-600">Pricing</a>
              </div>
            </div>
          </nav>
          <main>{children}</main>
        </SessionProvider>
      </body>
    </html>
  );
}
