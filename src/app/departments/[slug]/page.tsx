import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Metadata } from 'next';
import { DEPARTMENTS } from '@/data/departments';
import { DOCTORS } from '@/data/doctors';
import DepartmentBookingForm from '@/components/DepartmentBookingForm';
import FaqAccordion from '@/components/FaqAccordion';
import HeroCurveDivider from '@/components/HeroCurveDivider';
import {
  CheckCircle2,
  ChevronLeft,
  Calendar,
  Stethoscope,
  ShieldCheck,
  Award,
  Phone,
  Clock,
  MapPin,
  Activity,
  ArrowRight,
  UserCheck,
  FlaskConical,
  Building,
  HelpCircle,
  Sparkles,
  Link as LinkIcon,
  ChevronRight,
  HeartPulse,
  Brain,
  Baby,
  Bone,
} from 'lucide-react';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return DEPARTMENTS.map((dept) => ({
    slug: dept.slug,
  }));
}

const BASE_URL = 'https://manyacare.in';

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const dept = DEPARTMENTS.find((d) => d.slug === slug);
  if (!dept) return { title: 'Department Not Found' };
  return {
    title: `${dept.name} Specialist Care | MANYACARE HealthCity Greater Noida West`,
    description: `${dept.shortDescription} Access expert consultations, advanced diagnostics, and home care services in Greater Noida West & Gaur City.`,
    keywords: [
      `${dept.name} Greater Noida West`,
      `${dept.name} doctor Gaur City`,
      `${dept.name} clinic Noida Extension`,
      `MANYACARE ${dept.name}`,
    ],
    alternates: {
      canonical: `${BASE_URL}/departments/${dept.slug}`,
    },
    openGraph: {
      type: 'website',
      locale: 'en_IN',
      url: `${BASE_URL}/departments/${dept.slug}`,
      title: `${dept.name} Specialist Care | MANYACARE HealthCity`,
      description: `${dept.fullDescription}`,
      siteName: 'MANYACARE HealthCity',
      images: [
        {
          url: '/images/manyacare-og-social.jpg',
          width: 1200,
          height: 630,
          alt: `${dept.name} - MANYACARE HealthCity`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${dept.name} Specialist Care | MANYACARE HealthCity`,
      description: `${dept.shortDescription}`,
      images: ['/images/manyacare-og-social.jpg'],
    },
  };
}

// Photorealistic DSLR camera view clinical images corresponding to each department topic
const DEPARTMENT_DSLR_IMAGES: Record<string, string> = {
  'general-physician-internal-medicine': '/images/general-physician-internal-medicine.jpg',
  'diabetes-endocrinology': '/service/manyacare-diabetes-endocrinology.jpg',
  'cardiology': '/service/manyacare-cardiology-heart-care.jpg',
  'chest-medicine': '/service/manyacare-chest-medicine-pulmonology.jpg',
  'neurology': '/service/manyacare-neurology-brain-care.jpg',
  'rheumatology': '/service/manyacare-rheumatology-autoimmune-care.jpg',
  'obstetrics-gynaecology': '/service/manyacare-obstetrics-gynaecology.jpg',
  'pediatrics': '/service/manyacare-paediatrics-child-health.jpg',
  'neurosurgery': '/service/manyacare-neurosurgery-spine-care.jpg',
  'orthopaedics': '/service/manyacare-orthopaedics-joint-care.jpg',
  'general-surgery': '/service/manyacare-general-laparoscopic-surgery.jpg',
  'plastic-cosmetic-surgery': '/service/manyacare-plastic-reconstructive-surgery.jpg',
  'urology': '/service/manyacare-urology-kidney-care.jpg',
  'psychiatry': '/service/manyacare-psychiatry-behavioral-health.jpg',
  'clinical-psychology': '/service/manyacare-clinical-psychology-psychotherapy.jpg',
  'dental-surgery': '/service/manyacare-dental-surgery-oral-health.jpg',
  'physiotherapy': '/service/manyacare-physiotherapy-rehabilitation.jpg',
  'diet-nutrition': '/service/manyacare-dietetics-clinical-nutrition.jpg',
  'oncology': '/service/manyacare-medical-oncology-care.jpg',
  'oncosurgery': '/service/manyacare-surgical-oncology-consultation.jpg',
  'sexual-health-clinic': '/service/manyacare-sexual-health-clinic.jpg',
};

// Expanded Conditions (8 Bullet Points per department)
const EXTENDED_CONDITIONS: Record<string, string[]> = {
  'general-physician-internal-medicine': [
    'Acute & Chronic High Blood Pressure (Hypertension)',
    'Unexplained Fever, Dengue, Malaria & Viral Illnesses',
    'Type 1 & Type 2 Metabolic Glucose Disorders',
    'Upper & Lower Respiratory Tract Infections',
    'Persistent Chronic Fatigue & Autoimmune Syndromes',
    'Gastrointestinal Distress, Acidity & Indigestion',
    'Thyroid Imbalances & Metabolic Weight Fluctuations',
    'Preventive Adult Health Screenings & Executive Wellness'
  ],
  'diabetes-endocrinology': [
    'Type 1 & Type 2 Diabetes Mellitus Control',
    'Hypothyroidism, Hyperthyroidism & Thyroiditis',
    'Polycystic Ovarian Syndrome (PCOS / PCOD)',
    'Gestational Diabetes in High-Risk Pregnancy',
    'Diabetic Neuropathy & Foot Ulcer Prevention',
    'Adrenal & Pituitary Hormonal Dysfunction',
    'Metabolic Syndrome & Severe Obesity Management',
    'Dyslipidemia & High Cholesterol Assessment'
  ],
  'cardiology': [
    'Coronary Artery Disease & Angina Prevention',
    'Refractory High Blood Pressure & Vascular Risk',
    'Heart Rhythm Abnormalities & Palpitations (Arrhythmia)',
    'Congestive Heart Failure Management',
    'Hyperlipidemia & High Cholesterol Assessment',
    'Post-Angioplasty & Post-CABG Cardiac Rehab',
    'Aortic & Peripheral Vascular Screening',
    'Preventive Cardiac Risk Stratification'
  ],
  'chest-medicine': [
    'Bronchial Asthma & Acute Bronchospasm',
    'Chronic Obstructive Pulmonary Disease (COPD)',
    'Pneumonia, Bronchitis & Respiratory Infections',
    'Allergic Rhinitis & Sinusitis Management',
    'Sleep Apnea & Nocturnal Snoring Disorders',
    'Post-COVID Lung Capacity & Fibrosis Rehab',
    'Occupational Dust Allergies & Asthma Control',
    'Pleural Effusion & Chronic Respiratory Support'
  ],
  'neurology': [
    'Acute Ischemic & Hemorrhagic Stroke Evaluation',
    'Chronic Migraine, Cluster & Tension Headaches',
    'Epilepsy, Seizures & Convulsive Disorders',
    'Parkinson’s Disease & Tremor Management',
    'Peripheral Neuropathy & Cervical Radiculopathy',
    'Multiple Sclerosis & Neuro-Immunology',
    'Memory Loss, Dementia & Alzheimer’s Screening',
    'Vertigo, Dizziness & Vestibular Balance Issues'
  ],
  'rheumatology': [
    'Rheumatoid Arthritis & Joint Inflammation',
    'Osteoarthritis & Degenerative Joint Wear',
    'Systemic Lupus Erythematosus (SLE)',
    'Gouty Arthritis & High Uric Acid Deposition',
    'Ankylosing Spondylitis & Spine Stiffness',
    'Psoriatic & Reactive Arthritis',
    'Fibromyalgia & Chronic Musculoskeletal Pain',
    'Scleroderma & Systemic Autoimmune Disorders'
  ],
  'obstetrics-gynaecology': [
    'High-Risk Antenatal Pregnancy Monitoring',
    'PCOS, PCOD & Irregular Menstrual Cycles',
    'Uterine Fibroids, Endometriosis & Ovarian Cysts',
    'Menopause Wellness & Hormone Replacement Care',
    'Pelvic Inflammatory Disease (PID) & Infections',
    'Infertility Evaluation & Pre-Conception Care',
    'Cervical & Breast Cancer Preventive Screenings',
    'Adolescent Gynaecological & Hormonal Health'
  ],
  'pediatrics': [
    'Childhood Acute Fevers, Flu & Viral Infections',
    'Paediatric Bronchial Asthma & Allergies',
    'Nutritional Deficiencies, Anemia & Stunted Growth',
    'Growth & Developmental Milestone Delays',
    'Paediatric Gastrointestinal & Diarrheal Illnesses',
    'Childhood Immunization & Vaccine Guidance',
    'Neonatal Jaundice & Infant Health Checks',
    'School Physical Health & Obesity Screening'
  ],
  'neurosurgery': [
    'Herniated Cervical & Lumbar Disc Herniation',
    'Spinal Cord Compression & Sciatica Nerve Pain',
    'Trigeminal Neuralgia & Facial Nerve Pain',
    'Brain Tumors & Skull Base Lesions Evaluation',
    'Traumatic Head Injury & Concussion Rehabilitation',
    'Hydrocephalus & CSF Flow Disorders',
    'Spondylolisthesis & Spinal Instability Care',
    'Carpal Tunnel Syndrome & Peripheral Compression'
  ],
  'orthopaedics': [
    'Knee, Hip & Shoulder Osteoarthritis',
    'Bone Fractures, Dislocations & Trauma Surgery',
    'Anterior Cruciate Ligament (ACL) & Meniscus Tears',
    'Cervical & Lumbar Degenerative Spondylosis',
    'Frozen Shoulder & Rotator Cuff Tendonitis',
    'Osteoporosis & DEXA Bone Mineral Loss',
    'Pediatric Bone Deformities & Joint Alignment',
    'Post-Operative Orthopaedic Rehabilitation'
  ],
  'general-surgery': [
    'Inguinal, Umbilical & Ventral Hernia Surgery',
    'Gallbladder Stones & Cholecystectomy Evaluation',
    'Acute Appendicitis & Emergency Abdominal Care',
    'Piles, Anal Fissures & Fistula-in-Ano Management',
    'Thyroid Nodules & Benign Breast Lump Biopsies',
    'Diabetic Foot Ulcer Debridement & Wound Care',
    'Skin Lipomas, Cysts & Superficial Tumors',
    'Minimally Invasive Laparoscopic Day-Care Procedures'
  ],
  'plastic-cosmetic-surgery': [
    'Post-Trauma Scar Revision & Micro-Suture Repair',
    'Burn Deformity Contracture Release Surgery',
    'Cleft Lip & Palate Reconstructive Surgery',
    'Skin Cancer Lesion Excision & Flap Reconstruction',
    'Cosmetic Facial Reshaping & Rhinoplasty Guidance',
    'Body Contouring & Post-Weight Loss Reconstruction',
    'Gynecomastia & Chest Contouring Procedures',
    'Hand Trauma & Microvascular Nerve Repair'
  ],
  'urology': [
    'Kidney & Ureteral Calculus (Stones) Management',
    'Benign Prostatic Hyperplasia (BPH / Enlarged Prostate)',
    'Recurrent Urinary Tract Infections (UTI)',
    'Overactive Bladder & Urinary Incontinence',
    'Hematuria (Blood in Urine) Diagnostic Screening',
    'Male Infertility & Varicocele Evaluation',
    'Stricture Urethra & Voiding Dysfunction',
    'Urological Cancer Screening (Prostate, Bladder, Kidney)'
  ],
  'psychiatry': [
    'Major Depressive Disorder & Mood Fluctuations',
    'Generalized Anxiety Disorder & Panic Attacks',
    'Obsessive-Compulsive Disorder (OCD) Management',
    'Insomnia & Chronic Sleep Architecture Disorders',
    'Bipolar Affective Disorder & Mood Stabilization',
    'Post-Traumatic Stress Disorder (PTSD)',
    'Adult ADHD & Concentration Difficulties',
    'Psychosomatic Illnesses & Stress De-escalation'
  ],
  'clinical-psychology': [
    'Cognitive Behavioral Therapy (CBT) for Anxiety',
    'Workplace Burnout & Stress Management',
    'Grief, Loss & Trauma Psychotherapy',
    'Marital, Family & Relationship Counseling',
    'Self-Esteem & Personal Growth Therapy',
    'Adolescent Behavioral & Emotional Counseling',
    'Psychometric Intelligence & Personality Testing',
    'Mindfulness-Based Stress Reduction Therapy'
  ],
  'dental-surgery': [
    'Advanced Dental Caries & Cavity Fillings',
    'Root Canal Treatment (RCT) with Digital X-Rays',
    'Periodontal Gum Bleeding & Scaling Procedures',
    'Impacted Wisdom Tooth Surgical Extraction',
    'Dental Crowns, Bridges & Implants Consultation',
    'Teeth Whitening & Aesthetic Smile Designing',
    'Pediatric Dental Hygiene & Fluoride Varnish',
    'TMJ Joint Pain & Night Guard Therapy for Grinding'
  ],
  'physiotherapy': [
    'Frozen Shoulder & Adhesive Capsulitis Rehabilitation',
    'Post-Stroke Hemiplegia & Neurological Physical Therapy',
    'Chronic Lower Back & Neck Pain Spine Alignment',
    'Post-Fracture & Post-Joint Replacement Rehab',
    'Sports Ligament Injury (ACL/PCL) Rehabilitation',
    'Pediatric Cerebral Palsy & Mobility Physical Therapy',
    'Chest Physiotherapy for Pulmonary Clearance',
    'Ergonomic Posture Correction & Manual Therapy'
  ],
  'diet-nutrition': [
    'Clinical Diabetic Diet & Glycemic Control Charting',
    'Medical Weight Loss & Anti-Obesity Meal Plans',
    'Hypertension & DASH Dietary Management',
    'Renal (Kidney Disease) Restricted Nutrition',
    'Cardiac Low-Cholesterol Meal Assembly',
    'PCOS & Hormonal Weight Management Diets',
    'Pediatric Malnutrition & Growth Meal Plans',
    'Gastrointestinal Digestive & Low-FODMAP Diets'
  ],
  'oncology': [
    'Breast & Gynaecological Cancer Screening',
    'Gastrointestinal & Colorectal Malignancy Evaluation',
    'Lung & Respiratory Cancer Risk Assessment',
    'Prostate & Urological Cancer Screening',
    'Tumor Marker Blood Test Profiling',
    'Chemotherapy & Targeted Immunotherapy Guidance',
    'Second Opinion Cancer Consultations',
    'Supportive Palliative Care & Symptom Relief'
  ],
  'oncosurgery': [
    'Surgical Biopsy & Histopathological Tissue Diagnostics',
    'Operable Solid Organ Tumor Surgical Consultations',
    'Thyroid & Head-and-Neck Tumor Excision Planning',
    'Soft Tissue Sarcoma & Lump Surgical Evaluation',
    'Pre-Operative Oncological Risk Stratification',
    'Post-Operative Surgical Wound Monitoring',
    'Reconstructive Surgery Coordination Post-Excision',
    'Multidisciplinary Tumor Board Recommendations'
  ],
  'sexual-health-clinic': [
    'Discreet Erectile Dysfunction Clinical Treatment',
    'Hormonal Imbalance & Low Testosterone Evaluation',
    'Premature Ejaculation & Performance Anxiety Care',
    'Confidential Sexually Transmitted Infection (STI) Screening',
    'Reproductive & Sexual Wellness Counseling',
    'Female Sexual Dysfunction & Pain Relief',
    'Pre-Marital Health & Fertility Assessment',
    'Strict 100% Confidential Medical Evaluation'
  ]
};

// Expanded Services (8 Bullet Points per department)
const EXTENDED_SERVICES: Record<string, string[]> = {
  'general-physician-internal-medicine': [
    'Comprehensive Outpatient OPD Clinical Consultation',
    'Inpatient Hospital Admission & Round-the-Clock Care',
    'Annual Master Executive Health Checkup Packages',
    'Routine Adult Vaccination & Immunization Desk',
    'Continuous Blood Pressure & Holter Monitoring',
    'Doorstep Doctor Visit & Home Care Consultation',
    'Comprehensive Pathology Blood & Urine Screenings',
    'Preventive Lifestyle & Chronic Disease Management'
  ],
  'diabetes-endocrinology': [
    'Fasting, Post-Prandial & HbA1c Glycemic Testing',
    'Continuous Glucose Monitoring (CGM) Sensor Setup',
    'Comprehensive Diabetic Foot & Neuropathy Screening',
    'Thyroid Ultrasound & Fine Needle Aspiration Biopsy (FNAC)',
    'Hormonal Assay Panel (TSH, T3, T4, Cortisol, Insulin)',
    'Customized Diabetic Clinical Diet & Lifestyle Plan',
    'Diabetic Nephropathy & Kidney Screenings',
    'Gestational Diabetes Clinical Monitoring Clinic'
  ],
  'cardiology': [
    'High-Definition 12-Lead Digital ECG Analysis',
    '2D Echocardiography with Color Doppler Imaging',
    'Treadmill Stress Testing (TMT / Exercise ECG)',
    '24-Hour Ambulatory Holter Heart Monitoring',
    'Preventive Cardiac Risk & Lipid Screening',
    'Cardiovascular Drug Titration & OPD Care',
    'Pre-Operative Cardiac Fitness Evaluation',
    'Pacemaker & Post-Angioplasty Follow-up Care'
  ],
  'chest-medicine': [
    'Digital Spirometry & Pulmonary Function Test (PFT)',
    'High-Resolution Digital Chest X-Ray Imaging',
    'Nebulization & Inhalation Bronchodilator Therapy',
    'Comprehensive Respiratory Allergy Screening',
    'Overnight Sleep Apnea & Polysomnography Setup',
    'Post-COVID Lung Capacity Assessment',
    'Smoking Cessation & Pulmonary Rehabilitation',
    'Oxygen Therapy & Arterial Blood Gas (ABG) Guidance'
  ],
  'neurology': [
    'Detailed Neurological Clinical & Reflex Examinations',
    'Nerve Conduction Velocity (NCV) & EMG Diagnostics',
    'Electroencephalogram (EEG) Brain Wave Analysis',
    'Coordination for High-Field Brain CT & MRI Scans',
    'Post-Stroke Physical & Cognitive Rehabilitation',
    'Migraine Prevention Protocol & Trigger Evaluation',
    'Parkinson’s Disease Medication Management',
    'Dementia & Cognitive Memory Screening'
  ],
  'rheumatology': [
    'Comprehensive Autoantibody Blood Panel (ANA, RF, Anti-CCP)',
    'ESR & C-Reactive Protein (CRP) Inflammatory Markers',
    'Joint Fluid Aspiration & Microscopic Analysis',
    'Disease-Modifying Anti-Rheumatic Drug (DMARD) Therapy',
    'Biologic Infusion Protocol Guidance',
    'Uric Acid Crystal Blood Screening for Gout',
    'DEXA Bone Mineral Density Scan Coordination',
    'Customized Joint Preservation Physiotherapy'
  ],
  'obstetrics-gynaecology': [
    'Comprehensive Antenatal & High-Risk Pregnancy Care',
    'Pelvic, Transvaginal & Obstetric Ultrasound Imaging',
    'Liquid-Based Pap Smear & HPV Screening Desk',
    'PCOS & PCOD Clinical Management Clinic',
    'Infertility Ovulation Monitoring & Hormonal Testing',
    'Menopause Hormone & Bone Health Management',
    'Contraceptive Counseling & Family Planning',
    'Adolescent Gynaecological Wellness Consultations'
  ],
  'pediatrics': [
    'Childhood Immunization & Vaccine Administration',
    'Developmental Milestone & Physical Growth Tracking',
    'Paediatric OPD Consultations for Acute Illnesses',
    'Childhood Asthma Nebulization & Allergy Screening',
    'Paediatric Clinical Nutrition & Weight Guidance',
    'Neonatal & Infant Wellness Screening',
    'School Medical Physical Examinations',
    'Doorstep Paediatric Doctor Consultation'
  ],
  'neurosurgery': [
    'Neurosurgical Opinion for Spine & Brain Lesions',
    'Pre-Operative MRI & CT Scan Diagnostic Review',
    'Conservative Cervical & Lumbar Disc Management',
    'Post-Operative Neurosurgical Rehabilitation',
    'Nerve Compression & Sciatica Alignment Protocol',
    'Head Trauma Concussion Assessment',
    'Spine Decompression Therapy Guidance',
    'Second Opinion for Complex Brain & Spine Cases'
  ],
  'orthopaedics': [
    'Digital Orthopaedic Bone & Joint X-Ray Diagnostics',
    'Joint Replacement (Knee & Hip) Surgical Consultation',
    'Trauma & Closed Fracture Reduction Management',
    'DEXA Scan Coordination for Osteoporosis',
    'Intra-Articular Joint Injection Therapy',
    'Customized Orthopaedic Physiotherapy & Rehab',
    'Sports Injury Arthroscopy Evaluation',
    'Spine Spondylosis Alignment & Posture Guidance'
  ],
  'general-surgery': [
    'Minimally Invasive Laparoscopic Surgical Opinion',
    'Day-Care Minor Surgery & Wound Management',
    'Hernia Repair & Gallbladder Stone Consultations',
    'Piles, Fissure & Fistula Laser Evaluation',
    'Superficial Cyst & Lipoma Surgical Removal',
    'Diabetic Foot Ulcer Debridement & Dressings',
    'Pre-Operative Anesthetic & Surgical Clearance',
    'Post-Operative Surgical Wound Rehabilitation'
  ],
  'plastic-cosmetic-surgery': [
    'Micro-Suture Post-Trauma Scar Revision',
    'Burn Contracture Release & Skin Grafting Consultation',
    'Reconstructive Flap & Microsurgery Planning',
    'Facial Scar & Aesthetic Procedure Evaluation',
    'Skin Lesion & Cyst Excision Biopsy',
    'Post-Bariatric Body Reshaping Consultations',
    'Hand Injury Tendon & Nerve Repair Guidance',
    'Cosmetic Skin Texture Improvement Protocol'
  ],
  'urology': [
    'Kidney & Bladder Ultrasound Imaging Review',
    'Urinary Microscopic Analysis & Culture Testing',
    'Prostate Specific Antigen (PSA) Blood Screening',
    'Non-Invasive Kidney Stone Medical Dissolution Care',
    'Stricture Urethra & Voiding Flow Evaluation',
    'Male Fertility Semen Analysis & Hormonal Panel',
    'Urological Cancer Diagnostic Workup',
    'Catheter Care & Incontinence Guidance'
  ],
  'psychiatry': [
    'Detailed Clinical Psychiatric Diagnostic Evaluation',
    'Evidence-Based Pharmacotherapy & Medication Review',
    'Depression & Anxiety Rating Scale Assessments',
    'Insomnia & Sleep Architecture Optimization',
    'Bipolar Disorder Mood Stabilization Plans',
    'Stress & Panic Attack De-escalation Protocol',
    'Confidential Adult Mental Health Consultations',
    'Holistic Lifestyle & Neuro-Psychiatric Guidance'
  ],
  'clinical-psychology': [
    'Individual Psychotherapy & Counseling Sessions',
    'Structured Cognitive Behavioral Therapy (CBT)',
    'Psychometric Personality & IQ Assessments',
    'Workplace Burnout & Stress Reduction Therapy',
    'Marital & Family Relationship Counseling',
    'Grief & Post-Trauma Psychological Recovery',
    'Adolescent Behavioral & Emotional Therapy',
    'Mindfulness & Relaxation Technique Training'
  ],
  'dental-surgery': [
    'Comprehensive Dental & Gum Clinical Examinations',
    'Painless Single-Sitting Root Canal Treatment (RCT)',
    'Ultrasonic Dental Scaling & Stain Polishing',
    'Digital Intra-Oral Dental X-Ray Imaging',
    'Surgical Extraction of Impacted Wisdom Teeth',
    'Zirconia & Ceramic Dental Crown & Bridge Fitting',
    'Teeth Whitening & Smile Enhancement Therapy',
    'Pediatric Dental Cavity Prevention & Sealants'
  ],
  'physiotherapy': [
    'In-Clinic Electrotherapy (IFT, TENS, Ultrasound)',
    'Manual Joint Mobilization & Muscle Release',
    'Doorstep Home Physiotherapy Service for Seniors',
    'Post-Operative Joint Replacement Rehabilitation',
    'Spine Back & Neck Pain Relief Protocol',
    'Sports Injury ACL & Rotator Cuff Rehabilitation',
    'Stroke & Paralysis Neurological Physical Therapy',
    'Ergonomic Workstation & Posture Correction'
  ],
  'diet-nutrition': [
    'Body Composition Analysis (BCA) Screening',
    'Customized Clinical Diet Charting for Diabetes',
    'Scientific Weight Loss & Anti-Obesity Meal Plans',
    'Renal & Cardiac Restricted Nutrient Counseling',
    'PCOS & Hormonal Imbalance Nutritional Therapy',
    'Pediatric Growth & Deficiency Meal Planning',
    'Gastrointestinal Digestive & Low-FODMAP Diets',
    'Sports Nutrition & Lean Muscle Meal Guidance'
  ],
  'oncology': [
    'Clinical Oncology Diagnostic Consultation',
    'Comprehensive Cancer Screening Blood Panels',
    'Tumor Marker Analysis (CEA, CA-125, PSA, AFP)',
    'Chemotherapy & Targeted Immunotherapy Planning',
    'Second Opinion Consultation for Malignancies',
    'Supportive Palliative Care & Pain Management',
    'Pre-Treatment Diagnostic Biopsy Workup',
    'Oncology Nutrition & Lifestyle Counseling'
  ],
  'oncosurgery': [
    'Surgical Oncology Consultation & Evaluation',
    'Fine Needle Aspiration Biopsy (FNAC) Coordination',
    'Solid Organ Tumor Surgical Excision Planning',
    'Histopathological Tissue Biopsy Diagnostic Review',
    'Pre-Operative Surgical Fitness Clearance',
    'Post-Operative Surgical Wound Care',
    'Reconstructive Surgery Coordination',
    'Multidisciplinary Tumor Board Review'
  ],
  'sexual-health-clinic': [
    'Strictly Confidential Sexual Health Consultation',
    'Hormonal Assay Panel (Testosterone, Prolactin, LH)',
    'Erectile Dysfunction Clinical Medical Care',
    'Sexually Transmitted Infection (STI) Blood Testing',
    'Premature Ejaculation Therapy & Counseling',
    'Female Reproductive & Sexual Health Guidance',
    'Pre-Marital Medical Fitness Assessment',
    'Empathic Psychological & Physical Wellness'
  ]
};

// Tailored 4-FAQ items per department
const EXTENDED_FAQS: Record<string, { question: string; answer: string }[]> = {
  'general-physician-internal-medicine': [
    { question: 'When should I see a General Physician at MANYACARE HealthCity?', answer: 'You should consult our senior physician for persistent fever, unexplained fatigue, respiratory infections, blood pressure fluctuations, digestive distress, or routine preventive health checkups.' },
    { question: 'Do you offer home doctor visits in Greater Noida West?', answer: 'Yes, MANYACARE HealthCity provides doorstep doctor consultations and home blood sample collection for senior citizens and bedridden patients across Noida Extension.' },
    { question: 'What basic diagnostic tests are conducted during a routine consultation?', answer: 'Depending on clinical evaluation, tests may include Blood Pressure check, Fasting Glucose, Complete Blood Count (CBC), Lipid Profile, Liver & Kidney Function Tests.' },
    { question: 'How are chronic conditions like hypertension and diabetes managed?', answer: 'Our physicians provide personalized long-term treatment plans combining evidence-based medication, routine monitoring, and customized lifestyle guidance.' }
  ],
  'diabetes-endocrinology': [
    { question: 'What tests are essential for monitoring Type 1 & Type 2 Diabetes?', answer: 'Essential monitoring includes Fasting & Post-Prandial Blood Glucose, HbA1c (every 3 months), Kidney Function Test (Serum Creatinine/Urine Microalbumin), and Lipid Profile.' },
    { question: 'How does your endocrinology team treat thyroid gland disorders?', answer: 'We evaluate TSH, Free T3, and Free T4 blood levels alongside thyroid ultrasound to customize precise hormonal replacement or antithyroid therapy.' },
    { question: 'What continuous glucose monitoring (CGM) options do you offer?', answer: 'We provide advanced CGM sensor placement for 14-day continuous glucose profiling to eliminate sudden spikes and nighttime hypoglycemia.' },
    { question: 'Can I get doorstep blood sample collection for HbA1c screening?', answer: 'Yes, MANYACARE provides free doorstep blood sample collection across Gaur City, Techzone 4, and Greater Noida West.' }
  ],
  'cardiology': [
    { question: 'How often should adults undergo a preventive cardiac evaluation?', answer: 'Adults above age 35 or those with family history of heart disease, high BP, or diabetes should undergo an annual cardiac evaluation.' },
    { question: 'What non-invasive cardiac tests are available at your clinic?', answer: 'We offer 12-Lead Digital ECG, 2D Echocardiography with Color Doppler, Treadmill Stress Testing (TMT), and 24-Hour Ambulatory Holter Monitoring.' },
    { question: 'What symptoms require immediate cardiac evaluation?', answer: 'Chest pain or tightness, breathlessness on minor exertion, unexplained palpitations, dizziness, or swelling in legs require urgent cardiac assessment.' },
    { question: 'Do you provide post-angioplasty and cardiac rehabilitation care?', answer: 'Yes, our cardiologists monitor blood pressure, lipid levels, medication compliance, and rehabilitation protocols for post-procedure cardiac patients.' }
  ],
  'chest-medicine': [
    { question: 'What is a Spirometry Pulmonary Function Test (PFT)?', answer: 'Spirometry is a non-invasive test measuring air volume and speed during inhalation and exhalation to accurately diagnose asthma, COPD, and lung restriction.' },
    { question: 'How do you treat chronic coughing and allergic asthma?', answer: 'Treatment includes lung capacity assessment, digital chest X-rays, customized inhaler therapy, nebulization, and allergen avoidance strategies.' },
    { question: 'What sleep apnea diagnostic services do you provide?', answer: 'We coordinate overnight polysomnography (sleep study) to assess nocturnal oxygen saturation, snoring intensity, and sleep apnea episodes.' },
    { question: 'Are home nebulization and oxygen support available?', answer: 'Yes, MANYACARE provides home respiratory care, oxygen concentrator support, and nursing assistance.' }
  ],
  'neurology': [
    { question: 'When is an urgent neurological evaluation required?', answer: 'Sudden weakness on one side of the body, slurred speech, severe explosive headache, sudden vision loss, or seizures require emergency neurological care.' },
    { question: 'What diagnostic tests are performed for chronic migraines and nerve pain?', answer: 'Evaluations include detailed neurological clinical exams, Nerve Conduction Velocity (NCV), Electromyography (EMG), EEG, and Brain MRI coordination.' },
    { question: 'How is Parkinson’s disease and tremor managed?', answer: 'Management focuses on dopamine replacement therapy, physical rehabilitation, motor coordination exercises, and regular neurological monitoring.' },
    { question: 'Do you provide post-stroke paralysis rehabilitation at home?', answer: 'Yes, our neuro-rehab team offers specialized physical and speech therapy sessions at your home.' }
  ],
  'rheumatology': [
    { question: 'How is Rheumatoid Arthritis distinguished from Osteoarthritis?', answer: 'Rheumatoid Arthritis is an autoimmune inflammatory disease affecting symmetrical small joints; Osteoarthritis is mechanical wear-and-tear of large weight-bearing joints.' },
    { question: 'What blood tests confirm an autoimmune joint disorder?', answer: 'Blood markers include Rheumatoid Factor (RF), Anti-CCP antibodies, ANA panel, ESR, C-Reactive Protein (CRP), and Serum Uric Acid.' },
    { question: 'What are Disease-Modifying Anti-Rheumatic Drugs (DMARDs)?', answer: 'DMARDs are targeted medications that suppress autoimmune joint destruction, preventing permanent joint deformities when started early.' },
    { question: 'Can gout and uric acid joint pain be permanently managed?', answer: 'Yes, combining xanthine oxidase inhibitor medications with purine-restricted diet planning effectively controls gout flares.' }
  ],
  'obstetrics-gynaecology': [
    { question: 'What high-risk antenatal pregnancy care is available?', answer: 'We offer specialized monitoring for maternal hypertension, gestational diabetes, twin pregnancy, thyroid dysfunction, and routine fetal ultrasound scans.' },
    { question: 'How frequently should women undergo Pap smear cervical screening?', answer: 'Women aged 21 to 65 are recommended to undergo Pap smear screening every 3 years, or combined HPV co-testing every 5 years.' },
    { question: 'How is Polycystic Ovarian Syndrome (PCOS) managed?', answer: 'PCOS care involves hormonal regulation, ovulation monitoring, metabolic insulin sensitization, and personalized clinical diet plans.' },
    { question: 'Are female gynaecologists available for private consultation?', answer: 'Yes, senior female obstetricians and gynaecologists are available for OPD consultations and pre-conception counseling.' }
  ],
  'pediatrics': [
    { question: 'What vaccination schedule is followed at MANYACARE Pediatrics?', answer: 'We strictly follow the Indian Academy of Pediatrics (IAP) and WHO recommended immunization schedule from birth through adolescence.' },
    { question: 'How are childhood fevers and respiratory infections treated?', answer: 'Our pediatricians evaluate clinical cause, provide weight-appropriate antipyretic dosage, nebulization, and avoid unnecessary antibiotics.' },
    { question: 'What growth and developmental screenings are performed?', answer: 'Screenings track height/weight percentiles, motor skills, speech development, vision/hearing, and nutritional adequacy.' },
    { question: 'Do you offer home doctor visits for sick children?', answer: 'Yes, doorstep pediatric visits are available for non-emergency acute pediatric illness evaluations.' }
  ],
  'neurosurgery': [
    { question: 'Does back pain or disc herniation always require surgery?', answer: 'No. Over 90% of disc herniation and sciatica cases resolve with conservative medical therapy, targeted nerve injections, and physiotherapy.' },
    { question: 'When is a neurosurgical consultation recommended for spine pain?', answer: 'Consultation is advised if experiencing progressive leg numbness, foot drop, loss of bowel/bladder control, or unmanageable nerve pain.' },
    { question: 'What diagnostic imaging is reviewed for spinal compression?', answer: 'We evaluate High-Field MRI scans, CT Myelography, and Digital Spine Radiographs to pinpoint nerve root impingement.' },
    { question: 'What is post-operative neurosurgical recovery protocol?', answer: 'Recovery includes structured spinal stabilization, ergonomic posture training, progressive mobilization, and pain control.' }
  ],
  'orthopaedics': [
    { question: 'What advanced non-surgical treatments exist for knee osteoarthritis?', answer: 'Treatments include intra-articular hyaluronic acid injections, PRP therapy, quadriceps strengthening physiotherapy, and weight management.' },
    { question: 'What is a DEXA Scan and when is it recommended?', answer: 'DEXA measures bone mineral density to screen for osteoporosis in postmenopausal women, elderly men, or individuals with frequent fractures.' },
    { question: 'How are acute bone fractures and dislocations treated?', answer: 'We provide immediate digital X-ray diagnosis, plaster cast stabilization, closed reduction, and surgical fixation referral when indicated.' },
    { question: 'Is doorstep physiotherapy available for post-joint replacement patients?', answer: 'Yes, experienced physical therapists conduct structured rehabilitation sessions directly at your residence.' }
  ],
  'general-surgery': [
    { question: 'What are the advantages of Laparoscopic Hernia and Gallstone Surgery?', answer: 'Laparoscopic surgery offers tiny keyhole incisions, minimal post-operative pain, lower infection risk, and rapid return to daily activities.' },
    { question: 'How is acute appendicitis diagnosed and managed?', answer: 'Diagnosis combines clinical rebound tenderness exam, blood leukocytosis check, and abdominal ultrasound followed by prompt surgical removal.' },
    { question: 'What non-surgical and laser options exist for piles and fissures?', answer: 'Early-stage hemorrhoids and fissures are managed with dietary fiber, sitz baths, topical ointments, and minimally invasive laser therapy.' },
    { question: 'What pre-operative safety clearances are conducted?', answer: 'Clearances include Complete Blood Count, Coagulation Profile, ECG, Chest X-Ray, Blood Sugar, and Anesthetic Evaluation.' }
  ],
  'plastic-cosmetic-surgery': [
    { question: 'How does micro-suture scar revision improve post-trauma scars?', answer: 'Micro-suture techniques realign skin tension lines, minimize scar width, and utilize advanced dermal healing agents for optimal aesthetic recovery.' },
    { question: 'What burn contracture reconstructive procedures are available?', answer: 'Reconstruction involves surgical release of tight scar bands, skin flap/graft placement, and custom pressure garment therapy.' },
    { question: 'Are facial cyst and skin lesion removals performed in day-care?', answer: 'Yes, benign lipomas, sebaceous cysts, and moles are excised under local anesthesia with minimal scarring.' },
    { question: 'What pre-procedure consultation is conducted for cosmetic procedures?', answer: 'Surgeons discuss realistic aesthetic outcomes, digital facial mapping, recovery timeline, and post-procedure skin care.' }
  ],
  'urology': [
    { question: 'What non-invasive treatments are available for kidney stones?', answer: 'Small stones are managed with medical expulsive therapy and hydration; larger stones are evaluated for laser lithotripsy (RIRS/URSL).' },
    { question: 'What symptoms indicate Benign Prostatic Hyperplasia (BPH) in older men?', answer: 'Frequent nighttime urination (nocturia), weak urinary stream, hesitancy, and feeling of incomplete bladder emptying.' },
    { question: 'What is Prostate Specific Antigen (PSA) blood testing used for?', answer: 'PSA measures prostate tissue protein to screen for prostate enlargement, inflammation, or early-stage prostate malignancy.' },
    { question: 'How are recurrent Urinary Tract Infections (UTIs) treated?', answer: 'Care includes urine culture sensitivity testing, targeted antibiotic course, bladder retraining, and anatomical ultrasound screening.' }
  ],
  'psychiatry': [
    { question: 'What is the difference between temporary stress and clinical depression?', answer: 'Clinical depression involves persistent low mood, loss of interest (anhedonia), fatigue, and sleep changes lasting over 2 weeks that impair daily function.' },
    { question: 'Are psychiatric consultations strictly confidential?', answer: 'Yes. 100% strict medical confidentiality is enforced for all mental health evaluations, notes, and prescriptions.' },
    { question: 'Are modern anti-anxiety and antidepressant medications safe?', answer: 'Yes. Modern SSRIs and SNRIs are non-addictive, well-tolerated, and prescribed under close clinical supervision.' },
    { question: 'How is severe chronic insomnia evaluated and treated?', answer: 'Care combines sleep hygiene optimization, evaluation for underlying anxiety/depression, and safe short-term sleep regulation.' }
  ],
  'clinical-psychology': [
    { question: 'What is Cognitive Behavioral Therapy (CBT) and how does it work?', answer: 'CBT is a structured, goal-oriented psychotherapy that helps identify negative thought patterns and replaces them with healthy coping mechanisms.' },
    { question: 'How many therapy sessions are typically recommended?', answer: 'Most clients notice significant progress within 6 to 12 weekly sessions, tailored to personal goals.' },
    { question: 'Can clinical psychology help with workplace burnout and relationship stress?', answer: 'Yes. Psychotherapists provide practical boundary setting, communication tools, and emotional regulation techniques.' },
    { question: 'What psychometric tests are conducted by clinical psychologists?', answer: 'We conduct validated IQ assessments, personality profiling, anxiety/depression scales, and neuropsychological batteries.' }
  ],
  'dental-surgery': [
    { question: 'Is single-sitting Root Canal Treatment (RCT) painful?', answer: 'No. Modern local anesthesia and rotary endodontic equipment make root canal therapy comfortable and painless.' },
    { question: 'How frequently should professional dental scaling and cleaning be done?', answer: 'Professional scaling is recommended every 6 months to remove hardened plaque (calculus) and prevent gum disease.' },
    { question: 'When should impacted wisdom teeth be surgically removed?', answer: 'Extraction is advised if wisdom teeth cause recurring gum infections (pericoronitis), adjacent tooth decay, or severe jaw pain.' },
    { question: 'What dental crown materials are available for front and back teeth?', answer: 'We offer high-strength Zirconia and Porcelain-Fused-to-Metal (PFM) crowns customized for natural shade and durability.' }
  ],
  'physiotherapy': [
    { question: 'How does electrotherapy (IFT & TENS) relieve back and joint pain?', answer: 'Interferential Therapy (IFT) and TENS stimulate sensory nerves to block pain signals and accelerate deep tissue healing.' },
    { question: 'Can I receive professional physiotherapy sessions at my home?', answer: 'Yes. Our licensed physical therapists bring portable electrotherapy equipment to your doorstep for home sessions.' },
    { question: 'How long does post-knee replacement physical rehabilitation take?', answer: 'Initial gait training takes 2 to 3 weeks; full muscle strength and range of motion are restored within 6 to 8 weeks.' },
    { question: 'How is frozen shoulder (Adhesive Capsulitis) treated?', answer: 'Treatment combines joint mobilization, capsular stretching exercises, heat therapy, and home exercise compliance.' }
  ],
  'diet-nutrition': [
    { question: 'How does a personalized clinical diet help manage blood sugar?', answer: 'Low Glycemic Index (GI) meal planning prevents sharp post-meal blood glucose spikes and reduces insulin resistance.' },
    { question: 'What is Body Composition Analysis (BCA) testing?', answer: 'BCA measures precise body fat percentage, visceral fat level, muscle mass, skeletal bone mass, and Basal Metabolic Rate (BMR).' },
    { question: 'Do you create specialized renal (kidney) and cardiac diet charts?', answer: 'Yes. Dietitians design sodium, potassium, protein, and fluid-restricted diets tailored to clinical laboratory reports.' },
    { question: 'Can clinical diet planning assist with PCOS weight loss?', answer: 'Yes. Anti-inflammatory, low-refined carb meal plans regulate hormonal fluctuations and support sustainable fat loss.' }
  ],
  'oncology': [
    { question: 'What basic cancer screening tests are recommended for adults?', answer: 'Screenings include Mammography (Breast), Pap Smear (Cervical), Low-Dose CT (Lung for smokers), PSA (Prostate), and Stool Occult Blood.' },
    { question: 'What are blood tumor markers and how are they interpreted?', answer: 'Tumor markers (CEA, CA-125, PSA, AFP) are proteins that provide diagnostic clues alongside imaging and histological biopsies.' },
    { question: 'Can I obtain a second opinion for cancer diagnosis and treatment?', answer: 'Yes. Our senior oncologists review all PET-CT scans, biopsy reports, and treatment plans to provide objective clinical second opinions.' },
    { question: 'What supportive palliative care services do you offer?', answer: 'Palliative care focuses on pain relief, nutritional support, nausea control, and emotional strength for patients and families.' }
  ],
  'oncosurgery': [
    { question: 'What is a surgical tissue biopsy and why is it necessary?', answer: 'A biopsy removes a small tissue sample for microscopic histopathological examination, confirming whether a lesion is benign or malignant.' },
    { question: 'How is pre-operative surgical clearance conducted for tumor excision?', answer: 'Clearance includes comprehensive organ function tests, cardiac clearance, anesthesia evaluation, and nutritional optimization.' },
    { question: 'What is the role of a Multidisciplinary Tumor Board?', answer: 'A Tumor Board brings together surgical, medical, and radiation oncologists to formulate the safest, most effective personalized treatment plan.' },
    { question: 'How is post-operative surgical wound recovery managed?', answer: 'Care includes specialized sterile wound dressings, drain monitoring, pain management, and early mobilization.' }
  ],
  'sexual-health-clinic': [
    { question: 'Is my medical privacy guaranteed during sexual health consultations?', answer: 'Yes. 100% strict medical confidentiality is enforced for all patient records, consultations, and laboratory test results.' },
    { question: 'What clinical evaluations are conducted for erectile dysfunction?', answer: 'Evaluations include blood testosterone/prolactin assays, vascular screening, blood sugar/lipid check, and psychological anxiety assessment.' },
    { question: 'What confidential STI blood and swab screenings are performed?', answer: 'We offer comprehensive STI panels including HIV, Hepatitis B/C, Syphilis (VDRL), Chlamydia, and Gonorrhea.' },
    { question: 'Do you offer pre-marital reproductive wellness consultations?', answer: 'Yes. Pre-marital health evaluations assess reproductive health, blood compatibility, and hormonal balance in a comfortable setting.' }
  ]
};

export default async function DepartmentDetailPage({ params }: Props) {
  const { slug } = await params;
  const department = DEPARTMENTS.find((d) => d.slug === slug);

  if (!department) {
    notFound();
  }

  const relatedDoctors = DOCTORS.filter((d) => d.departmentSlug === department.slug);
  const dslrImageUrl = DEPARTMENT_DSLR_IMAGES[department.slug] || department.imageUrl;
  const imageHeadingAlt = `${department.name} - Realistic DSLR Clinical Camera View | MANYACARE HealthCity`;

  const conditionsList = EXTENDED_CONDITIONS[department.slug] || department.conditionsTreated;
  const servicesList = EXTENDED_SERVICES[department.slug] || department.servicesOffered;
  const faqsList = EXTENDED_FAQS[department.slug] || (department.faqs.length > 0 ? department.faqs : [
    { question: `What conditions are treated in ${department.name}?`, answer: department.shortDescription },
    { question: `How do I book a doctor consultation for ${department.name}?`, answer: `You can call our clinical helpline +91-9953239561 or fill the online booking form.` },
    { question: `Are home healthcare visits available for ${department.name}?`, answer: `Yes, MANYACARE provides home doctor consultations and sample collection across Noida Extension.` },
    { question: `What diagnostic lab tests are available for ${department.name}?`, answer: `Our pathology laboratory and radiology hub offer full diagnostic screenings tailored to ${department.name}.` }
  ]);

  // Silo structure links to related clinical departments
  const otherDepartments = DEPARTMENTS.filter((d) => d.slug !== department.slug).slice(0, 6);

  const deptSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalSpecialty',
    '@id': `${BASE_URL}/departments/${department.slug}/#specialty`,
    name: department.name,
    description: department.fullDescription,
    url: `${BASE_URL}/departments/${department.slug}`,
    availableService: servicesList.map((s) => ({
      '@type': 'MedicalProcedure',
      name: s,
    })),
  };

  return (
    <div className="pb-16 space-y-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(deptSchema) }}
      />
      {/* 1. PREMIUM HERO SECTION */}
      <section className="relative bg-gradient-to-b from-[#EAF5FF]/80 via-[#F7FAFC] to-white pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb Link */}
          <div className="mb-6">
            <Link
              href="/departments"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-[#0B3C5D] hover:text-[#2196F3] transition-colors bg-white px-3.5 py-1.5 rounded-full border border-[#D7E0E8] shadow-xs"
            >
              <ChevronLeft className="w-4 h-4 text-[#2196F3]" />
              <span>Back to All Clinical Departments</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Hero Content Area */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#EAF5FF] border border-[#2196F3]/40 text-[#0B3C5D] text-xs sm:text-sm font-bold">
                <ShieldCheck className="w-4 h-4 text-[#2196F3]" />
                <span>Multispecialty Clinical Department</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-[#0B3C5D] tracking-tight leading-tight font-display">
                {department.name}
                <span className="block text-[#2196F3] font-bold text-2xl sm:text-3xl lg:text-4xl mt-2">
                  Advanced Clinical Diagnostics & Specialized Care
                </span>
              </h1>

              <p className="text-base sm:text-lg text-[#64748B] font-normal leading-relaxed max-w-2xl">
                {department.fullDescription}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="tel:+919953239561"
                  className="manyacare-btn-primary py-3.5 px-6 text-sm sm:text-base shadow-md"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Book Consultation: +91-9953239561</span>
                </a>
                <Link
                  href="/specialists"
                  className="manyacare-btn-secondary py-3.5 px-6 text-sm sm:text-base"
                >
                  <UserCheck className="w-5 h-5 text-[#2196F3]" />
                  <span>Consult Specialist</span>
                </Link>
              </div>

              {/* Key Trust Highlights */}
              <div className="grid grid-cols-3 gap-4 pt-4 text-left">
                <div className="bg-white p-3.5 sm:p-4 rounded-2xl border border-[#D7E0E8] shadow-xs">
                  <Stethoscope className="w-5 h-5 sm:w-6 sm:h-6 text-[#2196F3] mb-1.5" />
                  <p className="text-xs sm:text-sm font-bold text-[#0B3C5D]">Senior Physicians</p>
                  <p className="text-[11px] sm:text-xs text-slate-500">Evidence-Based</p>
                </div>
                <div className="bg-white p-3.5 sm:p-4 rounded-2xl border border-[#D7E0E8] shadow-xs">
                  <FlaskConical className="w-5 h-5 sm:w-6 sm:h-6 text-[#2196F3] mb-1.5" />
                  <p className="text-xs sm:text-sm font-bold text-[#0B3C5D]">Lab Diagnostics</p>
                  <p className="text-[11px] sm:text-xs text-slate-500">Pathology & Imaging</p>
                </div>
                <div className="bg-white p-3.5 sm:p-4 rounded-2xl border border-[#D7E0E8] shadow-xs">
                  <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-[#2196F3] mb-1.5" />
                  <p className="text-xs sm:text-sm font-bold text-[#0B3C5D]">OPD & Home Visits</p>
                  <p className="text-[11px] sm:text-xs text-slate-500">Doorstep Care</p>
                </div>
              </div>
            </div>

            {/* Right DSLR Visual Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none rounded-3xl overflow-hidden border-2 border-[#D7E0E8] shadow-2xl bg-white">
                <img
                  src={dslrImageUrl}
                  alt={imageHeadingAlt}
                  title={imageHeadingAlt}
                  className="w-full h-[360px] sm:h-[440px] object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B3C5D]/90 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                  <div className="bg-white/95 backdrop-blur-xs text-[#0B3C5D] p-4.5 rounded-2xl border border-[#D7E0E8] shadow-lg space-y-1">
                    <p className="text-sm font-bold flex items-center gap-2 text-[#0B3C5D]">
                      <CheckCircle2 className="w-5 h-5 text-[#16A34A]" />
                      Realistic DSLR Clinical View — {department.name}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-600">
                      Delivering clinical precision, state-of-the-art diagnostic technology, and compassionate medical care.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Curved Bottom Divider */}
        <HeroCurveDivider fillColor="#F7FAFC" />
      </section>

      {/* 2. MAIN CONTENT & SIDEBAR GRID */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Main Content Area (8 Cols) */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Overview Card */}
            <div className="bg-white border border-[#D7E0E8] rounded-3xl p-6 sm:p-8 shadow-xs space-y-4">
              <div className="flex items-center gap-3 border-b border-[#D7E0E8] pb-4">
                <div className="w-10 h-10 rounded-2xl bg-[#EAF5FF] text-[#2196F3] flex items-center justify-center font-bold">
                  <Activity className="w-5 h-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#0B3C5D]">Clinical Overview & Scope</h2>
              </div>
              <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
                {department.fullDescription}
              </p>
              <div className="bg-[#EAF5FF]/60 border border-[#2196F3]/20 rounded-2xl p-4 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#2196F3] shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-[#0B3C5D] leading-snug">
                  <strong>Patient Care Assurance:</strong> All consultations, diagnostic lab screenings, and clinical therapies in {department.name} follow strict NABH-oriented quality and safety protocols.
                </p>
              </div>
            </div>

            {/* Premium Conditions Treated Card (Expanded Bullet Points) */}
            <div className="bg-white border border-[#D7E0E8] rounded-3xl p-6 sm:p-8 shadow-xs space-y-6">
              <div className="flex items-center justify-between border-b border-[#D7E0E8] pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#E6F4EA] text-[#16A34A] flex items-center justify-center font-bold">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0B3C5D]">Conditions Commonly Managed</h3>
                    <p className="text-xs text-slate-500">Comprehensive clinical care & therapeutic management</p>
                  </div>
                </div>
                <span className="text-xs font-bold text-[#16A34A] bg-[#E6F4EA] px-3 py-1 rounded-full">
                  {conditionsList.length} Clinical Domains
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {conditionsList.map((cond, i) => (
                  <div
                    key={i}
                    className="p-3.5 rounded-2xl bg-[#F7FAFC] border border-[#D7E0E8] flex items-start gap-3 hover:border-[#16A34A] hover:bg-white transition-all duration-200 group"
                  >
                    <div className="w-6 h-6 rounded-xl bg-[#E6F4EA] text-[#16A34A] flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#16A34A] group-hover:text-white transition-colors">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-[#0B3C5D] leading-snug">
                      {cond}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Premium Services Offered Card (Expanded Bullet Points) */}
            <div className="bg-white border border-[#D7E0E8] rounded-3xl p-6 sm:p-8 shadow-xs space-y-6">
              <div className="flex items-center justify-between border-b border-[#D7E0E8] pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#EAF5FF] text-[#2196F3] flex items-center justify-center font-bold">
                    <Stethoscope className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0B3C5D]">Services & Clinical Procedures</h3>
                    <p className="text-xs text-slate-500">Advanced diagnostic testing & specialized clinical procedures</p>
                  </div>
                </div>
                <span className="text-xs font-bold text-[#2196F3] bg-[#EAF5FF] px-3 py-1 rounded-full">
                  {servicesList.length} Specialized Services
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {servicesList.map((serv, i) => (
                  <div
                    key={i}
                    className="p-3.5 rounded-2xl bg-[#F7FAFC] border border-[#D7E0E8] flex items-start gap-3 hover:border-[#2196F3] hover:bg-white transition-all duration-200 group"
                  >
                    <div className="w-6 h-6 rounded-xl bg-[#EAF5FF] text-[#2196F3] flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#2196F3] group-hover:text-white transition-colors">
                      <ChevronRight className="w-4 h-4" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-[#0B3C5D] leading-snug">
                      {serv}
                    </span>
                  </div>
                ))}
              </div>
            </div>           
          </div>

          {/* Right Sidebar Area (4 Cols) */}
          <div className="lg:col-span-4 space-y-6 sticky top-24">
            
            {/* 1. Interactive Book Appointment Form Component */}
            <DepartmentBookingForm departmentName={department.name} />

            {/* 2. SEO Silo Structure & Internal Links Widget (Replaces Why Choose Manyacare) */}
            <div className="bg-white border border-[#D7E0E8] rounded-3xl p-6 shadow-xs space-y-5">
              <div className="border-b border-[#D7E0E8] pb-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <LinkIcon className="w-4 h-4 text-[#2196F3]" />
                  <h3 className="text-base font-bold text-[#0B3C5D]">Related Services & Departments</h3>
                </div>
                <span className="text-[10px] font-bold uppercase text-[#2196F3] bg-[#EAF5FF] px-2 py-0.5 rounded">
                  Silo Directory
                </span>
              </div>

              <div className="space-y-3 text-xs">
                {/* Primary Hub Links */}
                <div className="space-y-1.5">
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    Core Healthcare Services
                  </p>
                  <Link
                    href="/diagnostics"
                    className="flex items-center justify-between p-2.5 rounded-xl bg-[#F7FAFC] hover:bg-[#EAF5FF] text-[#0B3C5D] font-semibold hover:text-[#2196F3] border border-[#D7E0E8] transition-all group"
                  >
                    <span className="flex items-center gap-2">
                      <FlaskConical className="w-4 h-4 text-[#2196F3]" />
                      <span>Pathology Lab Diagnostics</span>
                    </span>
                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#2196F3]" />
                  </Link>

                  <Link
                    href="/radiology"
                    className="flex items-center justify-between p-2.5 rounded-xl bg-[#F7FAFC] hover:bg-[#EAF5FF] text-[#0B3C5D] font-semibold hover:text-[#2196F3] border border-[#D7E0E8] transition-all group"
                  >
                    <span className="flex items-center gap-2">
                      <Activity className="w-4 h-4 text-[#2196F3]" />
                      <span>Digital X-Ray & Radiology Hub</span>
                    </span>
                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#2196F3]" />
                  </Link>

                  <Link
                    href="/health-packages"
                    className="flex items-center justify-between p-2.5 rounded-xl bg-[#F7FAFC] hover:bg-[#EAF5FF] text-[#0B3C5D] font-semibold hover:text-[#2196F3] border border-[#D7E0E8] transition-all group"
                  >
                    <span className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-[#2196F3]" />
                      <span>Preventive Health Packages</span>
                    </span>
                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#2196F3]" />
                  </Link>

                  <Link
                    href="/home-healthcare"
                    className="flex items-center justify-between p-2.5 rounded-xl bg-[#F7FAFC] hover:bg-[#EAF5FF] text-[#0B3C5D] font-semibold hover:text-[#2196F3] border border-[#D7E0E8] transition-all group"
                  >
                    <span className="flex items-center gap-2">
                      <Building className="w-4 h-4 text-[#2196F3]" />
                      <span>Doorstep Home Healthcare Desk</span>
                    </span>
                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#2196F3]" />
                  </Link>

                  <Link
                    href="/specialists"
                    className="flex items-center justify-between p-2.5 rounded-xl bg-[#F7FAFC] hover:bg-[#EAF5FF] text-[#0B3C5D] font-semibold hover:text-[#2196F3] border border-[#D7E0E8] transition-all group"
                  >
                    <span className="flex items-center gap-2">
                      <UserCheck className="w-4 h-4 text-[#2196F3]" />
                      <span>Medical Specialists Directory</span>
                    </span>
                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#2196F3]" />
                  </Link>

                  <Link
                    href="/locations"
                    className="flex items-center justify-between p-2.5 rounded-xl bg-[#F7FAFC] hover:bg-[#EAF5FF] text-[#0B3C5D] font-semibold hover:text-[#2196F3] border border-[#D7E0E8] transition-all group"
                  >
                    <span className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-[#2196F3]" />
                      <span>Noida Extension Clinic Locations</span>
                    </span>
                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#2196F3]" />
                  </Link>
                </div>

                {/* Related Department Links */}
                <div className="pt-2 space-y-1.5">
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    Explore Other Specialties
                  </p>
                  <div className="grid grid-cols-1 gap-1.5">
                    {otherDepartments.map((dept) => (
                      <Link
                        key={dept.id}
                        href={`/departments/${dept.slug}`}
                        className="p-2 rounded-lg text-slate-700 hover:text-[#2196F3] hover:bg-[#EAF5FF]/60 flex items-center justify-between text-xs transition-colors"
                      >
                        <span className="truncate">• {dept.name}</span>
                        <ChevronRight className="w-3.5 h-3.5 text-slate-300 shrink-0" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* 3. CENTERED ACCORDION FAQ SECTION */}
        <div className="pt-8 border-t border-[#D7E0E8] max-w-4xl mx-auto">
          <FaqAccordion
            badgeText={`${department.name} Helpdesk`}
            title="Frequently Asked Questions"
            subtitle={`Key insights and medical answers for ${department.name} consultations and procedures.`}
            faqs={faqsList.slice(0, 4)}
          />
        </div>

      </div>
    </div>
  );
}
