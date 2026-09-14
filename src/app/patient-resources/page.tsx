import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { ShieldCheck, FileText, Heart, Calendar, HelpCircle, Phone } from 'lucide-react';
import HeroCurveDivider from '@/components/HeroCurveDivider';

export const metadata: Metadata = {
  title: 'Patient Resources & Guidance | MANYACARE HealthCity',
  description: 'Access patient resources at MANYACARE HealthCity: online appointments, medical records, second opinions, insurance guidance, corporate health, and patient FAQs.',
};

export default function PatientResourcesPage() {
  return (
    <div className="pb-16 space-y-12">
      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-b from-[#EAF5FF]/80 via-[#F7FAFC] to-white pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3 text-left">
          <span className="text-xs sm:text-sm font-bold text-[#2196F3] bg-[#EAF5FF] px-4 py-1.5 rounded-full uppercase tracking-wider inline-block">
            Patient Support Desk
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-[#0B3C5D] font-display">
            Patient Resources & Services
          </h1>
          <p className="text-base sm:text-lg text-[#64748B] max-w-2xl">
            Information to help you navigate appointments, diagnostic reports, second opinions, and medical assistance.
          </p>
        </div>
        <HeroCurveDivider fillColor="#F7FAFC" />
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            title: 'Online Appointments',
            desc: 'Schedule OPD appointments with multispecialty consultants with choices for in-clinic or teleconsultation.',
            href: '/specialists',
          },
          {
            title: 'Second Medical Opinion',
            desc: 'Submit medical records and diagnostic scans for expert review by senior medical consultants.',
            href: '/contact-us',
          },
          {
            title: 'Health Records & Reports',
            desc: 'Digital delivery of pathology laboratory reports and radiology scan summaries.',
            href: '/diagnostics',
          },
          {
            title: 'Insurance Assistance Guidance',
            desc: 'Information regarding cashless hospitalization coordination and claim paperwork support.',
            href: '/contact-us',
          },
          {
            title: 'Corporate Health Programs',
            desc: 'Customized executive checkup packages and on-site wellness screening for corporate employees.',
            href: '/health-packages',
          },
          {
            title: 'International Patient Desk',
            desc: 'Dedicated coordination for international medical travel, visa invitation support, and tele-triage.',
            href: '/contact-us',
          },
        ].map((res, i) => (
          <div key={i} className="manyacare-card p-6 space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <FileText className="w-8 h-8 text-[#2196F3]" />
              <h3 className="text-base font-bold text-[#0B3C5D]">{res.title}</h3>
              <p className="text-xs text-[#64748B] leading-relaxed">{res.desc}</p>
            </div>
            <div className="pt-3 border-t border-[#D7E0E8]">
              <Link
                href={res.href}
                className="text-xs font-bold text-[#2196F3] hover:text-[#0B3C5D]"
              >
                Access Resource →
              </Link>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}
