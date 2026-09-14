'use client';

import React, { useState } from 'react';
import { Metadata } from 'next';
import { Phone, Mail, MapPin, Clock, Calendar, CheckCircle2, AlertCircle } from 'lucide-react';
import HeroCurveDivider from '@/components/HeroCurveDivider';

export default function ContactUsPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', subject: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pb-16 space-y-12">
      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-b from-[#EAF5FF]/80 via-[#F7FAFC] to-white pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3 text-left">
          <span className="text-xs sm:text-sm font-bold text-[#2196F3] bg-[#EAF5FF] px-4 py-1.5 rounded-full uppercase tracking-wider inline-block">
            Patient Desk
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-[#0B3C5D] font-display">
            Contact Us
          </h1>
          <p className="text-base sm:text-lg text-[#64748B] max-w-2xl">
            Get in touch with MANYACARE HealthCity for appointments, diagnostic tests, home visits, or general enquiries.
          </p>
        </div>
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
                  <p className="font-bold text-[#0B3C5D]">Consultation Hours</p>
                  <p className="text-[#64748B] text-sm">Mon - Sat: 8:00 AM - 8:00 PM</p>
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
