import type { Metadata } from 'next';
import type { ReactNode } from 'react';

const BASE_URL = 'https://manyacare.in';

export const metadata: Metadata = {
  title: 'Diagnostics & Pathology Laboratory',
  description:
    'Advanced pathology diagnostic laboratory services at MANYACARE HealthCity. Complete blood count (CBC), HbA1c, lipid profile, liver function test (LFT), kidney function test (KFT), thyroid profile, and free doorstep sample collection in Greater Noida West & Gaur City.',
  keywords: [
    'Diagnostics laboratory Greater Noida West',
    'Pathology lab Gaur City',
    'Blood test home sample collection Noida Extension',
    'CBC test MANYACARE',
    'HbA1c test Greater Noida',
    'Full body blood package MANYACARE',
  ],
  alternates: {
    canonical: `${BASE_URL}/diagnostics`,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: `${BASE_URL}/diagnostics`,
    title: 'Diagnostics & Pathology Laboratory Services | MANYACARE HealthCity',
    description:
      'Advanced pathology lab with free doorstep blood sample collection in Greater Noida West & Gaur City. Fast digital report delivery.',
    siteName: 'MANYACARE HealthCity',
    images: [
      {
        url: '/images/manyacare-og-social.jpg',
        width: 1200,
        height: 630,
        alt: 'MANYACARE Diagnostics & Laboratory Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Diagnostics & Pathology Laboratory Services | MANYACARE HealthCity',
    description:
      'Pathology lab tests & free doorstep sample collection in Greater Noida West. CBC, HbA1c, LFT, KFT, Thyroid & Full Body Health Profiles.',
    images: ['/images/manyacare-og-social.jpg'],
  },
};

export default function DiagnosticsLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
