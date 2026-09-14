import type { Metadata } from 'next';
import type { ReactNode } from 'react';

const BASE_URL = 'https://manyacare.in';

export const metadata: Metadata = {
  title: 'Radiology & Digital Imaging',
  description:
    'Advanced Digital Radiology & Diagnostic Imaging modalities at MANYACARE HealthCity including High-Resolution Digital X-Ray, Ultrasound (USG), Colour Doppler, ECG, 2D Echocardiography, CT Scan, MRI, and DEXA Bone Densitometry.',
  keywords: [
    'Radiology Greater Noida West',
    'Digital X-Ray Gaur City',
    'Ultrasound scan Noida Extension',
    'ECG 2D Echo MANYACARE',
    'Colour Doppler scan Greater Noida',
    'CT Scan MRI MANYACARE HealthCity',
  ],
  alternates: {
    canonical: `${BASE_URL}/radiology`,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: `${BASE_URL}/radiology`,
    title: 'Radiology & Digital Imaging Services | MANYACARE HealthCity',
    description:
      'Digital X-Ray, Ultrasound, Colour Doppler, ECG, 2D Echo, CT Scan, and MRI diagnostic radiology services in Greater Noida West.',
    siteName: 'MANYACARE HealthCity',
    images: [
      {
        url: '/images/manyacare-og-social.jpg',
        width: 1200,
        height: 630,
        alt: 'MANYACARE Radiology & Digital Imaging',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Radiology & Digital Imaging Services | MANYACARE HealthCity',
    description:
      'High-precision Digital X-Ray, Ultrasound, 2D Echo, ECG & Radiology imaging in Greater Noida West.',
    images: ['/images/manyacare-og-social.jpg'],
  },
};

export default function RadiologyLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
