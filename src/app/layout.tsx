import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWidget from '@/components/FloatingWidget';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.manyacare.com'),
  title: {
    default: 'MANYACARE HealthCity | Premium Multispecialty Healthcare & Diagnostics',
    template: '%s | MANYACARE HealthCity',
  },
  description:
    'MANYACARE HealthCity is a digital healthcare platform providing multispecialty consultations, advanced laboratory diagnostics, digital radiology, home healthcare, preventive health packages, and medical education guidance.',
  keywords: [
    'MANYACARE HealthCity',
    'multispecialty healthcare',
    'healthcare services',
    'medical specialists',
    'diagnostic laboratory services',
    'radiology and imaging',
    'home healthcare services',
    'preventive health check-up',
    'online doctor consultation',
    'medical education guidance',
  ],
  authors: [{ name: 'MANYACARE HealthCity Team' }],
  creator: 'MANYACARE HealthCity',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.manyacare.com',
    title: 'MANYACARE HealthCity — Healthcare Beyond Boundaries',
    description:
      'Digital healthcare platform for multispecialty consultations, pathology diagnostics, home healthcare, health packages, and medical education guidance.',
    siteName: 'MANYACARE HealthCity',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MANYACARE HealthCity — Premium Healthcare Platform',
    description:
      'Multispecialty consultations, diagnostic testing, home healthcare, and preventive checkup packages.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD MedicalOrganization Structured Data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalOrganization',
    name: 'MANYACARE HealthCity',
    url: 'https://www.manyacare.com',
    logo: 'https://www.manyacare.com/logo.png',
    description:
      'Multispecialty digital healthcare platform, diagnostic laboratory, home healthcare provider, and medical education guidance network.',
    telephone: '+91-9953239561',
    email: 'info@manyacare.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'GH-07A Market, Techzone 4, Patwari, Greater Noida West',
      addressCountry: 'IN',
    },
    openingHours: 'Mo-Sa 08:00-20:00',
    medicalSpecialty: [
      'General Medicine',
      'Cardiology',
      'Diabetology',
      'Neurology',
      'Orthopaedics',
      'Obstetrics and Gynaecology',
      'Paediatrics',
      'Radiology',
      'Pathology',
    ],
  };

  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#F7FAFC] text-[#172B4D] font-sans antialiased selection:bg-[#2196F3] selection:text-white">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingWidget />
      </body>
    </html>
  );
}
