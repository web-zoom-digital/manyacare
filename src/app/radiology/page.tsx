import React from 'react';
import { Metadata } from 'next';
import { RADIOLOGY_MODALITIES } from '@/data/radiology';
import { Camera, Radio, Phone, Calendar, CheckCircle2, ShieldCheck, Activity, Disc } from 'lucide-react';
import HeroCurveDivider from '@/components/HeroCurveDivider';
import FaqAccordion from '@/components/FaqAccordion';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Radiology & Imaging | MANYACARE HealthCity',
  description: 'Digital Radiology & Imaging modalities at MANYACARE HealthCity including Digital X-Ray, Ultrasound, Colour Doppler, ECG, 2D Echo, CT Scan, MRI, and DEXA.',
};

export default function RadiologyPage() {
  const heroHeadingTitle = "Radiology & Digital Imaging";
  const heroHeadingSubtitle = "Advanced Non-Invasive Diagnostic Scans";
  const heroHeadingFull = `${heroHeadingTitle} - ${heroHeadingSubtitle}`;
  const heroImagePath = "/images/cardiology-heart-care.jpg";

  return (
    <div className="pb-16 space-y-12">
      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-b from-[#EAF5FF]/80 via-[#F7FAFC] to-white pt-8 pb-16 lg:pt-16 lg:pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Radiology & Imaging' }]} className="mb-6" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Hero Content Area */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#EAF5FF] border border-[#2196F3]/40 text-[#0B3C5D] text-sm font-bold">
                <Camera className="w-4 h-4 text-[#2196F3]" />
                <span>Non-Invasive Diagnostic Imaging</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium text-[#0B3C5D] tracking-tight leading-tight font-display">
                {heroHeadingTitle}
                <span className="block text-[#2196F3] font-bold text-3xl sm:text-4xl lg:text-5xl mt-2">
                  {heroHeadingSubtitle}
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-[#64748B] font-normal leading-relaxed max-w-2xl">
                High-precision digital imaging support including X-Ray, Ultrasound, Echocardiography, Stress Tests, CT, MRI, and DEXA Scan coordination.
              </p>

              {/* Call to Action Button */}
              <div className="pt-1">
                <a
                  href="tel:+919953239561"
                  className="manyacare-btn-primary text-sm py-3.5 px-6 shadow-md inline-flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Enquire Radiology Desk: +91-9953239561</span>
                </a>
              </div>

              {/* Trust & Feature Badges */}
              <div className="grid grid-cols-3 gap-4 pt-2 text-left">
                <div className="bg-white p-4 rounded-2xl border border-[#D7E0E8] shadow-xs">
                  <Camera className="w-6 h-6 text-[#2196F3] mb-1.5" />
                  <p className="text-sm font-bold text-[#0B3C5D]">Digital X-Ray & USG</p>
                  <p className="text-xs text-slate-500">Ultra-Low Radiation</p>
                </div>
                <div className="bg-white p-4 rounded-2xl border border-[#D7E0E8] shadow-xs">
                  <Activity className="w-6 h-6 text-[#2196F3] mb-1.5" />
                  <p className="text-sm font-bold text-[#0B3C5D]">Cardiac Scans</p>
                  <p className="text-xs text-slate-500">2D Echo, ECG & TMT</p>
                </div>
                <div className="bg-white p-4 rounded-2xl border border-[#D7E0E8] shadow-xs">
                  <Disc className="w-6 h-6 text-[#2196F3] mb-1.5" />
                  <p className="text-sm font-bold text-[#0B3C5D]">CT & MRI Desk</p>
                  <p className="text-xs text-slate-500">Scan Coordination</p>
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
                      Advanced Imaging Modalities
                    </p>
                    <p className="text-xs sm:text-sm text-slate-600">
                      High resolution digital imaging interpreted by experienced radiologist consultants.
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

      {/* Modalities Grid */}
      <div className="space-y-6">
        <h2 className="text-2xl font-extrabold text-[#0B3C5D]">Imaging Modalities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {RADIOLOGY_MODALITIES.map((mod) => (
            <div
              key={mod.id}
              className="bg-white border border-[#D7E0E8] rounded-3xl p-7 shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group cursor-pointer space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#2196F3] bg-[#EAF5FF] px-3.5 py-1 rounded-full uppercase tracking-wider">
                    {mod.category}
                  </span>
                  <span className="text-xs text-slate-400 font-mono font-semibold">{mod.code}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#0B3C5D] group-hover:text-[#2196F3] transition-colors">{mod.name}</h3>
                <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">{mod.description}</p>
              </div>

              <div className="pt-4 border-t border-[#D7E0E8] space-y-1.5 text-xs sm:text-sm">
                <p className="font-bold text-[#0B3C5D]">Patient Preparation:</p>
                <p className="text-[#64748B] text-xs sm:text-sm leading-relaxed">{mod.preparationInfo}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Radiology FAQ Section */}
      <div className="pt-8 border-t border-[#D7E0E8]">
        <FaqAccordion
          badgeText="Radiology FAQs"
          title="Frequently Asked Radiology & Scan Questions"
          subtitle="Information about imaging preparation, safety protocols, and scan appointments."
          faqs={[
            {
              question: 'Do I need an appointment for Digital X-Ray or Ultrasound?',
              answer: 'Digital X-Rays are available on a walk-in basis during consultation hours. Ultrasonography (USG), Echocardiography, and Colour Doppler require prior appointment scheduling.',
            },
            {
              question: 'What preparation is needed before an Abdominal Ultrasound (USG)?',
              answer: 'For Upper Abdomen USG, 6 to 8 hours of fasting is required. For Pelvic or Lower Abdomen USG, a full urinary bladder is needed prior to the scan.',
            },
            {
              question: 'Are Digital X-Rays safe for children and seniors?',
              answer: 'Yes, our modern high-resolution Digital Radiography equipment utilizes ultra-low radiation dosage parameters tailored specifically for pediatric and senior patient safety.',
            },
            {
              question: 'How soon are radiology scan reports and films issued?',
              answer: 'Digital X-Ray films and ultrasound printed summaries with radiologist observations are handed over within 30 to 60 minutes after the scan.',
            },
            {
              question: 'Does 2D Echocardiography or TMT require special medicine stoppage?',
              answer: '2D Echo does not require stopping medication. For Treadmill Stress Test (TMT), consult your cardiologist regarding specific cardiac beta-blocker medications before the test.',
            },
          ]}
        />
      </div>
      </div>
    </div>
  );
}
