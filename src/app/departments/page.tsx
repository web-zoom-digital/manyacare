import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { DEPARTMENTS } from '@/data/departments';
import FaqAccordion from '@/components/FaqAccordion';
import HeroCurveDivider from '@/components/HeroCurveDivider';
import Breadcrumb from '@/components/Breadcrumb';
import {
  Stethoscope,
  ChevronRight,
  ShieldCheck,
  Calendar,
  Phone,
  Clock,
  MapPin,
  Activity,
  FlaskConical,
  Building,
  CheckCircle2,
  HelpCircle,
  ArrowRight,
  UserCheck,
  Navigation,
} from 'lucide-react';

const BASE_URL = 'https://manyacare.in';

export const metadata: Metadata = {
  title: 'Medical Departments & Specialties | MANYACARE HealthCity Greater Noida West',
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

export default function DepartmentsIndexPage() {
  const heroTitle = "MANYACARE Clinical Departments";
  const heroSubtitle = "Comprehensive Medical Specialties & Advanced Clinical Care";
  const heroFullHeading = `${heroTitle} - ${heroSubtitle}`;

  const departmentsSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'MANYACARE HealthCity Medical Departments Catalog',
    url: `${BASE_URL}/departments`,
    itemListElement: DEPARTMENTS.map((dept, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      item: {
        '@type': 'MedicalSpecialty',
        name: dept.name,
        description: dept.shortDescription,
        url: `${BASE_URL}/departments/${dept.slug}`,
      },
    })),
  };

  return (
    <div className="pb-16 space-y-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(departmentsSchema) }}
      />
      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-b from-[#EAF5FF]/80 via-[#F7FAFC] to-white pt-8 pb-16 lg:pt-16 lg:pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Medical Departments' }]} className="mb-6" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Hero Content Area */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#EAF5FF] border border-[#2196F3]/40 text-[#0B3C5D] text-xs sm:text-sm font-bold">
                <Stethoscope className="w-4 h-4 text-[#2196F3]" />
                <span>Multispecialty Clinical Care</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium text-[#0B3C5D] tracking-tight leading-tight font-display">
                {heroTitle}
                <span className="block text-[#2196F3] font-bold text-3xl sm:text-4xl lg:text-5xl mt-2">
                  {heroSubtitle}
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-[#64748B] font-normal leading-relaxed max-w-2xl">
                Explore over 20 specialized outpatient departments, advanced pathology diagnostics, digital radiology, and experienced consultant physicians under unified medical governance.
              </p>

              {/* Action CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="tel:+919953239561"
                  className="manyacare-btn-primary py-4 px-7 text-base shadow-md"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Book OPD Appointment: +91-9953239561</span>
                </a>
                <Link
                  href="/specialists"
                  className="manyacare-btn-secondary py-4 px-7 text-base"
                >
                  <UserCheck className="w-5 h-5 text-[#2196F3]" />
                  <span>Find Specialist Doctor</span>
                </Link>
              </div>

              {/* Trust & Feature Badges */}
              <div className="grid grid-cols-3 gap-4 pt-4 text-left cursor-pointer">
                <div className="bg-white p-4 rounded-2xl border border-[#D7E0E8] shadow-xs">
                  <Stethoscope className="w-6 h-6 text-[#2196F3] mb-1.5" />
                  <p className="text-sm font-bold text-[#0B3C5D]">20+ Medical</p>
                  <p className="text-xs text-slate-500">Specialty Clinics</p>
                </div>
                <div className="bg-white p-4 rounded-2xl border border-[#D7E0E8] shadow-xs">
                  <FlaskConical className="w-6 h-6 text-[#2196F3] mb-1.5" />
                  <p className="text-sm font-bold text-[#0B3C5D]">Lab & Radiology</p>
                  <p className="text-xs text-slate-500">In-House Diagnostics</p>
                </div>
                <div className="bg-white p-4 rounded-2xl border border-[#D7E0E8] shadow-xs">
                  <Building className="w-6 h-6 text-[#2196F3] mb-1.5" />
                  <p className="text-sm font-bold text-[#0B3C5D]">Home Visits</p>
                  <p className="text-xs text-slate-500">Doorstep Doctor Care</p>
                </div>
              </div>
            </div>

            {/* Right Hero Visual Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none rounded-3xl overflow-hidden border-2 border-[#D7E0E8] shadow-2xl bg-white">
                <img
                  src="/images/manyacare-clinical-departments-multispecialty-healthcare.jpg"
                  alt={heroFullHeading}
                  title={heroFullHeading}
                  className="w-full h-[380px] sm:h-[450px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B3C5D]/90 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                  <div className="bg-white/95 backdrop-blur-xs text-[#0B3C5D] p-4.5 rounded-2xl border border-[#D7E0E8] shadow-lg space-y-1">
                    <p className="text-sm font-bold flex items-center gap-2 text-[#0B3C5D]">
                      <CheckCircle2 className="w-5 h-5 text-[#16A34A]" />
                      NABH Oriented Clinical Standards
                    </p>
                    <p className="text-xs sm:text-sm text-slate-600">
                      Ethical medical consultations, evidence-based diagnostic protocols, and patient-centered care.
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

      {/* 2. CLINICAL SERVICES INFORMATION SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-[#D7E0E8] rounded-3xl p-6 sm:p-10 shadow-xs space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-[#D7E0E8] pb-6 text-left">
            <div className="space-y-2">
              <span className="text-xs font-bold text-[#2196F3] bg-[#EAF5FF] px-3.5 py-1 rounded-full uppercase tracking-wider inline-block">
                Integrated Clinical Services
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0B3C5D] font-display">
                Multidisciplinary Healthcare Services & Diagnostics
              </h2>
            </div>
            <p className="text-sm sm:text-sm text-[#64748B] max-w-xl leading-relaxed">
              MANYACARE HealthCity brings together senior clinical specialists, advanced pathology screening, high-resolution digital radiology, and doorstep home healthcare under unified medical governance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-left cursor-pointer">
            <div className="p-4 rounded-2xl bg-[#F7FAFC] border border-[#D7E0E8] space-y-2">
              <div className="w-9 h-9 rounded-xl bg-[#EAF5FF] text-[#2196F3] flex items-center justify-center font-bold">
                <Stethoscope className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-base text-[#0B3C5D]">Outpatient OPD</h4>
              <p className="text-sm text-slate-500 leading-relaxed">
                Consultations with senior physicians and surgical consultants across 20+ specialized medical domains.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#F7FAFC] border border-[#D7E0E8] space-y-2">
              <div className="w-9 h-9 rounded-xl bg-[#EAF5FF] text-[#2196F3] flex items-center justify-center font-bold">
                <FlaskConical className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-base text-[#0B3C5D]">Pathology Lab</h4>
              <p className="text-sm text-slate-500 leading-relaxed">
                Comprehensive blood profiles, lipid panels, hormone assays, HbA1c, and biochemistry lab screenings.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#F7FAFC] border border-[#D7E0E8] space-y-2">
              <div className="w-9 h-9 rounded-xl bg-[#EAF5FF] text-[#2196F3] flex items-center justify-center font-bold">
                <Activity className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-base text-[#0B3C5D]">Digital Radiology</h4>
              <p className="text-sm text-slate-500 leading-relaxed">
                High-definition Ultrasound, 2D Echocardiography, digital chest X-rays, and Spirometry lung testing.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#F7FAFC] border border-[#D7E0E8] space-y-2">
              <div className="w-9 h-9 rounded-xl bg-[#EAF5FF] text-[#2196F3] flex items-center justify-center font-bold">
                <Building className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-base text-[#0B3C5D]">Home Healthcare</h4>
              <p className="text-sm text-slate-500 leading-relaxed">
                Doorstep doctor consultations, home nursing care, blood sample collection, and physical therapy sessions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. DEPARTMENTS CARD GRID (3 CARDS PER ROW, NO PHOTOS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-left">
        <div className="flex items-center justify-between border-b border-[#D7E0E8] pb-4">
          <div>
            <h2 className="text-2xl font-bold text-[#0B3C5D]">Explore All Clinical Departments</h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Select a specialty to view detailed clinical scope, services, and doctor profiles
            </p>
          </div>
          <span className="text-xs font-bold text-[#2196F3] bg-[#EAF5FF] px-3 py-1 rounded-full">
            {DEPARTMENTS.length} Specialties
          </span>
        </div>

        {/* 3 Cards per row layout, NO photos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DEPARTMENTS.map((dept) => (
            <div
              key={dept.id}
              className="manyacare-card p-6 flex flex-col cursor-pointer justify-between hover:border-[#2196F3] transition-all duration-300 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-[#EAF5FF] text-[#2196F3] flex items-center justify-center group-hover:bg-[#2196F3] group-hover:text-white transition-all duration-300">
                    <Stethoscope className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    Specialty Clinic
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-[#0B3C5D] group-hover:text-[#2196F3] transition-colors leading-snug">
                    {dept.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#64748B] line-clamp-3 leading-relaxed">
                    {dept.shortDescription}
                  </p>
                </div>
              </div>

              <div className="pt-5 mt-6 flex items-center justify-between">
                <Link
                  href={`/departments/${dept.slug}`}
                  className="text-xs sm:text-sm font-bold text-[#2196F3] hover:text-[#0B3C5D] flex items-center gap-1.5 transition-colors group-hover:translate-x-1 duration-200"
                >
                  <span>Explore Department</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. CENTERED INTERACTIVE ACCORDION FAQ SECTION */}
      <section className="pt-8 border-t border-[#D7E0E8] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FaqAccordion
          badgeText="Departments FAQs"
          title="Frequently Asked Questions"
          subtitle="Common queries regarding OPD consultations, diagnostic testing, and doctor appointments at MANYACARE HealthCity."
          faqs={[
            {
              question: "How do I book an OPD consultation with a department specialist?",
              answer: "You can book directly by calling our clinical helpline +91-9953239561 or using the online appointment form on any department page. Walk-in OPD consultations are also available at our main campus in Techzone 4, Greater Noida West."
            },
            {
              question: "Are diagnostic laboratory tests and radiology available on the same day?",
              answer: "Yes, our in-house pathology laboratory and digital radiology hub offer immediate diagnostic testing (blood profiles, ECG, X-Ray, Ultrasound) alongside your OPD doctor consultation."
            },
            {
              question: "Can I request a home doctor visit or doorstep sample collection?",
              answer: "Yes, MANYACARE provides home doctor visits and free doorstep blood sample collection across Gaur City, Noida Extension, Techzone 4, and Greater Noida West."
            },
            {
              question: "What are the main campus operating hours and OPD consultation timings?",
              answer: "Our main HealthCity campus operates Monday through Saturday from 8:00 AM to 8:00 PM, and Sundays from 9:00 AM to 2:00 PM."
            }
          ]}
        />
      </section>

      {/* 5. MAIN CAMPUS ADDRESS GOOGLE MAP SECTION (AT THE BOTTOM) */}
      <section className="pt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-left">
        <div className="bg-white border border-[#D7E0E8] rounded-3xl overflow-hidden shadow-xs">
        

          {/* Full Width Embedded Map */}
          <div className="h-[380px] sm:h-[450px] w-full bg-slate-100">
            <iframe
              title="MANYACARE HealthCity Main Campus Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.456382103445!2d77.4352123!3d28.5852104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef6777777777%3A0x1234567890abcdef!2sTechzone%204%2C%20Greater%20Noida%20West!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
