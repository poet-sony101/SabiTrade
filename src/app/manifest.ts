import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'SabiTrade — Learn a trade, get verified, find local gigs',
    short_name: 'SabiTrade',
    description:
      'Short practical lessons in English and Pidgin that work offline, a skill check that earns a verifiable badge, and local gigs you can apply for on WhatsApp.',
    start_url: '/',
    display: 'standalone',
    background_color: '#f7f2ea',
    theme_color: '#ad3c18',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
