import type { Metadata } from 'next';
import type { ReactNode } from 'react';

const BASE_URL = 'https://manyacare.in';

export const metadata: Metadata = {
  title: 'Clinic Locations & Service Zones',
  description:
    'Explore MANYACARE HealthCity clinic locations and serving sectors across Greater Noida West, Gaur City 1 & 2, Techzone 4, Sector 4, Sector 10, Pari Chowk, and Crossings Republik. Free doorstep sample collection available.',
  keywords: [
    'MANYACARE clinic locations',
    'Healthcare Greater Noida West',
    'Gaur City clinic location',
    'Techzone 4 HealthCity campus',
    'Noida Extension sample collection',
  ],
  alternates: {
    canonical: `${BASE_URL}/locations`,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: `${BASE_URL}/locations`,
    title: 'Clinic Locations & Service Zones | MANYACARE HealthCity',
    description:
      'Explore clinic campuses and doorstep healthcare service reach across Greater Noida West & Gaur City.',
    siteName: 'MANYACARE HealthCity',
    images: [
      {
        url: '/images/manyacare-og-social.jpg',
        width: 1200,
        height: 630,
        alt: 'MANYACARE Clinic Locations & Reach',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clinic Locations & Service Zones | MANYACARE HealthCity',
    description:
      'Clinic hubs & doorstep sample collection reach in Greater Noida West & Gaur City.',
    images: ['/images/manyacare-og-social.jpg'],
  },
};

export default function LocationsLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
