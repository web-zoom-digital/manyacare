import type { Metadata } from 'next';
import type { ReactNode } from 'react';

const BASE_URL = 'https://manyacare.in';

export const metadata: Metadata = {
  title: 'Careers & Job Opportunities',
  description:
    'Explore healthcare career opportunities at MANYACARE HealthCity. Join our clinical team, specialist doctors, nursing staff, laboratory technicians, or healthcare administration in Greater Noida West.',
  keywords: [
    'MANYACARE Careers',
    'Healthcare jobs Greater Noida West',
    'Doctor vacancies Noida Extension',
    'Nurse jobs Gaur City',
    'Pathology lab technician jobs',
  ],
  alternates: {
    canonical: `${BASE_URL}/careers`,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: `${BASE_URL}/careers`,
    title: 'Careers & Job Opportunities | MANYACARE HealthCity',
    description:
      'Join MANYACARE HealthCity. Explore job openings for doctors, nurses, lab technicians, and healthcare professionals.',
    siteName: 'MANYACARE HealthCity',
    images: [
      {
        url: '/images/manyacare-og-social.jpg',
        width: 1200,
        height: 630,
        alt: 'Careers at MANYACARE HealthCity',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Careers & Job Opportunities | MANYACARE HealthCity',
    description:
      'Explore clinical & healthcare career opportunities at MANYACARE HealthCity in Greater Noida West.',
    images: ['/images/manyacare-og-social.jpg'],
  },
};

export default function CareersLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
