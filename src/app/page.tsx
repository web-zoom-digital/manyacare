'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Stethoscope,
  Calendar,
  Home as HomeIcon,
  FlaskConical,
  Video,
  ChevronRight,
  ShieldCheck,
  Award,
  Users,
  Clock,
  MapPin,
  Phone,
  Mail,
  CheckCircle2,
  Activity,
  ArrowRight,
  Heart,
  HelpCircle,
  Zap,
  Star,
  ChevronDown,
  AlertCircle,
} from 'lucide-react';
import { DEPARTMENTS } from '@/data/departments';
import { DOCTORS } from '@/data/doctors';
import { DIAGNOSTIC_TESTS } from '@/data/diagnostics';
import { RADIOLOGY_MODALITIES } from '@/data/radiology';
import { HEALTH_PACKAGES } from '@/data/packages';
import { TESTIMONIALS } from '@/data/testimonials';
import { BLOG_POSTS } from '@/data/blogs';
import { GLOBAL_FAQS } from '@/data/faqs';
import AppointmentModal from '@/components/AppointmentModal';

export default function HomePage() {
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);
  const [modalDepartment, setModalDepartment] = useState('');
  const [modalConsultationType, setModalConsultationType] = useState<
    'In-Clinic' | 'Home Visit' | 'Online Consultation'
  >('In-Clinic');

  const [activeFaqIndex, setActiveFaqIndex] = useState<number | null>(0);

  // Inline Home Page Booking Form State
  const [inlineForm, setInlineForm] = useState({
    fullName: '',
    phone: '',
    email: '',
    department: DEPARTMENTS[0]?.name || 'General Physician & Internal Medicine',
    consultationType: 'In-Clinic' as 'In-Clinic' | 'Home Visit' | 'Online Consultation',
    preferredDate: '',
    preferredTime: 'Morning (09:00 AM - 12:00 PM)',
    message: '',
    consent: false,
  });

  const [isInlineSubmitting, setIsInlineSubmitting] = useState(false);
  const [isInlineSubmitted, setIsInlineSubmitted] = useState(false);
  const [inlineErrorMsg, setInlineErrorMsg] = useState('');

  const handleInlineSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inlineForm.fullName || !inlineForm.phone || !inlineForm.consent) {
      setInlineErrorMsg('Please fill in required fields (Name & Phone) and accept privacy consent.');
      return;
    }
    setInlineErrorMsg('');
    setIsInlineSubmitting(true);
    setTimeout(() => {
      setIsInlineSubmitting(false);
      setIsInlineSubmitted(true);
    }, 800);
  };

  const openBookingModal = (
    deptName: string = '',
    consultType: 'In-Clinic' | 'Home Visit' | 'Online Consultation' = 'In-Clinic'
  ) => {
    setModalDepartment(deptName);
    setModalConsultationType(consultType);
    setIsAppointmentModalOpen(true);
  };

  return (
    <div className="space-y-16 lg:space-y-24 pb-16">
      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-b from-[#EAF5FF]/80 via-[#F7FAFC] to-white pt-8 pb-16 lg:pt-16 lg:pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Hero Content Area */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#EAF5FF] border border-[#2196F3]/40 text-[#0B3C5D] text-sm font-bold">
                <img src="/manyacare-logo.jpeg" alt="MANYACARE Logo" className="w-5 h-5 rounded-full object-cover" />
                <ShieldCheck className="w-4 h-4 text-[#2196F3]" />
                <span>Multispecialty Digital Healthcare Platform</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium text-[#0B3C5D] tracking-tight leading-tight font-display">
                MANYACARE HealthCity
                <span className="block text-[#2196F3] font-bold text-3xl sm:text-4xl lg:text-5xl mt-2">
                  Healthcare Beyond Boundaries
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-[#64748B] font-normal leading-relaxed max-w-2xl">
                Comprehensive healthcare through experienced specialists, advanced diagnostics, modern medical technology, and compassionate patient care.
              </p>

              {/* Primary & Secondary Action CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => openBookingModal('', 'In-Clinic')}
                  className="manyacare-btn-primary py-4 px-7 text-base shadow-md"
                >
                  <Calendar className="w-5 h-5" />
                  Book Appointment
                </button>
                <button
                  onClick={() => openBookingModal('', 'Home Visit')}
                  className="manyacare-btn-secondary py-4 px-7 text-base"
                >
                  <HomeIcon className="w-5 h-5 text-[#2196F3]" />
                  Request Home Visit
                </button>
              </div>

              {/* Quick Action Bar */}
              <div className="flex flex-wrap items-center gap-5 text-sm font-semibold text-[#0B3C5D] pt-3 border-t border-[#D7E0E8]">
                <Link
                  href="/diagnostics"
                  className="flex items-center gap-1.5 hover:text-[#2196F3] transition-colors"
                >
                  <FlaskConical className="w-4 h-4 text-[#2196F3]" />
                  <span>Book Lab Test</span>
                </Link>
                <span className="text-slate-300">•</span>
                <button
                  onClick={() => openBookingModal('', 'Online Consultation')}
                  className="flex items-center gap-1.5 hover:text-[#2196F3] transition-colors"
                >
                  <Video className="w-4 h-4 text-[#2196F3]" />
                  <span>Online Consultation</span>
                </button>
                <span className="text-slate-300">•</span>
                <a
                  href="tel:+919953239561"
                  className="flex items-center gap-1.5 text-[#16A34A] hover:underline"
                >
                  <Phone className="w-4 h-4" />
                  <span>Direct: +91-9953239561</span>
                </a>
              </div>

              {/* Trust Highlight Badges */}
              <div className="grid grid-cols-3 gap-4 pt-4 text-left">
                <div className="bg-white p-4 rounded-2xl border border-[#D7E0E8] shadow-xs">
                  <Stethoscope className="w-6 h-6 text-[#2196F3] mb-1.5" />
                  <p className="text-sm font-bold text-[#0B3C5D]">20+ Medical</p>
                  <p className="text-xs text-slate-500">Specialty Clinics</p>
                </div>
                <div className="bg-white p-4 rounded-2xl border border-[#D7E0E8] shadow-xs">
                  <FlaskConical className="w-6 h-6 text-[#2196F3] mb-1.5" />
                  <p className="text-sm font-bold text-[#0B3C5D]">Full Diagnostic</p>
                  <p className="text-xs text-slate-500">Pathology & Imaging</p>
                </div>
                <div className="bg-white p-4 rounded-2xl border border-[#D7E0E8] shadow-xs">
                  <HomeIcon className="w-6 h-6 text-[#2196F3] mb-1.5" />
                  <p className="text-sm font-bold text-[#0B3C5D]">Home Care Desk</p>
                  <p className="text-xs text-slate-500">Doctor & Nurse Visits</p>
                </div>
              </div>
            </div>

            {/* Right DSLR Visual Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none rounded-3xl overflow-hidden border-2 border-[#D7E0E8] shadow-xl bg-white">
                <img
                  src="/doctor-profile-image.jpeg"
                  alt="MANYACARE HealthCity Senior Doctor Consultation"
                  className="w-full h-[380px] sm:h-[450px] object-fit"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B3C5D]/80 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                  <div className="bg-white/95 backdrop-blur-xs text-[#0B3C5D] p-4.5 rounded-2xl border border-[#D7E0E8] shadow-lg space-y-1">
                    <p className="text-sm font-bold flex items-center gap-2 text-[#0B3C5D]">
                      <CheckCircle2 className="w-5 h-5 text-[#16A34A]" />
                      Ethical & Patient-Centred Healthcare
                    </p>
                    <p className="text-xs sm:text-sm text-slate-600">
                      Experienced clinical specialists using advanced diagnostics and evidence-based protocols.
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
              fill="#F7FAFC"
            ></path>
          </svg>
        </div>
      </section>

      {/* 2. QUICK ACTION CARDS (Styled matching Reference Image cards) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            onClick={() => openBookingModal('', 'In-Clinic')}
            className="bg-white border border-[#D7E0E8] rounded-3xl p-7 shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer group flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-[#EAF5FF] text-[#2196F3] flex items-center justify-center group-hover:bg-[#2196F3] group-hover:text-white transition-colors">
                <Calendar className="w-7 h-7" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#0B3C5D]">Book OPD Slot</h3>
              <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
                Schedule in-clinic consultation with senior multispecialty doctors.
              </p>
            </div>
            <div className="pt-4 flex items-center text-sm font-bold text-[#2196F3] group-hover:text-[#0B3C5D]">
              <span>Book Appointment</span>
              <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          <div
            onClick={() => openBookingModal('', 'Home Visit')}
            className="bg-white border border-[#D7E0E8] rounded-3xl p-7 shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer group flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-[#EAF5FF] text-[#2196F3] flex items-center justify-center group-hover:bg-[#2196F3] group-hover:text-white transition-colors">
                <HomeIcon className="w-7 h-7" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#0B3C5D]">Request Home Care</h3>
              <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
                Qualified doctor visits, nursing, and blood sample draw at home.
              </p>
            </div>
            <div className="pt-4 flex items-center text-sm font-bold text-[#2196F3] group-hover:text-[#0B3C5D]">
              <span>Request Home Visit</span>
              <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          <Link
            href="/diagnostics"
            className="bg-white border border-[#D7E0E8] rounded-3xl p-7 shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer group flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-[#EAF5FF] text-[#2196F3] flex items-center justify-center group-hover:bg-[#2196F3] group-hover:text-white transition-colors">
                <FlaskConical className="w-7 h-7" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#0B3C5D]">Book Lab Tests</h3>
              <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
                Advanced pathology labs with convenient doorstep sample collection.
              </p>
            </div>
            <div className="pt-4 flex items-center text-sm font-bold text-[#2196F3] group-hover:text-[#0B3C5D]">
              <span>Explore Diagnostic Tests</span>
              <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          <div
            onClick={() => openBookingModal('', 'Online Consultation')}
            className="bg-white border border-[#D7E0E8] rounded-3xl p-7 shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer group flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-[#EAF5FF] text-[#2196F3] flex items-center justify-center group-hover:bg-[#2196F3] group-hover:text-white transition-colors">
                <Video className="w-7 h-7" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#0B3C5D]">Online Teleconsult</h3>
              <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
                Consult senior doctors remotely via secure video teleconsultation.
              </p>
            </div>
            <div className="pt-4 flex items-center text-sm font-bold text-[#2196F3] group-hover:text-[#0B3C5D]">
              <span>Start Teleconsultation</span>
              <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. ABOUT US / WHY CHOOSE US (Exact Match to Reference Image Layout) */}
      <section className="bg-white py-16 lg:py-20 border-y border-[#D7E0E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Section Header (Centered category badge, heading, subtitle like Reference Image 1) */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs sm:text-sm font-medium text-[#2196F3] bg-[#EAF5FF] px-4 py-1.5 rounded-full uppercase tracking-wider inline-block">
              ABOUT US
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-[#0B3C5D] font-display">
              About MANYACARE HealthCity
            </h2>
            <p className="text-base sm:text-lg text-[#64748B] leading-relaxed">
              We believe in providing healthcare with maximum transparency. Our clinic model combines senior clinical expertise with highly compassionate in-home care protocols.
            </p>
          </div>

          {/* 4 Cards Row (Exact Match to Reference Image 1) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 cursor-pointer">
            {/* Card 1 */}
            <div className="bg-white border border-[#D7E0E8] rounded-3xl p-7 shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#EAF5FF] text-[#2196F3] flex items-center justify-center">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#0B3C5D]">
                  Senior MD Specialists
                </h3>
                <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
                  Consultation and sessions handled directly by Post-Graduate (MD / MS) clinicians across internal medicine, cardiology, and diabetology.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-[#D7E0E8] rounded-3xl p-7 shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#EAF5FF] text-[#2196F3] flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#0B3C5D]">
                  Surgeon-Aligned Care
                </h3>
                <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
                  We align each treatment stage directly with your operating orthopedic surgeon or consulting physician's precise clinical instructions.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-[#D7E0E8] rounded-3xl p-7 shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#EAF5FF] text-[#2196F3] flex items-center justify-center">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#0B3C5D]">
                  Advanced Digital Labs
                </h3>
                <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
                  Accelerated diagnostic testing utilizing state-of-the-art automated pathology analyzers, digital X-Ray, and high-tech ultrasound imaging.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white border border-[#D7E0E8] rounded-3xl p-7 shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#EAF5FF] text-[#2196F3] flex items-center justify-center">
                  <Activity className="w-6 h-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#0B3C5D]">
                  Doorstep Care Protocols
                </h3>
                <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
                  Free blood sample draw from your apartment society flat, with structured doctor & nursing care delivered straight to your residence.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Read More Button Redirecting to /about-us */}
          <div className="text-center pt-4">
            <Link
              href="/about-us"
              className="manyacare-btn-primary text-base px-8 py-3.5 shadow-md inline-flex items-center gap-2 cursor-pointer"
            >
              <span>Read More About Us</span>
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. MEDICAL DEPARTMENTS / SPECIALTIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs sm:text-sm font-medium text-[#2196F3] bg-[#EAF5FF] px-4 py-1.5 rounded-full uppercase tracking-wider inline-block">
            OUR DEPARTMENTS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-[#0B3C5D] font-display">
            Multispecialty Care & OPD Departments
          </h2>
          <p className="text-base sm:text-lg text-[#64748B] leading-relaxed">
            Expert outpatient consultations and dedicated diagnostic wings across core medical disciplines.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DEPARTMENTS.slice(0, 6).map((dept) => (
            <div key={dept.id} className="bg-white cursor-pointer border border-[#D7E0E8] rounded-3xl overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between cursor-pointer">
              <div>
                <div className="h-48 w-full relative overflow-hidden bg-slate-100">
                  <img
                    src={dept.imageUrl}
                    alt={dept.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 bg-[#0B3C5D]/90 text-white text-xs sm:text-sm font-bold px-3.5 py-1 rounded-full">
                    {dept.name}
                  </div>
                </div>
                <div className="p-6 space-y-2">
                  <h3 className="text-xl font-bold text-[#0B3C5D]">{dept.name}</h3>
                  <p className="text-sm sm:text-base text-[#64748B] line-clamp-2 leading-relaxed">
                    {dept.shortDescription}
                  </p>
                </div>
              </div>
              <div className="p-6 pt-0 flex items-center justify-between gap-2 mt-2">
                <Link
                  href={`/departments/${dept.slug}`}
                  className="text-sm font-bold text-[#2196F3] hover:text-[#0B3C5D] flex items-center gap-1"
                >
                  Explore Details
                  <ChevronRight className="w-4 h-4" />
                </Link>
                <button
                  onClick={() => openBookingModal(dept.name)}
                  className="manyacare-btn-primary text-sm py-2 px-4"
                >
                  Book Slot
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="text-center pt-2">
          <Link href="/departments" className="manyacare-btn-secondary text-base px-7 py-3.5">
            <span>View All Departments ({DEPARTMENTS.length})</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div> */}
      </section>
      

      {/* 6. DIAGNOSTICS & PATHOLOGY LABORATORY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-[#D7E0E8] rounded-3xl p-8 sm:p-10 shadow-xs space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs sm:text-sm font-medium text-[#2196F3] bg-[#EAF5FF] px-4 py-1.5 rounded-full uppercase tracking-wider inline-block">
              DIAGNOSTICS & LAB
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-[#0B3C5D] font-display">
              Pathology Laboratory & Testing
            </h2>
            <p className="text-base sm:text-lg text-[#64748B] leading-relaxed">
              Routine blood tests, metabolic panels, hormonal assays, and free doorstep sample collection.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5">
            {DIAGNOSTIC_TESTS.map((test) => (
              <div key={test.id} className="bg-[#F7FAFC] cursor-pointer border border-[#D7E0E8] rounded-2xl p-4 space-y-1 hover:border-[#2196F3] transition-all">
                <span className="text-xs font-bold text-[#2196F3] bg-[#EAF5FF] px-2.5 py-0.5 rounded-full">
                  {test.category}
                </span>
                <p className="text-sm font-bold text-[#0B3C5D] line-clamp-1 mt-1">{test.name}</p>
                <p className="text-xs text-[#64748B]">{test.fastingRequired ? test.fastingHours : 'No Fasting'}</p>
              </div>
            ))}
          </div>

          {/* Doorstep Collection Banner */}
          {/* <div className="bg-[#EAF5FF] rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4 border border-[#2196F3]/30">
            <div className="flex items-center gap-3.5 text-sm text-[#0B3C5D]">
              <HomeIcon className="w-7 h-7 text-[#2196F3] shrink-0" />
              <div>
                <p className="font-bold text-base">Need Home Blood Sample Collection?</p>
                <p className="text-slate-600 text-sm">Certified phlebotomists available for morning doorstep collection in Noida Extension.</p>
              </div>
            </div>
            <a
              href="tel:+919953239562"
              className="manyacare-btn-primary text-sm py-3 px-6 shrink-0"
            >
              Call Lab: +91-9953239562
            </a>
          </div> */}
        </div>
      </section>

      {/* 7. PREVENTIVE HEALTH CHECKUP PACKAGES */}
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
            <div key={pkg.id} className="bg-white cursor-pointer border border-[#D7E0E8] rounded-3xl p-7 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between space-y-5">
              <div className="space-y-4">
                <span className="text-xs font-bold text-[#2196F3] bg-[#EAF5FF] px-3.5 py-1 rounded-full uppercase tracking-wider">
                  {pkg.targetAudience}
                </span>
                <h3 className="text-xl font-bold text-[#0B3C5D]">{pkg.title}</h3>
                <p className="text-sm sm:text-base text-[#64748B] leading-relaxed line-clamp-2">{pkg.description}</p>

                <div className="pt-2 space-y-2">
                  <p className="text-sm font-bold text-[#0B3C5D]">Package Includes:</p>
                  <ul className="space-y-1.5 text-sm text-[#64748B]">
                    {pkg.includedTests.slice(0, 4).map((test, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0" />
                        <span>{test}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4  flex items-center justify-between gap-2">
                <Link
                  href="/health-packages"
                  className="text-sm font-bold text-[#2196F3] hover:text-[#0B3C5D]"
                >
                  View Details
                </Link>
                <button
                  onClick={() => openBookingModal(pkg.title)}
                  className="manyacare-btn-primary text-sm py-2.5 px-5"
                >
                  Book Package
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. PATIENT TESTIMONIALS */}
      <section className="bg-white py-16 lg:py-20 border-y border-[#D7E0E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs sm:text-sm font-medium text-[#2196F3] bg-[#EAF5FF] px-4 py-1.5 rounded-full uppercase tracking-wider inline-block">
              TESTIMONIALS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-[#0B3C5D] font-display">
              What Our Patients Say
            </h2>
            <p className="text-base sm:text-lg text-[#64748B] leading-relaxed">
              Real feedback from patients receiving in-clinic and home healthcare services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-[#F7FAFC] cursor-pointer border border-[#D7E0E8] rounded-3xl p-7 shadow-xs space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm sm:text-base text-[#172B4D] italic leading-relaxed">
                    "{t.reviewText}"
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-200">
                  <p className="text-sm sm:text-base font-bold text-[#0B3C5D]">{t.name}</p>
                  <p className="text-xs sm:text-sm text-[#64748B]">{t.location} • {t.departmentOrService}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8.5 INLINE APPOINTMENT BOOKING FORM SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border-2 border-[#D7E0E8] rounded-3xl overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-12">
          {/* Left Info Banner */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#0B3C5D] via-[#0D4B75] to-[#2196F3] p-8 sm:p-10 text-white flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <span className="text-xs font-bold text-[#2196F3] bg-white px-3.5 py-1.5 rounded-full uppercase tracking-wider inline-block">
                PRIORITY CARE DESK
              </span>
              <h2 className="text-3xl sm:text-4xl font-medium text-white font-display leading-tight">
                Book Your Doctor Appointment Online
              </h2>
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                Schedule a consultation with our verified senior specialists for OPD visits, doorstep home care, or online video consultations.
              </p>

              <div className="space-y-4 pt-4 border-t border-white/20 text-sm">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#2196F3] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-white">Instant Slot Confirmation</p>
                    <p className="text-xs text-slate-300">Quick confirmation callback from care desk.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#2196F3] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-white">Doorstep Sample Collection</p>
                    <p className="text-xs text-slate-300">Certified phlebotomists available at home.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#2196F3] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-white">Zero Extra Booking Fee</p>
                    <p className="text-xs text-slate-300">Direct hospital consultation rates.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4.5 border border-white/20 text-xs space-y-2">
              <p className="font-bold text-white flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#2196F3]" />
                Direct Helpline Assistance:
              </p>
              <p className="text-slate-200">Appointments: +91-9953239561</p>
              <p className="text-slate-200">Lab & Diagnostics: +91-9953239562</p>
            </div>
          </div>

          {/* Right Form Area */}
          <div className="lg:col-span-7 p-8 sm:p-10 bg-white">
            {isInlineSubmitted ? (
              <div className="text-center py-12 space-y-5">
                <div className="w-20 h-20 bg-[#16A34A]/10 text-[#16A34A] rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-medium text-[#0B3C5D] font-display">
                  Appointment Request Received!
                </h3>
                <p className="text-base text-[#64748B] max-w-md mx-auto leading-relaxed">
                  Thank you <strong className="text-[#0B3C5D]">{inlineForm.fullName}</strong>. Our medical care team will contact you at{' '}
                  <strong className="text-[#0B3C5D]">{inlineForm.phone}</strong> shortly to confirm your slot for{' '}
                  <strong className="text-[#0B3C5D]">{inlineForm.department}</strong>.
                </p>
                <button
                  onClick={() => setIsInlineSubmitted(false)}
                  className="manyacare-btn-primary py-3 px-6 text-sm cursor-pointer"
                >
                  Book Another Appointment
                </button>
              </div>
            ) : (
              <form onSubmit={handleInlineSubmit} className="space-y-5 text-left">
                <div>
                  <h3 className="text-xl font-medium text-[#0B3C5D]">
                    Patient Registration & Booking
                  </h3>
                  <p className="text-xs sm:text-sm text-[#64748B] mt-1">
                    Fill in patient details below for priority booking response.
                  </p>
                </div>

                {inlineErrorMsg && (
                  <div className="bg-red-50 text-red-700 border border-red-200 text-xs p-3.5 rounded-xl flex items-center gap-2 font-medium">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{inlineErrorMsg}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-[#0B3C5D] mb-1.5">
                      Patient Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Enter patient name"
                      value={inlineForm.fullName}
                      onChange={(e) => setInlineForm({ ...inlineForm, fullName: e.target.value })}
                      className="manyacare-input"
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-[#0B3C5D] mb-1.5">
                      Mobile Phone *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 9953239561"
                      value={inlineForm.phone}
                      onChange={(e) => setInlineForm({ ...inlineForm, phone: e.target.value })}
                      className="manyacare-input"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-[#0B3C5D] mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="name@example.com"
                      value={inlineForm.email}
                      onChange={(e) => setInlineForm({ ...inlineForm, email: e.target.value })}
                      className="manyacare-input"
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-[#0B3C5D] mb-1.5">
                      Medical Specialty / Dept
                    </label>
                    <select
                      value={inlineForm.department}
                      onChange={(e) => setInlineForm({ ...inlineForm, department: e.target.value })}
                      className="manyacare-input cursor-pointer"
                    >
                      {DEPARTMENTS.map((d) => (
                        <option key={d.id} value={d.name}>
                          {d.name}
                        </option>
                      ))}
                      <option value="Pathology Lab Test">Pathology Lab Test</option>
                      <option value="Radiology & Ultrasound">Radiology & Ultrasound</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-[#0B3C5D] mb-1.5">
                    Consultation Type
                  </label>
                  <div className="grid grid-cols-3 gap-2.5">
                    {(['In-Clinic', 'Home Visit', 'Online Consultation'] as const).map((type) => (
                      <button
                        type="button"
                        key={type}
                        onClick={() => setInlineForm({ ...inlineForm, consultationType: type })}
                        className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all border cursor-pointer ${
                          inlineForm.consultationType === type
                            ? 'bg-[#2196F3] text-white border-[#2196F3] shadow-xs'
                            : 'bg-[#F7FAFC] text-[#0B3C5D] border-[#D7E0E8] hover:border-[#2196F3]'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-[#0B3C5D] mb-1.5">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      value={inlineForm.preferredDate}
                      onChange={(e) => setInlineForm({ ...inlineForm, preferredDate: e.target.value })}
                      className="manyacare-input cursor-pointer"
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-[#0B3C5D] mb-1.5">
                      Preferred Time Slot
                    </label>
                    <select
                      value={inlineForm.preferredTime}
                      onChange={(e) => setInlineForm({ ...inlineForm, preferredTime: e.target.value })}
                      className="manyacare-input cursor-pointer"
                    >
                      <option value="Morning (09:00 AM - 12:00 PM)">Morning (09:00 AM - 12:00 PM)</option>
                      <option value="Afternoon (12:00 PM - 04:00 PM)">Afternoon (12:00 PM - 04:00 PM)</option>
                      <option value="Evening (04:00 PM - 08:00 PM)">Evening (04:00 PM - 08:00 PM)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-[#0B3C5D] mb-1.5">
                    Health Concern / Remarks (Optional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Describe symptoms or medical test required..."
                    value={inlineForm.message}
                    onChange={(e) => setInlineForm({ ...inlineForm, message: e.target.value })}
                    className="manyacare-input resize-none"
                  />
                </div>

                <div className="flex items-start gap-2.5 pt-1">
                  <input
                    type="checkbox"
                    id="inlineConsent"
                    checked={inlineForm.consent}
                    onChange={(e) => setInlineForm({ ...inlineForm, consent: e.target.checked })}
                    className="w-4 h-4 mt-0.5 text-[#2196F3] rounded border-slate-300 cursor-pointer"
                  />
                  <label htmlFor="inlineConsent" className="text-xs text-slate-600 cursor-pointer leading-tight">
                    I agree to receive appointment updates & doctor callback regarding my health request.
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isInlineSubmitting}
                  className="w-full manyacare-btn-primary py-3.5 text-base shadow-md font-bold cursor-pointer"
                >
                  {isInlineSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                      Submitting Request...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Calendar className="w-5 h-5" />
                      Confirm & Submit Appointment Request
                    </span>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 9. GLOBAL FAQS */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs sm:text-sm font-medium text-[#2196F3] bg-[#EAF5FF] px-4 py-1.5 rounded-full uppercase tracking-wider inline-block">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-[#0B3C5D] font-display">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-[#64748B]">
            Find answers regarding doctor appointments, lab tests, and home care.
          </p>
        </div>

        <div className="space-y-3">
          {GLOBAL_FAQS.map((faq, idx) => {
            const isOpen = activeFaqIndex === idx;
            return (
              <div
                key={faq.id}
                className="bg-white border border-[#D7E0E8] rounded-2xl overflow-hidden shadow-xs"
              >
                <button
                  onClick={() => setActiveFaqIndex(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-medium text-base sm:text-lg text-[#0B3C5D] hover:text-[#2196F3] "
                >
                  <span>{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 shrink-0 transition-transform ${isOpen ? 'rotate-180 text-[#2196F3]' : ''}`} />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-sm sm:text-base text-[#64748B] leading-relaxed pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 10. MAIN ADDRESS FULL GOOGLE MAP SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs sm:text-sm font-medium text-[#2196F3] bg-[#EAF5FF] px-4 py-1.5 rounded-full uppercase tracking-wider inline-block">
            OUR LOCATION
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-[#0B3C5D] font-display">
            Find Us on Google Maps
          </h2>
          <p className="text-base sm:text-lg text-[#64748B]">
            GH-07A Market, Techzone 4, Patwari (Near Nirala Estate & Ek Murti Chowk), Greater Noida West, Uttar Pradesh 201306
          </p>
        </div>

        <div className="bg-white border-2 border-[#D7E0E8] rounded-3xl overflow-hidden shadow-xl h-[450px] sm:h-[500px] w-full relative">
          <iframe
            title="MANYACARE HealthCity Main Campus Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.562123!2d77.435!3d28.595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjhCsDM1JzQyLjAiTiA3N8KwMjYnMDYuMCJF!5e0!3m2!1sen!2sin!4v1650000000000"
            className="w-full h-full border-0 transition-all duration-300"
            loading="lazy"
            allowFullScreen
          />
        </div>
      </section>

      {/* Global Appointment Modal */}
      {isAppointmentModalOpen && (
        <AppointmentModal
          isOpen={isAppointmentModalOpen}
          onClose={() => setIsAppointmentModalOpen(false)}
          defaultDepartment={modalDepartment}
          defaultConsultationType={modalConsultationType}
        />
      )}
    </div>
  );
}
