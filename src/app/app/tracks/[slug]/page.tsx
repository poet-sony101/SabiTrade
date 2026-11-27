import React, { Suspense } from 'react';
import { notFound } from 'next/navigation';
import { TRADE_TRACKS } from '@/data/trades';
import TrackPlayerClient from './TrackPlayerClient';

export function generateStaticParams() {
  return TRADE_TRACKS.map((t) => ({
    slug: t.slug,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function TrackPage({ params }: PageProps) {
  const { slug } = await params;
  const track = TRADE_TRACKS.find((t) => t.slug === slug);

  if (!track) {
    notFound();
  }

  return (
    <Suspense fallback={<div className="p-12 text-center text-sm">Loading trade workshop...</div>}>
      <TrackPlayerClient slug={slug} />
    </Suspense>
  );
}
