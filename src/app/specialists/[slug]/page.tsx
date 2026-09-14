import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Metadata } from 'next';
import { DOCTORS } from '@/data/doctors';
import { DEPARTMENTS } from '@/data/departments';
import { Stethoscope, Calendar, Clock, CheckCircle2, Award, ChevronLeft } from 'lucide-react';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return DOCTORS.map((doc) => ({
    slug: doc.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const doc = DOCTORS.find((d) => d.slug === slug);
  if (!doc) return { title: 'Specialist Not Found' };
  return {
    title: `${doc.name} — ${doc.specialty} | MANYACARE HealthCity`,
    description: `${doc.name} is a ${doc.title} specializing in ${doc.specialty} at MANYACARE HealthCity.`,
  };
}

export default async function SpecialistProfilePage({ params }: Props) {
  const { slug } = await params;
  const doctor = DOCTORS.find((d) => d.slug === slug);

  if (!doctor) {
    notFound();
  }

  const dept = DEPARTMENTS.find((d) => d.slug === doctor.departmentSlug);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Back Link */}
      <Link
        href="/specialists"
        className="inline-flex items-center gap-1 text-xs font-semibold text-[#0B3C5D] hover:text-[#2196F3]"
      >
        <ChevronLeft className="w-4 h-4" />
        Back to All Specialists
      </Link>

      {/* Main Profile Header */}
      <div className="bg-white border border-[#D7E0E8] rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row items-start gap-6">
          <img
            src={doctor.imageUrl}
            alt={doctor.name}
            className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl object-cover border-2 border-[#D7E0E8] shrink-0"
          />
          <div className="space-y-3 flex-1">
            <div className="space-y-1">
              <span className="text-xs font-bold text-[#2196F3] bg-[#EAF5FF] px-2.5 py-0.5 rounded">
                {doctor.specialty}
              </span>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0B3C5D]">{doctor.name}</h1>
              <p className="text-sm font-semibold text-[#64748B]">{doctor.title}</p>
              <p className="text-xs text-[#172B4D] font-medium">
                Qualifications: {doctor.qualifications.join(', ')}
              </p>
            </div>

            {doctor.experienceYears && (
              <div className="flex items-center gap-2 text-xs text-[#0B3C5D]">
                <Award className="w-4 h-4 text-[#2196F3]" />
                <span>Clinical Experience: <strong>{doctor.experienceYears}+ Years</strong></span>
              </div>
            )}

            <div className="flex flex-wrap gap-2 pt-2">
              <a
                href="tel:+919953239561"
                className="manyacare-btn-primary text-xs py-2 px-4"
              >
                <Calendar className="w-3.5 h-3.5" />
                Book Consultation: +91-9953239561
              </a>
              {dept && (
                <Link
                  href={`/departments/${dept.slug}`}
                  className="manyacare-btn-secondary text-xs py-2 px-4"
                >
                  View Department
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* Detailed Bio & Availability */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-6 border-t border-[#D7E0E8]">
          <div className="md:col-span-8 space-y-3">
            <h3 className="text-base font-bold text-[#0B3C5D]">About {doctor.name}</h3>
            <p className="text-xs text-[#64748B] leading-relaxed">{doctor.bio}</p>
          </div>
          <div className="md:col-span-4 bg-[#F7FAFC] p-4 rounded-xl border border-[#D7E0E8] space-y-2 text-xs">
            <h4 className="font-bold text-[#0B3C5D]">Consultation Modes</h4>
            <div className="space-y-1">
              {doctor.consultationTypes.map((mode) => (
                <div key={mode} className="flex items-center gap-2 text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#16A34A]" />
                  <span>{mode}</span>
                </div>
              ))}
            </div>
            <div className="pt-2 border-t border-[#D7E0E8]">
              <p className="text-[11px] text-slate-500">Available Days:</p>
              <p className="font-bold text-[#0B3C5D]">{doctor.availabilityDays.join(', ')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
