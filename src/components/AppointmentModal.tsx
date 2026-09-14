'use client';

import React, { useState } from 'react';
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

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone || !formData.consent) {
      setErrorMsg('Please fill in all required fields and accept the privacy consent.');
      return;
    }
    setErrorMsg('');
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200 overflow-y-auto">
      <div className="bg-white border border-[#D7E0E8] rounded-3xl shadow-2xl w-full max-w-xl overflow-hidden my-8">
        {/* Header */}
        <div className="bg-[#0B3C5D] text-white p-5 sm:p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#2196F3] flex items-center justify-center text-white shadow-md">
              <Stethoscope className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white font-display">
                Book Healthcare Appointment
              </h3>
              <p className="text-xs text-slate-300">MANYACARE HealthCity Priority Booking</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-300 hover:text-white p-2 rounded-xl hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6 sm:p-8">
          {isSubmitted ? (
            <div className="text-center py-8 space-y-4">
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
              <button onClick={onClose} className="manyacare-btn-primary mt-4">
                Close Desk
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              {errorMsg && (
                <div className="bg-red-50 text-red-700 border border-red-200 text-xs p-3.5 rounded-xl flex items-center gap-2 font-medium">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-[#0B3C5D] mb-1.5">
                    Patient Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter patient name"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="manyacare-input"
                  />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-[#0B3C5D] mb-1.5">
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 9953239561"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="manyacare-input"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-[#0B3C5D] mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="manyacare-input"
                  />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-[#0B3C5D] mb-1.5">
                    Select Department *
                  </label>
                  <select
                    value={formData.department}
                    onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                    className="manyacare-input"
                  >
                    {DEPARTMENTS.map((dept) => (
                      <option key={dept.id} value={dept.name}>
                        {dept.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-[#0B3C5D] mb-1.5">
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
                    className="manyacare-input"
                  >
                    <option value="In-Clinic">In-Clinic Consultation</option>
                    <option value="Home Visit">Home Doctor Visit / Sample Draw</option>
                    <option value="Online Consultation">Online Video Consultation</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-[#0B3C5D] mb-1.5">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="manyacare-input"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-semibold text-[#0B3C5D] mb-1.5">
                  Symptoms / Medical Notes
                </label>
                <textarea
                  rows={2}
                  placeholder="Describe your health concern or symptoms briefly..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="manyacare-input resize-none"
                />
              </div>

              <div className="flex items-start gap-2.5 pt-1">
                <input
                  type="checkbox"
                  id="consent"
                  checked={formData.consent}
                  onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                  className="mt-1 w-4 h-4 text-[#2196F3] rounded border-slate-300 focus:ring-[#2196F3]"
                />
                <label htmlFor="consent" className="text-xs text-[#64748B] leading-normal">
                  I agree to receive appointment confirmations, doctor visit details, and healthcare updates via Call / SMS / WhatsApp from MANYACARE HealthCity.
                </label>
              </div>

              <div className="pt-3 flex gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="w-1/3 manyacare-btn-secondary text-xs sm:text-sm"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-2/3 manyacare-btn-primary text-xs sm:text-sm font-bold py-3.5 shadow-md"
                >
                  {isSubmitting ? (
                    <span>Processing...</span>
                  ) : (
                    <>
                      <Calendar className="w-4 h-4" />
                      <span>Confirm Booking</span>
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
