import type { Metadata } from 'next';
import type { ReactNode } from 'react';

const BASE_URL = 'https://manyacare.in';

export const metadata: Metadata = {
  title: 'Medical Departments & Specialties',
  description:
    'Explore 20+ specialized clinical departments at MANYACARE HealthCity Greater Noida West: General Physician, Cardiology, Diabetology, Neurology, Chest Medicine, Orthopaedics, Gynaecology, Pediatrics, Psychiatry, and more.',
  keywords: [
    'Medical departments Greater Noida West',
    'Specialist OPD clinics Gaur City',
    'MANYACARE medical departments',
    'General physician Noida Extension',
    'Cardiology clinic Greater Noida',
    'Pediatrics clinic Gaur City',
  ],
  alternates: {
    canonical: `${BASE_URL}/departments`,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: `${BASE_URL}/departments`,
    title: 'Medical Departments & Specialties | MANYACARE HealthCity',
    description:
      'Explore 20+ specialized OPD clinical departments and senior doctor availability at MANYACARE HealthCity Greater Noida West.',
    siteName: 'MANYACARE HealthCity',
    images: [
      {
        url: '/images/manyacare-og-social.jpg',
        width: 1200,
        height: 630,
        alt: 'MANYACARE Medical Departments & Specialties',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Medical Departments & Specialties | MANYACARE HealthCity',
    description:
      '20+ OPD departments with senior specialists in Greater Noida West & Gaur City.',
    images: ['/images/manyacare-og-social.jpg'],
  },
};

export default function DepartmentsLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
