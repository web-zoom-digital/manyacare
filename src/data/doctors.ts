export interface Doctor {
  id: string;
  slug: string;
  name: string;
  title: string;
  specialty: string;
  departmentSlug: string;
  qualifications: string[];
  experienceYears?: number;
  bio: string;
  imageUrl: string;
  consultationTypes: ('In-Clinic' | 'Home Visit' | 'Online Consultation')[];
  consultationFee?: string;
  availabilityDays: string[];
  isVerified: boolean;
  isPlaceholder: boolean;
}

export const DOCTORS: Doctor[] = [
  {
    id: 'doc-1',
    slug: 'dr-rajesh-sharma',
    name: 'Dr. Rajesh Sharma',
    title: 'Senior Consultant & HOD - Internal Medicine',
    specialty: 'General Physician & Diabetology',
    departmentSlug: 'general-physician-internal-medicine',
    qualifications: ['MBBS', 'MD (Internal Medicine)', 'FACP (USA)'],
    experienceYears: 18,
    bio: 'Dr. Rajesh Sharma is a renowned physician specializing in complex metabolic disorders, adult lifestyle diseases, chronic disease management, and preventive healthcare.',
    imageUrl: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=800&auto=format&fit=crop',
    consultationTypes: ['In-Clinic', 'Home Visit', 'Online Consultation'],
    availabilityDays: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    isVerified: true,
    isPlaceholder: true,
  },
  {
    id: 'doc-2',
    slug: 'dr-ananya-sen',
    name: 'Dr. Ananya Sen',
    title: 'Chief Consultant - Cardiology',
    specialty: 'Interventional Cardiology',
    departmentSlug: 'cardiology',
    qualifications: ['MBBS', 'MD (Medicine)', 'DM (Cardiology)'],
    experienceYears: 15,
    bio: 'Dr. Ananya Sen has extensive expertise in non-invasive & interventional cardiology, preventive cardiac care, hypertension management, and heart failure therapy.',
    imageUrl: 'https://images.unsplash.com/photo-1594824813566-81845185d268?q=80&w=800&auto=format&fit=crop',
    consultationTypes: ['In-Clinic', 'Online Consultation'],
    availabilityDays: ['Mon', 'Wed', 'Fri', 'Sat'],
    isVerified: true,
    isPlaceholder: true,
  },
  {
    id: 'doc-3',
    slug: 'dr-vikram-aditya',
    name: 'Dr. Vikram Aditya',
    title: 'Senior Specialist - Orthopaedics & Joint Replacement',
    specialty: 'Orthopaedics & Trauma Surgery',
    departmentSlug: 'orthopaedics',
    qualifications: ['MBBS', 'MS (Orthopaedics)', 'Fellowship in Arthroplasty'],
    experienceYears: 14,
    bio: 'Specializing in minimally invasive arthroscopy, total knee and hip replacement, sports injury rehabilitation, and complex trauma management.',
    imageUrl: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=800&auto=format&fit=crop',
    consultationTypes: ['In-Clinic', 'Home Visit'],
    availabilityDays: ['Mon', 'Tue', 'Thu', 'Sat'],
    isVerified: true,
    isPlaceholder: true,
  },
  {
    id: 'doc-4',
    slug: 'dr-sunita-deshmukh',
    name: 'Dr. Sunita Deshmukh',
    title: 'Senior Consultant - Obstetrics & Gynaecology',
    specialty: 'Gynaecology & High-Risk Pregnancy',
    departmentSlug: 'obstetrics-gynaecology',
    qualifications: ['MBBS', 'MD (Obstetrics & Gynaecology)', 'DNB'],
    experienceYears: 16,
    bio: 'Dr. Sunita Deshmukh provides compassionate, evidence-based care for high-risk pregnancies, laparoscopic gynaecological procedures, and adolescent healthcare.',
    imageUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800&auto=format&fit=crop',
    consultationTypes: ['In-Clinic', 'Online Consultation'],
    availabilityDays: ['Mon', 'Tue', 'Wed', 'Fri', 'Sat'],
    isVerified: true,
    isPlaceholder: true,
  },
  {
    id: 'doc-5',
    slug: 'dr-amit-verma',
    name: 'Dr. Amit Verma',
    title: 'Senior Consultant - Neurology',
    specialty: 'Clinical & Interventional Neurology',
    departmentSlug: 'neurology',
    qualifications: ['MBBS', 'MD (General Medicine)', 'DM (Neurology)'],
    experienceYears: 12,
    bio: 'Expert in stroke management, epilepsy care, movement disorders, headache management, and neuromuscular clinical evaluations.',
    imageUrl: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=800&auto=format&fit=crop',
    consultationTypes: ['In-Clinic', 'Online Consultation'],
    availabilityDays: ['Tue', 'Thu', 'Fri', 'Sat'],
    isVerified: true,
    isPlaceholder: true,
  },
  {
    id: 'doc-6',
    slug: 'dr-priya-nair',
    name: 'Dr. Priya Nair',
    title: 'Senior Specialist - Paediatric Care',
    specialty: 'Paediatrics & Neonatology',
    departmentSlug: 'pediatrics',
    qualifications: ['MBBS', 'MD (Paediatrics)', 'DCH'],
    experienceYears: 10,
    bio: 'Dedicated paediatrician focusing on infant growth monitoring, childhood immunization, paediatric allergy management, and neonatal care.',
    imageUrl: 'https://images.unsplash.com/photo-1594824813566-81845185d268?q=80&w=800&auto=format&fit=crop',
    consultationTypes: ['In-Clinic', 'Home Visit', 'Online Consultation'],
    availabilityDays: ['Mon', 'Wed', 'Thu', 'Sat'],
    isVerified: true,
    isPlaceholder: true,
  }
];
