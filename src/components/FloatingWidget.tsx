'use client';

import React, { useState } from 'react';
import { Phone, Calendar, PhoneCall } from 'lucide-react';
import AppointmentModal from '@/components/AppointmentModal';

export default function FloatingWidget() {
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);

  return (
    <>
      {/* DESKTOP FLOATING WIDGETS (Bottom Right Circles) */}
      <div className="hidden md:flex fixed bottom-6 right-6 z-50 flex-col items-center gap-3.5 select-none pointer-events-auto">
        {/* WhatsApp Floating Circle Button */}
        <a
          href="https://wa.me/919953239561?text=Hello%20MANYACARE%20HealthCity%2C%20I%20would%20like%20to%20inquire%20about%20your%20healthcare%20services."
          target="_blank"
          rel="noopener noreferrer"
          className="relative group w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:shadow-emerald-500/40 hover:scale-110 active:scale-95 transition-all duration-300 border border-white/20"
          aria-label="Chat on WhatsApp"
        >
          <svg
            className="w-7 h-7 fill-current text-white"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
          </svg>

          {/* Live Online Ping Indicator */}
          <span className="absolute top-0 right-0 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-300 border-2 border-white"></span>
          </span>
        </a>

        {/* Call Floating Circle Button */}
        <a
          href="tel:+919953239561"
          className="relative group w-14 h-14 rounded-full bg-[#2196F3] text-white flex items-center justify-center shadow-lg hover:shadow-blue-500/40 hover:bg-[#0B3C5D] hover:scale-110 active:scale-95 transition-all duration-300 border border-white/20"
          aria-label="Call Helpline"
        >
          <PhoneCall className="w-6 h-6 text-white" />
        </a>
      </div>

      {/* MOBILE STICKY BOTTOM ACTION BAR (Exact Match to User Reference Image) */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white border-t border-[#D7E0E8] shadow-[0_-4px_25px_rgba(0,0,0,0.08)] py-2 px-6 flex items-center justify-between select-none">
        
        {/* Left Action: CALL NOW */}
        <a
          href="tel:+919953239561"
          className="flex flex-col items-center gap-1 group text-center active:scale-95 transition-transform"
        >
          <div className="w-11 h-11 rounded-2xl bg-[#EAF5FF] text-[#2196F3] group-hover:bg-[#0B3C5D] group-hover:text-white flex items-center justify-center transition-colors shadow-xs">
            <Phone className="w-5 h-5" />
          </div>
          <span className="text-[10px] font-bold text-[#0B3C5D] group-hover:text-[#2196F3] tracking-wider uppercase block">
            CALL NOW
          </span>
        </a>

        {/* Center Action: WHATSAPP (Protruding Floating Green Button) */}
        <a
          href="https://wa.me/919953239561?text=Hello%20MANYACARE%20HealthCity%2C%20I%20would%20like%20to%20inquire%20about%20your%20healthcare%20services."
          target="_blank"
          rel="noopener noreferrer"
          className="relative -top-5 flex flex-col items-center group active:scale-95 transition-transform"
        >
          {/* Circular Green Icon */}
          <div className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg shadow-emerald-500/30 border-4 border-white ring-2 ring-[#25D366]/20 transition-all group-hover:scale-105">
            <svg
              className="w-7 h-7 fill-current text-white"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>
          </div>

          {/* White Pill Badge under WhatsApp */}
          <div className="bg-white border border-[#25D366]/40 px-3 py-0.5 rounded-full shadow-sm -mt-2.5 z-10">
            <span className="text-[9px] font-black text-[#25D366] tracking-widest uppercase block leading-none">
              WHATSAPP
            </span>
          </div>
        </a>

        {/* Right Action: BOOK NOW */}
        <button
          onClick={() => setIsAppointmentModalOpen(true)}
          className="flex flex-col items-center gap-1 group text-center active:scale-95 transition-transform cursor-pointer"
        >
          <div className="w-11 h-11 rounded-2xl bg-[#EAF5FF] text-[#2196F3] group-hover:bg-[#0B3C5D] group-hover:text-white flex items-center justify-center transition-colors shadow-xs">
            <Calendar className="w-5 h-5" />
          </div>
          <span className="text-[10px] font-bold text-[#0B3C5D] group-hover:text-[#2196F3] tracking-wider uppercase block">
            BOOK NOW
          </span>
        </button>

      </div>

      {/* Appointment Modal triggered from Sticky Bottom Bar */}
      {isAppointmentModalOpen && (
        <AppointmentModal
          isOpen={isAppointmentModalOpen}
          onClose={() => setIsAppointmentModalOpen(false)}
        />
      )}
    </>
  );
}
