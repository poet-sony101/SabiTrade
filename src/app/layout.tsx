import type { Metadata, Viewport } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ConnectivityBanner from '@/components/ConnectivityBanner';
import ServiceWorkerRegister from '@/components/ServiceWorkerRegister';
import InstallPrompt from '@/components/InstallPrompt';
import ClientProviders from '@/components/ClientProviders';

export const metadata: Metadata = {
  title: 'SabiTrade — Learn a trade, get verified, find local gigs',
  description:
    'Short practical lessons in English and Pidgin that work offline, a skill check that earns a verifiable badge, and local gigs you can apply for on WhatsApp.',
  applicationName: 'SabiTrade',
  icons: {
    icon: [
      { url: '/icon.svg?v=2026', type: 'image/svg+xml' },
      { url: '/favicon.ico?v=2026', sizes: 'any' },
    ],
    apple: [
      { url: '/apple-touch-icon.png?v=2026', sizes: '180x180', type: 'image/png' },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: '#ff5500',
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
      <head>
        <link rel="icon" href="/icon.svg?v=2026" type="image/svg+xml" sizes="any" />
        <link rel="icon" href="/favicon.ico?v=2026" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png?v=2026" />
        <meta name="apple-mobile-web-app-title" content="SabiTrade" />
      </head>
      <body className="min-h-screen bg-[var(--color-paper)] text-[var(--color-ink)] antialiased">
        <ClientProviders>
          <ServiceWorkerRegister />
          <ConnectivityBanner />
          <InstallPrompt />
          <Navbar />
          <main className="pt-20 md:pt-24">{children}</main>
          <Footer />
        </ClientProviders>
      </body>
    </html>
  );
}
