export interface LocationItem {
  id: string;
  slug: string;
  cityName: string;
  localityName: string;
  displayName: string;
  addressPlaceholder: string;
  phone: string;
  labPhone: string;
  email: string;
  operatingHours: string;
  mapEmbedUrl: string;
  isMainBranch: boolean;
  isPlaceholder: boolean;
  heroImage?: string;
  servicesAvailable: string[];
  faqs: { question: string; answer: string }[];
}

export interface AreaZoneCategory {
  title: string;
  description: string;
  iconName: string;
  areas: { name: string; slug: string; tag?: string }[];
}

export const AREAS_WE_SERVE_CATEGORIES: AreaZoneCategory[] = [
  {
    title: 'Noida Extension & Gaur City',
    description: 'Premier healthcare consultations, home visits, and fast pathology sample collections across Gaur City and Noida Extension.',
    iconName: 'Navigation',
    areas: [
      { name: 'Gaur City', slug: 'gaur-city-center', tag: 'High Priority' },
      { name: 'Gaur City 1', slug: 'gaur-city-center', tag: 'Home Visits' },
      { name: 'Gaur City 2', slug: 'gaur-city-center', tag: 'Sample Draw' },
      { name: 'Cherry County', slug: 'gaur-city-center' },
      { name: 'Noida Extension', slug: 'gaur-city-center', tag: 'Full Coverage' },
      { name: 'Greater Noida West', slug: 'healthcity-main-campus', tag: 'Main Hub' },
      { name: 'Sector 1, Greater Noida West', slug: 'sector-1-10-16b' },
    ],
  },
  {
    title: 'Greater Noida West Sectors',
    description: 'Comprehensive general physician, lab diagnostics, and radiology sample hubs across key sectors.',
    iconName: 'MapPin',
    areas: [
      { name: 'Techzone 4, Patwari', slug: 'healthcity-main-campus', tag: 'Main Campus' },
      { name: 'Sector 4, Greater Noida West', slug: 'sector-4-greater-noida', tag: 'Clinic Proximity' },
      { name: 'Sector 10, Greater Noida West', slug: 'sector-1-10-16b' },
      { name: 'Sector 16B, Greater Noida West', slug: 'sector-1-10-16b' },
      { name: 'Nirala Estate Market', slug: 'healthcity-main-campus', tag: 'Walk-in Hub' },
    ],
  },
  {
    title: 'Greater Noida Central & Pari Chowk',
    description: 'Easy clinical accessibility and specialist referrals for Pari Chowk and surrounding residential hubs.',
    iconName: 'Building',
    areas: [
      { name: 'Pari Chowk', slug: 'pari-chowk-hub', tag: 'Central Hub' },
      { name: 'Alpha & Omega Sectors', slug: 'pari-chowk-hub' },
      { name: 'Knowledge Park', slug: 'pari-chowk-hub' },
    ],
  },
  {
    title: 'Surrounding Hubs & Societies',
    description: 'Free home blood sample collection and online doctor teleconsultation services.',
    iconName: 'Home',
    areas: [
      { name: 'Crossings Republik', slug: 'crossings-republik-hub', tag: 'Express Doorstep' },
      { name: 'Eco Village 1, 2 & 3', slug: 'gaur-city-center', tag: 'Home Visit' },
      { name: 'Ek Murti Chowk', slug: 'healthcity-main-campus' },
    ],
  },
];

