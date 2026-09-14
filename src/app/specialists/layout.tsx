import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Medical Specialists',
  description:
    'Consult verified senior specialist doctors at MANYACARE HealthCity, Greater Noida West, across 20+ clinical departments including Cardiology, Neurology, Orthopaedics, Gynaecology, Paediatrics, Diabetology, and more.',
  keywords: [
    'specialist doctors Greater Noida West',
    'senior consultant physician',
    'cardiologist Noida Extension',
    'gynaecologist Gaur City',
    'orthopaedic surgeon Greater Noida',
    'MANYACARE doctors',
  ],
  openGraph: {
    title: 'Our Medical Specialists | MANYACARE HealthCity',
    description:
      'Book specialist consultations across 20+ clinical departments at MANYACARE HealthCity, Greater Noida West.',
    url: 'https://manyacare.in/specialists',
    images: [
      {
        url: '/images/manyacare-og-social.jpg',
        width: 1200,
        height: 630,
        alt: 'Medical Specialists at MANYACARE HealthCity',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Medical Specialists | MANYACARE HealthCity',
    description:
      'Consult verified senior specialist doctors across 20+ departments at MANYACARE HealthCity, Greater Noida West.',
    images: ['/images/manyacare-og-social.jpg'],
  },
  alternates: {
    canonical: 'https://manyacare.in/specialists',
  },
};

export default function SpecialistsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
