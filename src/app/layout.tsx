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

const BASE_URL = 'https://manyacare.in';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'MANYACARE HealthCity | Multispecialty Healthcare, Diagnostics & Home Care',
    template: '%s | MANYACARE HealthCity',
  },
  description:
    'MANYACARE HealthCity is an integrated multispecialty healthcare platform in Greater Noida West offering specialist OPD consultations, pathology diagnostics, digital radiology, home healthcare, preventive health packages, and medical education guidance.',
  keywords: [
    'MANYACARE HealthCity',
    'multispecialty healthcare Greater Noida West',
    'specialist doctor consultation',
    'diagnostic laboratory services',
    'radiology and imaging',
    'home healthcare services',
    'preventive health packages',
    'online doctor consultation',
    'medical education guidance',
    'healthcare Gaur City',
    'doctor Noida Extension',
    'blood test home collection Greater Noida',
  ],
  authors: [{ name: 'MANYACARE HealthCity' }],
  creator: 'MANYACARE HealthCity',
  publisher: 'MANYACARE HealthCity',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: BASE_URL,
    title: 'MANYACARE HealthCity | Multispecialty Healthcare & Diagnostics',
    description:
      'Integrated digital healthcare platform in Greater Noida West offering multispecialty consultations, pathology diagnostics, home healthcare, health packages, and medical education guidance.',
    siteName: 'MANYACARE HealthCity',
    images: [
      {
        url: '/images/manyacare-og-social.jpg',
        width: 1200,
        height: 630,
        alt: 'MANYACARE HealthCity - Multispecialty Healthcare Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MANYACARE HealthCity | Multispecialty Healthcare & Diagnostics',
    description:
      'Multispecialty OPD consultations, diagnostic testing, home healthcare, and preventive health packages in Greater Noida West.',
    images: ['/images/manyacare-og-social.jpg'],
  },
  alternates: {
    canonical: BASE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD: MedicalOrganization Structured Data (GEO + AEO entity signal)
  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalOrganization',
    '@id': `${BASE_URL}/#organization`,
    name: 'MANYACARE HealthCity',
    alternateName: 'MANYACARE',
    url: BASE_URL,
    logo: {
      '@type': 'ImageObject',
      url: `${BASE_URL}/images/manyacare-logo.png`,
      width: 200,
      height: 60,
    },
    image: `${BASE_URL}/images/manyacare-og-social.jpg`,
    description:
      'MANYACARE HealthCity is an integrated multispecialty outpatient healthcare network in Greater Noida West offering specialist OPD consultations, pathology laboratory diagnostics, digital radiology, home healthcare, preventive health packages, and medical education guidance.',
    telephone: '+91-9953239561',
    email: 'info@manyacare.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'GH-07A Market, Techzone 4, Patwari, Near Nirala Estate & Ek Murti Chowk',
      addressLocality: 'Greater Noida West',
      addressRegion: 'Uttar Pradesh',
      postalCode: '201306',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '28.595',
      longitude: '77.435',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+91-9953239561',
        contactType: 'customer service',
        areaServed: 'IN',
        availableLanguage: ['Hindi', 'English'],
      },
      {
        '@type': 'ContactPoint',
        telephone: '+91-9953239562',
        contactType: 'laboratory',
        areaServed: 'IN',
        availableLanguage: ['Hindi', 'English'],
      },
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '08:00',
        closes: '20:00',
      },
    ],
    medicalSpecialty: [
      'General Physician & Internal Medicine',
      'Cardiology',
      'Diabetes & Endocrinology',
      'Neurology',
      'Orthopaedics',
      'Obstetrics & Gynaecology',
      'Paediatrics',
      'Chest Medicine & Pulmonology',
      'Rheumatology',
      'Psychiatry',
      'Physiotherapy',
      'Diet & Nutrition',
    ],
    hasMap: 'https://maps.google.com/?q=GH-07A+Market+Techzone+4+Greater+Noida+West',
    areaServed: [
      {
        '@type': 'Place',
        name: 'Greater Noida West',
      },
      {
        '@type': 'Place',
        name: 'Gaur City',
      },
      {
        '@type': 'Place',
        name: 'Noida Extension',
      },
    ],
    sameAs: [
      'https://www.facebook.com/manyacare',
      'https://www.instagram.com/manyacare',
    ],
  };

  // JSON-LD: WebSite with SearchAction (AEO + GEO sitewide entity signal)
  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${BASE_URL}/#website`,
    name: 'MANYACARE HealthCity',
    url: BASE_URL,
    description:
      'Integrated digital healthcare platform providing multispecialty consultations, diagnostics, home care, and medical education guidance in Greater Noida West.',
    publisher: {
      '@id': `${BASE_URL}/#organization`,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${BASE_URL}/specialists?search={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
    inLanguage: 'en-IN',
  };

  return (
    <html lang="en-IN" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
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
