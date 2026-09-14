import React from 'react';
import { Metadata } from 'next';
import { DIAGNOSTIC_TESTS } from '@/data/diagnostics';
import { FlaskConical, Phone, Home as HomeIcon, CheckCircle2, Clock, ShieldCheck } from 'lucide-react';
import HeroCurveDivider from '@/components/HeroCurveDivider';

export const metadata: Metadata = {
  title: 'Diagnostics & Laboratory Services | MANYACARE HealthCity',
  description: 'Pathology diagnostic laboratory services at MANYACARE HealthCity. Complete Blood Count (CBC), HbA1c, Lipid Profile, Liver & Kidney Function Tests, and Home Sample Collection.',
};

export default function DiagnosticsPage() {
  return (
    <div className="pb-16 space-y-12">
      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-b from-[#EAF5FF]/80 via-[#F7FAFC] to-white pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 text-left">
          <span className="bg-[#EAF5FF] text-[#2196F3] border border-[#2196F3]/30 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider inline-block">
            Pathology & Clinical Laboratory
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-[#0B3C5D] font-display">
            Diagnostics & Pathology Laboratory
          </h1>
          <p className="text-base sm:text-lg text-[#64748B] max-w-2xl leading-relaxed">
            Comprehensive routine blood tests, specialized endocrine assays, metabolic profiles, and convenient home sample collection.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="tel:+919953239562"
              className="manyacare-btn-primary text-sm py-3 px-6 shadow-md"
            >
              <Phone className="w-4 h-4" />
              <span>Book Lab Sample: +91-9953239562</span>
            </a>
          </div>
        </div>
        <HeroCurveDivider fillColor="#F7FAFC" />
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

      {/* Home Sample Collection Banner */}
      <div className="bg-[#EAF5FF] border border-[#2196F3]/40 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-[#2196F3] text-white flex items-center justify-center shrink-0">
            <HomeIcon className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-base font-bold text-[#0B3C5D]">Home Sample Collection Service</h3>
            <p className="text-xs text-[#64748B] mt-0.5">
              Certified phlebotomists collect blood samples at your doorstep in sterile, hygienic sample kits.
            </p>
          </div>
        </div>
        <a
          href="tel:+919953239562"
          className="manyacare-btn-primary text-xs py-2.5 px-5 shrink-0"
        >
          Call +91-9953239562
        </a>
      </div>

      {/* Diagnostic Test Catalog */}
      <div className="space-y-6">
        <h2 className="text-2xl font-extrabold text-[#0B3C5D]">Diagnostic Test Catalog</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DIAGNOSTIC_TESTS.map((test) => (
            <div key={test.id} className="manyacare-card p-6 space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-[#2196F3] bg-[#EAF5FF] px-2 py-0.5 rounded">
                    {test.category}
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">{test.code}</span>
                </div>
                <h3 className="text-base font-bold text-[#0B3C5D]">{test.name}</h3>
                <p className="text-xs text-[#64748B] leading-relaxed">{test.description}</p>
              </div>

              <div className="pt-3 border-t border-[#D7E0E8] space-y-1.5 text-xs text-slate-600">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] text-slate-400">Sample:</span>
                  <span className="font-semibold text-[#0B3C5D] text-[11px]">{test.sampleType}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[11px] text-slate-400">Fasting Requirement:</span>
                  <span className="font-semibold text-[#0B3C5D] text-[11px]">
                    {test.fastingRequired ? test.fastingHours : 'No Fasting Required'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
}
