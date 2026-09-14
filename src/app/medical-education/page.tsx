'use client';

import React, { useState } from 'react';
import { MEDICAL_EDUCATION_DATA } from '@/data/medicalEducation';
import { GraduationCap, BookOpen, CheckCircle2, Phone, ShieldAlert, ArrowRight } from 'lucide-react';
import AppointmentModal from '@/components/AppointmentModal';
import HeroCurveDivider from '@/components/HeroCurveDivider';
import Breadcrumb from '@/components/Breadcrumb';

export default function MedicalEducationPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const educationSchema = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOccupationalProgram',
    '@id': 'https://manyacare.in/medical-education/#program',
    name: 'MANYACARE Medical Education & Academic Guidance Division',
    url: 'https://manyacare.in/medical-education',
    description:
      'Ethical academic guidance and counseling for MBBS admissions in India & Abroad, NEET PG entrance coaching, B.Sc Nursing, and Allied Paramedical Sciences.',
    provider: {
      '@id': 'https://manyacare.in/#organization',
    },
  };

  return (
    <div className="pb-16 space-y-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(educationSchema) }}
      />
      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-b from-[#EAF5FF]/80 via-[#F7FAFC] to-white pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Medical Education' }]} className="mb-6" />
          <div className="space-y-4 text-left">
            <span className="bg-[#EAF5FF] text-[#2196F3] border border-[#2196F3]/30 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider inline-block">
            Academic Guidance Division
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-[#0B3C5D] font-display">
            Study Medicine with Expert Guidance
          </h1>
          <p className="text-base sm:text-lg text-[#64748B] max-w-2xl leading-relaxed">
            Transparent, ethical academic counseling for MBBS admissions in India & Abroad, PG medical entrances, professional nursing programs, and paramedical allied health sciences.
          </p>
          <div className="pt-2">
            <button
              onClick={() => setIsModalOpen(true)}
              className="manyacare-btn-primary text-sm py-3 px-6 shadow-md"
            >
              <GraduationCap className="w-4 h-4" />
              <span>Request Academic Counseling</span>
            </button>
          </div>
        </div>
        </div>
        <HeroCurveDivider fillColor="#F7FAFC" />
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

      {/* Education Categories */}
      <div className="space-y-12">
        {MEDICAL_EDUCATION_DATA.map((cat) => (
          <div key={cat.id} className="space-y-6">
            <div className="border-b border-[#D7E0E8] pb-3">
              <h2 className="text-2xl font-extrabold text-[#0B3C5D]">{cat.categoryTitle}</h2>
              <p className="text-xs text-[#64748B] mt-1">{cat.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cat.items.map((item, idx) => (
                <div key={idx} className="manyacare-card p-6 space-y-3 flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className="text-base font-bold text-[#0B3C5D] flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-[#2196F3] shrink-0" />
                      <span>{item.title}</span>
                    </h3>
                    <p className="text-xs text-[#64748B]">
                      <strong>Duration:</strong> {item.duration}
                    </p>
                    <p className="text-xs text-[#64748B]">
                      <strong>Eligibility:</strong> {item.eligibility}
                    </p>
                    <div className="pt-2 space-y-1">
                      <p className="text-xs font-bold text-[#0B3C5D]">Program Highlights:</p>
                      <ul className="space-y-1 text-xs text-[#64748B]">
                        {item.highlights.map((h, i) => (
                          <li key={i} className="flex items-center gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#16A34A] shrink-0" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#D7E0E8]">
                    <button
                      onClick={() => setIsModalOpen(true)}
                      className="w-full manyacare-btn-secondary text-xs py-2"
                    >
                      Enquire Admission Guidance
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Regulatory Disclaimer */}
      <div className="bg-[#F7FAFC] border border-[#D7E0E8] rounded-2xl p-6 space-y-2 text-xs text-[#64748B]">
        <div className="flex items-center gap-2 font-bold text-[#0B3C5D]">
          <ShieldAlert className="w-4 h-4 text-[#2196F3]" />
          <span>Regulatory Compliance Notice</span>
        </div>
        <p>
          Admission eligibility, National Medical Commission (NMC) regulations, NEET qualification criteria, and university recognitions must be independently verified from official government portals and statutory regulatory bodies. MANYACARE HealthCity provides advisory academic counseling only and does not claim guaranteed university admissions or job placements.
        </p>
      </div>

      {isModalOpen && (
        <AppointmentModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          defaultDepartment="Medical Education Guidance"
        />
      )}
      </div>
    </div>
  );
}
