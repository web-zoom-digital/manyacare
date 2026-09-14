import type { Metadata } from 'next';
import type { ReactNode } from 'react';

const BASE_URL = 'https://manyacare.in';

export const metadata: Metadata = {
  title: 'Contact Us & Clinic Appointments',
  description:
    'Contact MANYACARE HealthCity for OPD doctor appointments, diagnostic lab test bookings, doorstep blood sample collection, and general healthcare enquiries in Greater Noida West & Gaur City.',
  keywords: [
    'Contact MANYACARE HealthCity',
    'Book OPD appointment Noida Extension',
    'MANYACARE helpline number',
    'Clinic location Greater Noida West',
    'Lab sample collection contact Gaur City',
  ],
  alternates: {
    canonical: `${BASE_URL}/contact-us`,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: `${BASE_URL}/contact-us`,
    title: 'Contact Us & Clinic Appointments | MANYACARE HealthCity',
    description:
      'Get in touch with MANYACARE HealthCity. Book OPD appointments, diagnostic lab tests, or home care visits.',
    siteName: 'MANYACARE HealthCity',
    images: [
      {
        url: '/images/manyacare-og-social.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact MANYACARE HealthCity',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us & Clinic Appointments | MANYACARE HealthCity',
    description:
      'Contact helpline +91-9953239561 for appointments and healthcare assistance in Greater Noida West.',
    images: ['/images/manyacare-og-social.jpg'],
  },
};

export default function ContactUsLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
