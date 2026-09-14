import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import {
  ShieldCheck,
  Target,
  Eye,
  Award,
  Heart,
  CheckCircle2,
  Stethoscope,
  ArrowRight,
  MapPin,
  Phone,
  Clock,
  ChevronRight,
  Calendar,
  FlaskConical,
  Building,
  Activity,
  Navigation,
  Home,
} from 'lucide-react';

import { DEPARTMENTS } from '@/data/departments';
import { DOCTORS } from '@/data/doctors';
import { HEALTH_PACKAGES } from '@/data/packages';
import Breadcrumb from '@/components/Breadcrumb';
import FaqAccordion from '@/components/FaqAccordion';

const BASE_URL = 'https://manyacare.in';

export const metadata: Metadata = {
  title: 'About Us | MANYACARE HealthCity Greater Noida West',
  description:
    'Learn about MANYACARE HealthCity, our clinical specialists, 20+ medical departments, pathology diagnostics, home healthcare services, clinic locations, vision, mission, and patient care philosophy in Greater Noida West.',
  keywords: [
    'About MANYACARE HealthCity',
    'MANYACARE healthcare mission',
    'multispecialty clinic Greater Noida West',
    'patient care philosophy Gaur City',
    'MANYACARE doctors and specialists',
    'healthcare infrastructure Noida Extension',
  ],
  alternates: {
    canonical: `${BASE_URL}/about-us`,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: `${BASE_URL}/about-us`,
    title: 'About Us | MANYACARE HealthCity Greater Noida West',
    description:
      'Learn about MANYACARE HealthCity, our clinical specialists, 20+ medical departments, pathology diagnostics, home healthcare services, and care philosophy.',
    siteName: 'MANYACARE HealthCity',
    images: [
      {
        url: '/images/manyacare-og-social.jpg',
        width: 1200,
        height: 630,
        alt: 'About MANYACARE HealthCity',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us | MANYACARE HealthCity Greater Noida West',
    description:
      'Discover MANYACARE HealthCity - multispecialty healthcare, diagnostics, home care, and medical education guidance in Greater Noida West.',
    images: ['/images/manyacare-og-social.jpg'],
  },
};

export default function AboutUsPage() {
  const locationCampuses = [
    {
      title: 'MANYACARE HealthCity Main Campus',
      subtitle: 'GH-07A Market, Techzone 4, Patwari (Near Nirala Estate & Ek Murti Chowk), Greater Noida West, UP 201306',
      phone: '+91-9953239561',
      labPhone: '+91-9953239562',
      hours: 'Mon - Sat: 8:00 AM - 8:00 PM | Sun: 9:00 AM - 2:00 PM',
      href: '/locations/healthcity-main-campus',
      badge: 'Main Campus',
      icon: Building,
    },
    {
      title: 'Gaur City Care Hub',
      subtitle: 'Gaur City 1 & 2 Plaza, Noida Extension, Greater Noida West',
      phone: '+91-9953239561',
      labPhone: '+91-9953239562',
      hours: 'Mon - Sat: 7:30 AM - 8:00 PM',
      href: '/locations/gaur-city-center',
      badge: 'Gaur City',
      icon: MapPin,
    },
    {
      title: 'Sector 4 Diagnostic Hub',
      subtitle: 'Sector 4 Main Market, Greater Noida West',
      phone: '+91-9953239561',
      labPhone: '+91-9953239562',
      hours: 'Mon - Sat: 8:00 AM - 8:00 PM',
      href: '/locations/sector-4-greater-noida',
      icon: Activity,
    },
    {
      title: 'Pari Chowk Center',
      subtitle: 'Near Pari Chowk Metro Station, Greater Noida',
      phone: '+91-9953239561',
      labPhone: '+91-9953239562',
      hours: 'Mon - Sat: 9:00 AM - 7:00 PM',
      href: '/locations/pari-chowk-hub',
      icon: Navigation,
    },
    {
      title: 'Crossings Republik Wing',
      subtitle: 'Crossings Plaza, NH-24 Border & Noida Ext.',
      phone: '+91-9953239561',
      labPhone: '+91-9953239562',
      hours: 'Mon - Sat: 8:00 AM - 8:00 PM',
      href: '/locations/crossings-republik-hub',
      icon: Home,
    },
  ];

  const aboutPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    '@id': `${BASE_URL}/about-us/#webpage`,
    url: `${BASE_URL}/about-us`,
    name: 'About Us | MANYACARE HealthCity Greater Noida West',
    description:
      'Learn about MANYACARE HealthCity, our clinical specialists, 20+ medical departments, pathology diagnostics, home healthcare services, and care philosophy.',
    isPartOf: {
      '@id': `${BASE_URL}/#website`,
    },
    about: {
      '@id': `${BASE_URL}/#organization`,
    },
  };

  return (
    <div className="space-y-16 lg:space-y-24 pb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />
      {/* 1. HERO SECTION (Matching Home Page Aesthetics & Typography) */}
      <section className="relative bg-gradient-to-b from-[#EAF5FF]/80 via-[#F7FAFC] to-white pt-10 pb-16 lg:pt-16 lg:pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'About Us' }]} className="mb-6" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Hero Content Area */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#EAF5FF] border border-[#2196F3]/40 text-[#0B3C5D] text-sm font-bold">
                <ShieldCheck className="w-4 h-4 text-[#2196F3]" />
                <span>Multispecialty Digital Healthcare Network</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium text-[#0B3C5D] tracking-tight leading-tight font-display">
                About MANYACARE
                <span className="block text-[#2196F3] font-bold text-3xl sm:text-4xl lg:text-5xl mt-2">
                  Healthcare Beyond Boundaries
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-[#64748B] font-normal leading-relaxed max-w-2xl">
                Delivering ethical, evidence-based, and accessible integrated healthcare across multispecialty OPD consultations, advanced pathology diagnostics, home care, and medical education guidance.
              </p>

              {/* Action CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/contact-us"
                  className="manyacare-btn-primary py-4 px-7 text-base shadow-md cursor-pointer inline-flex items-center gap-2"
                >
                  <Stethoscope className="w-5 h-5" />
                  <span>Contact Our Care Desk</span>
                </Link>
                <a
                  href="tel:+919953239561"
                  className="manyacare-btn-secondary py-4 px-7 text-base cursor-pointer inline-flex items-center gap-2"
                >
                  <span>Helpline: +91-9953239561</span>
                </a>
              </div>

              {/* Core Pillars Pills */}
              <div className="grid grid-cols-3 gap-4 pt-4 text-left">
                <div className="bg-white p-4 rounded-2xl border border-[#D7E0E8] shadow-xs">
                  <Award className="w-6 h-6 text-[#2196F3] mb-1.5" />
                  <p className="text-sm font-bold text-[#0B3C5D]">Senior MD Doctors</p>
                  <p className="text-xs text-slate-500">PG Clinical Specialists</p>
                </div>
                <div className="bg-white p-4 rounded-2xl border border-[#D7E0E8] shadow-xs">
                  <ShieldCheck className="w-6 h-6 text-[#2196F3] mb-1.5" />
                  <p className="text-sm font-bold text-[#0B3C5D]">Surgeon Aligned</p>
                  <p className="text-xs text-slate-500">Ethical Protocols</p>
                </div>
                <div className="bg-white p-4 rounded-2xl border border-[#D7E0E8] shadow-xs">
                  <Heart className="w-6 h-6 text-[#2196F3] mb-1.5" />
                  <p className="text-sm font-bold text-[#0B3C5D]">Doorstep Care</p>
                  <p className="text-xs text-slate-500">Free Home Sample Draw</p>
                </div>
              </div>
            </div>

            {/* Right Visual Image Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none rounded-3xl overflow-hidden border-2 border-[#D7E0E8] shadow-xl bg-white">
                <img
                  src="/manyacare-about-hero.jpg"
                  alt="MANYACARE Healthcare Team & Clinical Specialists"
                  className="w-full h-[380px] sm:h-[440px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B3C5D]/80 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                  <div className="bg-white/95 backdrop-blur-xs text-[#0B3C5D] p-4.5 rounded-2xl border border-[#D7E0E8] shadow-lg space-y-1">
                    <p className="text-sm font-bold flex items-center gap-2 text-[#0B3C5D]">
                      <CheckCircle2 className="w-5 h-5 text-[#16A34A]" />
                      Compassionate Clinical Excellence
                    </p>
                    <p className="text-xs sm:text-sm text-slate-600">
                      Unifying outpatient consultations, pathology labs, and home healthcare.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Fluid Premium Wave Curve SVG */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none z-10">
          <svg
            className="relative block w-full h-10 sm:h-14 lg:h-20 text-[#F7FAFC]"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,0 C150,80 350,-20 500,45 C650,110 900,15 1200,40 L1200,120 L0,120 Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </section>

      {/* 2. OVERVIEW & CORE PHILOSOPHY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs sm:text-sm font-medium text-[#2196F3] bg-[#EAF5FF] px-4 py-1.5 rounded-full uppercase tracking-wider inline-block">
              OUR CLINICAL APPROACH
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-[#0B3C5D] font-display leading-tight">
              Our Patient-Centered Philosophy
            </h2>
            <p className="text-base sm:text-lg text-[#64748B] leading-relaxed">
              MANYACARE HealthCity was founded on the belief that high-quality, compassionate medical care should be seamless and accessible. We bring together experienced medical consultants, modern pathology diagnostic systems, non-invasive radiology, home healthcare services, and student education counseling under a unified digital umbrella.
            </p>
            <p className="text-base sm:text-lg text-[#64748B] leading-relaxed">
              Our clinical care pathways prioritize early disease detection, ethical clinical decision-making, patient education, and continuous home-care support.
            </p>
            <div className="pt-2">
              <Link href="/contact-us" className="manyacare-btn-primary text-base py-3.5 px-7 cursor-pointer inline-flex items-center gap-2">
                <span>Contact Our Care Desk</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
          <div className="lg:col-span-6">
            <div className="rounded-3xl overflow-hidden border-2 border-[#D7E0E8] shadow-xl bg-white cursor-pointer hover-card-elevation">
              <img
                src="/images/diabetes-endocrinology.jpg"
                alt="MANYACARE Clinical Consultation"
                className="w-full h-[380px] sm:h-[440px] object-fit"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. MEDICAL SERVICES & DEPARTMENTS SECTION (No Image, No Button - Tailored Headings & Content) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs sm:text-sm font-medium text-[#2196F3] bg-[#EAF5FF] px-4 py-1.5 rounded-full uppercase tracking-wider inline-block">
            OUR MEDICAL SERVICES
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-[#0B3C5D] font-display">
            Multispecialty Departments & OPD Wings
          </h2>
          <p className="text-base sm:text-lg text-[#64748B] leading-relaxed">
            Comprehensive medical care protocols delivered across core clinical specialties, diagnostic pathology, and in-home patient services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DEPARTMENTS.slice(0, 6).map((dept) => (
            <div
              key={dept.id}
              className="bg-white border border-[#D7E0E8] rounded-3xl p-7 shadow-xs hover:shadow-lg transition-all duration-300 space-y-4 cursor-pointer flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-[#EAF5FF] text-[#2196F3] flex items-center justify-center font-bold">
                  <Stethoscope className="w-6 h-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#0B3C5D]">
                  {dept.name}
                </h3>
                <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
                  {dept.fullDescription}
                </p>
              </div>              
            </div>
          ))}
        </div>
      </section>
      

      {/* 5. PREVENTIVE HEALTH CHECKUP PACKAGES SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs sm:text-sm font-medium text-[#2196F3] bg-[#EAF5FF] px-4 py-1.5 rounded-full uppercase tracking-wider inline-block">
            PREVENTIVE HEALTHCARE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-[#0B3C5D] font-display">
            Preventive Health Checkup Packages
          </h2>
          <p className="text-base sm:text-lg text-[#64748B] leading-relaxed">
            Targeted health checkup packages for adults, diabetics, cardiac wellness, and senior citizens.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {HEALTH_PACKAGES.slice(0, 6).map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white cursor-pointer border border-[#D7E0E8] rounded-3xl p-7 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between space-y-5"
            >
              <div className="space-y-4">
                <span className="text-xs font-bold text-[#2196F3] bg-[#EAF5FF] px-3.5 py-1 rounded-full uppercase tracking-wider">
                  {pkg.targetAudience}
                </span>
                <h3 className="text-xl font-bold text-[#0B3C5D]">{pkg.title}</h3>
                <p className="text-sm sm:text-base text-[#64748B] leading-relaxed line-clamp-2">{pkg.description}</p>

                
              </div>

              <div className="pt-4 flex items-center justify-between gap-2 border-t border-slate-100">
                <Link
                  href="/health-packages"
                  className="text-sm font-bold text-[#2196F3] hover:text-[#0B3C5D]"
                >
                  View Details
                </Link>
                <Link
                  href="/contact-us"
                  className="manyacare-btn-primary text-sm py-2.5 px-5"
                >
                  Book Package
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. CLINIC CAMPUSES & LOCATIONS SECTION */}
      <section className="bg-[#F7FAFC] py-16 lg:py-20 border-y border-[#D7E0E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs sm:text-sm font-medium text-[#2196F3] bg-[#EAF5FF] px-4 py-1.5 rounded-full uppercase tracking-wider inline-block">
              OUR LOCATIONS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-[#0B3C5D] font-display">
              Clinic Campuses & Care Hubs
            </h2>
            <p className="text-base sm:text-lg text-[#64748B] leading-relaxed">
              Accessible healthcare facilities and doorstep sample collection hubs across Greater Noida West & Gaur City.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {locationCampuses.map((loc, idx) => {
              const IconComponent = loc.icon;
              return (
                <div
                  key={idx}
                  className="bg-white border border-[#D7E0E8] rounded-3xl p-7 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between space-y-5 cursor-pointer"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-[#EAF5FF] text-[#2196F3] flex items-center justify-center">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      {loc.badge && (
                        <span className="text-xs font-bold text-white bg-[#0B3C5D] px-3 py-1 rounded-full">
                          {loc.badge}
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-[#0B3C5D]">{loc.title}</h3>
                    
                    <div className="space-y-2 text-sm text-[#64748B]">
                      <div className="flex items-start gap-2">
                        <MapPin className="w-4 h-4 text-[#2196F3] shrink-0 mt-1" />
                        <span>{loc.subtitle}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-[#2196F3] shrink-0" />
                        <span>OPD: {loc.phone}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-[#2196F3] shrink-0" />
                        <span>{loc.hours}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4  flex items-center justify-between">
                    <Link
                      href={loc.href}
                      className="text-sm font-bold text-[#2196F3] hover:text-[#0B3C5D] flex items-center gap-1"
                    >
                      Explore Branch <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. VISION & MISSION STATEMENT (FOUNDATIONAL GOALS - BULLET POINTS FORMAT) */}
      <section className="bg-white py-16 lg:py-20 border-b border-[#D7E0E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs sm:text-sm font-medium text-[#2196F3] bg-[#EAF5FF] px-4 py-1.5 rounded-full uppercase tracking-wider inline-block">
              FOUNDATIONAL GOALS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-[#0B3C5D] font-display">
              Vision & Mission Statement
            </h2>
            <p className="text-base sm:text-lg text-[#64748B]">
              Defining our commitment to ethical medical care and health excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision Bullet Points */}
            <div className="manyacare-card p-8 sm:p-10 space-y-5 border-t-4 border-t-[#2196F3] cursor-pointer">
              <div className="w-14 h-14 rounded-2xl bg-[#EAF5FF] text-[#2196F3] flex items-center justify-center">
                <Eye className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-[#0B3C5D]">Our Vision</h3>
              <ul className="space-y-3 text-base text-[#64748B]">
                {[
                  'Become one of India’s most trusted integrated healthcare networks.',
                  'Deliver affordable, ethical, and evidence-based patient-centered care.',
                  'Drive healthcare accessibility through medical innovation & technology.',
                  'Maintain high standards of compassionate medical & clinical excellence.',
                  'Ensure seamless integration between OPD clinics, diagnostics, and home care.',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#2196F3] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mission Bullet Points */}
            <div className="manyacare-card p-8 sm:p-10 space-y-5 border-t-4 border-t-[#0B3C5D] cursor-pointer">
              <div className="w-14 h-14 rounded-2xl bg-[#EAF5FF] text-[#0B3C5D] flex items-center justify-center">
                <Target className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-[#0B3C5D]">Our Mission</h3>
              <ul className="space-y-3 text-base text-[#64748B]">
                {[
                  'Deliver quality healthcare across core clinical specialties.',
                  'Promote preventive medicine and healthy community lifestyles.',
                  'Provide accessible pathology & radiology diagnostic services.',
                  'Expand doorstep home healthcare accessibility for all age groups.',
                  'Train future medical and healthcare professionals.',
                  'Uphold strict ethical medical practice, transparency, and patient safety.',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#16A34A] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 8. CORE PILLARS & VALUES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs sm:text-sm font-medium text-[#2196F3] bg-[#EAF5FF] px-4 py-1.5 rounded-full uppercase tracking-wider inline-block">
            VALUES
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-[#0B3C5D] font-display">
            Our Core Pillars & Values
          </h2>
          <p className="text-base sm:text-lg text-[#64748B]">
            Guiding principles that govern our patient care and clinical operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: 'Ethical & Evidence-Based',
              desc: 'We adhere strictly to evidence-based medical guidelines, avoiding unnecessary investigations or unverified treatments.',
            },
            {
              title: 'Integrated Care Pathways',
              desc: 'Connecting outpatient specialist consultations seamlessly with pathology diagnostics, home care, and follow-ups.',
            },
            {
              title: 'Patient Empowerment',
              desc: 'Providing transparent diagnostic results, clear medical explanations, and personalized preventive health packages.',
            },
          ].map((val, idx) => (
            <div key={idx} className="manyacare-card p-8 space-y-4 cursor-pointer">
              <div className="w-12 h-12 rounded-2xl bg-[#EAF5FF] text-[#2196F3] flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-[#2196F3]" />
              </div>
              <h3 className="text-xl font-bold text-[#0B3C5D]">{val.title}</h3>
              <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 9. FAQ SECTION */}
      <section className="pt-8 border-t border-[#D7E0E8] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FaqAccordion
          badgeText="About MANYACARE"
          title="Frequently Asked Questions"
          subtitle="Common questions about MANYACARE HealthCity, our services, locations, and care philosophy."
          faqs={[
            {
              question: 'What is MANYACARE HealthCity?',
              answer: 'MANYACARE HealthCity is an integrated multispecialty outpatient healthcare network offering OPD consultations, pathology diagnostics, digital radiology, home healthcare services, and medical education guidance across Greater Noida West and Gaur City.',
            },
            {
              question: 'What medical specialties are available at MANYACARE?',
              answer: 'MANYACARE offers 20+ specialized OPD departments including General Physician, Cardiology, Diabetology & Endocrinology, Neurology, Chest Medicine, Rheumatology, Gynaecology, Orthopaedics, Paediatrics, Dermatology, Psychiatry, Gastroenterology, and more.',
            },
            {
              question: 'Does MANYACARE provide home doctor visits and doorstep services?',
              answer: 'Yes. MANYACARE provides qualified home doctor visits, certified nursing care, physiotherapy sessions, doorstep blood sample collection, home ECG, IV infusion, vaccination, and medical equipment rental services across Gaur City, Noida Extension, and Greater Noida West.',
            },
            {
              question: 'Where is MANYACARE HealthCity located?',
              answer: 'Our Main Campus is at GH-07A Market, Techzone 4, Patwari (Near Nirala Estate & Ek Murti Chowk), Greater Noida West, UP 201306. We also operate care hubs at Gaur City, Sector 4 Greater Noida, Pari Chowk, and Crossings Republik.',
            },
            {
              question: 'What are the consultation hours at MANYACARE HealthCity?',
              answer: 'Our clinics operate Monday through Saturday from 7:00 AM to 11:00 PM. Sunday appointments are available by prior scheduling. You can reach our helpline at +91-9953239561 for assistance.',
            },
            {
              question: 'Does MANYACARE offer preventive health checkup packages?',
              answer: 'Yes. MANYACARE offers curated preventive health checkup packages including Full Body Assessment, Cardiac Wellness, Diabetic Profile, Women\'s Health, and Senior Citizen packages with free doorstep blood sample collection and same-day digital report delivery.',
            },
          ]}
        />
      </section>
    </div>
  );
}
