import type { Metadata, Viewport } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ConnectivityBanner from '@/components/ConnectivityBanner';

export const metadata: Metadata = {
  title: 'SabiTrade: learn a trade, get verified, find local gigs',
  description:
    'Short practical lessons in English and Pidgin that work offline, a skill check that earns a verifiable badge, and local gigs you can apply for on WhatsApp.',
  applicationName: 'SabiTrade',
  icons: {
    icon: '/favicon.ico',
  },
};

export const viewport: Viewport = {
  themeColor: '#f7f2ea',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[var(--color-paper)] text-[var(--color-ink)] antialiased">
        <ConnectivityBanner />
        <Navbar />
        <main className="pt-20 md:pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
