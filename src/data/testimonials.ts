export interface Testimonial {
  id: string;
  name: string;
  location: string;
  departmentOrService: string;
  reviewText: string;
  rating: number;
  date: string;
  isVerifiedReview: boolean;
  isSampleReview: boolean;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Suresh Kumar',
    location: 'Central Campus Patient',
    departmentOrService: 'Internal Medicine & Diabetology',
    reviewText: 'The clinical evaluation for my diabetes and hypertension was exceptionally thorough. The doctors explained the blood sugar reports clearly and guided my diet effectively.',
    rating: 5,
    date: 'August 2026',
    isVerifiedReview: false,
    isSampleReview: true,
  },
  {
    id: 'test-2',
    name: 'Meenakshi Sundaram',
    location: 'Home Care Patient',
    departmentOrService: 'Home Healthcare Services',
    reviewText: 'Requesting a home doctor visit and nursing care for my elderly mother was seamless. The healthcare team was punctual, polite, and handled her dressing with care.',
    rating: 5,
    date: 'August 2026',
    isVerifiedReview: false,
    isSampleReview: true,
  },
  {
    id: 'test-3',
    name: 'Rohan Mehta',
    location: 'Executive Checkup Patient',
    departmentOrService: 'Health Packages',
    reviewText: 'The Executive Health Checkup was well-organized. Sample collection was smooth, and I received my diagnostic reports in a clean digital format with doctor consultation.',
    rating: 5,
    date: 'July 2026',
    isVerifiedReview: false,
    isSampleReview: true,
  },
  {
    id: 'test-4',
    name: 'Pooja Sharma',
    location: 'Diagnostic Patient',
    departmentOrService: 'Home Sample Collection',
    reviewText: 'The home blood collection technician arrived right on schedule at 7 AM. Highly professional sample collection process and quick report turnaround.',
    rating: 5,
    date: 'July 2026',
    isVerifiedReview: false,
    isSampleReview: true,
  },
  {
    id: 'test-5',
    name: 'Vikram Choudhury',
    location: 'Orthopaedics Patient',
    departmentOrService: 'Orthopaedics & Physiotherapy',
    reviewText: 'After my knee injury, the orthopaedic consultant and physiotherapy team restored my joint mobility through structured physical therapy sessions.',
    rating: 5,
    date: 'June 2026',
    isVerifiedReview: false,
    isSampleReview: true,
  },
  {
    id: 'test-6',
    name: 'Anjali Verma',
    location: 'Medical Aspirant Parent',
    departmentOrService: 'Medical Education Guidance',
    reviewText: 'The medical education counseling team provided clear, transparent guidance regarding MBBS abroad admission eligibility and regulatory requirements.',
    rating: 5,
    date: 'June 2026',
    isVerifiedReview: false,
    isSampleReview: true,
  }
];
