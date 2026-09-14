import type { Metadata } from 'next';
import type { ReactNode } from 'react';

const BASE_URL = 'https://manyacare.in';

export const metadata: Metadata = {
  title: 'Health Blog & Medical Insights',
  description:
    'Read medically responsible articles, health publications, diagnostic guides, and wellness insights authored by senior clinical specialists at MANYACARE HealthCity.',
  keywords: [
    'MANYACARE Health Blog',
    'Medical articles Greater Noida West',
    'Health guides Gaur City',
    'Doctor verified medical publications',
  ],
  alternates: {
    canonical: `${BASE_URL}/blog`,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: `${BASE_URL}/blog`,
    title: 'Health Blog & Medical Insights | MANYACARE HealthCity',
    description:
      'Explore medically responsible health articles, disease prevention guides, and diagnostic insights from clinical experts.',
    siteName: 'MANYACARE HealthCity',
    images: [
      {
        url: '/images/manyacare-og-social.jpg',
        width: 1200,
        height: 630,
        alt: 'MANYACARE Health Blog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Health Blog & Medical Insights | MANYACARE HealthCity',
    description:
      'Medically responsible articles and wellness guides from MANYACARE HealthCity specialists.',
    images: ['/images/manyacare-og-social.jpg'],
  },
};

export default function BlogLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
