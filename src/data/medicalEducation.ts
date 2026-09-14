export interface EducationCourseCategory {
  id: string;
  categoryTitle: string;
  description: string;
  items: {
    title: string;
    duration: string;
    eligibility: string;
    highlights: string[];
  }[];
}

export const MEDICAL_EDUCATION_DATA: EducationCourseCategory[] = [
  {
    id: 'mbbs-abroad',
    categoryTitle: 'MBBS Admissions (India & Abroad)',
    description: 'Expert academic counseling for aspiring medical students pursuing undergraduate MBBS degrees in recognized medical institutions.',
    items: [
      {
        title: 'MBBS in India',
        duration: '5.5 Years (including 1-year internship)',
        eligibility: '10+2 with PCB (50% aggregate) + NEET-UG Qualified',
        highlights: ['NMC Recognized Colleges', 'Comprehensive Clinical Exposure', 'NEET Counseling Support']
      },
      {
        title: 'MBBS in Russia',
        duration: '6 Years',
        eligibility: '10+2 with PCB (50%) + NEET-UG Qualified',
        highlights: ['WHO & NMC Listed Universities', 'English Medium Instruction', 'Affordable Tuition Structure']
      },
      {
        title: 'MBBS in Georgia',
        duration: '6 Years',
        eligibility: '10+2 with PCB (50%) + NEET-UG Qualified',
        highlights: ['European Standard Curriculum', 'Safe International Environment', 'USMLE & PLAB Preparation Focus']
      },
      {
        title: 'MBBS in Kazakhstan & Uzbekistan',
        duration: '5 Years',
        eligibility: '10+2 with PCB (50%) + NEET-UG Qualified',
        highlights: ['Modern Campus Infrastructure', 'Clinical Hospital Attachments', 'Simplified Admission Protocol']
      },
      {
        title: 'MBBS in Nepal & Bangladesh',
        duration: '5 Years + Internship',
        eligibility: '10+2 with PCB (50%) + NEET-UG Qualified',
        highlights: ['Similar Academic Pattern to India', 'High Pass Rate in Licensing Exams', 'Proximity to India']
      },
      {
        title: 'MBBS in Egypt & Philippines',
        duration: '5.5 - 6 Years',
        eligibility: '10+2 with PCB + NEET-UG Qualified',
        highlights: ['Disease Pattern Similar to Tropics', 'US-Based Curriculum (Philippines)', 'Clinical Clerkships']
      }
    ]
  },
  {
    id: 'pg-medical',
    categoryTitle: 'Postgraduate Medical Admissions (PG)',
    description: 'Guidance for medical graduates aiming for specialized clinical and surgical doctorates.',
    items: [
      {
        title: 'MD (Doctor of Medicine)',
        duration: '3 Years',
        eligibility: 'MBBS Degree + NEET-PG / INI-CET Qualified',
        highlights: ['Internal Medicine, Paediatrics, Dermatology, Radiology, Anesthesia']
      },
      {
        title: 'MS (Master of Surgery)',
        duration: '3 Years',
        eligibility: 'MBBS Degree + NEET-PG / INI-CET Qualified',
        highlights: ['General Surgery, Orthopaedics, Obstetrics & Gynaecology, ENT, Ophthalmology']
      },
      {
        title: 'DNB (Diplomate of National Board)',
        duration: '3 Years',
        eligibility: 'MBBS Degree + DNB CET / NEET-PG Qualified',
        highlights: ['NBE Accredited Hospital Programs', 'Equivalent to MD/MS Degrees']
      },
      {
        title: 'DM / MCh Super-Specialty',
        duration: '3 Years',
        eligibility: 'MD/MS in relevant discipline + NEET-SS Qualified',
        highlights: ['Cardiology, Neurology, Surgical Oncology, Neurosurgery']
      }
    ]
  },
  {
    id: 'nursing-courses',
    categoryTitle: 'Nursing Education Programs',
    description: 'Professional nursing degrees and diploma courses for healthcare career entry.',
    items: [
      {
        title: 'B.Sc Nursing',
        duration: '4 Years',
        eligibility: '10+2 with PCB & English (minimum 45%)',
        highlights: ['INC Recognized', 'Hospital Hands-on Training', 'High Global Career Demand']
      },
      {
        title: 'GNM (General Nursing & Midwifery)',
        duration: '3 Years',
        eligibility: '10+2 in any stream (Science preferred, minimum 40%)',
        highlights: ['Diploma Level', 'Clinical Nursing Skills', 'Community Health Placement']
      },
      {
        title: 'ANM (Auxiliary Nurse Midwife)',
        duration: '2 Years',
        eligibility: '10+2 Pass in any discipline',
        highlights: ['Primary Healthcare Nursing', 'Maternal & Child Health focus']
      },
      {
        title: 'M.Sc Nursing & Post Basic B.Sc',
        duration: '2 Years',
        eligibility: 'B.Sc Nursing / GNM + Registration',
        highlights: ['Critical Care, Paediatric, Medical-Surgical Specializations']
      }
    ]
  },
  {
    id: 'allied-health',
    categoryTitle: 'Allied Health Sciences & Paramedical',
    description: 'Specialized diagnostic, laboratory, and clinical support technology programs.',
    items: [
      {
        title: 'DMLT & BMLT (Medical Lab Technology)',
        duration: '2 - 3 Years',
        eligibility: '10+2 with Science (PCB/PCM)',
        highlights: ['Pathology, Blood Banking, Biochemistry, Hematology Training']
      },
      {
        title: 'B.Sc / Diploma in Radiology & Imaging',
        duration: '2 - 3 Years',
        eligibility: '10+2 with Physics, Chemistry, Biology/Math',
        highlights: ['Digital X-Ray, CT Scan, MRI Technology Operations']
      },
      {
        title: 'Operation Theatre & Trauma Technology (OTT)',
        duration: '2 - 3 Years',
        eligibility: '10+2 with Science',
        highlights: ['Surgical Instrument Handling, Sterilization, OT Management']
      },
      {
        title: 'Emergency, Dialysis & Cardiac Technology',
        duration: '2 - 3 Years',
        eligibility: '10+2 with Science',
        highlights: ['ICU Support, Hemodialysis Machines, ECG & Echo Technology']
      },
      {
        title: 'Hospital Administration (BHA / MHA)',
        duration: '3 Years (Graduation) / 2 Years (Post-Grad)',
        eligibility: '10+2 / Graduation in any discipline',
        highlights: ['Healthcare Operations, Quality Accreditation, Hospital Systems']
      }
    ]
  }
];
