'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Phone,
  Mail,
  Calendar,
  Menu,
  X,
  Stethoscope,
  ChevronRight,
  Clock,
  ChevronDown,
  MapPin,
  CheckCircle2,
  Navigation,
  Activity,
  Heart,
  Syringe,
  Home,
  FileText,
  Building,
  ShieldCheck,
  MessageCircle,
} from 'lucide-react';
import AppointmentModal from '@/components/AppointmentModal';
import { DEPARTMENTS } from '@/data/departments';
import { LOCATIONS } from '@/data/locations';

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);
  const [isLocationDropdownOpen, setIsLocationDropdownOpen] = useState(false);
  const [isDeptDropdownOpen, setIsDeptDropdownOpen] = useState(false);
  const [isMobileLocationExpanded, setIsMobileLocationExpanded] = useState(true);
  const [isMobileDeptExpanded, setIsMobileDeptExpanded] = useState(true);

  React.useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const deptTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const locationTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleDeptMouseEnter = () => {
    if (deptTimeoutRef.current) clearTimeout(deptTimeoutRef.current);
    setIsDeptDropdownOpen(true);
  };

  const handleDeptMouseLeave = () => {
    deptTimeoutRef.current = setTimeout(() => {
      setIsDeptDropdownOpen(false);
    }, 150);
  };

  const handleLocationMouseEnter = () => {
    if (locationTimeoutRef.current) clearTimeout(locationTimeoutRef.current);
    setIsLocationDropdownOpen(true);
  };

  const handleLocationMouseLeave = () => {
    locationTimeoutRef.current = setTimeout(() => {
      setIsLocationDropdownOpen(false);
    }, 150);
  };

  // Helper function for active link pill background (Matching Reference Image 2)
  const isActive = (path: string) => {
    if (path === '/') return pathname === '/';
    return pathname.startsWith(path);
  };

  // Data for Locations Dropdown (Card style matching Reference Image 2)
  const locationCampuses = [
    {
      title: 'Main HealthCity Campus',
      subtitle: 'Techzone 4, Patwari (Near Nirala Estate & Ek Murti)',
      href: '/locations/healthcity-main-campus',
      icon: Building,
      badge: 'Main Hub',
    },
    {
      title: 'Gaur City Care Hub',
      subtitle: 'Gaur City 1 & 2 Plaza (Doorstep Sample Draw & OPD)',
      href: '/locations/gaur-city-center',
      icon: MapPin,
      badge: 'Gaur City',
    },
    {
      title: 'Sector 4 Diagnostic Hub',
      subtitle: 'Sector 4 Main Market, Greater Noida West',
      href: '/locations/sector-4-greater-noida',
      icon: Activity,
    },
    {
      title: 'Pari Chowk Center',
      subtitle: 'Near Pari Chowk Metro Station, Greater Noida',
      href: '/locations/pari-chowk-hub',
      icon: Navigation,
    },
    {
      title: 'Crossings Republik Wing',
      subtitle: 'Crossings Plaza, NH-24 Border & Noida Ext.',
      href: '/locations/crossings-republik-hub',
      icon: Home,
    },
  ];

  const locationsServedAreas = [
    {
      title: 'Gaur City 1, 2 & Noida Ext.',
      subtitle: 'Gaur City 1 & 2, Cherry County, Sector 1',
      href: '/locations/gaur-city-center',
      icon: CheckCircle2,
    },
    {
      title: 'Techzone 4 & Patwari',
      subtitle: 'GH-07A Market, Nirala Estate & Ek Murti',
      href: '/locations/healthcity-main-campus',
      icon: CheckCircle2,
    },
    {
      title: 'Sectors 4, 10 & 16B',
      subtitle: 'Gr. Noida West residential sectors',
      href: '/locations/sector-1-10-16b',
      icon: CheckCircle2,
    },
    {
      title: 'Pari Chowk & Central Hub',
      subtitle: 'Knowledge Park, Alpha & Omega sectors',
      href: '/locations/pari-chowk-hub',
      icon: CheckCircle2,
    },
    {
      title: 'Crossings & Housing Societies',
      subtitle: 'Eco Village 1, 2 & 3, Crossings Republik',
      href: '/locations/crossings-republik-hub',
      icon: CheckCircle2,
    },
  ];

  // Data for Services/Departments Dropdown
  const deptGeneral = [
    {
      title: 'General Physician & OPD',
      subtitle: 'Acute fever, viral infections, cough & cold care',
      href: '/departments/general-physician-internal-medicine',
      icon: Stethoscope,
    },
    {
      title: 'Diabetes & Endocrinology',
      subtitle: 'Blood sugar control, HbA1c & thyroid treatment',
      href: '/departments/diabetes-endocrinology',
      icon: Activity,
    },
    {
      title: 'Cardiology & Heart Care',
      subtitle: 'Hypertension, ECG & lipid disorder management',
      href: '/departments/cardiology',
      icon: Heart,
    },
  ];

  const deptDiagnostics = [
    {
      title: 'Pathology & Lab Testing',
      subtitle: 'Blood tests, lipid profile & home sample draw',
      href: '/diagnostics',
      icon: Syringe,
    },
    {
      title: 'Digital X-Ray & Radiology',
      subtitle: 'Ultrasound, chest X-ray & imaging reports',
      href: '/radiology',
      icon: FileText,
    },
    {
      title: 'Home Healthcare Services',
      subtitle: 'Doctor & nursing visits at your doorstep',
      href: '/home-healthcare',
      icon: Home,
    },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-white shadow-sm border-b border-[#D7E0E8]/80 backdrop-blur-md">
        {/* Main Navbar Row (Reference Image 2 Header Layout) */}
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-3.5 flex items-center justify-between gap-4">
          
          {/* Logo (Icon Badge + Double Line Text like Physiotherapist header) */}
          <Link href="/" className="flex items-center gap-3 shrink-0 group">
            <div className="w-12 h-12 rounded-2xl bg-white text-white flex items-center justify-center transition-all duration-300 overflow-hidden border border-[#D7E0E8]">
              <img src="/manyacare-logo.jpeg" alt="MANYACARE Logo" className="w-full h-full object-fit" />
            </div>
            <div>
              <span className="text-2xl font-medium tracking-tight text-[#0B3C5D] block leading-none">
                MANYACARE
              </span>
              <span className="text-xs font-medium text-[#2196F3] tracking-widest uppercase block mt-1">
                HealthCity
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Bar with Pill Highlights (Ref Image 2) */}
          <nav className="hidden xl:flex items-center space-x-1.5 text-sm sm:text-base font-medium">
            {/* Home */}
            <Link
              href="/"
              className={`px-4 py-2 rounded-xl transition-all duration-200 whitespace-nowrap ${
                isActive('/')
                  ? 'bg-[#EAF5FF] text-[#0B3C5D] font-medium shadow-xs'
                  : 'text-[#172B4D] hover:text-[#2196F3] hover:bg-[#EAF5FF]/60'
              }`}
            >
              Home
            </Link>

            {/* About Us */}
            <Link
              href="/about-us"
              className={`px-4 py-2 rounded-xl transition-all duration-200 whitespace-nowrap ${
                isActive('/about-us')
                  ? 'bg-[#EAF5FF] text-[#0B3C5D] font-medium shadow-xs'
                  : 'text-[#172B4D] hover:text-[#2196F3] hover:bg-[#EAF5FF]/60'
              }`}
            >
              About
            </Link>

            {/* Services / Departments Dropdown (Ref Image 2 Dropdown Trigger) */}
            <div
              className="relative"
              onMouseEnter={handleDeptMouseEnter}
              onMouseLeave={handleDeptMouseLeave}
            >
              <button
                onClick={() => setIsDeptDropdownOpen(!isDeptDropdownOpen)}
                className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl transition-all duration-200 whitespace-nowrap ${
                  isDeptDropdownOpen || isActive('/departments') || isActive('/diagnostics')
                    ? 'bg-[#EAF5FF] text-[#0B3C5D] font-medium shadow-xs'
                    : 'text-[#172B4D] hover:text-[#2196F3] hover:bg-[#EAF5FF]/60'
                }`}
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isDeptDropdownOpen ? 'rotate-180 text-[#2196F3]' : 'text-slate-400'
                  }`}
                />
              </button>

              {/* Services / Departments Mega Dropdown (Exact Image 2 Card Style) */}
              {isDeptDropdownOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50">
                  <div className="w-[720px] bg-white border border-[#D7E0E8] rounded-3xl shadow-2xl p-6 animate-in fade-in zoom-in-95 duration-200">
                    <div className="grid grid-cols-2 gap-7">
                      <div className="space-y-3">
                        <h4 className="text-xs font-medium text-[#64748B] uppercase tracking-wider">
                          Medical Specialties
                        </h4>
                        <div className="space-y-1">
                          {deptGeneral.map((item, idx) => {
                            const IconComponent = item.icon;
                            return (
                              <Link
                                key={idx}
                                href={item.href}
                                className="flex items-start gap-3 p-2.5 rounded-2xl hover:bg-[#EAF5FF] transition-all group"
                              >
                                <div className="w-10 h-10 rounded-full bg-[#EAF5FF] text-[#2196F3] flex items-center justify-center shrink-0 group-hover:bg-[#2196F3] group-hover:text-white transition-all">
                                  <IconComponent className="w-5 h-5" />
                                </div>
                                <div className="space-y-0.5">
                                  <p className="text-sm font-medium text-[#0B3C5D] group-hover:text-[#2196F3] leading-snug">
                                    {item.title}
                                  </p>
                                  <p className="text-xs text-[#64748B] line-clamp-1">
                                    {item.subtitle}
                                  </p>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </div>

                      <div className="space-y-3">
                        <h4 className="text-xs font-medium text-[#64748B] uppercase tracking-wider">
                          Diagnostics & Home Care
                        </h4>
                        <div className="space-y-1">
                          {deptDiagnostics.map((item, idx) => {
                            const IconComponent = item.icon;
                            return (
                              <Link
                                key={idx}
                                href={item.href}
                                className="flex items-start gap-3 p-2.5 rounded-2xl hover:bg-[#EAF5FF] transition-all group"
                              >
                                <div className="w-10 h-10 rounded-full bg-[#EAF5FF] text-[#2196F3] flex items-center justify-center shrink-0 group-hover:bg-[#2196F3] group-hover:text-white transition-all">
                                  <IconComponent className="w-5 h-5" />
                                </div>
                                <div className="space-y-0.5">
                                  <p className="text-sm font-medium text-[#0B3C5D] group-hover:text-[#2196F3] leading-snug">
                                    {item.title}
                                  </p>
                                  <p className="text-xs text-[#64748B] line-clamp-1">
                                    {item.subtitle}
                                  </p>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Locations Dropdown (Ref Image 2 Locations Dropdown) */}
            <div
              className="relative"
              onMouseEnter={handleLocationMouseEnter}
              onMouseLeave={handleLocationMouseLeave}
            >
              <button
                onClick={() => setIsLocationDropdownOpen(!isLocationDropdownOpen)}
                className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl transition-all duration-200 whitespace-nowrap ${
                  isLocationDropdownOpen || isActive('/locations')
                    ? 'bg-[#EAF5FF] text-[#0B3C5D] font-medium shadow-xs'
                    : 'text-[#172B4D] hover:text-[#2196F3] hover:bg-[#EAF5FF]/60'
                }`}
              >
                <span>Locations</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isLocationDropdownOpen ? 'rotate-180 text-[#2196F3]' : 'text-slate-400'
                  }`}
                />
              </button>

              {/* Locations Mega Dropdown Card (Exact Image 2 Dropdown Style) */}
              {isLocationDropdownOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50">
                  <div className="w-[760px] bg-white border border-[#D7E0E8] rounded-3xl shadow-2xl p-6 animate-in fade-in zoom-in-95 duration-200">
                    <div className="grid grid-cols-2 gap-7">
                      {/* Col 1: Clinic Campuses */}
                      <div className="space-y-3">
                        <h4 className="text-xs font-medium text-[#64748B] uppercase tracking-wider">
                          Clinic Campuses & Hubs
                        </h4>
                        <div className="space-y-1">
                          {locationCampuses.map((item, idx) => {
                            const IconComponent = item.icon;
                            return (
                              <Link
                                key={idx}
                                href={item.href}
                                className="flex items-start gap-3 p-2.5 rounded-2xl hover:bg-[#EAF5FF] transition-all group"
                              >
                                <div className="w-10 h-10 rounded-full bg-[#EAF5FF] text-[#2196F3] flex items-center justify-center shrink-0 group-hover:bg-[#2196F3] group-hover:text-white transition-all">
                                  <IconComponent className="w-5 h-5" />
                                </div>
                                <div className="space-y-0.5 overflow-hidden">
                                  <div className="flex items-center gap-1.5">
                                    <p className="text-sm font-medium text-[#0B3C5D] group-hover:text-[#2196F3] leading-snug truncate">
                                      {item.title}
                                    </p>
                                    {item.badge && (
                                      <span className="text-[10px] font-medium text-white bg-[#0B3C5D] px-2 py-0.5 rounded shrink-0">
                                        {item.badge}
                                      </span>
                                    )}
                                  </div>
                                  <p className="text-xs text-[#64748B] line-clamp-1">
                                    {item.subtitle}
                                  </p>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </div>

                      {/* Col 2: Areas We Serve */}
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <h4 className="text-xs font-medium text-[#64748B] uppercase tracking-wider">
                            Areas We Serve & Sectors
                          </h4>
                          <Link
                            href="/locations"
                            className="text-xs font-medium text-[#2196F3] hover:underline"
                          >
                            View All Areas →
                          </Link>
                        </div>
                        <div className="space-y-1">
                          {locationsServedAreas.map((item, idx) => {
                            const IconComponent = item.icon;
                            return (
                              <Link
                                key={idx}
                                href={item.href}
                                className="flex items-start gap-3 p-2.5 rounded-2xl hover:bg-[#EAF5FF] transition-all group"
                              >
                                <div className="w-10 h-10 rounded-full bg-[#EAF5FF] text-[#2196F3] flex items-center justify-center shrink-0 group-hover:bg-[#2196F3] group-hover:text-white transition-all">
                                  <IconComponent className="w-5 h-5" />
                                </div>
                                <div className="space-y-0.5 overflow-hidden">
                                  <p className="text-sm font-medium text-[#0B3C5D] group-hover:text-[#2196F3] leading-snug truncate">
                                    {item.title}
                                  </p>
                                  <p className="text-xs text-[#64748B] line-clamp-1">
                                    {item.subtitle}
                                  </p>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </div>

                    {/* Dropdown Bottom Banner */}
                    <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs sm:text-sm bg-[#F7FAFC] px-4 py-2.5 rounded-2xl">
                      <span className="text-slate-600 font-semimedium">
                        Free Doorstep Blood Sample Collection across Gaur City & Noida Extension
                      </span>
                      <Link
                        href="/locations"
                        className="font-medium text-[#2196F3] hover:text-[#0B3C5D] flex items-center gap-1"
                      >
                        Explore Interactive Map <ChevronRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Health Packages */}
            <Link
              href="/health-packages"
              className={`px-4 py-2 rounded-xl transition-all duration-200 whitespace-nowrap ${
                isActive('/health-packages')
                  ? 'bg-[#EAF5FF] text-[#0B3C5D] font-medium shadow-xs'
                  : 'text-[#172B4D] hover:text-[#2196F3] hover:bg-[#EAF5FF]/60'
              }`}
            >
              Packages
            </Link>

            {/* Blog */}
            <Link
              href="/blog"
              className={`px-4 py-2 rounded-xl transition-all duration-200 whitespace-nowrap ${
                isActive('/blog')
                  ? 'bg-[#EAF5FF] text-[#0B3C5D] font-medium shadow-xs'
                  : 'text-[#172B4D] hover:text-[#2196F3] hover:bg-[#EAF5FF]/60'
              }`}
            >
              Blog
            </Link>

            {/* Contact */}
            <Link
              href="/contact-us"
              className={`px-4 py-2 rounded-xl transition-all duration-200 whitespace-nowrap ${
                isActive('/contact-us')
                  ? 'bg-[#EAF5FF] text-[#0B3C5D] font-medium shadow-xs'
                  : 'text-[#172B4D] hover:text-[#2196F3] hover:bg-[#EAF5FF]/60'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Desktop Right Action Controls (Standalone Circular Phone Icon + Solid Pill Book Button) */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            {/* Standalone Circular Phone Button (Ref Image 2) */}
            <a
              href="tel:+919953239561"
              className="w-11 h-11 rounded-full bg-[#EAF5FF] text-[#2196F3] hover:bg-[#0B3C5D] hover:text-white flex items-center justify-center transition-all duration-200 border border-[#2196F3]/20 shadow-xs"
              title="Call Helpline: +91-9953239561"
            >
              <Phone className="w-5 h-5" />
            </a>

            {/* Solid Pill Book Appointment Button (Ref Image 2) */}
            <button
              onClick={() => setIsAppointmentModalOpen(true)}
              className="inline-flex items-center gap-2 text-sm font-medium text-white bg-[#2196F3] hover:bg-[#0B3C5D] px-6 py-3 rounded-2xl shadow-md shadow-blue-500/20 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
            >
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="flex items-center gap-2 xl:hidden">
            <button
              onClick={() => setIsAppointmentModalOpen(true)}
              className="sm:hidden inline-flex items-center gap-1.5 text-xs font-medium text-white bg-[#2196F3] px-3.5 py-2 rounded-xl shadow-sm"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book</span>
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl text-[#0B3C5D] hover:bg-[#EAF5FF] focus:outline-none transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer Overlay (Exact Match to Reference Image Design) */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-[999] h-[100dvh] w-screen bg-[#F7FAFC] xl:hidden flex flex-col justify-between overflow-hidden animate-in fade-in duration-200">
            
            {/* Top Bar Header inside Mobile Drawer */}
            <div className="bg-[#0B3C5D] text-white px-5 py-3.5 flex items-center justify-between shadow-md shrink-0 border-b border-white/10">
              <Link
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-2.5"
              >
                <div className="w-9 h-9 rounded-xl bg-white text-white flex items-center justify-center font-bold shadow-xs overflow-hidden border border-white/20">
                  <img src="/manyacare-logo.jpeg" alt="MANYACARE Logo" className="w-full h-full object-cover" />
                </div>
                <div>
                  <span className="text-lg font-bold tracking-tight text-white block leading-none font-display">
                    MANYACARE
                  </span>
                  <span className="text-[10px] font-bold text-[#2196F3] tracking-widest uppercase block mt-0.5">
                    HealthCity
                  </span>
                </div>
              </Link>

              {/* Square Close X Button (Ref Image) */}
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-9 h-9 rounded-xl bg-white/15 text-white hover:bg-white/25 flex items-center justify-center transition-colors focus:outline-none cursor-pointer"
                aria-label="Close Navigation Menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Content Body (Card Stack + Category Badges + Scrollable Dropdowns) */}
            <div className="flex-1 bg-[#F7FAFC] overflow-y-auto px-4 py-5 space-y-6 text-left">
              
              {/* Primary Navigation Cards Stack (Ref Image Card Style) */}
              <div className="space-y-2">
                {/* Home */}
                <Link
                  href="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-5 py-3.5 rounded-2xl text-sm sm:text-base font-bold transition-all ${
                    isActive('/')
                      ? 'bg-[#0B3C5D] text-white shadow-md'
                      : 'bg-white text-[#0B3C5D] border border-[#D7E0E8] hover:bg-[#EAF5FF]'
                  }`}
                >
                  <span>Home</span>
                  {isActive('/') && <div className="w-2.5 h-2.5 rounded-full bg-[#2196F3]"></div>}
                </Link>

                {/* About Us */}
                <Link
                  href="/about-us"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-5 py-3.5 rounded-2xl text-sm sm:text-base font-bold transition-all ${
                    isActive('/about-us')
                      ? 'bg-[#0B3C5D] text-white shadow-md'
                      : 'bg-white text-[#0B3C5D] border border-[#D7E0E8] hover:bg-[#EAF5FF]'
                  }`}
                >
                  <span>About Us</span>
                  {isActive('/about-us') && <div className="w-2.5 h-2.5 rounded-full bg-[#2196F3]"></div>}
                </Link>

                {/* Doctors / Specialists */}
                <Link
                  href="/specialists"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-5 py-3.5 rounded-2xl text-sm sm:text-base font-bold transition-all ${
                    isActive('/specialists')
                      ? 'bg-[#0B3C5D] text-white shadow-md'
                      : 'bg-white text-[#0B3C5D] border border-[#D7E0E8] hover:bg-[#EAF5FF]'
                  }`}
                >
                  <span>Doctors & Specialists</span>
                  {isActive('/specialists') && <div className="w-2.5 h-2.5 rounded-full bg-[#2196F3]"></div>}
                </Link>

                {/* Health Packages */}
                <Link
                  href="/health-packages"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-5 py-3.5 rounded-2xl text-sm sm:text-base font-bold transition-all ${
                    isActive('/health-packages')
                      ? 'bg-[#0B3C5D] text-white shadow-md'
                      : 'bg-white text-[#0B3C5D] border border-[#D7E0E8] hover:bg-[#EAF5FF]'
                  }`}
                >
                  <span>Health Packages</span>
                  {isActive('/health-packages') && <div className="w-2.5 h-2.5 rounded-full bg-[#2196F3]"></div>}
                </Link>

                {/* Blog */}
                <Link
                  href="/blog"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-5 py-3.5 rounded-2xl text-sm sm:text-base font-bold transition-all ${
                    isActive('/blog')
                      ? 'bg-[#0B3C5D] text-white shadow-md'
                      : 'bg-white text-[#0B3C5D] border border-[#D7E0E8] hover:bg-[#EAF5FF]'
                  }`}
                >
                  <span>Blog & Medical News</span>
                  {isActive('/blog') && <div className="w-2.5 h-2.5 rounded-full bg-[#2196F3]"></div>}
                </Link>

                {/* Contact */}
                <Link
                  href="/contact-us"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-5 py-3.5 rounded-2xl text-sm sm:text-base font-bold transition-all ${
                    isActive('/contact-us')
                      ? 'bg-[#0B3C5D] text-white shadow-md'
                      : 'bg-white text-[#0B3C5D] border border-[#D7E0E8] hover:bg-[#EAF5FF]'
                  }`}
                >
                  <span>Contact Us</span>
                  {isActive('/contact-us') && <div className="w-2.5 h-2.5 rounded-full bg-[#2196F3]"></div>}
                </Link>
              </div>

              {/* SERVICES SECTION & EXPANDABLE SCROLLABLE DROPDOWN (Ref Image Badge Style) */}
              <div className="space-y-3 pt-2">
                <button
                  onClick={() => setIsMobileDeptExpanded(!isMobileDeptExpanded)}
                  className="bg-[#0B3C5D] text-white text-[11px] font-bold px-3 py-1 rounded-md uppercase tracking-wider inline-flex items-center gap-1.5 cursor-pointer hover:bg-[#2196F3] transition-colors"
                >
                  <span>SERVICES</span>
                  <ChevronDown className={`w-3 h-3 transition-transform ${isMobileDeptExpanded ? 'rotate-180' : ''}`} />
                </button>

                <div className="bg-white border border-[#D7E0E8] rounded-2xl overflow-hidden shadow-xs">
                  <button
                    onClick={() => setIsMobileDeptExpanded(!isMobileDeptExpanded)}
                    className="w-full flex items-center justify-between px-4 py-3.5 text-sm font-bold text-[#0B3C5D] bg-white hover:bg-[#EAF5FF] transition-colors cursor-pointer"
                  >
                    <span className="flex items-center gap-2">
                      <Stethoscope className="w-4 h-4 text-[#2196F3]" />
                      <span>Clinical Services & Departments ({DEPARTMENTS.length})</span>
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#2196F3] transition-transform duration-200 ${
                        isMobileDeptExpanded ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {/* Scrollable Text Options for Services (Ref Image Option + Scroll) */}
                  {isMobileDeptExpanded && (
                    <div className="p-3 bg-[#F7FAFC] border-t border-[#D7E0E8] max-h-64 overflow-y-auto space-y-1.5 scrollbar-thin">
                      <Link
                        href="/departments"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#EAF5FF] text-[#2196F3] font-bold text-xs border border-[#2196F3]/30"
                      >
                        <ChevronRight className="w-4 h-4" />
                        <span>View All Departments</span>
                      </Link>
                      {DEPARTMENTS.map((dept) => (
                        <Link
                          key={dept.id}
                          href={`/departments/${dept.slug}`}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="flex items-center gap-3 p-2.5 rounded-xl bg-white border border-[#D7E0E8] hover:border-[#2196F3] hover:bg-[#EAF5FF] transition-all group"
                        >
                          <div className="w-8 h-8 rounded-lg bg-[#EAF5FF] text-[#2196F3] flex items-center justify-center shrink-0 group-hover:bg-[#2196F3] group-hover:text-white transition-colors">
                            <Activity className="w-4 h-4" />
                          </div>
                          <div className="overflow-hidden">
                            <p className="text-xs font-bold text-[#0B3C5D] group-hover:text-[#2196F3] truncate">
                              {dept.name}
                            </p>
                            <p className="text-[11px] text-slate-500 line-clamp-1">
                              {dept.shortDescription}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* LOCATIONS SECTION & EXPANDABLE SCROLLABLE DROPDOWN (Ref Image Badge Style) */}
              <div className="space-y-3 pt-2">
                <button
                  onClick={() => setIsMobileLocationExpanded(!isMobileLocationExpanded)}
                  className="bg-[#0B3C5D] text-white text-[11px] font-bold px-3 py-1 rounded-md uppercase tracking-wider inline-flex items-center gap-1.5 cursor-pointer hover:bg-[#2196F3] transition-colors"
                >
                  <span>LOCATIONS</span>
                  <ChevronDown className={`w-3 h-3 transition-transform ${isMobileLocationExpanded ? 'rotate-180' : ''}`} />
                </button>

                <div className="bg-white border border-[#D7E0E8] rounded-2xl overflow-hidden shadow-xs">
                  <button
                    onClick={() => setIsMobileLocationExpanded(!isMobileLocationExpanded)}
                    className="w-full flex items-center justify-between px-4 py-3.5 text-sm font-bold text-[#0B3C5D] bg-white hover:bg-[#EAF5FF] transition-colors cursor-pointer"
                  >
                    <span className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-[#2196F3]" />
                      <span>Care Hubs & Served Areas ({LOCATIONS.length})</span>
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#2196F3] transition-transform duration-200 ${
                        isMobileLocationExpanded ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {/* Scrollable Text Options for Locations */}
                  {isMobileLocationExpanded && (
                    <div className="p-3 bg-[#F7FAFC] border-t border-[#D7E0E8] max-h-64 overflow-y-auto space-y-1.5 scrollbar-thin">
                      <Link
                        href="/locations"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#EAF5FF] text-[#2196F3] font-bold text-xs border border-[#2196F3]/30"
                      >
                        <ChevronRight className="w-4 h-4" />
                        <span>View All Locations & Maps</span>
                      </Link>
                      {LOCATIONS.map((loc) => (
                        <Link
                          key={loc.id}
                          href={`/locations/${loc.slug}`}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="flex items-center gap-3 p-2.5 rounded-xl bg-white border border-[#D7E0E8] hover:border-[#2196F3] hover:bg-[#EAF5FF] transition-all group"
                        >
                          <div className="w-8 h-8 rounded-lg bg-[#EAF5FF] text-[#2196F3] flex items-center justify-center shrink-0 group-hover:bg-[#2196F3] group-hover:text-white transition-colors">
                            <Building className="w-4 h-4" />
                          </div>
                          <div className="overflow-hidden">
                            <p className="text-xs font-bold text-[#0B3C5D] group-hover:text-[#2196F3] truncate">
                              {loc.displayName}
                            </p>
                            <p className="text-[11px] text-slate-500 line-clamp-1">
                              {loc.localityName} • {loc.cityName}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </div>

            </div>

            {/* Bottom Action Footer inside Mobile Menu (Exact Match to Reference Image Footer Bar) */}
            <div className="bg-white border-t border-[#D7E0E8] px-4 py-3 shadow-2xl shrink-0 flex items-center justify-around text-center">
              {/* Call Now */}
              <a
                href="tel:+919953239561"
                className="flex flex-col items-center gap-1 group text-[#0B3C5D] hover:text-[#2196F3]"
              >
                <div className="w-9 h-9 rounded-full bg-[#EAF5FF] text-[#2196F3] flex items-center justify-center group-hover:bg-[#2196F3] group-hover:text-white transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider">CALL NOW</span>
              </a>

              {/* WhatsApp Badge */}
              <a
                href="https://wa.me/919953239561?text=Hello%20MANYACARE%20HealthCity%2C%20I%20want%20to%20inquire%20about%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-1 group text-[#0B3C5D] hover:text-[#25D366]"
              >
                <div className="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-md active:scale-95 transition-transform">
                  <MessageCircle className="w-5 h-5 fill-current" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#25D366]">WHATSAPP</span>
              </a>

              {/* Book Now */}
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsAppointmentModalOpen(true);
                }}
                className="flex flex-col items-center gap-1 group text-[#0B3C5D] hover:text-[#2196F3] cursor-pointer"
              >
                <div className="w-9 h-9 rounded-full bg-[#EAF5FF] text-[#2196F3] flex items-center justify-center group-hover:bg-[#2196F3] group-hover:text-white transition-colors">
                  <Calendar className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider">BOOK NOW</span>
              </button>
            </div>

          </div>
        )}
      </header>

      {/* Global Appointment Modal */}
      {isAppointmentModalOpen && (
        <AppointmentModal
          isOpen={isAppointmentModalOpen}
          onClose={() => setIsAppointmentModalOpen(false)}
        />
      )}
    </>
  );
}
