import type { Metadata } from 'next';
import type { ReactNode } from 'react';

const BASE_URL = 'https://manyacare.in';

export const metadata: Metadata = {
  title: 'Home Healthcare Services',
  description:
    'Doorstep clinical healthcare services across Greater Noida West & Gaur City: Qualified home doctor visits, certified nursing procedures, physiotherapy, doorstep blood sample draw, ECG at home, and medical equipment rental.',
  keywords: [
    'Home healthcare Greater Noida West',
    'Doctor visit at home Gaur City',
    'Home nursing care Noida Extension',
    'Physiotherapy at home MANYACARE',
    'Home blood sample collection Greater Noida',
  ],
  alternates: {
    canonical: `${BASE_URL}/home-healthcare`,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: `${BASE_URL}/home-healthcare`,
    title: 'Home Healthcare Services | MANYACARE HealthCity',
    description:
      'Qualified home doctor visits, certified nursing, home physiotherapy, and doorstep sample draw across Greater Noida West & Gaur City.',
    siteName: 'MANYACARE HealthCity',
    images: [
      {
        url: '/images/manyacare-og-social.jpg',
        width: 1200,
        height: 630,
        alt: 'MANYACARE Home Healthcare Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Home Healthcare Services | MANYACARE HealthCity',
    description:
      'Doorstep doctor consultations, home nursing, physiotherapy, and sample draw in Greater Noida West.',
    images: ['/images/manyacare-og-social.jpg'],
  },
};

export default function HomeHealthcareLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
