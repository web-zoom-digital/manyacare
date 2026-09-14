import type { Metadata } from 'next';
import type { ReactNode } from 'react';

const BASE_URL = 'https://manyacare.in';

export const metadata: Metadata = {
  title: 'Patient Resources & Guidance',
  description:
    'Access patient resources at MANYACARE HealthCity: online doctor appointments, digital medical test reports, second opinion consultations, health insurance guidance, and patient support services in Greater Noida West.',
  keywords: [
    'Patient resources MANYACARE',
    'Online doctor appointment Noida Extension',
    'Diagnostic test reports MANYACARE',
    'Medical second opinion Greater Noida',
    'Health insurance guidance Gaur City',
  ],
  alternates: {
    canonical: `${BASE_URL}/patient-resources`,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: `${BASE_URL}/patient-resources`,
    title: 'Patient Resources & Guidance | MANYACARE HealthCity',
    description:
      'Online appointment scheduling, digital pathology report access, specialist second opinion, and insurance desk at MANYACARE HealthCity.',
    siteName: 'MANYACARE HealthCity',
    images: [
      {
        url: '/images/manyacare-og-social.jpg',
        width: 1200,
        height: 630,
        alt: 'MANYACARE Patient Resources & Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Patient Resources & Guidance | MANYACARE HealthCity',
    description:
      'Access appointments, medical reports, specialist second opinions, and patient care guidance in Greater Noida West.',
    images: ['/images/manyacare-og-social.jpg'],
  },
};

export default function PatientResourcesLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
