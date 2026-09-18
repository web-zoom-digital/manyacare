'use client';

import React, { useState, useEffect } from 'react';
import { X, Calendar, CheckCircle2, AlertCircle, Phone, Stethoscope } from 'lucide-react';
import { DEPARTMENTS } from '@/data/departments';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultDepartment?: string;
  defaultConsultationType?: 'In-Clinic' | 'Home Visit' | 'Online Consultation';
}

export default function AppointmentModal({
  isOpen,
  onClose,
  defaultDepartment = '',
  defaultConsultationType = 'In-Clinic',
}: AppointmentModalProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    department: defaultDepartment || DEPARTMENTS[0].name,
    consultationType: defaultConsultationType,
    preferredDate: '',
    preferredTime: 'Morning (09:00 AM - 12:00 PM)',
    message: '',
    consent: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Lock body scroll and enable ESC key close
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    const originalStyle = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalStyle;
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone || !formData.consent) {
      setErrorMsg('Please fill in required fields (* patient name, mobile) and accept consent.');
      return;
    }
    setErrorMsg('');
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const handleWhatsAppRedirect = () => {
  if (!formData.fullName || !formData.phone || !formData.consent) {
    setErrorMsg('Please fill in required fields (* patient name, mobile) and accept consent.');
    return;
  }
  setErrorMsg('');

  // Build message dynamically with all filled details
  let message = `Hello ManyaCare Center, I want to book an appointment.\n\n`;
  message += `Patient Name: ${formData.fullName}\n`;
  message += `Mobile Number: ${formData.phone}\n`;
  if (formData.email) {
    message += `Email: ${formData.email}\n`;
  }
  message += `Department: ${formData.department}\n`;
  message += `Consultation Type: ${formData.consultationType}\n`;
  if (formData.preferredDate) {
    message += `Preferred Date: ${formData.preferredDate}\n`;
  }
  if (formData.preferredTime) {
    message += `Preferred Time: ${formData.preferredTime}\n`;
  }
  if (formData.message) {
    message += `Symptoms/Notes: ${formData.message}\n`;
  }

  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://api.whatsapp.com/send/?phone=919953239561&text=${encodedMessage}&type=phone_number&app_absent=0`;
  
  window.open(whatsappUrl, '_blank');

  setIsSubmitted(true);
};
  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-3 sm:p-4 bg-slate-900/65 backdrop-blur-xs animate-in fade-in duration-200 overflow-hidden">
      {/* Backdrop overlay click to close */}
      <div
        className="absolute inset-0 bg-transparent"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Window Container */}
      <div className="relative bg-white border border-[#D7E0E8] rounded-2xl sm:rounded-3xl shadow-2xl w-full max-w-xl max-h-[90dvh] flex flex-col overflow-hidden z-10 my-auto">

        {/* Header - Fixed at Top & Pinned */}
        <div className="bg-[#0B3C5D] text-white p-4 sm:p-5 flex items-center justify-between shrink-0 border-b border-white/10 shadow-sm">
          <div className="flex items-center gap-3 min-w-0 pr-2">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#2196F3] flex items-center justify-center text-white shadow-md shrink-0">
              <Stethoscope className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <h3 className="text-base sm:text-lg font-bold text-white font-display truncate leading-tight">
                Book Healthcare Appointment
              </h3>
              <p className="text-[11px] sm:text-xs text-slate-300 truncate">MANYACARE HealthCity Priority Booking</p>
            </div>
          </div>

          {/* Close (Cut) Button - Always Visible & Easy to Tap */}
          <button
            onClick={onClose}
            className="text-white bg-white/10 hover:bg-white/20 active:scale-95 p-2 sm:p-2.5 rounded-full transition-all shrink-0 cursor-pointer flex items-center justify-center ml-2 border border-white/10"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Form Body */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 text-left">
          {isSubmitted ? (
            <div className="text-center py-6 sm:py-8 space-y-4">
              <div className="w-16 h-16 bg-[#16A34A]/10 text-[#16A34A] rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-bold text-[#0B3C5D] font-display">
                Appointment Request Received!
              </h4>
              <p className="text-sm text-[#64748B] max-w-md mx-auto leading-relaxed">
                Thank you, <strong className="text-[#0B3C5D]">{formData.fullName}</strong>. Our care coordinator will contact you at{' '}
                <strong className="text-[#0B3C5D]">{formData.phone}</strong> to confirm your slot for{' '}
                <strong className="text-[#0B3C5D]">{formData.department}</strong>.
              </p>
              <div className="bg-[#EAF5FF] border border-[#D7E0E8] rounded-2xl p-4 text-xs text-[#172B4D] space-y-1">
                <p className="font-bold text-[#0B3C5D]">Direct Helpline Assistance:</p>
                <p>Appointments: +91-9953239561 | Lab: +91-9953239562</p>
              </div>
              <button onClick={onClose} className="manyacare-btn-primary mt-4 w-full sm:w-auto px-8">
                Close Desk
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4 text-left">
              {errorMsg && (
                <div className="bg-red-50 text-red-700 border border-red-200 text-xs p-3 rounded-xl flex items-center gap-2 font-medium">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-[#0B3C5D] mb-1">
                    Patient Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter patient name"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="manyacare-input text-sm py-2.5 px-3.5"
                  />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-[#0B3C5D] mb-1">
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 9953239561"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="manyacare-input text-sm py-2.5 px-3.5"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-[#0B3C5D] mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="manyacare-input text-sm py-2.5 px-3.5"
                  />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-[#0B3C5D] mb-1">
                    Select Department *
                  </label>
                  <select
                    value={formData.department}
                    onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                    className="manyacare-input text-sm py-2.5 px-3.5 bg-[#F8FAFC]"
                  >
                    {DEPARTMENTS.map((dept) => (
                      <option key={dept.id} value={dept.name}>
                        {dept.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-[#0B3C5D] mb-1">
                    Consultation Type
                  </label>
                  <select
                    value={formData.consultationType}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        consultationType: e.target.value as 'In-Clinic' | 'Home Visit' | 'Online Consultation',
                      })
                    }
                    className="manyacare-input text-sm py-2.5 px-3.5 bg-[#F8FAFC]"
                  >
                    <option value="In-Clinic">In-Clinic Consultation</option>
                    <option value="Home Visit">Home Doctor Visit / Sample Draw</option>
                    <option value="Online Consultation">Online Video Consultation</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-[#0B3C5D] mb-1">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="manyacare-input text-sm py-2.5 px-3.5"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-semibold text-[#0B3C5D] mb-1">
                  Symptoms / Medical Notes
                </label>
                <textarea
                  rows={2}
                  placeholder="Describe your health concern or symptoms briefly..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="manyacare-input text-sm py-2.5 px-3.5 resize-none"
                />
              </div>

              <div className="flex items-start gap-2.5 pt-0.5">
                <input
                  type="checkbox"
                  id="consent"
                  checked={formData.consent}
                  onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                  className="mt-0.5 w-4 h-4 text-[#2196F3] rounded border-slate-300 focus:ring-[#2196F3] shrink-0"
                />
                <label htmlFor="consent" className="text-xs text-[#64748B] leading-snug cursor-pointer select-none">
                  I agree to receive appointment confirmations, doctor visit details, and healthcare updates via Call / SMS / WhatsApp from MANYACARE HealthCity.
                </label>
              </div>

              <div className="pt-2 flex gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="w-1/3 manyacare-btn-secondary text-xs sm:text-sm py-3"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleWhatsAppRedirect}
                  disabled={isSubmitting}
                  className="w-2/3 bg-[#25D366] hover:bg-[#1EBE57] active:scale-95 text-white text-xs sm:text-sm font-bold py-3 rounded-xl shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <span>Processing...</span>
                  ) : (
                    <>
                      <Calendar className="w-4 h-4" />
                      <span>Consult On Whatsapp</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
