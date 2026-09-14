import type { Metadata } from 'next';
import type { ReactNode } from 'react';

const BASE_URL = 'https://manyacare.in';

export const metadata: Metadata = {
  title: 'Medical Education & Academic Guidance',
  description:
    'Ethical, transparent academic counseling and medical education guidance for MBBS admissions in India & Abroad, NEET PG counseling, B.Sc Nursing, and Allied Health Paramedical Sciences.',
  keywords: [
    'Medical education guidance MANYACARE',
    'MBBS admission guidance Noida Extension',
    'NEET PG counseling Greater Noida',
    'Nursing paramedical courses Gaur City',
  ],
  alternates: {
    canonical: `${BASE_URL}/medical-education`,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: `${BASE_URL}/medical-education`,
    title: 'Medical Education & Academic Guidance | MANYACARE HealthCity',
    description:
      'Transparent academic counseling for MBBS admissions in India & Abroad, NEET PG, Nursing, and Paramedical sciences.',
    siteName: 'MANYACARE HealthCity',
    images: [
      {
        url: '/images/manyacare-og-social.jpg',
        width: 1200,
        height: 630,
        alt: 'MANYACARE Medical Education Division',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Medical Education & Academic Guidance | MANYACARE HealthCity',
    description:
      'Ethical academic counseling for MBBS, NEET PG, Nursing, and Paramedical programs.',
    images: ['/images/manyacare-og-social.jpg'],
  },
};

export default function MedicalEducationLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
