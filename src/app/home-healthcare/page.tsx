'use client';

import React, { useState } from 'react';
import { Metadata } from 'next';
import { Home as HomeIcon, Phone, Calendar, CheckCircle2, ShieldAlert } from 'lucide-react';
import AppointmentModal from '@/components/AppointmentModal';
import HeroCurveDivider from '@/components/HeroCurveDivider';

export default function HomeHealthcarePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="pb-16 space-y-12">
      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-b from-[#EAF5FF]/80 via-[#F7FAFC] to-white pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 text-left">
          <span className="bg-[#EAF5FF] text-[#2196F3] border border-[#2196F3]/30 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider inline-block">
            Doorstep Clinical Care
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-[#0B3C5D] font-display">
            Home Healthcare Services
          </h1>
          <p className="text-base sm:text-lg text-[#64748B] max-w-2xl leading-relaxed">
            Qualified doctor consultations, nursing procedures, physical therapy, elderly care, and sample collection delivered directly to your home.
          </p>
          <div className="pt-2">
            <button
              onClick={() => setIsModalOpen(true)}
              className="manyacare-btn-primary text-sm py-3 px-6 shadow-md"
            >
              <Calendar className="w-4 h-4" />
              <span>Request Home Visit</span>
            </button>
          </div>
        </div>
        <HeroCurveDivider fillColor="#F7FAFC" />
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

      {/* Services Grid */}
      <div className="space-y-6">
        <h2 className="text-2xl font-extrabold text-[#0B3C5D]">Services Available at Home</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: 'Doctor Visit at Home',
              desc: 'General physician home evaluation for non-emergency acute illnesses, chronic follow-ups, and senior citizen physical checkups.',
            },
            {
              title: 'Nursing Care & Wound Dressing',
              desc: 'Certified nursing support for post-operative dressing, catheter care, IV infusion (subject to prescription), and injection therapy.',
            },
            {
              title: 'Physiotherapy at Home',
              desc: 'Qualified physical therapists providing post-surgical joint rehabilitation, stroke paralysis exercise, and back pain therapy.',
            },
            {
              title: 'Elderly & Geriatric Support',
              desc: 'Compassionate assistance for mobility-restricted elderly patients including vital tracking and daily health monitoring.',
            },
            {
              title: 'Home Sample Collection',
              desc: 'Doorstep blood sample collection for routine pathology, HbA1c, thyroid assays, and lipid profiles by trained phlebotomists.',
            },
            {
              title: 'Home ECG & BP Monitoring',
              desc: 'Ambulatory digital ECG lead recording and blood pressure monitoring in the comfort of your home.',
            },
          ].map((item, idx) => (
            <div key={idx} className="manyacare-card p-6 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#EAF5FF] text-[#2196F3] flex items-center justify-center font-bold">
                <HomeIcon className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#0B3C5D]">{item.title}</h3>
              <p className="text-xs text-[#64748B] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Clinical Disclaimer Box */}
      <div className="bg-[#F7FAFC] border border-[#D7E0E8] rounded-2xl p-6 space-y-2 text-xs text-[#64748B]">
        <div className="flex items-center gap-2 font-bold text-[#0B3C5D]">
          <ShieldAlert className="w-4 h-4 text-amber-500" />
          <span>Medical Safety Disclaimer</span>
        </div>
        <p>
          Home healthcare services are subject to initial clinical triage and local practitioner availability. In cases of sudden acute chest pain, major trauma, stroke signs, or severe breathlessness, please transport the patient immediately to the nearest hospital emergency room.
        </p>
      </div>

      {isModalOpen && (
        <AppointmentModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          defaultConsultationType="Home Visit"
        />
      )}
      </div>
    </div>
  );
}
