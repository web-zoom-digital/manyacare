import type { Metadata } from 'next';
import type { ReactNode } from 'react';

const BASE_URL = 'https://manyacare.in';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about MANYACARE HealthCity, our clinical specialists, 20+ medical departments, pathology diagnostics, home healthcare services, clinic locations, vision, mission, and patient care philosophy in Greater Noida West.',
  keywords: [
    'About MANYACARE HealthCity',
    'MANYACARE healthcare mission',
    'multispecialty clinic Greater Noida West',
    'patient care philosophy Gaur City',
    'MANYACARE doctors and specialists',
    'healthcare infrastructure Noida Extension',
  ],
  alternates: {
    canonical: `${BASE_URL}/about-us`,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: `${BASE_URL}/about-us`,
    title: 'About Us | MANYACARE HealthCity Greater Noida West',
    description:
      'Learn about MANYACARE HealthCity, our clinical specialists, 20+ medical departments, pathology diagnostics, home healthcare services, and care philosophy.',
    siteName: 'MANYACARE HealthCity',
    images: [
      {
        url: '/images/manyacare-og-social.jpg',
        width: 1200,
        height: 630,
        alt: 'About MANYACARE HealthCity',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us | MANYACARE HealthCity Greater Noida West',
    description:
      'Discover MANYACARE HealthCity - multispecialty healthcare, diagnostics, home care, and medical education guidance in Greater Noida West.',
    images: ['/images/manyacare-og-social.jpg'],
  },
};

export default function AboutUsLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
