'use client';

import React, { useState } from 'react';
import { Metadata } from 'next';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Calendar,
  CheckCircle2,
  AlertCircle,
  Headphones,
  ShieldCheck,
  Sparkles,
  MessageSquare,
} from 'lucide-react';
import HeroCurveDivider from '@/components/HeroCurveDivider';
import Breadcrumb from '@/components/Breadcrumb';

export default function ContactUsPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', subject: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const heroHeadingTitle = "Contact MANYACARE HealthCity";
  const heroHeadingSubtitle = "We are Here to Help & Guide You";
  const heroHeadingFull = `${heroHeadingTitle} - ${heroHeadingSubtitle}`;
  const heroImagePath = "/images/manyacare-clinical-locations-noida-extension.jpg";

  const contactSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    '@id': 'https://manyacare.in/contact-us/#webpage',
    url: 'https://manyacare.in/contact-us',
    name: 'Contact MANYACARE HealthCity | Appointments & Enquiries',
    description:
      'Contact MANYACARE HealthCity for doctor appointment bookings, diagnostic lab tests, home sample collection, and general enquiries in Greater Noida West.',
    mainEntity: {
      '@type': 'MedicalClinic',
      name: 'MANYACARE HealthCity Main Campus',
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
    },
  };

  return (
    <div className="pb-16 space-y-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-b from-[#EAF5FF]/80 via-[#F7FAFC] to-white pt-8 pb-16 lg:pt-16 lg:pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Contact Us' }]} className="mb-6" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Hero Content Area */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#EAF5FF] border border-[#2196F3]/40 text-[#0B3C5D] text-sm font-bold">
                <Headphones className="w-4 h-4 text-[#2196F3]" />
                <span>Patient Desk & Helpline Support</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium text-[#0B3C5D] tracking-tight leading-tight font-display">
                {heroHeadingTitle}
                <span className="block text-[#2196F3] font-bold text-3xl sm:text-4xl lg:text-5xl mt-2">
                  {heroHeadingSubtitle}
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-[#64748B] font-normal leading-relaxed max-w-2xl">
                Get in touch with our medical assistance team for OPD doctor consultations, laboratory sample collection, diagnostic appointments, or general health enquiries.
              </p>

              {/* Trust & Feature Badges */}
              <div className="grid grid-cols-3 gap-4 pt-4 text-left">
                <div className="bg-white p-4 rounded-2xl border border-[#D7E0E8] shadow-xs">
                  <Phone className="w-6 h-6 text-[#2196F3] mb-1.5" />
                  <p className="text-sm font-bold text-[#0B3C5D]">Quick Helpline</p>
                  <p className="text-xs text-slate-500">Instant Triage Support</p>
                </div>
                <div className="bg-white p-4 rounded-2xl border border-[#D7E0E8] shadow-xs">
                  <ShieldCheck className="w-6 h-6 text-[#2196F3] mb-1.5" />
                  <p className="text-sm font-bold text-[#0B3C5D]">Patient First</p>
                  <p className="text-xs text-slate-500">Ethical Care Desk</p>
                </div>
                <div className="bg-white p-4 rounded-2xl border border-[#D7E0E8] shadow-xs">
                  <Clock className="w-6 h-6 text-[#2196F3] mb-1.5" />
                  <p className="text-sm font-bold text-[#0B3C5D]">7 AM - 11 PM</p>
                  <p className="text-xs text-slate-500">Mon - Sat Active Hours</p>
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
                      Direct Triage Desk
                    </p>
                    <p className="text-xs sm:text-sm text-slate-600">
                      Our patient coordination team ensures immediate assistance for appointments, lab tests, and home care.
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Contact Details Cards */}
        <div className="lg:col-span-5 space-y-6">
          <div className="manyacare-card p-6 sm:p-8 space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-[#0B3C5D]">Helpline Numbers</h3>
            <div className="space-y-4 text-sm text-[#172B4D]">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#2196F3] shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-[#0B3C5D]">Appointments & OPD Desk</p>
                  <a href="tel:+919953239561" className="text-[#2196F3] font-bold text-base block hover:underline cursor-pointer">
                    +91-9953239561
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#2196F3] shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-[#0B3C5D]">Laboratory & Home Collection</p>
                  <a href="tel:+919953239562" className="text-[#2196F3] font-bold text-base block hover:underline cursor-pointer">
                    +91-9953239562
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#2196F3] shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-[#0B3C5D]">Email Communication</p>
                  <a href="mailto:info@manyacare.com" className="text-[#64748B] hover:text-[#2196F3] text-sm block cursor-pointer">
                    info@manyacare.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#2196F3] shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-[#0B3C5D]">Main Campus Address</p>
                  <p className="text-[#64748B] text-sm">
                    MANYACARE HealthCity Main Campus (Address parameters to be updated upon launch)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#2196F3] shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-[#0B3C5D]">Business Hours</p>
                  <p className="text-[#64748B] text-sm">Monday–Saturday: 7:00 AM – 11:00 PM</p>
                  <p className="text-[#64748B] text-sm">Sunday: By Appointment</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: General Enquiry Form */}
        <div className="lg:col-span-7">
          <div className="manyacare-card p-6 sm:p-8 space-y-5">
            <h3 className="text-xl sm:text-2xl font-bold text-[#0B3C5D]">Send Us a Message</h3>
            {submitted ? (
              <div className="text-center py-8 space-y-3">
                <CheckCircle2 className="w-12 h-12 text-[#16A34A] mx-auto" />
                <h4 className="text-xl font-bold text-[#0B3C5D]">Message Received</h4>
                <p className="text-sm text-[#64748B]">
                  Thank you for contacting MANYACARE HealthCity. Our patient care team will respond promptly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold text-[#172B4D] mb-1.5">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      className="w-full p-3 rounded-xl border border-[#D7E0E8] focus:border-[#2196F3] focus:outline-none text-sm"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-[#172B4D] mb-1.5">Mobile Number *</label>
                    <input
                      type="tel"
                      required
                      className="w-full p-3 rounded-xl border border-[#D7E0E8] focus:border-[#2196F3] focus:outline-none text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-[#172B4D] mb-1.5">Email Address</label>
                  <input
                    type="email"
                    className="w-full p-3 rounded-xl border border-[#D7E0E8] focus:border-[#2196F3] focus:outline-none text-sm"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-[#172B4D] mb-1.5">Subject / Query Type</label>
                  <select className="w-full p-3 rounded-xl border border-[#D7E0E8] focus:border-[#2196F3] focus:outline-none bg-white text-sm cursor-pointer">
                    <option value="General Enquiry">General Enquiry</option>
                    <option value="Appointment Booking">Appointment Booking</option>
                    <option value="Lab Test Home Collection">Lab Test Home Collection</option>
                    <option value="Home Visit Request">Home Visit Request</option>
                    <option value="Medical Education Guidance">Medical Education Guidance</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-[#172B4D] mb-1.5">Your Message</label>
                  <textarea
                    rows={4}
                    required
                    className="w-full p-3 rounded-xl border border-[#D7E0E8] focus:border-[#2196F3] focus:outline-none resize-none text-sm"
                  />
                </div>

                <button type="submit" className="w-full manyacare-btn-primary py-3.5 text-sm cursor-pointer">
                  Submit Enquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Google Map Section */}
      <div className="space-y-4">
        <h3 className="text-xl sm:text-2xl font-bold text-[#0B3C5D]">Main Campus Location Map</h3>
        <div className="rounded-2xl overflow-hidden border border-[#D7E0E8] shadow-md h-[400px] w-full">
          <iframe
            title="MANYACARE HealthCity Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.562123!2d77.2090!3d28.6139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjhCsDM2JzUwLjAiTiA3N8KwMTInMzIuNCJF!5e0!3m2!1sen!2sin!4v1650000000000"
            className="w-full h-full border-0"
            loading="lazy"
          />
        </div>
      </div>
      </div>
    </div>
  );
}
