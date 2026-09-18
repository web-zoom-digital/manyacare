export interface Department {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  imageUrl: string;
  conditionsTreated: string[];
  servicesOffered: string[];
  faqs: { question: string; answer: string }[];
}

export const DEPARTMENTS: Department[] = [
  {
    id: 'dept-1',
    slug: 'general-physician-internal-medicine',
    name: 'General Physician & Internal Medicine',
    shortDescription: 'Comprehensive evaluation, diagnosis, and treatment for acute illnesses, chronic diseases, and preventive healthcare.',
    fullDescription: 'Our Internal Medicine department provides holistic medical care for adults. From routine health assessments and acute infections to complex multi-system disorders, our senior physicians utilize evidence-based protocols to deliver personalized medical care.',
    iconName: 'Stethoscope',
    imageUrl: '/images/general-physician-internal-medicine.jpg',
    conditionsTreated: ['Hypertension & High Blood Pressure', 'Unexplained Fever & Infections', 'Metabolic Disorders', 'Respiratory Infections', 'Fatigue & Autoimmune Conditions'],
    servicesOffered: ['Outpatient Clinical Evaluation', 'Inpatient Medical Care', 'Annual Health Screenings', 'Immunization & Vaccination', 'Chronic Disease Management'],
    faqs: [
      { question: 'When should I see a General Physician?', answer: 'You should consult a physician for persistent fever, unexplained fatigue, digestive distress, blood pressure monitoring, or routine preventive check-ups.' },
      { question: 'Do you offer home visits for senior patients?', answer: 'Yes, MANYACARE HealthCity offers home doctor consultations upon clinical evaluation.' }
    ]
  },
  {
    id: 'dept-2',
    slug: 'diabetes-endocrinology',
    name: 'Diabetes & Endocrinology',
    shortDescription: 'Advanced clinical care for Type 1 & Type 2 diabetes, thyroid disorders, hormonal imbalances, and metabolic health.',
    fullDescription: 'Dedicated endocrine care focused on glycemic control, continuous glucose monitoring, thyroid gland dysfunctions, and hormonal assessment.',
    iconName: 'Activity',
    imageUrl: '/images/diabetes-endocrinology.jpg',
    conditionsTreated: ['Type 1 & Type 2 Diabetes', 'Hypothyroidism & Hyperthyroidism', 'Polycystic Ovarian Syndrome (PCOS)', 'Adrenal & Pituitary Disorders', 'Obesity & Metabolic Syndrome'],
    servicesOffered: ['HbA1c & Blood Glucose Testing', 'Continuous Glucose Monitoring (CGM)', 'Diabetic Foot Screening', 'Diabetic Neuropathy Evaluation', 'Customized Clinical Dietetics'],
    faqs: [
      { question: 'What tests are recommended for diabetes monitoring?', answer: 'Fasting Blood Sugar, Post-Prandial Sugar, HbA1c every 3 months, Kidney Function Test, and Lipid Profile.' }
    ]
  },
  {
    id: 'dept-3',
    slug: 'cardiology',
    name: 'Cardiology & Heart Care',
    shortDescription: 'Comprehensive non-invasive cardiac evaluation, preventive cardiology, ECG, Echocardiography, and heart disease management.',
    fullDescription: 'Our Cardiology department focuses on early identification and proactive management of coronary artery disease, heart rhythm abnormalities, and vascular health.',
    iconName: 'HeartPulse',
    imageUrl: '/images/cardiology-heart-care.jpg',
    conditionsTreated: ['Coronary Artery Disease', 'Hypertension', 'Arrhythmia & Palpitations', 'Heart Failure Management', 'High Cholesterol'],
    servicesOffered: ['12-Lead ECG Analysis', '2D Echocardiography', 'Treadmill Stress Test (TMT)', '24-Hour Holter Monitoring', 'Preventive Heart Packages'],
    faqs: [
      { question: 'How often should adults get a cardiac evaluation?', answer: 'Adults over 35 or those with family history of heart disease should undergo an annual cardiac assessment.' }
    ]
  },
  {
    id: 'dept-4',
    slug: 'chest-medicine',
    name: 'Chest Medicine & Pulmonology',
    shortDescription: 'Expert care for asthma, bronchitis, COPD, respiratory allergies, and sleep-related breathing disorders.',
    fullDescription: 'Advanced pulmonary diagnostics and clinical care for chronic coughing, breathlessness, asthma management, and lung function assessments.',
    iconName: 'Wind',
    imageUrl: '/images/chest-medicine-pulmonology.jpg',
    conditionsTreated: ['Bronchial Asthma', 'COPD', 'Pneumonia & Chest Infections', 'Allergic Rhinitis', 'Sleep Apnea'],
    servicesOffered: ['Spirometry & Pulmonary Function Test (PFT)', 'Chest Digital X-Ray', 'Nebulization & Inhalation Therapy', 'Allergy Screening'],
    faqs: [
      { question: 'What is a Spirometry test?', answer: 'A non-invasive test measuring air volume and speed during inhalation and exhalation to assess lung capacity.' }
    ]
  },
  {
    id: 'dept-5',
    slug: 'neurology',
    name: 'Neurology & Brain Care',
    shortDescription: 'Specialized clinical assessment for stroke, chronic migraines, epilepsy, nerve pain, and movement disorders.',
    fullDescription: 'Dedicated neurological diagnostic evaluations and long-term care plans for nervous system illnesses.',
    iconName: 'Brain',
    imageUrl: '/images/neurology-brain-care.jpg',
    conditionsTreated: ['Stroke & TIA', 'Migraine & Tension Headaches', 'Epilepsy & Seizures', 'Parkinson’s Disease', 'Peripheral Neuropathy'],
    servicesOffered: ['Neurological Clinical Exams', 'Nerve Conduction Velocity (NCV)', 'EEG & Brain Imaging Coordination', 'Post-Stroke Rehabilitation'],
    faqs: [
      { question: 'When is a brain MRI or CT recommended?', answer: 'When experiencing persistent severe headaches, sudden numbness, seizures, or unexplained dizziness.' }
    ]
  },
  {
    id: 'dept-6',
    slug: 'rheumatology',
    name: 'Rheumatology & Autoimmune Care',
    shortDescription: 'Diagnosis and targeted therapy for rheumatoid arthritis, lupus, gout, and systemic joint disorders.',
    fullDescription: 'Specialized management of joint inflammation, connective tissue diseases, and immune-mediated bone disorders.',
    iconName: 'Bone',
    imageUrl: '/images/rheumatology-autoimmune-care.jpg',
    conditionsTreated: ['Rheumatoid Arthritis', 'Osteoarthritis', 'Systemic Lupus Erythematosus (SLE)', 'Gout', 'Ankylosing Spondylitis'],
    servicesOffered: ['Autoantibody Blood Panels (ANA, RF, anti-CCP)', 'Joint Fluid Analysis', 'Biologic & Disease-Modifying Drug Therapy'],
    faqs: [
      { question: 'How is Rheumatoid Arthritis diagnosed?', answer: 'Through clinical joint assessment, blood markers (RF, Anti-CCP, ESR, CRP), and digital imaging.' }
    ]
  },
  {
    id: 'dept-7',
    slug: 'obstetrics-gynaecology',
    name: 'Obstetrics & Gynaecology',
    shortDescription: 'Comprehensive women’s health care, antenatal screening, gynaecological consultations, and wellness packages.',
    fullDescription: 'Dedicated to women across all life stages—from adolescent care to pregnancy monitoring, fertility guidance, and menopause wellness.',
    iconName: 'UserPlus',
    imageUrl: '/service/manyacare-obstetrics-gynaecology.jpg',
    conditionsTreated: ['High-Risk Pregnancy', 'PCOS & Menstrual Irregularities', 'Uterine Fibroids & Ovarian Cysts', 'Menopause Symptoms', 'Pelvic Infections'],
    servicesOffered: ['Routine & High-Risk Antenatal Care', 'Pelvic & Obstetric Ultrasound', 'Pap Smear & Cervical Cancer Screening', 'PCOS Management Clinic'],
    faqs: [
      { question: 'How frequently should women get Pap smear tests?', answer: 'Every 3 years starting at age 21, or as advised by your gynaecologist.' }
    ]
  },
  {
    id: 'dept-8',
    slug: 'pediatrics',
    name: 'Paediatrics & Child Health',
    shortDescription: 'Compassionate healthcare for infants, children, and adolescents, including growth tracking and immunization.',
    fullDescription: 'Child-friendly clinical consultations covering childhood infections, developmental milestones, nutrition counseling, and vaccinations.',
    iconName: 'Baby',
    imageUrl: '/service/manyacare-paediatrics-child-health.jpg',
    conditionsTreated: ['Childhood Infections & Fever', 'Asthma & Allergies', 'Nutritional Deficiencies', 'Growth & Developmental Delays', 'Gastrointestinal Issues'],
    servicesOffered: ['Childhood Vaccination Schedule', 'Developmental Screening', 'Paediatric Nutrition Guidance', 'School Health Physicals'],
    faqs: [
      { question: 'Are home doctor visits available for sick children?', answer: 'Yes, depending on clinical severity and pediatric availability.' }
    ]
  },
  {
    id: 'dept-9',
    slug: 'neurosurgery',
    name: 'Neurosurgery & Spine Care',
    shortDescription: 'Surgical evaluation for brain trauma, herniated disc, spinal compression, and nerve root compression.',
    fullDescription: 'Sub-specialized surgical opinion and conservative spinal management for back pain, sciatica, and nerve disorders.',
    iconName: 'Microscope',
    imageUrl: '/service/manyacare-neurosurgery-spine-care.jpg',
    conditionsTreated: ['Herniated Disc & Sciatica', 'Spinal Cord Compression', 'Trigeminal Neuralgia', 'Brain & Spinal Tumors', 'Head Injury Trauma'],
    servicesOffered: ['Neuro-Surgical Consultation', 'Pre-operative & Post-operative Evaluation', 'Spine Rehabilitation Alignment'],
    faqs: [
      { question: 'Does back pain always require surgery?', answer: 'No. Over 90% of back pain cases respond to conservative medical management and specialized physiotherapy.' }
    ]
  },
  {
    id: 'dept-10',
    slug: 'orthopaedics',
    name: 'Orthopaedics & Joint Care',
    shortDescription: 'Advanced treatment for joint pain, fractures, arthritis, sports injuries, and spine rehabilitation.',
    fullDescription: 'Comprehensive care for bones, joints, ligaments, and muscle wellness with advanced imaging support.',
    iconName: 'ShieldAlert',
    imageUrl: '/service/manyacare-orthopaedics-joint-care.jpg',
    conditionsTreated: ['Knee & Hip Osteoarthritis', 'Fractures & Dislocations', 'Ligament & Tendon Tears', 'Cervical & Lumbar Spondylosis'],
    servicesOffered: ['Joint Replacement Consultation', 'Trauma Management', 'Digital X-Ray & DEXA Bone Density Scan', 'Customized Physiotherapy'],
    faqs: [
      { question: 'What is a DEXA Scan used for?', answer: 'DEXA measures bone mineral density to screen for osteoporosis and bone weakness.' }
    ]
  },
  {
    id: 'dept-11',
    slug: 'general-surgery',
    name: 'General & Laparoscopic Surgery',
    shortDescription: 'Surgical management for hernia, gallstones, appendicitis, hemorrhoids, and abdominal conditions.',
    fullDescription: 'Evaluation for minimally invasive laparoscopic procedures and elective surgical care.',
    iconName: 'Scissors',
    imageUrl: '/service/manyacare-general-laparoscopic-surgery.jpg',
    conditionsTreated: ['Inguinal & Abdominal Hernias', 'Gallbladder Stones', 'Acute Appendicitis', 'Piles, Fissures & Fistula', 'Thyroid Nodules'],
    servicesOffered: ['Surgical Consultations', 'Day-Care Procedure Guidance', 'Wound Management'],
    faqs: [
      { question: 'What are the benefits of Laparoscopic Surgery?', answer: 'Smaller incisions, faster recovery time, minimal scarring, and lower post-operative discomfort.' }
    ]
  },
  {
    id: 'dept-12',
    slug: 'plastic-cosmetic-surgery',
    name: 'Plastic & Reconstructive Surgery',
    shortDescription: 'Reconstructive procedures, scar management, burn care, and aesthetic consultations.',
    fullDescription: 'Focused on restoring form and function after trauma or surgery, alongside aesthetic procedures.',
    iconName: 'Sparkles',
    imageUrl: '/service/manyacare-plastic-reconstructive-surgery.jpg',
    conditionsTreated: ['Post-Trauma Scarring', 'Burn Contractures', 'Cleft Lip & Palate', 'Skin Tumors & Lesions'],
    servicesOffered: ['Scar Revision Surgery', 'Reconstructive Microsurgery', 'Cosmetic Evaluation'],
    faqs: [
      { question: 'Are scar revision procedures safe?', answer: 'Yes, performed by certified plastic surgeons using advanced micro-suture techniques.' }
    ]
  },
  {
    id: 'dept-13',
    slug: 'urology',
    name: 'Urology & Kidney Care',
    shortDescription: 'Treatment for kidney stones, urinary infections, prostate enlargement, and urinary incontinence.',
    fullDescription: 'Clinical urological consultations and non-invasive urinary tract diagnostics.',
    iconName: 'Activity',
    imageUrl: '/service/manyacare-urology-kidney-care.jpg',
    conditionsTreated: ['Kidney & Ureteral Stones', 'Benign Prostatic Hyperplasia (BPH)', 'Urinary Tract Infections (UTI)', 'Overactive Bladder'],
    servicesOffered: ['Urinary Diagnostics & Culture', 'Kidney Ultrasound', 'Prostate Specific Antigen (PSA) Screening'],
    faqs: [
      { question: 'What symptoms indicate kidney stones?', answer: 'Severe flank pain radiating to the lower abdomen, painful urination, and blood in urine.' }
    ]
  },
  {
    id: 'dept-14',
    slug: 'psychiatry',
    name: 'Psychiatry & Behavioral Health',
    shortDescription: 'Medical management of clinical depression, anxiety disorders, bipolar condition, and sleep disturbances.',
    fullDescription: 'Empathetic psychiatric assessments, pharmacological therapies, and holistic mental wellness strategies.',
    iconName: 'Smile',
    imageUrl: '/service/manyacare-psychiatry-behavioral-health.jpg',
    conditionsTreated: ['Major Depressive Disorder', 'Generalized Anxiety Disorder', 'Panic Attacks', 'Insomnia & Sleep Disorders', 'Bipolar Affective Disorder'],
    servicesOffered: ['Psychiatric Evaluation', 'Medication Management', 'Stress & Anxiety Relief Counseling'],
    faqs: [
      { question: 'Are mental health consultations strictly confidential?', answer: 'Yes, all psychiatric evaluations adhere to strict ethical and legal privacy guidelines.' }
    ]
  },
  {
    id: 'dept-15',
    slug: 'clinical-psychology',
    name: 'Clinical Psychology & Psychotherapy',
    shortDescription: 'Psychological counseling, Cognitive Behavioral Therapy (CBT), and emotional wellness support.',
    fullDescription: 'Professional psychological assessments, stress counseling, relationship therapy, and behavioral guidance.',
    iconName: 'Heart',
    imageUrl: '/service/manyacare-clinical-psychology-psychotherapy.jpg',
    conditionsTreated: ['Workplace Stress & Burnout', 'Grief & Trauma', 'Relationship & Marital Issues', 'Low Self-Esteem'],
    servicesOffered: ['Individual Psychotherapy', 'Cognitive Behavioral Therapy (CBT)', 'Psychometric Testing'],
    faqs: [
      { question: 'What is the difference between a Psychiatrist and a Clinical Psychologist?', answer: 'Psychiatrists are medical doctors who prescribe medication; Clinical Psychologists provide psychotherapy and psychometric evaluations.' }
    ]
  },
  {
    id: 'dept-16',
    slug: 'dental-surgery',
    name: 'Dental Surgery & Oral Health',
    shortDescription: 'Comprehensive dental checkups, root canal therapy, teeth whitening, and oral surgeries.',
    fullDescription: 'Preventive, corrective, and cosmetic dentistry provided in a hygienic clinical environment.',
    iconName: 'Smile',
    imageUrl: '/service/manyacare-dental-surgery-oral-health.jpg',
    conditionsTreated: ['Dental Caries & Cavities', 'Periodontal Gum Disease', 'Impacted Wisdom Teeth', 'Teeth Discoloration'],
    servicesOffered: ['Dental Scaling & Polishing', 'Root Canal Treatment (RCT)', 'Dental Crowns & Bridges', 'Digital Dental X-Ray'],
    faqs: [
      { question: 'How often should I get dental cleaning done?', answer: 'Bi-annual professional cleaning helps prevent tartar accumulation and gum inflammation.' }
    ]
  },
  {
    id: 'dept-17',
    slug: 'physiotherapy',
    name: 'Physiotherapy & Rehabilitation',
    shortDescription: 'Post-surgery recovery, stroke rehab, spine pain relief, and sports injury rehabilitation.',
    fullDescription: 'Personalized physical therapy sessions utilizing electrotherapy, manual therapy, and therapeutic exercises.',
    iconName: 'Activity',
    imageUrl: '/service/manyacare-physiotherapy-rehabilitation.jpg',
    conditionsTreated: ['Frozen Shoulder & Joint Stiffness', 'Stroke Hemiplegia', 'Back & Neck Pain', 'Post-Fracture Stiffness'],
    servicesOffered: ['In-Clinic Physiotherapy', 'Home Physiotherapy Sessions', 'Post-Surgical Rehab', 'Ergonomic Guidance'],
    faqs: [
      { question: 'Can I get physiotherapy done at home?', answer: 'Yes, MANYACARE provides home physical therapy for mobility-restricted patients.' }
    ]
  },
  {
    id: 'dept-18',
    slug: 'diet-nutrition',
    name: 'Dietetics & Clinical Nutrition',
    shortDescription: 'Customized nutritional planning for diabetes, weight management, hypertension, and clinical diets.',
    fullDescription: 'Scientific meal planning tailored to individual health conditions, metabolic goals, and lifestyle.',
    iconName: 'Apple',
    imageUrl: '/service/manyacare-dietetics-clinical-nutrition.jpg',
    conditionsTreated: ['Obesity & Overweight', 'Malnutrition & Deficiency', 'Diabetic Diet Planning', 'Renal & Cardiac Diets'],
    servicesOffered: ['Body Composition Analysis', 'Personalized Diet Charting', 'Nutritional Counseling'],
    faqs: [
      { question: 'How does a clinical diet help manage diabetes?', answer: 'Proper glycemic index planning stabilizes blood glucose spikes and reduces insulin resistance.' }
    ]
  },
  {
    id: 'dept-19',
    slug: 'oncology',
    name: 'Medical Oncology Care',
    shortDescription: 'Cancer screening, clinical oncology consultation, second opinions, and supportive care.',
    fullDescription: 'Comprehensive guidance on cancer prevention, tumor diagnostic markers, and oncology consultations.',
    iconName: 'Ribbon',
    imageUrl: '/service/manyacare-medical-oncology-care.jpg',
    conditionsTreated: ['Breast & Gynaecological Malignancies', 'Gastrointestinal Cancers', 'Lung & Prostate Cancers'],
    servicesOffered: ['Tumor Marker Blood Tests', 'Second Opinion Consultations', 'Supportive Palliative Care'],
    faqs: [
      { question: 'What are common preventive cancer screening tests?', answer: 'Mammography, Pap Smear, Low-Dose CT for high-risk smokers, PSA test, and Colonoscopy.' }
    ]
  },
  {
    id: 'dept-20',
    slug: 'oncosurgery',
    name: 'Surgical Oncology Consultation',
    shortDescription: 'Surgical oncology evaluation, tumor biopsy coordination, and pre-operative management.',
    fullDescription: 'Expert surgical opinions for operable solid tumors and oncological tissue biopsies.',
    iconName: 'Scissors',
    imageUrl: '/service/manyacare-surgical-oncology-consultation.jpg',
    conditionsTreated: ['Solid Organ Tumors', 'Soft Tissue Lesions', 'Thyroid Mass Lesions'],
    servicesOffered: ['Onco-Surgical Consultation', 'Biopsy Procedures', 'Post-Op Monitoring'],
    faqs: [
      { question: 'When is surgical biopsy recommended?', answer: 'When imaging or clinical assessment shows suspicious tissue changes requiring histological confirmation.' }
    ]
  },
  {
    id: 'dept-21',
    slug: 'sexual-health-clinic',
    name: 'Sexual Health Clinic',
    shortDescription: 'Discreet, confidential consultations for reproductive and sexual health concerns.',
    fullDescription: 'Empathic, confidential medical care for sexual wellness, hormonal issues, and reproductive health.',
    iconName: 'ShieldCheck',
    imageUrl: '/service/manyacare-sexual-health-clinic.jpg',
    conditionsTreated: ['Erectile Dysfunction', 'Low Libido & Hormonal Imbalance', 'STI Screening & Treatment'],
    servicesOffered: ['Confidential Consultations', 'Hormonal Assay Testing', 'Wellness Counseling'],
    faqs: [
      { question: 'Is my privacy guaranteed during sexual health consultations?', answer: 'Yes, 100% strict medical confidentiality is maintained for all patient records.' }
    ]
  }
];
