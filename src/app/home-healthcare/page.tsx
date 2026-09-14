'use client';

import React, { useState } from 'react';
import { Metadata } from 'next';
import { Home as HomeIcon, Phone, Calendar, CheckCircle2, ShieldAlert, Stethoscope, ShieldCheck, Activity, ChevronRight } from 'lucide-react';
import AppointmentModal from '@/components/AppointmentModal';
import HeroCurveDivider from '@/components/HeroCurveDivider';
import FaqAccordion from '@/components/FaqAccordion';
import Breadcrumb from '@/components/Breadcrumb';

export default function HomeHealthcarePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const heroHeadingTitle = "Home Healthcare Services";
  const heroHeadingSubtitle = "Doctor & Nursing Care at Your Doorstep";
  const heroHeadingFull = `${heroHeadingTitle} - ${heroHeadingSubtitle}`;
  const heroImagePath = "/images/home-healthcare-doctor-visit-hero.jpg";

  return (
    <div className="pb-16 space-y-12">
      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-b from-[#EAF5FF]/80 via-[#F7FAFC] to-white pt-8 pb-16 lg:pt-16 lg:pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Home Healthcare' }]} className="mb-6" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Hero Content Area */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#EAF5FF] border border-[#2196F3]/40 text-[#0B3C5D] text-sm font-bold">
                <HomeIcon className="w-4 h-4 text-[#2196F3]" />
                <span>Doorstep Clinical Care</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium text-[#0B3C5D] tracking-tight leading-tight font-display">
                {heroHeadingTitle}
                <span className="block text-[#2196F3] font-bold text-3xl sm:text-4xl lg:text-5xl mt-2">
                  {heroHeadingSubtitle}
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-[#64748B] font-normal leading-relaxed max-w-2xl">
                Qualified doctor consultations, nursing procedures, physical therapy, elderly care, and sample collection delivered directly to your home.
              </p>

              {/* Primary Action CTA Button */}
              <div className="pt-1">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="manyacare-btn-primary text-sm py-3.5 px-6 shadow-md inline-flex items-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Request Home Visit</span>
                </button>
              </div>

              {/* Trust & Feature Badges */}
              <div className="grid grid-cols-3 gap-4 pt-2 text-left">
                <div className="bg-white p-5 rounded-2xl border border-[#D7E0E8] shadow-xs">
                  <Stethoscope className="w-7 h-7 text-[#2196F3] mb-2" />
                  <p className="text-base font-bold text-[#0B3C5D]">Home Doctor Visit</p>
                  <p className="text-xs sm:text-sm text-slate-500">General Physician OPD</p>
                </div>
                <div className="bg-white p-5 rounded-2xl border border-[#D7E0E8] shadow-xs">
                  <ShieldCheck className="w-7 h-7 text-[#2196F3] mb-2" />
                  <p className="text-base font-bold text-[#0B3C5D]">Certified Nursing</p>
                  <p className="text-xs sm:text-sm text-slate-500">Dressing, IV & Injections</p>
                </div>
                <div className="bg-white p-5 rounded-2xl border border-[#D7E0E8] shadow-xs">
                  <Activity className="w-7 h-7 text-[#2196F3] mb-2" />
                  <p className="text-base font-bold text-[#0B3C5D]">Physiotherapy</p>
                  <p className="text-xs sm:text-sm text-slate-500">Paralysis & Joint Rehab</p>
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
                      Doorstep Clinical Support
                    </p>
                    <p className="text-xs sm:text-sm text-slate-600">
                      Medical visits delivered to your home by verified doctors and nursing practitioners.
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
              title: 'Nursing Care',
              desc: 'Certified nursing support for post-operative dressing, wound management, catheter care, and vital monitoring.',
            },
            {
              title: 'Physiotherapy',
              desc: 'Qualified physical therapists providing post-surgical joint rehabilitation, stroke paralysis exercise, and back pain therapy at home.',
            },
            {
              title: 'Elderly Care',
              desc: 'Compassionate assistance for mobility-restricted elderly patients including daily health monitoring, medication management, and personal care support.',
            },
            {
              title: 'Critical Care',
              desc: 'Home ICU setup and dedicated critical care nursing for bedridden, ventilator-assisted, or post-ICU step-down patients.',
            },
            {
              title: 'Injection Services',
              desc: 'Doorstep subcutaneous, intramuscular, and intravenous injection administration by certified nursing staff.',
            },
            {
              title: 'IV Infusion',
              desc: 'Prescription-based IV fluid hydration, antibiotic administration, and nutrient drip management under medical supervision.',
            },
            {
              title: 'Vaccination',
              desc: 'Safe doorstep adult and pediatric immunization, flu shots, pneumonia vaccines, and travel vaccinations.',
            },
            {
              title: 'Home ECG',
              desc: 'Ambulatory 12-lead digital ECG recording and blood pressure monitoring in the comfort of your home.',
            },
            {
              title: 'Home Lab Collection',
              desc: 'Doorstep blood sample collection for routine pathology, HbA1c, thyroid assays, and lipid profiles by trained phlebotomists.',
            },
            {
              title: 'Palliative Care',
              desc: 'Empathic end-of-life care, pain relief management, and holistic comfort support for terminal or chronic patients.',
            },
            {
              title: 'Medical Equipment',
              desc: 'Rental and purchase of oxygen concentrators, BiPAP/CPAP machines, hospital beds, wheelchairs, and suction apparatus.',
            },
          ].map((item, idx) => (
            <div
              key={idx}
              onClick={() => setIsModalOpen(true)}
              className="bg-white border border-[#D7E0E8] rounded-3xl p-8 sm:p-9 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between cursor-pointer group space-y-7"
            >
              <div className="space-y-5">
                {/* <div className="w-16 h-16 rounded-2xl bg-[#EAF5FF] text-[#2196F3] flex items-center justify-center group-hover:bg-[#2196F3] group-hover:text-white transition-colors shadow-xs">
                  <HomeIcon className="w-8 h-8" />
                </div> */}
                <h3 className="text-xl sm:text-xl font-bold text-[#0B3C5D] group-hover:text-[#2196F3] transition-colors leading-tight font-display">{item.title}</h3>
                <p className="text-base sm:text-lg text-[#64748B] leading-relaxed font-normal">{item.desc}</p>
              </div>
              <div className="flex items-center text-base sm:text-base font-bold text-[#2196F3] group-hover:text-[#0B3C5D]">
                <span>Request Home Visit</span>
                <ChevronRight className="w-5 h-5 ml-1.5 group-hover:translate-x-1.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
      

      {/* Home Care FAQ Section */}
      <div className="pt-8 border-t border-[#D7E0E8]">
        <FaqAccordion
          badgeText="Home Care FAQs"
          title="Frequently Asked Home Healthcare Questions"
          subtitle="Answers about doctor visits at home, nursing procedures, physical therapy, and equipment."
          faqs={[
            {
              question: 'What services are included in Doctor Visit at Home?',
              answer: 'A senior General Physician conducts physical clinical examination, vital checks, prescription writing, acute symptom triage, and chronic disease management at your residence.',
            },
            {
              question: 'How do I schedule doorstep nursing or injection services?',
              answer: 'Doorstep nursing support for dressing, catheter care, IV fluids, or injections can be booked by calling our helpline. Certified nursing staff visit with valid physician prescription verification.',
            },
            {
              question: 'Is home physical therapy available for stroke recovery or post-surgery?',
              answer: 'Yes, our qualified physical therapists provide home rehabilitation for stroke hemiplegia, total knee replacement (TKR) recovery, spine alignment, and elderly mobility training.',
            },
            {
              question: 'Can I rent or buy medical equipment like oxygen concentrators or hospital beds?',
              answer: 'Yes, MANYACARE provides rental and purchase options for oxygen concentrators, BiPAP/CPAP machines, suction units, wheelchairs, and motorized hospital beds with home installation.',
            },
            {
              question: 'What should I do in case of a sudden medical emergency at home?',
              answer: 'In cases of acute chest pain, major trauma, stroke signs, or severe respiratory distress, transport the patient immediately to the nearest hospital emergency room. Home services are for non-emergency clinical care.',
            },
          ]}
        />
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
