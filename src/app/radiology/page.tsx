import React from 'react';
import { Metadata } from 'next';
import { RADIOLOGY_MODALITIES } from '@/data/radiology';
import { Camera, Radio, Phone, Calendar, CheckCircle2 } from 'lucide-react';
import HeroCurveDivider from '@/components/HeroCurveDivider';

export const metadata: Metadata = {
  title: 'Radiology & Imaging | MANYACARE HealthCity',
  description: 'Digital Radiology & Imaging modalities at MANYACARE HealthCity including Digital X-Ray, Ultrasound, Colour Doppler, ECG, 2D Echo, CT Scan, MRI, and DEXA.',
};

export default function RadiologyPage() {
  return (
    <div className="pb-16 space-y-12">
      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-b from-[#EAF5FF]/80 via-[#F7FAFC] to-white pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 text-left">
          <span className="bg-[#EAF5FF] text-[#2196F3] border border-[#2196F3]/30 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider inline-block">
            Non-Invasive Diagnostic Imaging
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-[#0B3C5D] font-display">
            Radiology & Imaging Services
          </h1>
          <p className="text-base sm:text-lg text-[#64748B] max-w-2xl leading-relaxed">
            High-precision digital imaging support including X-Ray, Ultrasound, Echocardiography, Stress Tests, CT, MRI, and DEXA Scan coordination.
          </p>
          <div className="pt-2">
            <a
              href="tel:+919953239561"
              className="manyacare-btn-primary text-sm py-3 px-6 shadow-md"
            >
              <Phone className="w-4 h-4" />
              <span>Enquire Radiology Desk: +91-9953239561</span>
            </a>
          </div>
        </div>
        <HeroCurveDivider fillColor="#F7FAFC" />
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

      {/* Modalities Grid */}
      <div className="space-y-6">
        <h2 className="text-2xl font-extrabold text-[#0B3C5D]">Imaging Modalities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {RADIOLOGY_MODALITIES.map((mod) => (
            <div key={mod.id} className="manyacare-card p-6 space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-[#2196F3] bg-[#EAF5FF] px-2 py-0.5 rounded">
                    {mod.category}
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">{mod.code}</span>
                </div>
                <h3 className="text-lg font-bold text-[#0B3C5D]">{mod.name}</h3>
                <p className="text-xs text-[#64748B] leading-relaxed">{mod.description}</p>
              </div>

              <div className="pt-3 border-t border-[#D7E0E8] space-y-1 text-xs">
                <p className="font-semibold text-[#0B3C5D]">Patient Preparation:</p>
                <p className="text-[#64748B] text-[11px]">{mod.preparationInfo}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
}
