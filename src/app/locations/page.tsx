import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { LOCATIONS, AREAS_WE_SERVE_CATEGORIES } from '@/data/locations';
import FaqAccordion from '@/components/FaqAccordion';
import HeroCurveDivider from '@/components/HeroCurveDivider';
import {
  MapPin,
  Phone,
  Clock,
  ChevronRight,
  CheckCircle2,
  Navigation,
  Building,
  Home,
  Truck,
  HelpCircle,
  Calendar,
  MessageCircle,
  Stethoscope,
  FlaskConical,
  Activity,
  ShieldCheck,
  UserCheck,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Areas We Serve & Locations | MANYACARE HealthCity Greater Noida West',
  description:
    'Explore MANYACARE HealthCity clinic locations and serving sectors across Greater Noida West, Gaur City 1 & 2, Techzone 4, Sector 4, Sector 10, Pari Chowk, and Crossings Republik. Free doorstep sample collection available.',
};

export default function LocationsIndexPage() {
  const heroTitle = "MANYACARE Clinical Locations";
  const heroSubtitle = "Greater Noida West & Noida Extension Healthcare Hubs";
  const heroFullHeading = `${heroTitle} - ${heroSubtitle}`;

  return (
    <div className="pb-16 space-y-12">
      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-b from-[#EAF5FF]/80 via-[#F7FAFC] to-white pt-8 pb-16 lg:pt-16 lg:pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Hero Content Area */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#EAF5FF] border border-[#2196F3]/40 text-[#0B3C5D] text-xs sm:text-sm font-bold">
                <MapPin className="w-4 h-4 text-[#2196F3]" />
                <span>Clinic Locations & Service Zones</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium text-[#0B3C5D] tracking-tight leading-tight font-display">
                {heroTitle}
                <span className="block text-[#2196F3] font-bold text-3xl sm:text-4xl lg:text-5xl mt-2">
                  {heroSubtitle}
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-[#64748B] font-normal leading-relaxed max-w-2xl">
                Centrally based at GH-07A Market, Techzone 4, Greater Noida West. Providing fast OPD consultations, digital pathology, radiology, and free doorstep blood sample collection across all housing societies.
              </p>

              {/* Action CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="tel:+919953239561"
                  className="manyacare-btn-primary py-4 px-7 text-base shadow-md"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Book OPD Visit: +91-9953239561</span>
                </a>
                <Link
                  href="/locations/healthcity-main-campus"
                  className="manyacare-btn-secondary py-4 px-7 text-base"
                >
                  <Navigation className="w-5 h-5 text-[#2196F3]" />
                  <span>Explore Main Campus</span>
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4 pt-4 text-left cursor-pointer">
                <div className="bg-white p-4 rounded-2xl border border-[#D7E0E8] shadow-xs">
                  <Building className="w-6 h-6 text-[#2196F3] mb-1.5" />
                  <p className="text-sm font-bold text-[#0B3C5D]">Main Campus</p>
                  <p className="text-xs text-slate-500">Techzone 4 Hub</p>
                </div>
                <div className="bg-white p-4 rounded-2xl border border-[#D7E0E8] shadow-xs">
                  <MapPin className="w-6 h-6 text-[#2196F3] mb-1.5" />
                  <p className="text-sm font-bold text-[#0B3C5D]">Gaur City</p>
                  <p className="text-xs text-slate-500">Care Hub 1 & 2</p>
                </div>
                <div className="bg-white p-4 rounded-2xl border border-[#D7E0E8] shadow-xs">
                  <Truck className="w-6 h-6 text-[#2196F3] mb-1.5" />
                  <p className="text-sm font-bold text-[#0B3C5D]">Doorstep Draw</p>
                  <p className="text-xs text-slate-500">Free Home Sample</p>
                </div>
              </div>
            </div>

            {/* Right Hero Visual Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none rounded-3xl overflow-hidden border-2 border-[#D7E0E8] shadow-2xl bg-white">
                <img
                  src="/images/manyacare-clinical-locations-noida-extension.jpg"
                  alt={heroFullHeading}
                  title={heroFullHeading}
                  className="w-full h-[380px] sm:h-[450px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B3C5D]/90 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                  <div className="bg-white/95 backdrop-blur-xs text-[#0B3C5D] p-4.5 rounded-2xl border border-[#D7E0E8] shadow-lg space-y-1">
                    <p className="text-sm font-bold flex items-center gap-2 text-[#0B3C5D]">
                      <CheckCircle2 className="w-5 h-5 text-[#16A34A]" />
                      Doorstep Blood Sample Collection
                    </p>
                    <p className="text-xs sm:text-sm text-slate-600">
                      Serving Gaur City 1 & 2, Nirala Estate, Cherry County, Sector 1, 4, 10, 16B & Crossings Republik.
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

      {/* 2. CLINICAL LOCATIONS SERVICES INFORMATION SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-[#D7E0E8] rounded-3xl p-6 sm:p-10 shadow-xs space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-[#D7E0E8] pb-6 text-left">
            <div className="space-y-2">
              <span className="text-xs font-bold text-[#2196F3] bg-[#EAF5FF] px-3.5 py-1 rounded-full uppercase tracking-wider inline-block">
                Detailed Service Coverage
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0B3C5D] font-display">
                Healthcare Services & Local Network
              </h2>
            </div>
            <p className="text-sm text-[#64748B] max-w-xl leading-relaxed">
              MANYACARE HealthCity connects residential societies with senior clinical specialists, diagnostic pathology, digital radiology, and home doctor visits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-left cursor-pointer">
            <div className="p-4 rounded-2xl bg-[#F7FAFC] border border-[#D7E0E8] space-y-2">
              <div className="w-9 h-9 rounded-xl bg-[#EAF5FF] text-[#2196F3] flex items-center justify-center font-bold">
                <Truck className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-base text-[#0B3C5D]">Doorstep Collection</h4>
              <p className="text-sm text-slate-500 leading-relaxed">
                Free blood sample collection from your society apartment flat with digital report delivery.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#F7FAFC] border border-[#D7E0E8] space-y-2">
              <div className="w-9 h-9 rounded-xl bg-[#EAF5FF] text-[#2196F3] flex items-center justify-center font-bold">
                <Building className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-base text-[#0B3C5D]">Main HealthCity Hub</h4>
              <p className="text-sm text-slate-500 leading-relaxed">
                Techzone 4 campus equipped with 20+ specialty OPD clinics, pathology lab, and X-ray facility.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#F7FAFC] border border-[#D7E0E8] space-y-2">
              <div className="w-9 h-9 rounded-xl bg-[#EAF5FF] text-[#2196F3] flex items-center justify-center font-bold">
                <MapPin className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-base text-[#0B3C5D]">Gaur City Care Hub</h4>
              <p className="text-sm text-slate-500 leading-relaxed">
                Dedicated consultation & sample draw point for Gaur City 1, 2, and Plaza residents.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#F7FAFC] border border-[#D7E0E8] space-y-2">
              <div className="w-9 h-9 rounded-xl bg-[#EAF5FF] text-[#2196F3] flex items-center justify-center font-bold">
                <Home className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-base text-[#0B3C5D]">Home Doctor Visits</h4>
              <p className="text-sm text-slate-500 leading-relaxed">
                Doorstep physician evaluations, nursing procedures, and home physical therapy support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. LOCATIONS CARD GRID (3 CARDS PER ROW, NO PHOTOS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-left">
        <div className="flex items-center justify-between border-b border-[#D7E0E8] pb-4">
          <div>
            <h2 className="text-2xl font-bold text-[#0B3C5D]">MANYACARE HealthCity Campuses & Hubs</h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Select a location hub to view detailed services, address, timings, and doctor availability
            </p>
          </div>
          <span className="text-xs font-bold text-[#2196F3] bg-[#EAF5FF] px-3 py-1 rounded-full">
            {LOCATIONS.length} Clinic Hubs
          </span>
        </div>

        {/* 3 Cards per row layout, NO photos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {LOCATIONS.map((loc) => (
            <div
              key={loc.id}
              className="manyacare-card p-6 flex flex-col cursor-pointer justify-between hover:border-[#2196F3] transition-all duration-300 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-[#2196F3] bg-[#EAF5FF] px-2.5 py-0.5 rounded-md">
                    {loc.cityName}
                  </span>
                  {loc.isMainBranch && (
                    <span className="text-[11px] font-bold text-white bg-[#0B3C5D] px-2.5 py-0.5 rounded-md">
                      Main Campus
                    </span>
                  )}
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-[#0B3C5D] group-hover:text-[#2196F3] transition-colors leading-snug">
                    {loc.displayName}
                  </h3>
                  <p className="text-xs text-[#64748B] flex items-start gap-1.5 leading-relaxed">
                    <MapPin className="w-4 h-4 text-[#2196F3] shrink-0 mt-0.5" />
                    <span>{loc.addressPlaceholder}</span>
                  </p>
                </div>

                <div className="pt-2 space-y-1.5 border-t border-slate-100">
                  <p className="text-xs font-bold text-[#0B3C5D]">Services Available:</p>
                  <ul className="space-y-1 text-xs text-[#64748B]">
                    {loc.servicesAvailable.slice(0, 4).map((s, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#16A34A] shrink-0" />
                        <span className="truncate">{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-5 mt-4 flex items-center justify-between">
                <Link
                  href={`/locations/${loc.slug}`}
                  className="text-xs sm:text-sm font-bold text-[#2196F3] hover:text-[#0B3C5D] flex items-center gap-1.5 transition-colors group-hover:translate-x-1 duration-200"
                >
                  <span>Explore Location Hub</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. DETAILED AREAS WE SERVE SECTORS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F7FAFC] border border-[#D7E0E8] rounded-3xl p-6 sm:p-10 space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-bold text-[#2196F3] bg-[#EAF5FF] px-3.5 py-1 rounded-full uppercase tracking-wider">
              Neighborhood Reach
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B3C5D] font-display">
              Consultations & Home Visits Across Sectors
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
              Providing fast clinical OPD care, emergency assistance, and home sample collection for residents across all major residential sectors and housing societies in Greater Noida West.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {AREAS_WE_SERVE_CATEGORIES.map((cat, idx) => (
              <div key={idx} className="bg-white border border-[#D7E0E8] rounded-2xl p-6 shadow-xs space-y-4">
                <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-[#EAF5FF] text-[#2196F3] flex items-center justify-center font-bold">
                    <Navigation className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#0B3C5D]">{cat.title}</h3>
                    <p className="text-xs text-[#64748B]">{cat.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {cat.areas.map((area, aIdx) => (
                    <Link
                      key={aIdx}
                      href={`/locations/${area.slug}`}
                      className="flex items-center justify-between p-2.5 rounded-xl bg-[#F7FAFC] border border-[#D7E0E8] hover:border-[#2196F3] hover:bg-[#EAF5FF] transition-all group"
                    >
                      <div className="flex items-center gap-2 overflow-hidden">
                        <MapPin className="w-3.5 h-3.5 text-[#2196F3] shrink-0" />
                        <span className="text-xs font-semibold text-[#172B4D] group-hover:text-[#2196F3] truncate">
                          {area.name}
                        </span>
                      </div>
                      {area.tag && (
                        <span className="text-[9px] font-bold text-[#2196F3] bg-[#2196F3]/10 px-1.5 py-0.5 rounded shrink-0">
                          {area.tag}
                        </span>
                      )}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CENTERED ACCORDION FAQ SECTION */}
      <section className="pt-8 border-t border-[#D7E0E8] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FaqAccordion
          badgeText="Locations & Reach FAQs"
          title="Frequently Asked Questions"
          subtitle="Common queries regarding clinic locations, OPD timings, and doorstep sample collection."
          faqs={[
            {
              question: "Where is the main campus of MANYACARE HealthCity located?",
              answer: "Our main HealthCity campus is located at GH-07A Market, Techzone 4, Patwari (opposite Nirala Estate & near Ek Murti Chowk), Greater Noida West, UP 201306."
            },
            {
              question: "Is doorstep blood sample collection free across Gaur City and Noida Extension?",
              answer: "Yes, MANYACARE provides free doorstep blood sample collection for all major residential societies across Gaur City 1, Gaur City 2, Techzone 4, Sector 4, Sector 10, and Crossings Republik."
            },
            {
              question: "What are the clinic operating hours?",
              answer: "Our main campus operates Monday through Saturday from 8:00 AM to 8:00 PM, and Sundays from 9:00 AM to 2:00 PM."
            },
            {
              question: "How do I request a home doctor visit in Greater Noida West?",
              answer: "You can request a home doctor visit by calling our helpline at +91-9953239561 or sending a WhatsApp message to +91-9953239561."
            }
          ]}
        />
      </section>

      {/* 6. FULL-WIDTH GOOGLE MAP SECTION (MAIN CAMPUS ADDRESS) */}
      <section className="pt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-left">
        <div className="bg-white border border-[#D7E0E8] rounded-3xl overflow-hidden shadow-xs">
          <div className="p-6 sm:p-8 border-b border-[#D7E0E8] flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-xs font-bold text-[#2196F3] bg-[#EAF5FF] px-3 py-1 rounded-full uppercase tracking-wider inline-block">
                Main Campus Location
              </span>
              <h2 className="text-2xl font-bold text-[#0B3C5D]">MANYACARE HealthCity Location Map</h2>
              <p className="text-xs sm:text-sm text-slate-500">
                GH-07A Market, Techzone 4, Patwari (Near Nirala Estate & Ek Murti Chowk), Greater Noida West, UP 201306
              </p>
            </div>

            <div className="flex flex-wrap gap-2 shrink-0">
              <a
                href="https://maps.google.com/?q=MANYACARE+HealthCity+Techzone+4+Greater+Noida+West"
                target="_blank"
                rel="noopener noreferrer"
                className="manyacare-btn-primary text-xs py-2.5 px-4"
              >
                <Navigation className="w-4 h-4" />
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
