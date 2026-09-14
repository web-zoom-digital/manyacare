import type { Metadata } from 'next';
import type { ReactNode } from 'react';

const BASE_URL = 'https://manyacare.in';

export const metadata: Metadata = {
  title: 'Preventive Health Packages',
  description:
    'Book curated preventive health checkup packages at MANYACARE HealthCity. Executive Full Body Assessment, Diabetic Profile, Cardiac Wellness, Women\'s Health, and Senior Citizen packages with free doorstep blood sample collection in Greater Noida West.',
  keywords: [
    'Health packages Greater Noida West',
    'Full body checkup Gaur City',
    'Preventive health package Noida Extension',
    'Diabetic profile MANYACARE',
    'Executive health checkup Greater Noida',
  ],
  alternates: {
    canonical: `${BASE_URL}/health-packages`,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: `${BASE_URL}/health-packages`,
    title: 'Preventive Health Checkup Packages | MANYACARE HealthCity',
    description:
      'Curated full body health checkups & specialized diagnostic packages with free doorstep blood sample collection.',
    siteName: 'MANYACARE HealthCity',
    images: [
      {
        url: '/images/manyacare-og-social.jpg',
        width: 1200,
        height: 630,
        alt: 'MANYACARE Preventive Health Checkup Packages',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Preventive Health Checkup Packages | MANYACARE HealthCity',
    description:
      'Full body health checkups & specialized screening packages with free home sample collection.',
    images: ['/images/manyacare-og-social.jpg'],
  },
};

export default function HealthPackagesLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
