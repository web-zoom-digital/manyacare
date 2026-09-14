export interface RadiologyModality {
  id: string;
  name: string;
  code: string;
  category: string;
  description: string;
  preparationInfo: string;
  isAvailable: boolean;
  statusText?: string;
  iconName: string;
}

export const RADIOLOGY_MODALITIES: RadiologyModality[] = [
  {
    id: 'rad-1',
    name: 'Digital X-Ray',
    code: 'RAD-XRAY',
    category: 'General Radiography',
    description: 'High-resolution digital imaging for chest, bone fractures, joint alignments, and spinal evaluation with ultra-low radiation.',
    preparationInfo: 'Remove metal jewelry and metallic objects from the anatomical region being scanned.',
    isAvailable: true,
    iconName: 'Camera',
  },
  {
    id: 'rad-2',
    name: 'Ultrasound (USG)',
    code: 'RAD-USG',
    category: 'Sonography',
    description: 'Real-time non-invasive acoustic imaging for abdominal organs, pelvic structures, pregnancy monitoring, and soft tissues.',
    preparationInfo: 'For Abdominal USG: Fasting for 6-8 hours. For Pelvic USG: Full bladder required.',
    isAvailable: true,
    iconName: 'Radio',
  },
  {
    id: 'rad-3',
    name: 'Colour Doppler',
    code: 'RAD-DOPPLER',
    category: 'Vascular Sonography',
    description: 'Evaluates blood flow through carotid arteries, peripheral blood vessels, deep vein thrombosis (DVT), and renal vasculature.',
    preparationInfo: 'No special diet required for peripheral limb Doppler. Abdominal Doppler requires 6 hours fasting.',
    isAvailable: true,
    iconName: 'Activity',
  },
  {
    id: 'rad-4',
    name: '12-Lead ECG',
    code: 'RAD-ECG',
    category: 'Cardiology Diagnostics',
    description: 'Measures electrical activity of the heart to detect arrhythmia, ischemia, and conduction blocks.',
    preparationInfo: 'Avoid heavy physical exertion immediately prior to recording. Easy comfortable clothing recommended.',
    isAvailable: true,
    iconName: 'Heart',
  },
  {
    id: 'rad-5',
    name: '2D Echocardiography (2D Echo)',
    code: 'RAD-ECHO',
    category: 'Cardiac Ultrasound',
    description: 'Ultrasound visualization of cardiac chambers, heart valves, ejection fraction, and wall motion dynamics.',
    preparationInfo: 'No fasting required. Wear loose two-piece attire for comfortable lead placement.',
    isAvailable: true,
    iconName: 'HeartPulse',
  },
  {
    id: 'rad-6',
    name: 'Treadmill Stress Test (TMT)',
    code: 'RAD-TMT',
    category: 'Stress Cardiology',
    description: 'Continuous ECG recording during controlled treadmill exertion to detect inducible myocardial ischemia.',
    preparationInfo: 'Wear comfortable sports shoes. Avoid heavy meal 2 hours prior to test. Consult physician regarding cardiac medications.',
    isAvailable: true,
    iconName: 'Activity',
  },
  {
    id: 'rad-7',
    name: '24-Hour Holter Monitoring',
    code: 'RAD-HOLTER',
    category: 'Ambulatory Cardiology',
    description: 'Ambulatory 24 to 48-hour continuous ECG recording to capture intermittent palpitations and hidden arrhythmias.',
    preparationInfo: 'Bathing prior to monitor attachment is recommended as equipment must remain dry.',
    isAvailable: true,
    iconName: 'Clock',
  },
  {
    id: 'rad-8',
    name: 'CT Scan (Computed Tomography)',
    code: 'RAD-CT',
    category: 'Advanced Cross-Sectional Imaging',
    description: 'High-speed multi-slice CT for detailed structural imaging of brain, chest, abdomen, trauma, and angiography.',
    preparationInfo: 'Contrast CT requires 4-6 hours fasting and recent Serum Creatinine report.',
    isAvailable: true,
    iconName: 'Disc',
  },
  {
    id: 'rad-9',
    name: 'MRI Scan (Magnetic Resonance)',
    code: 'RAD-MRI',
    category: 'Advanced Magnetic Imaging',
    description: 'High-contrast soft tissue imaging for brain parenchyma, spinal cord, joints, ligaments, and pelvis.',
    preparationInfo: 'Must disclose pacemakers, metallic implants, or claustrophobia prior to scheduling.',
    isAvailable: true,
    iconName: 'Cpu',
  },
  {
    id: 'rad-10',
    name: 'PET CT Scan',
    code: 'RAD-PETCT',
    category: 'Nuclear Medicine Imaging',
    description: 'Combined Positron Emission Tomography and CT for metabolic tumor staging and evaluation.',
    preparationInfo: '6 hours strict fasting. Water intake encouraged. Diabetics require clinical preparation protocol.',
    isAvailable: true,
    iconName: 'Zap',
  },
  {
    id: 'rad-11',
    name: 'Digital Mammography',
    code: 'RAD-MAMMO',
    category: 'Breast Imaging',
    description: 'Low-dose X-ray examination for preventive breast health screening and micro-calcification detection.',
    preparationInfo: 'Avoid applying deodorants, powders, or lotions on chest area on day of exam.',
    isAvailable: true,
    iconName: 'Sun',
  },
  {
    id: 'rad-12',
    name: 'DEXA Bone Mineral Density Scan',
    code: 'RAD-DEXA',
    category: 'Bone Densitometry',
    description: 'Gold-standard dual-energy X-ray absorptiometry measuring bone mineral density to screen for osteoporosis.',
    preparationInfo: 'Avoid calcium supplements 24 hours prior to scan.',
    isAvailable: true,
    iconName: 'Shield',
  }
];
