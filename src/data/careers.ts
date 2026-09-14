export interface JobListing {
  id: string;
  title: string;
  category: 'Medical' | 'Nursing' | 'Diagnostics' | 'Administration' | 'Education & Counselling';
  type: 'Full-Time' | 'Part-Time' | 'Consultant';
  location: string;
  experienceRequired: string;
  qualifications: string;
  description: string;
  responsibilities: string[];
  isVerified: boolean;
  isPlaceholder: boolean;
}

export const JOB_LISTINGS: JobListing[] = [
  {
    id: 'job-1',
    title: 'Consultant - Internal Medicine / Diabetology',
    category: 'Medical',
    type: 'Full-Time',
    location: 'Central Campus, HealthCity',
    experienceRequired: '3-5 Years Post MD/DNB',
    qualifications: 'MBBS, MD (Internal Medicine) / DNB',
    description: 'We are seeking an experienced Internal Medicine Consultant to manage outpatient OPD, complex inpatient medical cases, and preventive health screenings.',
    responsibilities: [
      'Provide comprehensive OPD clinical evaluations and patient management.',
      'Participate in multidisciplinary care for diabetes and metabolic conditions.',
      'Supervise diagnostic protocols and preventive package consultations.'
    ],
    isVerified: true,
    isPlaceholder: true,
  },
  {
    id: 'job-2',
    title: 'Staff Nurse - Home Healthcare & ICU',
    category: 'Nursing',
    type: 'Full-Time',
    location: 'HealthCity Campus & Home Visits',
    experienceRequired: '2+ Years in Clinical Nursing',
    qualifications: 'B.Sc Nursing / GNM Nursing',
    description: 'Seeking compassionate registered nurses to deliver high-quality home nursing care, IV infusion, post-operative support, and elderly care.',
    responsibilities: [
      'Administer clinical nursing care in home healthcare settings.',
      'Monitor patient vital signs, wound care, and medication schedules.',
      'Maintain detailed clinical documentation and care reports.'
    ],
    isVerified: true,
    isPlaceholder: true,
  },
  {
    id: 'job-3',
    title: 'Senior Medical Laboratory Technologist (DMLT/BMLT)',
    category: 'Diagnostics',
    type: 'Full-Time',
    location: 'Diagnostic Laboratory Campus',
    experienceRequired: '3+ Years in Pathology Lab',
    qualifications: 'BMLT / DMLT with State Registration',
    description: 'Responsible for sample processing, haematology, biochemistry assays, and maintaining strict laboratory Quality Control (QC).',
    responsibilities: [
      'Operate automated biochemistry and haematology analyzers.',
      'Perform sample verification and quality control calibrations.',
      'Facilitate home sample collection logistics.'
    ],
    isVerified: true,
    isPlaceholder: true,
  },
  {
    id: 'job-4',
    title: 'Medical Education & Career Adviser',
    category: 'Education & Counselling',
    type: 'Full-Time',
    location: 'Education Division, HealthCity',
    experienceRequired: '2-4 Years in Healthcare Career Guidance',
    qualifications: 'Bachelor degree in Life Sciences / Healthcare Admin',
    description: 'Guide medical aspirants regarding MBBS Abroad options, PG medical entrance counseling, and allied health diploma courses.',
    responsibilities: [
      'Provide objective counseling regarding medical admission eligibility.',
      'Assist students with university documentation and regulatory guidelines.',
      'Organize career awareness seminars and diagnostic workshops.'
    ],
    isVerified: true,
    isPlaceholder: true,
  }
];