export const LOCATIONS: LocationItem[] = [
  {
    id: 'loc-main',
    slug: 'healthcity-main-campus',
    cityName: 'Noida Extension',
    localityName: 'Tech Zone 4 & Sector 12, Greater Noida West',
    displayName: 'MANYACARE HealthCity Main Campus',
    addressPlaceholder: 'Address 1: GH-07, Spring Meadows Market, Tech Zone 4, Noida Extension | Address 2: Plot No-127, Block-A, Sector 12, Noida Extension, ManyaCare HealthCity, Dr Jay Shankar Market',
    phone: '+91-9953239561',
    labPhone: '+91-9953239562',
    email: 'info@manyacare.com',
    operatingHours: 'Mon - Sat: 8:00 AM - 8:00 PM | Sun: 9:00 AM - 2:00 PM (24/7 Helpline Available)',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.562123!2d77.4456342088062!3d28.58945681262447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ceff929bee52d%3A0xbed4ec0fb6a70133!2sManyaCare%20HealthCity!5e0!3m2!1sen!2sin!4v1724547883221!5m2!1sen!2sin',
    isMainBranch: true,
    isPlaceholder: false,
    heroImage: '/location/manyacare-healthcity-main-campus-noida-extension.jpg',
    servicesAvailable: [
      'Multispecialty OPD Consultations',
      'Pathology & Diagnostic Blood Laboratory',
      'Digital X-Ray & Ultrasound Diagnostics',
      'Home Doctor Visits & Nursing Care',
      'Preventive Health Packages',
      'Medical Education Counseling'
    ],
    faqs: [
      {
        question: 'Where is MANYACARE HealthCity Main Campus located?',
        answer: 'Our main campus facilities are located at - Address 1: GH-07, Spring Meadows Market, Tech Zone 4, Noida Extension. Address 2: Plot No-127, Block-A, Sector 12, Noida Extension, ManyaCare HealthCity, Dr Jay Shankar Market.'
      },
      {
        question: 'What are the consultation hours at the Main Campus?',
        answer: 'Outpatient departments operate Monday through Saturday from 8:00 AM to 8:00 PM and Sunday morning from 9:00 AM to 2:00 PM.'
      },
      {
        question: 'Are diagnostic pathology lab and digital X-ray services available at the Main Campus?',
        answer: 'Yes, our Main Campus houses a fully equipped NABL-standard pathology diagnostic lab and digital X-ray imaging suite with same-day report delivery.'
      },
      {
        question: 'How do I book an OPD consultation or doorstep home visit?',
        answer: 'You can call our direct helpline at +91-9953239561 or fill out the online booking form on this page.'
      }
    ]
  },
  {
    id: 'loc-gaur-city',
    slug: 'gaur-city-center',
    cityName: 'Gaur City & Noida Extension',
    localityName: 'Gaur City 1 & 2 Hub',
    displayName: 'MANYACARE HealthCity - Gaur City Care Hub',
    addressPlaceholder: 'Gaur City 1 & 2 Plaza, Noida Extension, Greater Noida West',
    phone: '+91-9953239561',
    labPhone: '+91-9953239562',
    email: 'gaurcity@manyacare.com',
    operatingHours: 'Mon - Sat: 7:30 AM - 8:00 PM',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.562123!2d77.43!3d28.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjhCsDM6JzAwLjAiTiA3N8KwMjUnNDguMCJF!5e0!3m2!1sen!2sin!4v1650000000000',
    isMainBranch: false,
    isPlaceholder: false,
    heroImage: '/location/manyacare-gaur-city-care-hub.jpg',
    servicesAvailable: [
      'Doorstep Pathology Blood Sample Draw',
      'General Physician Consultation Desk',
      'Home Visit Healthcare Team',
      'Routine Diabetes & BP Screenings'
    ],
    faqs: [
      {
        question: 'Are free home blood sample collections available in Gaur City 1 & 2?',
        answer: 'Yes! We provide free doorstep sample collection for residents of Gaur City 1, Gaur City 2, Cherry County, and Eco Village. Call +91-9953239562.'
      },
      {
        question: 'What medical services are available at the Gaur City Care Hub?',
        answer: 'The hub offers general physician OPD consultations, routine diabetes & BP screenings, diagnostic blood draw, and home nursing visit bookings.'
      },
      {
        question: 'What are the operating timings for Gaur City Care Hub?',
        answer: 'Our Gaur City Care Hub operates Monday through Saturday from 7:30 AM to 8:00 PM.'
      },
      {
        question: 'How quickly can I get blood test reports delivered?',
        answer: 'Routine pathology reports like CBC, Thyroid, Lipid Profile, and HbA1c are delivered digitally on WhatsApp within 4 to 8 hours.'
      }
    ]
  },
  {
    id: 'loc-sector-4',
    slug: 'sector-4-greater-noida',
    cityName: 'Greater Noida West',
    localityName: 'Sector 4',
    displayName: 'MANYACARE HealthCity - Sector 4 Diagnostic Hub',
    addressPlaceholder: 'Sector 4 Main Market, Greater Noida West',
    phone: '+91-9953239561',
    labPhone: '+91-9953239562',
    email: 'sector4@manyacare.com',
    operatingHours: 'Mon - Sat: 8:00 AM - 8:00 PM',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.562123!2d77.435!3d28.595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjhCsDM1JzQyLjAiTiA3N8KwMjYnMDYuMCJF!5e0!3m2!1sen!2sin!4v1650000000000',
    isMainBranch: false,
    isPlaceholder: false,
    heroImage: '/location/manyacare-sector-4-diagnostic-hub.jpg',
    servicesAvailable: [
      'Diagnostic Lab Sample Collection',
      'Fever & Viral Illness Treatment',
      'Preventive Health Packages',
      'Digital ECG & Vitals Check'
    ],
    faqs: [
      {
        question: 'How do I book a blood test or home sample collection in Sector 4?',
        answer: 'You can call our lab desk directly at +91-9953239562 or fill out the booking form for doorstep sample draw in Sector 4.'
      },
      {
        question: 'What diagnostic health packages are available at Sector 4 Hub?',
        answer: 'We offer full body health checkups, diabetic profiles, fever panels, thyroid panels, and senior citizen wellness packages.'
      },
      {
        question: 'Can I consult a family physician at Sector 4 Hub?',
        answer: 'Yes, senior general physicians are available for outpatient consultations for fever, hypertension, viral illnesses, and lifestyle disease management.'
      },
      {
        question: 'What are the helpline numbers for Sector 4 Diagnostic Hub?',
        answer: 'You can reach our appointment desk at +91-9953239561 or lab collection desk at +91-9953239562.'
      }
    ]
  },
  {
    id: 'loc-pari-chowk',
    slug: 'pari-chowk-hub',
    cityName: 'Greater Noida Central',
    localityName: 'Pari Chowk',
    displayName: 'MANYACARE HealthCity - Pari Chowk Center',
    addressPlaceholder: 'Commercial Complex, Near Pari Chowk Metro Station, Greater Noida',
    phone: '+91-9953239561',
    labPhone: '+91-9953239562',
    email: 'parichowk@manyacare.com',
    operatingHours: 'Mon - Sat: 8:00 AM - 8:00 PM',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.562123!2d77.51!3d28.47!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjhCsDI4JzEyLjAiTiA3N8KwMzAnMzYuMCJF!5e0!3m2!1sen!2sin!4v1650000000000',
    isMainBranch: false,
    isPlaceholder: false,
    heroImage: '/location/manyacare-pari-chowk-center.jpg',
    servicesAvailable: [
      'Multispecialty Referrals',
      'Diagnostic Pathology Wing',
      'Health Package Consultations',
      'Teleconsultation Support'
    ],
    faqs: [
      {
        question: 'Where is the Pari Chowk Care Center located?',
        answer: 'Our center is located in the commercial complex near Pari Chowk Metro Station, providing convenient access for Greater Noida Central residents.'
      },
      {
        question: 'Is the Pari Chowk center open on Sundays?',
        answer: 'Sunday consultations are available by prior appointment for priority specialist visits and emergency lab sample draw.'
      },
      {
        question: 'Which specialist consultations can be booked at Pari Chowk?',
        answer: 'You can book consultations for Internal Medicine, Cardiology, Gynaecology, Pediatrics, Orthopedics, and Diabetology.'
      },
      {
        question: 'Does Pari Chowk center provide home sample collection for nearby sectors?',
        answer: 'Yes, we cover Alpha, Beta, Gamma, Delta, Omega, and Knowledge Park sectors for doorstep blood sample collection.'
      }
    ]
  },
  {
    id: 'loc-crossings-republik',
    slug: 'crossings-republik-hub',
    cityName: 'Crossings Republik',
    localityName: 'NH-24 Border',
    displayName: 'MANYACARE HealthCity - Crossings Republik Wing',
    addressPlaceholder: 'Crossings Republik Plaza, Near NH-24, Ghaziabad / Noida Extension Border',
    phone: '+91-9953239561',
    labPhone: '+91-9953239562',
    email: 'crossings@manyacare.com',
    operatingHours: 'Mon - Sat: 8:00 AM - 8:00 PM',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.562123!2d77.435!3d28.63!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjhCsDM3JzQ4LjAiTiA3N8KwMjYnMDYuMCJF!5e0!3m2!1sen!2sin!4v1650000000000',
    isMainBranch: false,
    isPlaceholder: false,
    heroImage: '/location/manyacare-crossings-republik-wing.jpg',
    servicesAvailable: [
      'Express Home Sample Draw',
      'General Physician Care',
      'Diabetes & Hypertension Management',
      'Home Healthcare Assistance'
    ],
    faqs: [
      {
        question: 'Can I get doorstep blood sample collection in Crossings Republik?',
        answer: 'Yes, our mobile lab phlebotomy team visits all residential high-rises in Crossings Republik daily. Call +91-9953239562.'
      },
      {
        question: 'Where is the Crossings Republik Wing located?',
        answer: 'Located at Crossings Republik Plaza near NH-24, easily accessible from Ghaziabad and Noida Extension.'
      },
      {
        question: 'What services are offered at Crossings Republik Wing?',
        answer: 'Services include general physician OPD, express blood test collection, diabetes management, and home nursing care.'
      },
      {
        question: 'How do I schedule an appointment at Crossings Republik Wing?',
        answer: 'Call +91-9953239561 or send a message via WhatsApp to book an appointment with our medical team.'
      }
    ]
  },
  {
    id: 'loc-sectors-1-10-16b',
    slug: 'sector-1-10-16b',
    cityName: 'Greater Noida West',
    localityName: 'Sectors 1, 10 & 16B',
    displayName: 'MANYACARE HealthCity - Sectors 1, 10 & 16B Care Hub',
    addressPlaceholder: 'Sector 10 Commercial Zone, Greater Noida West',
    phone: '+91-9953239561',
    labPhone: '+91-9953239562',
    email: 'info@manyacare.com',
    operatingHours: 'Mon - Sat: 8:00 AM - 8:00 PM',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.562123!2d77.435!3d28.595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjhCsDM1JzQyLjAiTiA3N8KwMjYnMDYuMCJF!5e0!3m2!1sen!2sin!4v1650000000000',
    isMainBranch: false,
    isPlaceholder: false,
    heroImage: '/location/manyacare-sector-1-10-16b-care-hub.jpg',
    servicesAvailable: [
      'Pathology Sample Collection',
      'Family Doctor Consultation',
      'Routine Blood Pressure & Sugar Tests',
      'Elderly Home Care'
    ],
    faqs: [
      {
        question: 'Which residential sectors are covered by this hub?',
        answer: 'We provide complete OPD consultations, home visits, and doorstep blood collection for Sector 1, Sector 10, Sector 16B, and surrounding societies.'
      },
      {
        question: 'How do I request an elderly home care or doctor visit in Sector 10?',
        answer: 'You can call our dedicated care coordinator at +91-9953239561 to schedule doctor visits or nursing care at home.'
      },
      {
        question: 'What routine blood tests can be done at home?',
        answer: 'All routine and specialized tests including CBC, HbA1c, Kidney Function, Liver Function, Lipid Profile, and Vitamin D/B12.'
      },
      {
        question: 'What are the operational hours for Sector 1, 10 & 16B Care Hub?',
        answer: 'The hub is open Monday through Saturday from 8:00 AM to 8:00 PM, with 24/7 telephonic helpline support.'
      }
    ]
  }
];
