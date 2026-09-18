'use client';

import React from 'react';
import Link from 'next/link';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Stethoscope,
  ChevronRight,
  ShieldCheck,
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0B3C5D] text-slate-200 border-t border-[#0B3C5D] pt-14 pb-20 md:pb-8">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 space-y-12">
        {/* Top 5-Column Grid (Reference Image Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-12 border-b border-slate-700/60">
          
          {/* Col 1: Brand Info & Social Media Links */}
          <div className="lg:col-span-3 space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-11 h-11 rounded-2xl bg-white text-white flex items-center justify-center  overflow-hidden border border-slate-700/60 transition-all">
                <img src="/manyacare-logo.jpeg" alt="MANYACARE Logo" className="w-full h-full object-fit" />
              </div>
              <div>
                <span className="text-xl font-extrabold tracking-tight text-white block leading-tight">
                  MANYACARE
                </span>
                <span className="text-[10px] font-bold text-[#2196F3] tracking-widest uppercase block">
                  HealthCity
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              MANYACARE HealthCity is a multispecialty digital healthcare and diagnostic platform delivering experienced senior doctor consultations, pathology labs, radiology, home healthcare, and preventive checkup packages.
            </p>

            {/* Social Media Circular Buttons */}
            <div className="flex items-center gap-3 pt-2">
              {/* Facebook SVG */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-800/80 border border-slate-700 text-slate-300 hover:bg-[#2196F3] hover:text-white hover:border-[#2196F3] flex items-center justify-center transition-all"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              {/* Instagram SVG */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-800/80 border border-slate-700 text-slate-300 hover:bg-[#DD2A7B] hover:text-white hover:border-[#DD2A7B] flex items-center justify-center transition-all"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* LinkedIn SVG */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-800/80 border border-slate-700 text-slate-300 hover:bg-[#00008B] hover:text-white hover:border-[#00008B] flex items-center justify-center transition-all"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>

              {/* WhatsApp SVG */}
              <a
                href="https://wa.me/919953239561"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-800/80 border border-slate-700 text-slate-300 hover:bg-[#25D366] hover:text-white hover:border-[#25D366] flex items-center justify-center transition-all"
                aria-label="WhatsApp"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-base font-bold text-white tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {[
                { name: 'Home', href: '/' },
                { name: 'About Us', href: '/about-us' },
                { name: 'Services', href: '/departments' },
                { name: 'Doctors', href: '/specialists' },
                { name: 'Blog', href: '/blog' },
                { name: 'Contact Us', href: '/contact-us' },
                { name: "FAQ's", href: '/patient-resources' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-[#2196F3] transition-colors flex items-center gap-1.5 text-slate-300"
                  >
                    <span className="text-[#2196F3] font-bold">›</span>
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Our Services */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-base font-bold text-white tracking-wide">
              Our Services
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {[
                { name: 'General Physician', href: '/departments/general-physician-internal-medicine' },
                { name: 'Diabetology Care', href: '/departments/diabetes-endocrinology' },
                { name: 'Cardiology Desk', href: '/departments/cardiology' },
                { name: 'Pathology Lab', href: '/diagnostics' },
                { name: 'Digital Radiology', href: '/radiology' },
                { name: 'Home Healthcare', href: '/home-healthcare' },
                { name: 'Health Packages', href: '/health-packages' },
                { name: 'Pain & Fever Care', href: '/departments' },
              ].map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="hover:text-[#2196F3] transition-colors flex items-center gap-1.5 text-slate-300"
                  >
                    <span className="text-[#2196F3] font-bold">›</span>
                    <span>{service.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Our Locations */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-base font-bold text-white tracking-wide">
              Our Locations
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {[
                { name: 'Techzone 4 (Main)', href: '/locations/healthcity-main-campus' },
                { name: 'Gaur City 1 & 2 Hub', href: '/locations/gaur-city-center' },
                { name: 'Sector 4, Gr. Noida', href: '/locations/sector-4-greater-noida' },
                { name: 'Pari Chowk Center', href: '/locations/pari-chowk-hub' },
                { name: 'Crossings Republik', href: '/locations/crossings-republik-hub' },
                { name: 'Sectors 1, 10 & 16B', href: '/locations/sector-1-10-16b' },
                { name: 'Doorstep Sample Draw', href: '/locations' },
              ].map((loc) => (
                <li key={loc.name}>
                  <Link
                    href={loc.href}
                    className="hover:text-[#2196F3] transition-colors flex items-center gap-1.5 text-slate-300"
                  >
                    <span className="text-[#2196F3] font-bold">›</span>
                    <span>{loc.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: Contact Us & Branch Addresses */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-base font-bold text-white tracking-wide">
              Contact Us
            </h4>
            
            <div className="space-y-2.5 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#2196F3] shrink-0" />
                <a href="tel:+919953239561" className="hover:text-white font-semibold text-white">
                  +91-9953239561 / +91-9953239562
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#2196F3] shrink-0" />
                <a href="mailto:info@manyacare.com" className="hover:text-white">
                  info@manyacare.com
                </a>
              </div>

              <div className="flex items-start gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-[#2196F3] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Mon–Sat: 7:00 AM – 11:00 PM</p>
                  <p className="text-slate-400 text-xs">Sunday: By Appointment</p>
                </div>
              </div>
            </div>

            {/* Branch Addresses List */}
            <div className="pt-3 border-t border-slate-700/60 space-y-3 text-xs">
              <div>
                <p className="font-bold text-[#2196F3] uppercase tracking-wider text-[11px]">
                  MAIN CAMPUS (TECHZONE 4)
                </p>
                <p className="text-slate-300 leading-normal mt-0.5">
                  GH-07A Market, Techzone 4, Patwari (Near Nirala Estate & Ek Murti Chowk), Greater Noida West, UP 201306
                </p>
              </div>

              <div>
                <p className="font-bold text-[#2196F3] uppercase tracking-wider text-[11px]">
                  GAUR CITY CARE HUB
                </p>
                <p className="text-slate-300 leading-normal mt-0.5">
                  Gaur City 1 & 2 Plaza, Noida Extension, Greater Noida West, UP 201318
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Dual Embedded Interactive Google Map Cards (Reference Image Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          {/* Map Card 1: Main Campus */}
          <div className="relative rounded-3xl overflow-hidden border border-slate-700/80 bg-slate-800 shadow-xl h-64 group">
            {/* Pill Overlay Badge */}
            <div className="absolute top-4 left-4 z-10 bg-slate-900/90 backdrop-blur-md text-white text-xs font-extrabold px-4 py-2 rounded-full border border-slate-700 flex items-center gap-2 shadow-md">
              <MapPin className="w-3.5 h-3.5 text-[#2196F3]" />
              <span>MAIN CAMPUS (TECHZONE 4, PATWARI)</span>
            </div>
            <iframe
              title="MANYACARE HealthCity Main Campus Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.562123!2d77.435!3d28.595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjhCsDM1JzQyLjAiTiA3N8KwMjYnMDYuMCJF!5e0!3m2!1sen!2sin!4v1650000000000"
              className="w-full h-full border-0 transition-all duration-300"
              loading="lazy"
            />
          </div>

          {/* Map Card 2: Gaur City Care Hub */}
          <div className="relative rounded-3xl overflow-hidden border border-slate-700/80 bg-slate-800 shadow-xl h-64 group">
            {/* Pill Overlay Badge */}
            <div className="absolute top-4 left-4 z-10 bg-slate-900/90 backdrop-blur-md text-white text-xs font-extrabold px-4 py-2 rounded-full border border-slate-700 flex items-center gap-2 shadow-md">
              <MapPin className="w-3.5 h-3.5 text-[#2196F3]" />
              <span>GAUR CITY CARE HUB (GAUR CITY 1 & 2)</span>
            </div>
            <iframe
              title="MANYACARE HealthCity Gaur City Hub Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.562123!2d77.43!3d28.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjhCsDM2JzAwLjAiTiA3N8KwMjUnNDguMCJF!5e0!3m2!1sen!2sin!4v1650000000000"
              className="w-full h-full border-0  transition-all duration-300"
              loading="lazy"
            />
          </div>
        </div>

        {/* Footer Legal & Copyright Bar */}
        <div className="pt-6 border-t border-slate-700/60 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex flex-col items-center md:items-start gap-1">
            <p>© {new Date().getFullYear()} MANYACARE HealthCity. All Rights Reserved.</p>
            <p>
              Designed, Developed & SEO Managed by{' '}
              <a
                href="https://www.zoomdigital.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#2196F3] text-[#2196F3] font-medium"
              >
                Zoom Digital
              </a>
            </p>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-4 text-slate-300 font-medium">
            <Link href="/contact-us" className="hover:text-[#2196F3] transition-colors">Privacy Policy</Link>
            <span>•</span>
            <Link href="/contact-us" className="hover:text-[#2196F3] transition-colors">Terms & Conditions</Link>
            <span>•</span>
            <Link href="/patient-resources" className="hover:text-[#2196F3] transition-colors">Medical Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
