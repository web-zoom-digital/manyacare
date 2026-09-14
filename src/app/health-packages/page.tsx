'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { HEALTH_PACKAGES, HealthPackage } from '@/data/packages';
import DepartmentBookingForm from '@/components/DepartmentBookingForm';
import FaqAccordion from '@/components/FaqAccordion';
import AppointmentModal from '@/components/AppointmentModal';
import HeroCurveDivider from '@/components/HeroCurveDivider';
import {
  CheckCircle2,
  Phone,
  Calendar,
  ShieldCheck,
  FlaskConical,
  Clock,
  MapPin,
  Search,
  Award,
  Stethoscope,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  Activity,
  Heart,
  UserCheck,
  Home as HomeIcon,
  HelpCircle,
} from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';

export default function HealthPackagesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedPkgTitle, setSelectedPkgTitle] = useState<string>('');

  const categories = [
    'All',
    'Full Body Assessment',
    'Heart Health',
    'Women’s Health',
    'Geriatric Health',
    'Metabolic Health',
  ];

  const filteredPackages = HEALTH_PACKAGES.filter((pkg) => {
    const matchesCategory =
      selectedCategory === 'All' ||
      pkg.category.toLowerCase().includes(selectedCategory.toLowerCase()) ||
      (selectedCategory === 'Heart Health' && pkg.category.includes('Heart')) ||
      (selectedCategory === 'Women’s Health' && pkg.category.includes('Women')) ||
      (selectedCategory === 'Geriatric Health' && pkg.category.includes('Geriatric')) ||
      (selectedCategory === 'Metabolic Health' && (pkg.category.includes('Metabolic') || pkg.category.includes('Endocrine')));

    const matchesSearch =
      searchQuery === '' ||
      pkg.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pkg.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pkg.includedTests.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  const handleEnquire = (title: string) => {
    setSelectedPkgTitle(title);
    setIsModalOpen(true);
  };

  const packageFaqs = [
    {
      question: 'How do I prepare for a health checkup package requiring fasting?',
      answer: 'For packages requiring fasting (e.g., Executive Health Checkup or Diabetes Profile), refrain from eating or drinking beverages other than plain water for 10 to 12 hours prior to blood sample collection.',
    },
    {
      question: 'Is doorstep blood sample collection free for health checkup packages?',
      answer: 'Yes! MANYACARE HealthCity offers 100% free doorstep blood sample collection for residential societies across Gaur City, Noida Extension, and Greater Noida West.',
    },
    {
      question: 'How soon will I receive my digital lab test reports?',
      answer: 'Routine pathology parameters (CBC, Thyroid, Liver, Kidney, Lipid) are verified by pathologists and sent directly to your WhatsApp and Email within 4 to 8 hours on the same day.',
    },
    {
      question: 'Is doctor consultation included with health checkup packages?',
      answer: 'Yes! Every health package includes a post-report doctor consultation (in-clinic or teleconsultation) with our senior physicians to review your results and advise preventive steps.',
    },
  ];

  const packagesSchema = {
    '@context': 'https://schema.org',
    '@type': 'OfferCatalog',
    '@id': 'https://manyacare.in/health-packages/#catalog',
    name: 'MANYACARE Preventive Health Checkup Packages',
    url: 'https://manyacare.in/health-packages',
    description:
      'Curated preventive health checkup packages including Full Body Assessment, Cardiac Wellness, Diabetic Profile, Women\'s Health, and Senior Citizen packages with free doorstep blood sample collection.',
    itemListElement: HEALTH_PACKAGES.map((pkg, idx) => ({
      '@type': 'Offer',
      position: idx + 1,
      name: pkg.title,
      description: pkg.description,
      price: pkg.price ? pkg.price.replace(/[^0-9]/g, '') || '0' : '0',
      priceCurrency: 'INR',
    })),
  };

  return (
    <div className="pb-24 md:pb-16 space-y-12 sm:space-y-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(packagesSchema) }}
      />
      {/* 1. HERO SECTION (Matching Home Page Style) */}
      <section className="relative bg-gradient-to-b from-[#EAF5FF]/80 via-[#F7FAFC] to-white pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <Breadcrumb items={[{ label: 'Health Packages' }]} className="mb-6" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Hero Content Area */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#EAF5FF] border border-[#2196F3]/40 text-[#0B3C5D] text-xs sm:text-sm font-bold">
                <ShieldCheck className="w-4 h-4 text-[#2196F3]" />
                <span>NABL Standard Preventive Pathology & Diagnostics</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-[#0B3C5D] tracking-tight leading-tight font-display">
                MANYACARE Health Packages
                <span className="block text-[#2196F3] font-bold text-2xl sm:text-3xl lg:text-4xl mt-2">
                  Proactive Organ & Metabolic Health Checkups
                </span>
              </h1>

              <p className="text-base sm:text-lg text-[#64748B] font-normal leading-relaxed max-w-2xl">
                Comprehensive health checkup packages curated for proactive organ monitoring, early biomarker detection, same-day report delivery, and free doorstep blood sample collection across Noida Extension & Greater Noida West.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => handleEnquire('Executive Health Check-Up')}
                  className="manyacare-btn-primary py-3.5 px-6 text-sm sm:text-base shadow-md cursor-pointer"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Book Package Checkup</span>
                </button>
                <a
                  href="https://wa.me/919953239562?text=Hello%20MANYACARE%20HealthCity%2C%20I%20want%20to%20book%20a%20home%20sample%20collection%20for%20a%20health%20package."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="manyacare-btn-secondary py-3.5 px-6 text-sm sm:text-base cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5 text-[#25D366]" />
                  <span>Free Home Collection WhatsApp</span>
                </a>
              </div>

              {/* Key Trust Highlights Grid */}
              <div className="grid grid-cols-3 gap-4 pt-4 text-left">
                <div className="bg-white p-3.5 sm:p-4 rounded-2xl border border-[#D7E0E8] shadow-xs">
                  <FlaskConical className="w-5 h-5 sm:w-6 sm:h-6 text-[#2196F3] mb-1.5" />
                  <p className="text-xs sm:text-sm font-bold text-[#0B3C5D]">NABL Standard</p>
                  <p className="text-[11px] sm:text-xs text-slate-500">Accredited Labs</p>
                </div>
                <div className="bg-white p-3.5 sm:p-4 rounded-2xl border border-[#D7E0E8] shadow-xs">
                  <HomeIcon className="w-5 h-5 sm:w-6 sm:h-6 text-[#2196F3] mb-1.5" />
                  <p className="text-xs sm:text-sm font-bold text-[#0B3C5D]">Free Home Draw</p>
                  <p className="text-[11px] sm:text-xs text-slate-500">30-Min Doorstep</p>
                </div>
                <div className="bg-white p-3.5 sm:p-4 rounded-2xl border border-[#D7E0E8] shadow-xs">
                  <Stethoscope className="w-5 h-5 sm:w-6 sm:h-6 text-[#2196F3] mb-1.5" />
                  <p className="text-xs sm:text-sm font-bold text-[#0B3C5D]">Free Consult</p>
                  <p className="text-[11px] sm:text-xs text-slate-500">Doctor Report Review</p>
                </div>
              </div>
            </div>

            {/* Right DSLR Visual Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none rounded-3xl overflow-hidden border-2 border-[#D7E0E8] shadow-2xl bg-white">
                <img
                  src="/service/manyacare-health-packages-hero.jpg"
                  alt="MANYACARE Health Checkup Packages DSLR View"
                  title="MANYACARE Health Checkup Packages"
                  className="w-full h-[360px] sm:h-[440px] object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B3C5D]/90 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                  <div className="bg-white/95 backdrop-blur-xs text-[#0B3C5D] p-4.5 rounded-2xl border border-[#D7E0E8] shadow-lg space-y-1">
                    <p className="text-sm font-bold flex items-center gap-2 text-[#0B3C5D]">
                      <CheckCircle2 className="w-5 h-5 text-[#16A34A]" />
                      Preventive Organ Screening & Pathology
                    </p>
                    <p className="text-xs sm:text-sm text-slate-600">
                      Curated full body, cardiac, diabetes, women&apos;s, and senior health checkup packages.
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

      {/* 2. CATEGORY FILTERS & SEARCH BAR */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-left">
        <div className="bg-white p-4 sm:p-6 rounded-3xl border border-[#D7E0E8] shadow-xs space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#D7E0E8] pb-4">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#0B3C5D]">Filter & Find Health Checkup Packages</h2>
              <p className="text-xs text-slate-500">Select a category or search for specific test parameters</p>
            </div>

            {/* Search Input Box */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search tests, packages..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm rounded-full border border-[#D7E0E8] focus:outline-none focus:border-[#2196F3] bg-[#F7FAFC]"
              />
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#2196F3] text-white shadow-xs'
                    : 'bg-[#F7FAFC] text-[#0B3C5D] border border-[#D7E0E8] hover:bg-[#EAF5FF]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 3. PREMIUM PACKAGE CARDS GRID (3 PER ROW) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredPackages.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white cursor-pointer border border-[#D7E0E8] rounded-3xl p-6 sm:p-7 shadow-xs hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ease-in-out flex flex-col justify-between hover:border-[#2196F3] relative group text-left"
            >
              <div className="space-y-4">
                {/* Header Badges */}
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-bold text-[#2196F3] bg-[#EAF5FF] px-3 py-1 rounded-full border border-[#2196F3]/30 shrink-0">
                    {pkg.category}
                  </span>
                  <div className="flex items-center gap-1.5 flex-wrap justify-end">
                    {pkg.isPopular && (
                      <span className="text-[10px] font-bold text-[#16A34A] bg-[#E6F4EA] px-2.5 py-1 rounded-full border border-[#16A34A]/30 uppercase tracking-wider">
                        Most Popular
                      </span>
                    )}
                    <span className="text-xs font-bold text-[#0B3C5D] bg-[#F7FAFC] px-2.5 py-1 rounded-full border border-[#D7E0E8]">
                      {pkg.includedTestsCount}+ Parameters
                    </span>
                  </div>
                </div>

                {/* Title & Audience */}
                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#0B3C5D] font-display leading-tight group-hover:text-[#2196F3] transition-colors">
                    {pkg.title}
                  </h3>
                  <div className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 bg-[#F7FAFC] px-3 py-1.5 rounded-xl border border-[#D7E0E8]">
                    <span className="font-bold text-[#0B3C5D]">For:</span>
                    <span>{pkg.targetAudience}</span>
                  </div>
                </div>

                <p className="text-sm text-[#64748B] leading-relaxed">
                  {pkg.description}
                </p>

                {/* Fasting & Sample Collection Badge */}
                <div className="flex items-center gap-2.5 text-xs bg-[#EAF5FF]/70 p-3.5 rounded-2xl border border-[#2196F3]/20">
                  <Clock className="w-4 h-4 text-[#2196F3] shrink-0" />
                  <span className="text-[#0B3C5D] font-medium">
                    {pkg.fastingRequired ? '10-12 Hours Overnight Fasting Required' : 'Non-Fasting Test Package'}
                  </span>
                </div>
              </div>

              {/* Bottom Price & Dual Action Buttons (Equal Height & Perfect Alignment) */}
              <div className="pt-5 mt-4 border-t border-[#D7E0E8] space-y-3.5">
                <div className="flex items-center justify-between text-xs">
                  <div>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Package Pricing</p>
                    <p className="text-sm font-bold text-[#0B3C5D]">{pkg.price || 'Verified Pricing'}</p>
                  </div>
                  <span className="text-[11px] font-bold text-[#16A34A] bg-[#E6F4EA] px-2.5 py-1 rounded-full border border-[#16A34A]/20 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#16A34A]" />
                    <span>Free Home Draw</span>
                  </span>
                </div>

                {/* Aligned 2-Button Action Row */}
                <div className="grid grid-cols-2 gap-2.5 pt-1">
                  <button
                    onClick={() => handleEnquire(pkg.title)}
                    className="manyacare-btn-primary text-xs py-3 px-3 w-full justify-center shadow-xs cursor-pointer"
                  >
                    <Calendar className="w-4 h-4 shrink-0" />
                    <span>Enquire Package</span>
                  </button>
                  <a
                    href="https://wa.me/919953239562?text=Hello%20MANYACARE%20HealthCity%2C%20I%20want%20to%20inquire%20about%20the%20Package."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="manyacare-btn-secondary text-xs py-3 px-3 w-full justify-center cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
                    <span>WhatsApp Inquiry</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredPackages.length === 0 && (
          <div className="bg-white p-12 rounded-3xl border border-[#D7E0E8] text-center space-y-3">
            <HelpCircle className="w-10 h-10 text-slate-300 mx-auto" />
            <h3 className="text-lg font-bold text-[#0B3C5D]">No packages found matching &quot;{searchQuery}&quot;</h3>
            <p className="text-xs text-slate-500">Try adjusting your search query or selecting a different category tab.</p>
            <button
              onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
              className="manyacare-btn-secondary text-xs py-2 px-4 cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* 4. WHY CHOOSE MANYACARE HEALTH PACKAGES */}
        <div className="bg-white border border-[#D7E0E8] rounded-3xl p-6 sm:p-8 shadow-xs space-y-6">
          <div className="text-left space-y-2 border-b border-[#D7E0E8] pb-4">
            <span className="text-xs font-bold text-[#2196F3] bg-[#EAF5FF] px-3 py-1 rounded-full uppercase tracking-wider">
              Diagnostic Excellence
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B3C5D] font-display">
              Why Choose MANYACARE Preventive Health Checkups?
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Trusted pathology standards, rapid digital reporting, and expert clinical guidance under one roof.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="p-4 rounded-2xl bg-[#F7FAFC] border border-[#D7E0E8] space-y-2">
              <FlaskConical className="w-6 h-6 text-[#2196F3]" />
              <h3 className="text-sm font-bold text-[#0B3C5D]">NABL Standard Testing</h3>
              <p className="text-xs text-slate-600">Fully automated pathology analyzer equipment ensuring high precision.</p>
            </div>

            <div className="p-4 rounded-2xl bg-[#F7FAFC] border border-[#D7E0E8] space-y-2">
              <HomeIcon className="w-6 h-6 text-[#2196F3]" />
              <h3 className="text-sm font-bold text-[#0B3C5D]">Free Home Sample Draw</h3>
              <p className="text-xs text-slate-600">Trained phlebotomists collect blood samples from your residence.</p>
            </div>

            <div className="p-4 rounded-2xl bg-[#F7FAFC] border border-[#D7E0E8] space-y-2">
              <Clock className="w-6 h-6 text-[#2196F3]" />
              <h3 className="text-sm font-bold text-[#0B3C5D]">Same-Day Digital Reports</h3>
              <p className="text-xs text-slate-600">Reports sent straight to your WhatsApp and Email in 4-8 hours.</p>
            </div>

            <div className="p-4 rounded-2xl bg-[#F7FAFC] border border-[#D7E0E8] space-y-2">
              <Stethoscope className="w-6 h-6 text-[#2196F3]" />
              <h3 className="text-sm font-bold text-[#0B3C5D]">Free Doctor Review</h3>
              <p className="text-xs text-slate-600">Complimentary physician consultation to interpret your package results.</p>
            </div>
          </div>
        </div>

        {/* 5. MAIN 2-COLUMN SECTION (BOOKING FORM + CARE INFO) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-4">
          
          {/* Left Care Info Card (8 Cols) */}
          <div className="lg:col-span-8 bg-white border border-[#D7E0E8] rounded-3xl p-6 sm:p-8 shadow-xs space-y-6 text-left">
            <div className="space-y-2 border-b border-[#D7E0E8] pb-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF5FF] text-[#0B3C5D] text-xs font-bold">
                <Activity className="w-4 h-4 text-[#2196F3]" />
                <span>Proactive Wellness Guidance</span>
              </div>
              <h3 className="text-2xl font-bold text-[#0B3C5D]">
                How Preventive Health Packages Protect Your Well-Being
              </h3>
              <p className="text-xs sm:text-sm text-slate-500">
                Early identification of metabolic imbalances before symptoms manifest.
              </p>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
              <p>
                Preventive health checkups are designed to screen critical organ systems including your heart, liver, kidneys, thyroid, and blood sugar levels. Routine monitoring allows senior physicians to detect sub-clinical markers of hypertension, pre-diabetes, dyslipidemia, or thyroid dysfunction early.
              </p>
              <p>
                At MANYACARE HealthCity, our health checkup packages combine pathology blood panels, digital X-rays, ECGs, and doctor consultations to give you a complete picture of your health.
              </p>
            </div>

            {/* Helpline Box */}
            <div className="bg-gradient-to-r from-[#EAF5FF] to-[#F7FAFC] p-4.5 rounded-2xl border border-[#2196F3]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <p className="text-sm font-bold text-[#0B3C5D] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#16A34A]" />
                  Need Help Choosing the Right Health Package?
                </p>
                <p className="text-xs text-slate-600">
                  Speak directly with our lab desk at <strong className="text-[#0B3C5D]">+91-9953239562</strong> for personalized recommendations.
                </p>
              </div>
              <a
                href="tel:+919953239562"
                className="manyacare-btn-primary text-xs py-2.5 px-4 shrink-0"
              >
                <Phone className="w-4 h-4" />
                <span>Call Lab Desk</span>
              </a>
            </div>
          </div>

          {/* Right Embedded Booking Form (4 Cols) */}
          <div className="lg:col-span-4 sticky top-24">
            <DepartmentBookingForm departmentName="Preventive Health Packages" />
          </div>

        </div>

        {/* 6. CENTERED ACCORDION FAQ SECTION */}
        <div className="pt-8 border-t border-[#D7E0E8] max-w-4xl mx-auto">
          <FaqAccordion
            badgeText="Package FAQs"
            title="Frequently Asked Questions"
            subtitle="Everything you need to know about our health checkup packages and home collection."
            faqs={packageFaqs}
          />
        </div>

        {/* 7. VERIFIED LOCATION MAP & CONTACT BAR */}
        <div className="pt-8 border-t border-[#D7E0E8]">
          <div className="bg-white border border-[#D7E0E8] rounded-3xl overflow-hidden shadow-xs text-left">
            <div className="p-6 sm:p-8 border-b border-[#D7E0E8] flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-xs font-bold text-[#2196F3] bg-[#EAF5FF] px-3 py-1 rounded-full uppercase tracking-wider inline-block">
                  Verified Location Map
                </span>
                <h2 className="text-2xl font-bold text-[#0B3C5D]">
                  MANYACARE HealthCity Main Campus
                </h2>
                <p className="text-xs sm:text-sm text-slate-500">
                  GH-07A Market, Techzone 4, Patwari (Near Nirala Estate & Ek Murti Chowk), Greater Noida West
                </p>
              </div>

              <div className="flex flex-wrap gap-2 shrink-0">
                <a
                  href="https://maps.google.com/?q=MANYACARE+HealthCity+Techzone+4+Greater+Noida+West"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="manyacare-btn-primary text-xs py-2.5 px-4"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Get Directions</span>
                </a>
                <a
                  href="tel:+919953239561"
                  className="manyacare-btn-secondary text-xs py-2.5 px-4"
                >
                  <Phone className="w-4 h-4 text-[#2196F3]" />
                  <span>Call: +91-9953239561</span>
                </a>
              </div>
            </div>

            {/* Map Frame */}
            <div className="h-[360px] sm:h-[400px] w-full bg-slate-100">
              <iframe
                title="Google Location Map for MANYACARE HealthCity"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.562123!2d77.435!3d28.595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjhCsDM1JzQyLjAiTiA3N8KwMjYnMDYuMCJF!5e0!3m2!1sen!2sin!4v1650000000000"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

      </div>



      {/* Appointment Modal */}
      {isModalOpen && (
        <AppointmentModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          defaultDepartment={selectedPkgTitle || 'Executive Health Check-Up'}
        />
      )}
    </div>
  );
}
