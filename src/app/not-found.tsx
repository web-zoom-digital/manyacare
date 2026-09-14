import React from 'react';
import Link from 'next/link';
import { Stethoscope, Home, Phone } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center p-4">
      <div className="bg-white border border-[#D7E0E8] rounded-2xl p-8 max-w-md w-full text-center space-y-4 shadow-sm">
        <div className="w-16 h-16 bg-[#EAF5FF] text-[#2196F3] rounded-full flex items-center justify-center mx-auto">
          <Stethoscope className="w-8 h-8" />
        </div>
        <h1 className="text-4xl font-extrabold text-[#0B3C5D]">404</h1>
        <h2 className="text-xl font-bold text-[#0B3C5D]">Page Not Found</h2>
        <p className="text-xs text-[#64748B] leading-relaxed">
          The healthcare resource or route you requested does not exist or has been relocated.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link href="/" className="manyacare-btn-primary text-xs py-2.5 px-4 w-full sm:w-auto">
            <Home className="w-4 h-4" />
            Return Home
          </Link>
          <a href="tel:+919953239561" className="manyacare-btn-secondary text-xs py-2.5 px-4 w-full sm:w-auto">
            <Phone className="w-4 h-4" />
            Call Care Desk
          </a>
        </div>
      </div>
    </div>
  );
}
