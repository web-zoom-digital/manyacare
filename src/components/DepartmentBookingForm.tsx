'use client';

import React, { useState } from 'react';
import { Calendar, Phone, CheckCircle2, AlertCircle } from 'lucide-react';

interface DepartmentBookingFormProps {
  departmentName: string;
}

export default function DepartmentBookingForm({ departmentName }: DepartmentBookingFormProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    preferredDate: '',
    consultationType: 'In-Clinic OPD Consultation',
    notes: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) {
      setErrorMsg('Please enter your Name and Phone Number.');
      return;
    }
    setErrorMsg('');
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  if (isSubmitted) {
    return (
      <div className="bg-white border-2 border-[#16A34A] rounded-3xl p-6 shadow-xl space-y-4 text-center animate-in fade-in duration-300">
        <div className="w-14 h-14 bg-[#E6F4EA] text-[#16A34A] rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <div className="space-y-1">
          <h3 className="text-xl font-bold text-[#0B3C5D]">Appointment Request Sent!</h3>
          <p className="text-xs text-[#64748B] leading-relaxed">
            Thank you, <strong className="text-[#0B3C5D]">{formData.fullName}</strong>. Our clinical desk for <strong>{departmentName}</strong> will call you back shortly on <strong>{formData.phone}</strong> to confirm your slot.
          </p>
        </div>
        <button
          onClick={() => {
            setIsSubmitted(false);
            setFormData({ fullName: '', phone: '', preferredDate: '', consultationType: 'In-Clinic OPD Consultation', notes: '' });
          }}
          className="text-xs font-bold text-[#2196F3] hover:underline pt-2 block mx-auto cursor-pointer"
        >
          ← Book Another Consultation
        </button>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-[#0B3C5D] to-[#172B4D] text-white rounded-3xl p-6 shadow-xl space-y-5 border border-[#2196F3]/30">
      <div className="space-y-1 border-b border-white/10 pb-4 text-left">
        <span className="text-[11px] font-bold text-[#2196F3] uppercase tracking-wider bg-white/10 px-3 py-1 rounded-full inline-block">
          Direct Clinical Desk
        </span>
        <h3 className="text-xl font-bold text-white">Book OPD Appointment</h3>
        <p className="text-xs text-slate-300">
          Consult specialists in <strong className="text-white">{departmentName}</strong>
        </p>
      </div>

      {errorMsg && (
        <div className="bg-red-500/20 border border-red-400/40 text-red-200 text-xs p-3 rounded-xl flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{errorMsg}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-3.5 text-left">
        <div>
          <label className="block text-xs font-semibold text-slate-200 mb-1">
            Patient Full Name *
          </label>
          <input
            type="text"
            placeholder="e.g. Rahul Sharma"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 text-xs focus:outline-none focus:border-[#2196F3] focus:bg-white/15 transition-all"
            required
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-200 mb-1">
            Mobile Number *
          </label>
          <input
            type="tel"
            placeholder="e.g. +91 9953239561"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 text-xs focus:outline-none focus:border-[#2196F3] focus:bg-white/15 transition-all"
            required
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-200 mb-1">
            Consultation Mode
          </label>
          <select
            value={formData.consultationType}
            onChange={(e) => setFormData({ ...formData, consultationType: e.target.value })}
            className="w-full px-3 py-2.5 rounded-xl bg-[#0B3C5D] border border-white/20 text-white text-xs focus:outline-none focus:border-[#2196F3]"
          >
            <option value="In-Clinic OPD Consultation">In-Clinic OPD Visit</option>
            <option value="Home Visit Doctor Consultation">Home Doctor Visit</option>
            <option value="Online Video Consultation">Online Video Consultation</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-200 mb-1">
            Preferred Date (Optional)
          </label>
          <input
            type="date"
            value={formData.preferredDate}
            onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
            className="w-full px-3 py-2.5 rounded-xl bg-[#0B3C5D] border border-white/20 text-white text-xs focus:outline-none focus:border-[#2196F3]"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3.5 px-4 rounded-xl bg-[#2196F3] hover:bg-white hover:text-[#0B3C5D] text-white font-bold text-xs sm:text-sm transition-all duration-200 shadow-md flex items-center justify-center gap-2 cursor-pointer mt-2"
        >
          <Calendar className="w-4 h-4" />
          <span>{isSubmitting ? 'Submitting Request...' : 'Confirm Appointment Request'}</span>
        </button>
      </form>

      <div className="pt-3 border-t border-white/10 text-center">
        <a
          href="tel:+919953239561"
          className="inline-flex items-center gap-1.5 text-xs text-[#2196F3] hover:text-white font-semibold transition-colors"
        >
          <Phone className="w-3.5 h-3.5" />
          <span>Direct Helpline: +91-9953239561</span>
        </a>
      </div>
    </div>
  );
}
