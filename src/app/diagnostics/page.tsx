import React from 'react';
import { Metadata } from 'next';
import { DIAGNOSTIC_TESTS } from '@/data/diagnostics';
import { FlaskConical, Phone, Home as HomeIcon, CheckCircle2, Clock, ShieldCheck, Activity, Award } from 'lucide-react';
import HeroCurveDivider from '@/components/HeroCurveDivider';
import FaqAccordion from '@/components/FaqAccordion';
import Breadcrumb from '@/components/Breadcrumb';

const BASE_URL = 'https://manyacare.in';

export const metadata: Metadata = {
  title: 'Diagnostics & Pathology Laboratory Services | MANYACARE HealthCity Greater Noida West',
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

export default function DiagnosticsPage() {
  const heroHeadingTitle = "Diagnostics & Pathology Laboratory";
  const heroHeadingSubtitle = "Accurate Testing & Doorstep Sample Draw";
  const heroHeadingFull = `${heroHeadingTitle} - ${heroHeadingSubtitle}`;
  const heroImagePath = "/images/manyacare-diagnostics-laboratory-unique-hero.jpg";

  const diagnosticsSchema = {
    '@context': 'https://schema.org',
    '@type': 'DiagnosticLab',
    '@id': `${BASE_URL}/diagnostics/#lab`,
    name: 'MANYACARE Diagnostics & Pathology Laboratory',
    url: `${BASE_URL}/diagnostics`,
    description:
      'NABL-aligned pathology diagnostic laboratory in Greater Noida West providing complete blood profiles, metabolic panels, hormonal assays, and free home sample collection.',
    parentOrganization: {
      '@id': `${BASE_URL}/#organization`,
    },
    availableTest: DIAGNOSTIC_TESTS.map((test) => ({
      '@type': 'MedicalTest',
      name: test.name,
      description: test.description,
      testCategory: test.category,
    })),
  };

  return (
    <div className="pb-16 space-y-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(diagnosticsSchema) }}
      />
      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-b from-[#EAF5FF]/80 via-[#F7FAFC] to-white pt-8 pb-16 lg:pt-16 lg:pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Diagnostics' }]} className="mb-6" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Hero Content Area */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#EAF5FF] border border-[#2196F3]/40 text-[#0B3C5D] text-sm font-bold">
                <FlaskConical className="w-4 h-4 text-[#2196F3]" />
                <span>Pathology & Clinical Laboratory</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium text-[#0B3C5D] tracking-tight leading-tight font-display">
                {heroHeadingTitle}
                <span className="block text-[#2196F3] font-bold text-3xl sm:text-4xl lg:text-5xl mt-2">
                  {heroHeadingSubtitle}
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-[#64748B] font-normal leading-relaxed max-w-2xl">
                Comprehensive routine blood tests, specialized endocrine assays, metabolic profiles, and convenient home sample collection.
              </p>

              {/* Call to Action Button */}
              <div className="pt-1">
                <a
                  href="tel:+919953239562"
                  className="manyacare-btn-primary text-sm py-3.5 px-6 shadow-md inline-flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Book Lab Sample: +91-9953239562</span>
                </a>
              </div>

              {/* Trust & Feature Badges */}
              <div className="grid grid-cols-3 gap-4 pt-2 text-left">
                <div className="bg-white p-4 rounded-2xl border border-[#D7E0E8] shadow-xs">
                  <FlaskConical className="w-6 h-6 text-[#2196F3] mb-1.5" />
                  <p className="text-sm font-bold text-[#0B3C5D]">Full Lab Suite</p>
                  <p className="text-xs text-slate-500">CBC, LFT, KFT, HbA1c</p>
                </div>
                <div className="bg-white p-4 rounded-2xl border border-[#D7E0E8] shadow-xs">
                  <ShieldCheck className="w-6 h-6 text-[#2196F3] mb-1.5" />
                  <p className="text-sm font-bold text-[#0B3C5D]">Quality Assured</p>
                  <p className="text-xs text-slate-500">Verified Pathology</p>
                </div>
                <div className="bg-white p-4 rounded-2xl border border-[#D7E0E8] shadow-xs">
                  <HomeIcon className="w-6 h-6 text-[#2196F3] mb-1.5" />
                  <p className="text-sm font-bold text-[#0B3C5D]">Home Collection</p>
                  <p className="text-xs text-slate-500">Morning Draw Desk</p>
                </div>
              </div>
            </div>

            {/* Right Hero Visual Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none rounded-3xl overflow-hidden border-2 border-[#D7E0E8] shadow-xl bg-white">
                <img
                  src={heroImagePath}
                  alt={heroHeadingFull}
                  title={heroHeadingFull}
                  className="w-full h-[360px] sm:h-[450px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B3C5D]/80 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                  <div className="bg-white/95 backdrop-blur-xs text-[#0B3C5D] p-4.5 rounded-2xl border border-[#D7E0E8] shadow-lg space-y-1">
                    <p className="text-sm font-bold flex items-center gap-2 text-[#0B3C5D]">
                      <CheckCircle2 className="w-5 h-5 text-[#16A34A]" />
                      Doorstep Sample Draw
                    </p>
                    <p className="text-xs sm:text-sm text-slate-600">
                      Sterile blood collection by certified phlebotomists with digital report delivery.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Curved Bottom Divider */}
        <HeroCurveDivider fillColor="#F7FAFC" />
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

      {/* Home Sample Collection Banner */}
      <div className="bg-[#EAF5FF] border border-[#2196F3]/40 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-[#2196F3] text-white flex items-center justify-center shrink-0">
            <HomeIcon className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-base font-bold text-[#0B3C5D]">Home Sample Collection Service</h3>
            <p className="text-xs text-[#64748B] mt-0.5">
              Certified phlebotomists collect blood samples at your doorstep in sterile, hygienic sample kits.
            </p>
          </div>
        </div>
        <a
          href="tel:+919953239562"
          className="manyacare-btn-primary text-xs py-2.5 px-5 shrink-0"
        >
          Call +91-9953239562
        </a>
      </div>

      {/* Diagnostic Test Catalog */}
      <div className="space-y-6">
        <h2 className="text-2xl font-extrabold text-[#0B3C5D]">Diagnostic Test Catalog</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DIAGNOSTIC_TESTS.map((test) => (
            <div
              key={test.id}
              className="bg-white border border-[#D7E0E8] rounded-3xl p-7 shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group cursor-pointer space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#2196F3] bg-[#EAF5FF] px-3.5 py-1 rounded-full uppercase tracking-wider">
                    {test.category}
                  </span>
                  <span className="text-xs text-slate-400 font-mono font-semibold">{test.code}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#0B3C5D] group-hover:text-[#2196F3] transition-colors">{test.name}</h3>
                <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">{test.description}</p>
              </div>

              <div className="pt-4 border-t border-[#D7E0E8] space-y-2 text-xs sm:text-sm text-slate-600">
                <div className="flex items-center justify-between">
                  <span className="text-slate-500 font-medium">Sample Specimen:</span>
                  <span className="font-bold text-[#0B3C5D]">{test.sampleType}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500 font-medium">Fasting Rule:</span>
                  <span className="font-bold text-[#0B3C5D]">
                    {test.fastingRequired ? test.fastingHours : 'No Fasting Required'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Diagnostics FAQ Section */}
      <div className="pt-8 border-t border-[#D7E0E8]">
        <FaqAccordion
          badgeText="Diagnostics FAQs"
          title="Frequently Asked Diagnostics Questions"
          subtitle="Common questions regarding blood sample collection, fasting requirements, and report delivery."
          faqs={[
            {
              question: 'How do I book a home blood sample collection?',
              answer: 'You can book a home sample collection by calling our lab desk directly at +91-9953239562 or submitting an enquiry. Our trained phlebotomist will visit your residence at your preferred morning slot.',
            },
            {
              question: 'Which tests require overnight fasting?',
              answer: 'Fasting (8 to 12 hours) is required for Fasting Blood Glucose, Lipid Profile, Liver Function Tests (LFT), and Thyroid panels. Water consumption is allowed during fasting.',
            },
            {
              question: 'How quickly will I receive my diagnostic test reports?',
              answer: 'Routine pathology reports (CBC, Blood Sugar, LFT, KFT) are delivered digitally on the same day via WhatsApp and email. Specialized assays are delivered within 24 to 48 hours.',
            },
            {
              question: 'Are sample collection kits sterile and safe?',
              answer: 'Yes, all sample collection tubes, needles, and vacuum containers are 100% single-use, sterile, and opened right in front of the patient adhering to international WHO safety standards.',
            },
            {
              question: 'Can I consult a physician to interpret my lab report?',
              answer: 'Absolutely. MANYACARE HealthCity offers physician consultation guidance to review and explain your diagnostic lab test reports.',
            },
          ]}
        />
      </div>
      </div>
    </div>
  );
}
