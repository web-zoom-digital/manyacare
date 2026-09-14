import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Metadata } from 'next';
import { LOCATIONS } from '@/data/locations';
import { DEPARTMENTS } from '@/data/departments';
import DepartmentBookingForm from '@/components/DepartmentBookingForm';
import FaqAccordion from '@/components/FaqAccordion';
import HeroCurveDivider from '@/components/HeroCurveDivider';
import {
  MapPin,
  Phone,
  Clock,
  Mail,
  ChevronLeft,
  CheckCircle2,
  Calendar,
  ShieldCheck,
  Stethoscope,
  FlaskConical,
  Building,
  Navigation,
  ChevronRight,
  Link as LinkIcon,
  MessageCircle,
  Activity,
} from 'lucide-react';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return LOCATIONS.map((loc) => ({
    slug: loc.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const loc = LOCATIONS.find((l) => l.slug === slug);
  if (!loc) return { title: 'Location Not Found' };
  return {
    title: `MANYACARE HealthCity in ${loc.cityName} (${loc.localityName})`,
    description: `Comprehensive healthcare services, diagnostic testing, home healthcare, and specialist consultations at MANYACARE HealthCity in ${loc.cityName}.`,
  };
}

export default async function LocationLandingPage({ params }: Props) {
  const { slug } = await params;
  const location = LOCATIONS.find((l) => l.slug === slug);

  if (!location) {
    notFound();
  }

  const otherLocations = LOCATIONS.filter((l) => l.slug !== location.slug);

  const heroTitle = `MANYACARE HealthCity in ${location.cityName}`;
  const heroSubtitle = `${location.localityName} Medical Hub & Service Zone`;
  const heroFullHeading = `${heroTitle} - ${heroSubtitle}`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: location.displayName,
    telephone: location.phone,
    email: location.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: location.addressPlaceholder,
      addressLocality: location.cityName,
      addressCountry: 'IN',
    },
    openingHours: location.operatingHours,
  };

  const defaultFaqs = location.faqs && location.faqs.length > 0 ? location.faqs : [
    {
      question: `What medical services are available at MANYACARE ${location.displayName}?`,
      answer: `Our ${location.displayName} provides specialist OPD consultations, diagnostic pathology blood testing, digital radiology imaging, and doorstep sample collection.`
    },
    {
      question: `How do I schedule an appointment at ${location.localityName}?`,
      answer: `You can call our direct location helpline at ${location.phone} or fill out the online booking form on this page.`
    },
    {
      question: `Is free home blood sample collection available in ${location.localityName}?`,
      answer: `Yes, MANYACARE offers free doorstep blood sample collection for residential societies across ${location.localityName} and ${location.cityName}.`
    },
    {
      question: `What are the operating hours for ${location.displayName}?`,
      answer: `This location hub operates ${location.operatingHours}.`
    }
  ];

  return (
    <div className="pb-16 space-y-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. PREMIUM HERO SECTION */}
      <section className="relative bg-gradient-to-b from-[#EAF5FF]/80 via-[#F7FAFC] to-white pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb Link */}
          <div className="mb-6">
            <Link
              href="/locations"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-[#0B3C5D] hover:text-[#2196F3] transition-colors bg-white px-3.5 py-1.5 rounded-full border border-[#D7E0E8] shadow-xs"
            >
              <ChevronLeft className="w-4 h-4 text-[#2196F3]" />
              <span>Back to All Locations & Care Hubs</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Hero Content Area */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#EAF5FF] border border-[#2196F3]/40 text-[#0B3C5D] text-xs sm:text-sm font-bold">
                <MapPin className="w-4 h-4 text-[#2196F3]" />
                <span>{location.cityName} Care Region</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-[#0B3C5D] tracking-tight leading-tight font-display">
                {heroTitle}
                <span className="block text-[#2196F3] font-bold text-2xl sm:text-3xl lg:text-4xl mt-2">
                  {heroSubtitle}
                </span>
              </h1>

              <p className="text-base sm:text-lg text-[#64748B] font-normal leading-relaxed max-w-2xl">
                Accessible multispecialty medical consultations, diagnostic pathology sample collection, digital radiology, and home healthcare serving {location.localityName} and surrounding residential societies.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={`tel:${location.phone.replace(/[^0-9+]/g, '')}`}
                  className="manyacare-btn-primary py-3.5 px-6 text-sm sm:text-base shadow-md"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Call Location: {location.phone}</span>
                </a>
                <a
                  href="https://wa.me/919953239561?text=Hello%20MANYACARE%20HealthCity%2C%20I%20want%20to%20inquire%20about%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="manyacare-btn-secondary py-3.5 px-6 text-sm sm:text-base"
                >
                  <MessageCircle className="w-5 h-5 text-[#25D366]" />
                  <span>WhatsApp Inquiry</span>
                </a>
              </div>

              {/* Key Trust Highlights */}
              <div className="grid grid-cols-3 gap-4 pt-4 text-left cursor-pointer">
                <div className="bg-white p-3.5 sm:p-4 rounded-2xl border border-[#D7E0E8] shadow-xs">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-[#2196F3] mb-1.5" />
                  <p className="text-xs sm:text-sm font-bold text-[#0B3C5D]">Verified Campus</p>
                  <p className="text-[11px] sm:text-xs text-slate-500">{location.localityName}</p>
                </div>
                <div className="bg-white p-3.5 sm:p-4 rounded-2xl border border-[#D7E0E8] shadow-xs">
                  <FlaskConical className="w-5 h-5 sm:w-6 sm:h-6 text-[#2196F3] mb-1.5" />
                  <p className="text-xs sm:text-sm font-bold text-[#0B3C5D]">Lab & Radiology</p>
                  <p className="text-[11px] sm:text-xs text-slate-500">Same-Day Reports</p>
                </div>
                <div className="bg-white p-3.5 sm:p-4 rounded-2xl border border-[#D7E0E8] shadow-xs">
                  <Building className="w-5 h-5 sm:w-6 sm:h-6 text-[#2196F3] mb-1.5" />
                  <p className="text-xs sm:text-sm font-bold text-[#0B3C5D]">Home Visits</p>
                  <p className="text-[11px] sm:text-xs text-slate-500">Doorstep Sample Draw</p>
                </div>
              </div>
            </div>

            {/* Right Visual DSLR Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none rounded-3xl overflow-hidden border-2 border-[#D7E0E8] shadow-2xl bg-white">
                <img
                  src={location.heroImage || '/location/manyacare-healthcity-main-campus-noida-extension.jpg'}
                  alt={heroFullHeading}
                  title={heroFullHeading}
                  className="w-full h-[360px] sm:h-[440px] object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B3C5D]/90 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                  <div className="bg-white/95 backdrop-blur-xs text-[#0B3C5D] p-4.5 rounded-2xl border border-[#D7E0E8] shadow-lg space-y-1">
                    <p className="text-sm font-bold flex items-center gap-2 text-[#0B3C5D]">
                      <CheckCircle2 className="w-5 h-5 text-[#16A34A]" />
                      {location.displayName}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-600">
                      Delivering clinical OPD, pathology laboratory diagnostics, and doorstep home care across {location.localityName}.
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

      {/* 2. MAIN CONTENT & SIDEBAR GRID */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Main Content Area (8 Cols) */}
          <div className="lg:col-span-8 space-y-8 text-left">
            
            {/* Dynamic Location Clinical Care Content Section (ABOVE Campus Overview & Access) */}
            <div className="bg-white border border-[#D7E0E8] rounded-3xl p-6 sm:p-8 shadow-xs space-y-6">
              <div className="space-y-2 border-b border-[#D7E0E8] pb-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF5FF] border border-[#2196F3]/30 text-[#0B3C5D] text-xs font-bold uppercase tracking-wider">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#2196F3]" />
                  <span>Healthcare Hub in {location.cityName}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#0B3C5D] tracking-tight font-display">
                  Comprehensive Medical Care & Clinical Services in {location.cityName}
                </h2>
                <p className="text-sm sm:text-base text-[#64748B]">
                  Delivering trusted specialist consultations, NABL-standard diagnostic testing, digital radiology, and home healthcare across {location.localityName} and nearby sectors.
                </p>
              </div>

              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  At <strong className="text-[#0B3C5D] font-semibold">MANYACARE HealthCity {location.cityName}</strong>, we are committed to providing accessible, high-quality, and patient-centered healthcare solutions tailored specifically for residents of <strong className="text-[#0B3C5D] font-semibold">{location.localityName}</strong> and surrounding residential complexes. Our multispecialty medical center brings together expert clinical doctors, modern diagnostic machinery, and rapid home sample collection under one roof.
                </p>
                <p>
                  Whether you require a routine health checkup, specialist doctor opinion, specialized blood tests, or diagnostic imaging, our center ensures quick turnarounds with accurate clinical reports and compassionate care.
                </p>
              </div>

              {/* Key Medical Care Highlights Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-[#F7FAFC] border border-[#D7E0E8] space-y-2 hover:border-[#2196F3]/50 transition-colors">
                  <div className="flex items-center gap-2.5 text-[#0B3C5D] font-bold text-base">
                    <div className="w-8 h-8 rounded-xl bg-[#EAF5FF] text-[#2196F3] flex items-center justify-center shrink-0">
                      <Stethoscope className="w-4 h-4" />
                    </div>
                    <span>Specialist Doctor Consultations</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-normal">
                    Direct access to experienced consultants in General Medicine, Pediatrics, Cardiology, Orthopedics, Gynecology, and Diabetes care in {location.localityName}.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#F7FAFC] border border-[#D7E0E8] space-y-2 hover:border-[#2196F3]/50 transition-colors">
                  <div className="flex items-center gap-2.5 text-[#0B3C5D] font-bold text-base">
                    <div className="w-8 h-8 rounded-xl bg-[#EAF5FF] text-[#2196F3] flex items-center justify-center shrink-0">
                      <FlaskConical className="w-4 h-4" />
                    </div>
                    <span>NABL Pathology Diagnostics</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-normal">
                    Complete blood workup, preventive health packages, thyroid tests, lipid profiles, and HbA1c tests with digital reports delivered directly to your WhatsApp.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#F7FAFC] border border-[#D7E0E8] space-y-2 hover:border-[#2196F3]/50 transition-colors">
                  <div className="flex items-center gap-2.5 text-[#0B3C5D] font-bold text-base">
                    <div className="w-8 h-8 rounded-xl bg-[#EAF5FF] text-[#2196F3] flex items-center justify-center shrink-0">
                      <Activity className="w-4 h-4" />
                    </div>
                    <span>Digital Radiology & ECG</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-normal">
                    Advanced digital X-ray services, 12-lead ECG testing, and cardiac monitoring performed by certified radiology technicians.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#F7FAFC] border border-[#D7E0E8] space-y-2 hover:border-[#2196F3]/50 transition-colors">
                  <div className="flex items-center gap-2.5 text-[#0B3C5D] font-bold text-base">
                    <div className="w-8 h-8 rounded-xl bg-[#EAF5FF] text-[#2196F3] flex items-center justify-center shrink-0">
                      <Building className="w-4 h-4" />
                    </div>
                    <span>Doorstep Home Healthcare</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-normal">
                    Hassle-free blood sample collection at home and senior care support serving all residential societies in {location.localityName} and {location.cityName}.
                  </p>
                </div>
              </div>

              
            </div>

            {/* Overview Card */}
            <div className="bg-white border border-[#D7E0E8] rounded-3xl p-6 sm:p-8 shadow-xs space-y-5">
              <div className="flex items-center gap-3 border-b border-[#D7E0E8] pb-4">
                <div className="w-10 h-10 rounded-2xl bg-[#EAF5FF] text-[#2196F3] flex items-center justify-center font-bold">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#0B3C5D]">Campus Overview & Access</h2>
                  <p className="text-xs text-slate-500">Verified Address & Contact Helplines</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-[#F7FAFC] border border-[#D7E0E8] space-y-1.5">
                  <div className="flex items-center gap-1.5 font-bold text-[#0B3C5D]">
                    <MapPin className="w-4 h-4 text-[#2196F3]" />
                    <span>Location Address</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed">{location.addressPlaceholder}</p>
                </div>

                <div className="p-4 rounded-2xl bg-[#F7FAFC] border border-[#D7E0E8] space-y-1.5">
                  <div className="flex items-center gap-1.5 font-bold text-[#0B3C5D]">
                    <Phone className="w-4 h-4 text-[#2196F3]" />
                    <span>Helpline Desk</span>
                  </div>
                  <p className="text-slate-600">Appointments: {location.phone}</p>
                  <p className="text-slate-600">Lab Desk: {location.labPhone}</p>
                </div>

                <div className="p-4 rounded-2xl bg-[#F7FAFC] border border-[#D7E0E8] space-y-1.5">
                  <div className="flex items-center gap-1.5 font-bold text-[#0B3C5D]">
                    <Clock className="w-4 h-4 text-[#2196F3]" />
                    <span>OPD Timings</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed">{location.operatingHours}</p>
                </div>
              </div>
            </div>

            {/* Services Available Card */}
            <div className="bg-white border border-[#D7E0E8] rounded-3xl p-6 sm:p-8 shadow-xs space-y-6">
              <div className="flex items-center justify-between border-b border-[#D7E0E8] pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#E6F4EA] text-[#16A34A] flex items-center justify-center font-bold">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0B3C5D]">Services Available at this Hub</h3>
                    <p className="text-xs text-slate-500">Outpatient OPD, pathology, radiology & doorstep services</p>
                  </div>
                </div>
                <span className="text-xs font-bold text-[#16A34A] bg-[#E6F4EA] px-3 py-1 rounded-full">
                  {location.servicesAvailable.length} Active Services
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {location.servicesAvailable.map((serv, i) => (
                  <div
                    key={i}
                    className="p-3.5 rounded-2xl bg-[#F7FAFC] border border-[#D7E0E8] flex items-start gap-3 hover:border-[#16A34A] hover:bg-white transition-all duration-200 group"
                  >
                    <div className="w-6 h-6 rounded-xl bg-[#E6F4EA] text-[#16A34A] flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#16A34A] group-hover:text-white transition-colors">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-[#0B3C5D] leading-snug">
                      {serv}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Neighborhood Residential Reach */}
            <div className="bg-white border border-[#D7E0E8] rounded-3xl p-6 sm:p-8 shadow-xs space-y-5">
              <div className="flex items-center gap-3 border-b border-[#D7E0E8] pb-4">
                <div className="w-10 h-10 rounded-2xl bg-[#EAF5FF] text-[#2196F3] flex items-center justify-center font-bold">
                  <Navigation className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0B3C5D]">Nearby Residential Societies Served</h3>
                  <p className="text-xs text-slate-500">Direct doorstep blood sample collection & home doctor visits</p>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs text-[#0B3C5D] font-semibold">
                <div className="p-3 rounded-xl bg-[#F7FAFC] border border-[#D7E0E8] flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#2196F3]" />
                  <span>Gaur City 1 & 2</span>
                </div>
                <div className="p-3 rounded-xl bg-[#F7FAFC] border border-[#D7E0E8] flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#2196F3]" />
                  <span>Nirala Estate</span>
                </div>
                <div className="p-3 rounded-xl bg-[#F7FAFC] border border-[#D7E0E8] flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#2196F3]" />
                  <span>Cherry County</span>
                </div>
                <div className="p-3 rounded-xl bg-[#F7FAFC] border border-[#D7E0E8] flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#2196F3]" />
                  <span>Eco Village 1, 2, 3</span>
                </div>
                <div className="p-3 rounded-xl bg-[#F7FAFC] border border-[#D7E0E8] flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#2196F3]" />
                  <span>Techzone 4 Sectors</span>
                </div>
                <div className="p-3 rounded-xl bg-[#F7FAFC] border border-[#D7E0E8] flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#2196F3]" />
                  <span>Sector 4, 10, 16B</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Sidebar Area (4 Cols) */}
          <div className="lg:col-span-4 space-y-6 sticky top-24">
            
            {/* 1. Interactive Booking Form Component */}
            <DepartmentBookingForm departmentName={location.displayName} />

            {/* 2. SEO Silo Structure & Internal Links Widget */}
            <div className="bg-white border border-[#D7E0E8] rounded-3xl p-6 shadow-xs space-y-5 text-left">
              <div className="border-b border-[#D7E0E8] pb-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <LinkIcon className="w-4 h-4 text-[#2196F3]" />
                  <h3 className="text-base font-bold text-[#0B3C5D]">Related Care Hubs & Services</h3>
                </div>
                <span className="text-[10px] font-bold uppercase text-[#2196F3] bg-[#EAF5FF] px-2 py-0.5 rounded">
                  Silo Links
                </span>
              </div>

              <div className="space-y-3 text-xs">
                {/* Core Healthcare Services */}
                <div className="space-y-1.5">
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    Specialist Departments & Labs
                  </p>
                  <Link
                    href="/departments"
                    className="flex items-center justify-between p-2.5 rounded-xl bg-[#F7FAFC] hover:bg-[#EAF5FF] text-[#0B3C5D] font-semibold hover:text-[#2196F3] border border-[#D7E0E8] transition-all group"
                  >
                    <span className="flex items-center gap-2">
                      <Stethoscope className="w-4 h-4 text-[#2196F3]" />
                      <span>All Clinical Departments</span>
                    </span>
                    <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-[#2196F3]" />
                  </Link>

                  <Link
                    href="/diagnostics"
                    className="flex items-center justify-between p-2.5 rounded-xl bg-[#F7FAFC] hover:bg-[#EAF5FF] text-[#0B3C5D] font-semibold hover:text-[#2196F3] border border-[#D7E0E8] transition-all group"
                  >
                    <span className="flex items-center gap-2">
                      <FlaskConical className="w-4 h-4 text-[#2196F3]" />
                      <span>Pathology Lab Diagnostics</span>
                    </span>
                    <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-[#2196F3]" />
                  </Link>

                  <Link
                    href="/radiology"
                    className="flex items-center justify-between p-2.5 rounded-xl bg-[#F7FAFC] hover:bg-[#EAF5FF] text-[#0B3C5D] font-semibold hover:text-[#2196F3] border border-[#D7E0E8] transition-all group"
                  >
                    <span className="flex items-center gap-2">
                      <Activity className="w-4 h-4 text-[#2196F3]" />
                      <span>Digital Radiology & X-Ray</span>
                    </span>
                    <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-[#2196F3]" />
                  </Link>

                  <Link
                    href="/home-healthcare"
                    className="flex items-center justify-between p-2.5 rounded-xl bg-[#F7FAFC] hover:bg-[#EAF5FF] text-[#0B3C5D] font-semibold hover:text-[#2196F3] border border-[#D7E0E8] transition-all group"
                  >
                    <span className="flex items-center gap-2">
                      <Building className="w-4 h-4 text-[#2196F3]" />
                      <span>Doorstep Home Healthcare</span>
                    </span>
                    <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-[#2196F3]" />
                  </Link>
                </div>

                {/* Other Location Hub Links */}
                <div className="pt-2 space-y-1.5">
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    Other Location Care Hubs
                  </p>
                  <div className="grid grid-cols-1 gap-1.5">
                    {otherLocations.map((loc) => (
                      <Link
                        key={loc.id}
                        href={`/locations/${loc.slug}`}
                        className="p-2 rounded-lg text-slate-700 hover:text-[#2196F3] hover:bg-[#EAF5FF]/60 flex items-center justify-between text-xs transition-colors"
                      >
                        <span className="truncate">• {loc.displayName}</span>
                        <ChevronRight className="w-3.5 h-3.5 text-slate-300 shrink-0" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* 3. CENTERED ACCORDION FAQ SECTION */}
        <div className="pt-8 border-t border-[#D7E0E8] max-w-4xl mx-auto">
          <FaqAccordion
            badgeText={`${location.cityName} FAQs`}
            title="Frequently Asked Questions"
            subtitle={`Key insights and location queries for ${location.displayName}.`}
            faqs={defaultFaqs}
          />
        </div>

        {/* 4. LOCATION-SPECIFIC FULL-WIDTH GOOGLE MAP SECTION (BELOW FAQ) */}
        <div className="pt-8 border-t border-[#D7E0E8]">
          <div className="bg-white border border-[#D7E0E8] rounded-3xl overflow-hidden shadow-xs text-left">
            <div className="p-6 sm:p-8 border-b border-[#D7E0E8] flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-xs font-bold text-[#2196F3] bg-[#EAF5FF] px-3 py-1 rounded-full uppercase tracking-wider inline-block">
                  Verified Location Map
                </span>
                <h2 className="text-2xl font-bold text-[#0B3C5D]">
                  {location.displayName} Location Map
                </h2>
                <p className="text-xs sm:text-sm text-slate-500">
                  {location.addressPlaceholder}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 shrink-0">
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(location.displayName + ' ' + location.addressPlaceholder)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="manyacare-btn-primary text-xs py-2.5 px-4"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Get Directions</span>
                </a>
                <a
                  href={`tel:${location.phone.replace(/[^0-9+]/g, '')}`}
                  className="manyacare-btn-secondary text-xs py-2.5 px-4"
                >
                  <Phone className="w-4 h-4 text-[#2196F3]" />
                  <span>Call: {location.phone}</span>
                </a>
              </div>
            </div>

            {/* Full-width Location-Specific Google Map */}
            <div className="h-[380px] sm:h-[450px] w-full bg-slate-100">
              <iframe
                title={`Google Location Map for ${location.displayName}`}
                src={location.mapEmbedUrl}
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
