export interface HealthPackage {
  id: string;
  slug: string;
  title: string;
  category: string;
  targetAudience: string;
  description: string;
  includedTestsCount: number;
  includedTests: string[];
  fastingRequired: boolean;
  price?: string;
  isPopular?: boolean;
}

export const HEALTH_PACKAGES: HealthPackage[] = [
  {
    id: 'pkg-1',
    slug: 'executive-health-checkup',
    title: 'Executive Health Check-Up',
    category: 'Full Body Assessment',
    targetAudience: 'Working Professionals & Adults (Age 30+)',
    description: 'Comprehensive annual preventive screening assessing vital organs including heart, liver, kidneys, metabolic profile, and blood counts.',
    includedTestsCount: 58,
    includedTests: [
      'Complete Blood Count (CBC)',
      'Fasting & PP Blood Sugar',
      'HbA1c Average Sugar',
      'Lipid Profile (Complete Heart Panel)',
      'Liver Function Test (LFT)',
      'Kidney Function Test (KFT)',
      'Thyroid Profile (T3, T4, TSH)',
      'Urine Routine & Microscopic',
      'Digital Chest X-Ray',
      '12-Lead Electrocardiogram (ECG)',
      'Physician Clinical Consultation'
    ],
    fastingRequired: true,
    price: 'Enquire for Verified Pricing',
    isPopular: true,
  },
  {
    id: 'pkg-2',
    slug: 'diabetes-screening',
    title: 'Diabetes Comprehensive Screening',
    category: 'Metabolic Health',
    targetAudience: 'Diabetic & Pre-diabetic Patients',
    description: 'Targeted endocrine evaluation for glycemic stability, kidney filtration, nerve function markers, and lipid balance.',
    includedTestsCount: 24,
    includedTests: [
      'Fasting Blood Sugar',
      'Post-Prandial Blood Sugar',
      'HbA1c (3-Month Average)',
      'Serum Creatinine & Microalbuminuria',
      'Lipid Profile',
      'Diabetic Foot Evaluation Guidance',
      'Doctor Consultation'
    ],
    fastingRequired: true,
    price: 'Enquire for Verified Pricing',
    isPopular: false,
  },
  {
    id: 'pkg-3',
    slug: 'cardiac-screening',
    title: 'Cardiac Screening Package',
    category: 'Heart Health',
    targetAudience: 'Adults with Hypertension, High Cholesterol or Cardiac Risk',
    description: 'Non-invasive cardiac risk assessment detecting early signs of coronary artery stress and cholesterol imbalances.',
    includedTestsCount: 32,
    includedTests: [
      '12-Lead ECG',
      '2D Echocardiography',
      'Treadmill Stress Test (TMT)',
      'Lipid Profile & High Sensitivity CRP',
      'Fasting Blood Sugar',
      'Kidney Function Test',
      'Senior Cardiologist Consultation'
    ],
    fastingRequired: true,
    price: 'Enquire for Verified Pricing',
    isPopular: true,
  },
  {
    id: 'pkg-4',
    slug: 'womens-health-package',
    title: 'Women’s Wellness Health Package',
    category: 'Women’s Health',
    targetAudience: 'Women of All Age Groups',
    description: 'Focused wellness evaluation encompassing hormonal assays, bone mineral screening, cervical health, and blood counts.',
    includedTestsCount: 42,
    includedTests: [
      'Complete Blood Count (CBC)',
      'Thyroid Profile (TSH, Free T3, Free T4)',
      'Vitamin D & Calcium Level',
      'Pap Smear Screening',
      'Pelvic Ultrasonography',
      'HbA1c & Fasting Glucose',
      'Gynaecologist Clinical Consultation'
    ],
    fastingRequired: true,
    price: 'Enquire for Verified Pricing',
    isPopular: true,
  },
  {
    id: 'pkg-5',
    slug: 'senior-citizen-package',
    title: 'Senior Citizen Comprehensive Package',
    category: 'Geriatric Health',
    targetAudience: 'Seniors (Age 60+)',
    description: 'Holistic health screening designed for elderly individuals to monitor joint health, prostate/gynaec markers, kidney function, and cardiac activity.',
    includedTestsCount: 62,
    includedTests: [
      'Complete Blood Count & ESR',
      'Kidney & Liver Function Test',
      'Lipid Profile & Serum Electrolytes',
      'Bone Health (Vitamin D, Calcium, Phosphorus)',
      'Urine Routine & Microscopic',
      'Chest X-Ray & ECG',
      'DEXA Bone Density Scan Option',
      'Geriatric Physician Consultation'
    ],
    fastingRequired: true,
    price: 'Enquire for Verified Pricing',
    isPopular: false,
  },
  {
    id: 'pkg-6',
    slug: 'cancer-screening',
    title: 'Preventive Cancer Screening',
    category: 'Oncology Preventive',
    targetAudience: 'Adults Seeking Early Biomarker & Imaging Screening',
    description: 'Preventive organ screening and biomarker panel for early detection guidance.',
    includedTestsCount: 28,
    includedTests: [
      'Serum Tumor Biomarker Panel (CEA, CA-125 / PSA)',
      'Abdominal & Pelvic Ultrasound',
      'Digital Mammography (for women)',
      'Complete Blood Count & Stool Occult Blood',
      'Oncology Clinical Guidance'
    ],
    fastingRequired: true,
    price: 'Enquire for Verified Pricing',
    isPopular: false,
  },
  {
    id: 'pkg-7',
    slug: 'thyroid-profile',
    title: 'Thyroid & Metabolic Profile',
    category: 'Endocrinology',
    targetAudience: 'Patients experiencing unexplained weight changes, fatigue, or mood shifts',
    description: 'Targeted hormonal panel for thyroid gland dysfunctions.',
    includedTestsCount: 12,
    includedTests: [
      'Total T3 (Triiodothyronine)',
      'Total T4 (Thyroxine)',
      'TSH (Thyroid Stimulating Hormone)',
      'Anti-TPO Antibodies (Optional)',
      'Endocrine Consultation Guidance'
    ],
    fastingRequired: false,
    price: 'Enquire for Verified Pricing',
    isPopular: false,
  },
  {
    id: 'pkg-8',
    slug: 'obesity-assessment',
    title: 'Obesity & Metabolic Wellness Package',
    category: 'Metabolic & Lifestyle',
    targetAudience: 'Individuals aiming for scientific weight management',
    description: 'Evaluates hormonal drivers of weight retention, insulin resistance, lipid storage, and fatty liver risk.',
    includedTestsCount: 30,
    includedTests: [
      'Fasting Insulin & HOMA-IR Calculation',
      'HbA1c & Fasting Glucose',
      'Lipid Profile & Liver Function Test',
      'Thyroid Profile (TSH)',
      'Uric Acid & Serum Cortisol',
      'Dietitian Clinical Meal Planning'
    ],
    fastingRequired: true,
    price: 'Enquire for Verified Pricing',
    isPopular: false,
  }
];
