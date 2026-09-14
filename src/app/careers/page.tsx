'use client';

import React, { useState } from 'react';
import { JOB_LISTINGS } from '@/data/careers';
import { Briefcase, CheckCircle2, Phone, Upload, X } from 'lucide-react';
import HeroCurveDivider from '@/components/HeroCurveDivider';
import Breadcrumb from '@/components/Breadcrumb';

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState<string | null>(null);
  const [applied, setApplied] = useState(false);

  return (
    <div className="space-y-12 pb-16">
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-b from-[#EAF5FF]/80 via-[#F7FAFC] to-white pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Careers' }]} className="mb-6" />
          <div className="border-b border-[#D7E0E8] pb-6 space-y-2 text-left">
            <span className="text-xs font-bold text-[#2196F3] uppercase tracking-wider bg-[#EAF5FF] px-4 py-1.5 rounded-full inline-block">
              Workplace Opportunities
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-[#0B3C5D] font-display">Careers at MANYACARE HealthCity</h1>
            <p className="text-base sm:text-lg text-[#64748B] max-w-2xl">
              Join our clinical team, nursing staff, diagnostic laboratory, or administrative operations.
            </p>
          </div>
        </div>
        <HeroCurveDivider fillColor="#F7FAFC" />
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 space-y-6">
          <h2 className="text-xl font-bold text-[#0B3C5D]">Open Positions</h2>
          <div className="space-y-4">
            {JOB_LISTINGS.map((job) => (
              <div key={job.id} className="manyacare-card p-6 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <span className="text-[10px] font-bold text-[#2196F3] bg-[#EAF5FF] px-2 py-0.5 rounded">
                      {job.category}
                    </span>
                    <h3 className="text-base font-bold text-[#0B3C5D] mt-1">{job.title}</h3>
                  </div>
                  <span className="text-xs font-semibold text-slate-500 bg-[#F7FAFC] px-2.5 py-1 rounded border border-[#D7E0E8] w-fit">
                    {job.type}
                  </span>
                </div>
                <p className="text-xs text-[#64748B] leading-relaxed">{job.description}</p>
                <div className="text-xs text-slate-500 space-x-4">
                  <span><strong>Qualifications:</strong> {job.qualifications}</span>
                  <span>•</span>
                  <span><strong>Exp:</strong> {job.experienceRequired}</span>
                </div>
                <div className="pt-2">
                  <button
                    onClick={() => setSelectedJob(job.title)}
                    className="manyacare-btn-primary text-xs py-2 px-4"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-4 space-y-6">
          <div className="manyacare-card p-6 space-y-4">
            <h3 className="text-base font-bold text-[#0B3C5D]">Why Work with Us?</h3>
            <ul className="space-y-2 text-xs text-[#64748B]">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0" />
                <span>Ethical, evidence-based clinical environment</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0" />
                <span>Modern diagnostic & digital health infrastructure</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0" />
                <span>Career progression & academic learning opportunities</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Application Modal */}
      {selectedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
          <div className="bg-white border border-[#D7E0E8] rounded-2xl p-6 max-w-md w-full space-y-4">
            <div className="flex items-center justify-between border-b border-[#D7E0E8] pb-3">
              <h3 className="text-base font-bold text-[#0B3C5D]">Apply for {selectedJob}</h3>
              <button onClick={() => setSelectedJob(null)} className="text-slate-400 hover:text-black">
                <X className="w-5 h-5" />
              </button>
            </div>

            {applied ? (
              <div className="text-center py-6 space-y-2">
                <CheckCircle2 className="w-10 h-10 text-[#16A34A] mx-auto" />
                <p className="font-bold text-[#0B3C5D]">Application Submitted!</p>
                <p className="text-xs text-[#64748B]">Our HR desk will review your profile.</p>
                <button onClick={() => { setApplied(false); setSelectedJob(null); }} className="manyacare-btn-primary text-xs py-2 px-4 mt-2">
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setApplied(true); }} className="space-y-3 text-xs">
                <div>
                  <label className="block font-semibold text-[#172B4D] mb-1">Full Name</label>
                  <input type="text" required className="w-full p-2.5 rounded-lg border border-[#D7E0E8]" />
                </div>
                <div>
                  <label className="block font-semibold text-[#172B4D] mb-1">Phone Number</label>
                  <input type="tel" required className="w-full p-2.5 rounded-lg border border-[#D7E0E8]" />
                </div>
                <div>
                  <label className="block font-semibold text-[#172B4D] mb-1">Email</label>
                  <input type="email" required className="w-full p-2.5 rounded-lg border border-[#D7E0E8]" />
                </div>
                <div>
                  <label className="block font-semibold text-[#172B4D] mb-1">Upload Resume (PDF/Doc)</label>
                  <input type="file" className="w-full text-xs p-2 border border-[#D7E0E8] rounded-lg" />
                </div>
                <button type="submit" className="w-full manyacare-btn-primary py-2.5 text-xs">
                  Submit Application
                </button>
              </form>
            )}
          </div>
        </div>
      )}
      </div>
    </div>
  );
}
