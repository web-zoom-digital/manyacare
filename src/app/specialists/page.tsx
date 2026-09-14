'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { DOCTORS } from '@/data/doctors';
import { DEPARTMENTS } from '@/data/departments';
import { Search, Filter, Calendar, Stethoscope, ChevronRight } from 'lucide-react';
import AppointmentModal from '@/components/AppointmentModal';
import HeroCurveDivider from '@/components/HeroCurveDivider';

export default function SpecialistsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDept, setSelectedDept] = useState('');
  const [selectedType, setSelectedType] = useState('');

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDoctorSpecialty, setSelectedDoctorSpecialty] = useState('');

  const filteredDoctors = DOCTORS.filter((doc) => {
    const matchesSearch =
      doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.specialty.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDept = selectedDept ? doc.departmentSlug === selectedDept : true;
    const matchesType = selectedType
      ? doc.consultationTypes.includes(selectedType as any)
      : true;
    return matchesSearch && matchesDept && matchesType;
  });

  const handleBook = (specialty: string) => {
    setSelectedDoctorSpecialty(specialty);
    setIsModalOpen(true);
  };

  return (
    <div className="pb-16 space-y-12">
      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-b from-[#EAF5FF]/80 via-[#F7FAFC] to-white pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3 text-left">
          <span className="text-xs sm:text-sm font-bold text-[#2196F3] bg-[#EAF5FF] px-4 py-1.5 rounded-full uppercase tracking-wider inline-block">
            Medical Directory
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-[#0B3C5D] font-display">
            Our Medical Specialists
          </h1>
          <p className="text-base sm:text-lg text-[#64748B] max-w-2xl">
            Consult with verified senior doctors and medical specialists across disciplines.
          </p>
        </div>
        <HeroCurveDivider fillColor="#F7FAFC" />
      </section>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Search & Filter Bar */}
        <div className="bg-white border border-[#D7E0E8] rounded-2xl p-4 sm:p-6 shadow-2xs space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Search Input */}
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-3 top-3.5" />
            <input
              type="text"
              placeholder="Search by doctor name or specialty..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 text-sm rounded-xl border border-[#D7E0E8] focus:border-[#2196F3] focus:outline-none"
            />
          </div>

          {/* Department Filter */}
          <select
            value={selectedDept}
            onChange={(e) => setSelectedDept(e.target.value)}
            className="w-full py-3 px-3 text-sm rounded-xl border border-[#D7E0E8] focus:border-[#2196F3] focus:outline-none bg-white text-[#172B4D] cursor-pointer"
          >
            <option value="">All Departments</option>
            {DEPARTMENTS.map((dept) => (
              <option key={dept.id} value={dept.slug}>
                {dept.name}
              </option>
            ))}
          </select>

          {/* Consultation Type Filter */}
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="w-full py-3 px-3 text-sm rounded-xl border border-[#D7E0E8] focus:border-[#2196F3] focus:outline-none bg-white text-[#172B4D] cursor-pointer"
          >
            <option value="">All Consultation Modes</option>
            <option value="In-Clinic">In-Clinic Visit</option>
            <option value="Home Visit">Home Visit</option>
            <option value="Online Consultation">Online Consultation</option>
          </select>
        </div>
      </div>

      {/* Doctor Cards Grid */}
      {filteredDoctors.length === 0 ? (
        <div className="text-center py-12 bg-white border border-[#D7E0E8] rounded-2xl space-y-3">
          <Stethoscope className="w-12 h-12 text-slate-300 mx-auto" />
          <h3 className="text-xl font-bold text-[#0B3C5D]">No Specialists Found</h3>
          <p className="text-sm text-[#64748B]">
            Try resetting your search query or department filters.
          </p>
          <button
            onClick={() => {
              setSearchTerm('');
              setSelectedDept('');
              setSelectedType('');
            }}
            className="manyacare-btn-secondary text-sm py-2.5 px-5 cursor-pointer"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDoctors.map((doc) => (
            <div key={doc.id} className="manyacare-card p-6 space-y-4 flex flex-col justify-between cursor-pointer">
              <div className="space-y-3">
                <div className="flex items-start gap-4">
                  <img
                    src={doc.imageUrl}
                    alt={doc.name}
                    className="w-20 h-20 rounded-xl object-cover border border-[#D7E0E8] shrink-0"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-[#0B3C5D]">{doc.name}</h3>
                    <p className="text-sm font-semibold text-[#2196F3]">{doc.specialty}</p>
                    <p className="text-xs text-[#64748B] mt-0.5">{doc.qualifications.join(', ')}</p>
                    {doc.experienceYears && (
                      <span className="inline-block bg-[#EAF5FF] text-[#0B3C5D] text-xs font-bold px-2.5 py-0.5 rounded mt-1">
                        {doc.experienceYears}+ Yrs Clinical Exp
                      </span>
                    )}
                  </div>
                </div>

                <p className="text-sm text-[#64748B] line-clamp-3 leading-relaxed">
                  {doc.bio}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {doc.consultationTypes.map((type) => (
                    <span
                      key={type}
                      className="bg-[#EAF5FF] text-[#0B3C5D] border border-[#2196F3]/30 text-xs font-semibold px-2.5 py-0.5 rounded"
                    >
                      {type}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#D7E0E8] flex items-center justify-between gap-2">
                <Link
                  href={`/specialists/${doc.slug}`}
                  className="text-sm font-semibold text-[#0B3C5D] hover:text-[#2196F3] flex items-center gap-1 cursor-pointer"
                >
                  View Profile
                  <ChevronRight className="w-4 h-4" />
                </Link>
                <button
                  onClick={() => handleBook(doc.specialty)}
                  className="manyacare-btn-primary text-xs sm:text-sm py-2 px-3.5 cursor-pointer"
                >
                  Book Appointment
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {isModalOpen && (
        <AppointmentModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          defaultDepartment={selectedDoctorSpecialty}
        />
      )}
      </div>
    </div>
  );
}
