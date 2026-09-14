export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: string;
  readTime: string;
  publishedDate: string;
  author: {
    name: string;
    role: string;
  };
  featuredImage: string;
  excerpt: string;
  content: {
    intro: string;
    sections: {
      heading: string;
      paragraphs: string[];
    }[];
    whenToConsult: string[];
    disclaimer: string;
  };
  relatedDepartmentSlug: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'blog-1',
    slug: 'early-signs-of-diabetes-you-should-not-ignore',
    title: 'Early Signs of Diabetes You Should Not Ignore',
    category: 'Endocrinology & Diabetes',
    readTime: '5 min read',
    publishedDate: 'September 10, 2026',
    author: { name: 'Editorial Medical Board', role: 'MANYACARE Clinical Content Team' },
    featuredImage: '/images/early-signs-of-diabetes-you-should-not-ignore.jpg',
    excerpt: 'Recognizing subtle metabolic indicators such as frequent thirst, unexpected fatigue, and slow wound healing can lead to timely diabetes diagnosis and prevention of complications.',
    relatedDepartmentSlug: 'diabetes-endocrinology',
    content: {
      intro: 'Diabetes mellitus is a chronic metabolic condition characterized by elevated blood glucose levels due to insufficient insulin production or cellular insulin resistance. In its early stages, symptoms may develop gradually and remain subtle, leading many individuals to overlook them.',
      sections: [
        {
          heading: '1. Polydipsia and Polyuria (Increased Thirst & Frequent Urination)',
          paragraphs: [
            'When blood glucose levels exceed normal renal thresholds, excess glucose is excreted in urine. This osmotic effect draws additional fluid from bodily tissues, leading to frequent urination (polyuria), which subsequently triggers persistent dryness of mouth and unquenchable thirst (polydipsia).',
            'If you find yourself waking multiple times during the night to pass urine, it is recommended to monitor your fasting glucose levels.'
          ]
        },
        {
          heading: '2. Unexplained Fatigue and Energy Fluctuations',
          paragraphs: [
            'Cells rely on insulin to import glucose from the bloodstream for ATP cellular energy production. When insulin efficacy is diminished, glucose remains trapped in circulation while body tissues experience cellular starvation, resulting in persistent tiredness despite adequate sleep.'
          ]
        },
        {
          heading: '3. Slow Healing of Cut Wounds and Blurred Vision',
          paragraphs: [
            'Elevated circulating blood sugar impairs microvascular circulation and white blood cell activity, resulting in delayed tissue repair following minor cuts or bruises.',
            'Furthermore, high glucose concentrations can alter fluid balance within the crystalline lens of the eye, causing transient vision blurring.'
          ]
        }
      ],
      whenToConsult: [
        'Fasting blood sugar exceeding 100 mg/dL on screening.',
        'Persistent numbness or tingling sensation in feet or hands.',
        'Recurrent fungal skin or urinary tract infections.'
      ],
      disclaimer: 'This article is intended for general health educational purposes only and does not substitute for formal medical evaluation. Always consult a qualified physician for clinical diagnosis.'
    }
  },
  {
    id: 'blog-2',
    slug: 'how-to-maintain-healthy-blood-sugar-levels',
    title: 'How to Maintain Healthy Blood Sugar Levels',
    category: 'Diabetes & Nutrition',
    readTime: '6 min read',
    publishedDate: 'September 08, 2026',
    author: { name: 'Editorial Medical Board', role: 'MANYACARE Clinical Content Team' },
    featuredImage: '/images/how-to-maintain-healthy-blood-sugar-levels.jpg',
    excerpt: 'Practical, evidence-backed lifestyle choices—from low glycemic index meal assembly to structured physical activity—that stabilize blood glucose.',
    relatedDepartmentSlug: 'diabetes-endocrinology',
    content: {
      intro: 'Maintaining glycemic stability is essential for preventing long-term cardiovascular, renal, and neurological complications associated with fluctuating blood sugar levels.',
      sections: [
        {
          heading: 'Prioritize Low Glycemic Index (GI) Complex Carbohydrates',
          paragraphs: [
            'Replacing refined starches (white flour, sugary drinks) with high-fiber whole grains (oats, millets, legumes) slows postprandial glucose absorption and smooths insulin response curves.'
          ]
        },
        {
          heading: 'Incorporate Post-Meal Walk Routines',
          paragraphs: [
            'A brief 10 to 15-minute walk following major meals stimulates GLUT4 transporter translocation in skeletal muscle cells independent of insulin, directly uptaking circulating glucose.'
          ]
        }
      ],
      whenToConsult: [
        'HbA1c levels rising above 5.7% (prediabetes threshold).',
        'Frequent episodes of hypoglycemia (shakiness, sweating, dizziness below 70 mg/dL).'
      ],
      disclaimer: 'Educational information only. Consult an endocrinologist before adjusting diabetes medication or diet plans.'
    }
  },
  {
    id: 'blog-3',
    slug: 'understanding-blood-pressure-and-hypertension',
    title: 'Understanding Blood Pressure and Hypertension',
    category: 'Cardiology',
    readTime: '5 min read',
    publishedDate: 'September 05, 2026',
    author: { name: 'Editorial Medical Board', role: 'MANYACARE Clinical Content Team' },
    featuredImage: '/images/understanding-blood-pressure-and-hypertension.jpg',
    excerpt: 'Hypertension is often called the silent killer because high vascular pressure damages blood vessels without producing obvious early symptoms.',
    relatedDepartmentSlug: 'cardiology',
    content: {
      intro: 'Blood pressure measures the hydrostatic force exerted by circulating blood against arterial walls. Systolic pressure represents cardiac ventricular contraction, while diastolic pressure measures arterial resistance during cardiac relaxation.',
      sections: [
        {
          heading: 'Classifying Blood Pressure Ranges',
          paragraphs: [
            'Normal blood pressure is defined as Systolic < 120 mmHg and Diastolic < 80 mmHg. Stage 1 Hypertension begins at 130-139 mmHg Systolic or 80-89 mmHg Diastolic based on repeated clinical measurements.'
          ]
        },
        {
          heading: 'Key Risk Factors and Vascular Impact',
          paragraphs: [
            'Excess dietary sodium, physical inactivity, chronic stress, and smoking cause progressive arterial wall stiffening, increasing cardiac workload and stroke risk.'
          ]
        }
      ],
      whenToConsult: [
        'Consistently elevated BP readings exceeding 140/90 mmHg.',
        'Occurrences of morning occipital headache, chest tightness, or shortness of breath.'
      ],
      disclaimer: 'General medical knowledge only. Seek immediate emergency care for sudden severe chest pain or neurological deficit.'
    }
  },
  {
    id: 'blog-4',
    slug: 'heart-health-everyday-habits-for-a-healthier-heart',
    title: 'Heart Health: Everyday Habits for a Healthier Heart',
    category: 'Cardiology & Lifestyle',
    readTime: '6 min read',
    publishedDate: 'September 01, 2026',
    author: { name: 'Editorial Medical Board', role: 'MANYACARE Clinical Content Team' },
    featuredImage: '/images/heart-health-everyday-habits-for-a-healthier-heart.jpg',
    excerpt: 'Simple daily choices like aerobic activity, stress reduction, balanced dietary fats, and smoke-free living protect your cardiovascular system.',
    relatedDepartmentSlug: 'cardiology',
    content: {
      intro: 'Cardiovascular disease remains a leading global health concern, yet up to 80% of premature heart events can be mitigated through lifestyle modifications.',
      sections: [
        {
          heading: 'Embrace Aerobic Conditioning',
          paragraphs: [
            'Engaging in 150 minutes of moderate aerobic exercise per week enhances myocardial efficiency, lowers resting pulse rate, and elevates beneficial HDL cholesterol.'
          ]
        },
        {
          heading: 'Adopt Heart-Healthy Dietary Fats',
          paragraphs: [
            'Replace trans fats and excessive saturated fats with monounsaturated and omega-3 fatty acids found in nuts, seeds, and vegetable oils.'
          ]
        }
      ],
      whenToConsult: [
        'Unexplained exertional shortness of breath.',
        'Family history of premature heart attack before age 50.'
      ],
      disclaimer: 'Educational content. Always consult a physician before initiating intensive physical exertion.'
    }
  },
  {
    id: 'blog-5',
    slug: 'when-should-you-consult-a-general-physician',
    title: 'When Should You Consult a General Physician?',
    category: 'Internal Medicine',
    readTime: '4 min read',
    publishedDate: 'August 28, 2026',
    author: { name: 'Editorial Medical Board', role: 'MANYACARE Clinical Content Team' },
    featuredImage: '/images/when-should-you-consult-a-general-physician.jpg',
    excerpt: 'General Physicians serve as the primary diagnostic line of defense, evaluating symptoms, ordering lab tests, and providing coordinated care.',
    relatedDepartmentSlug: 'general-physician-internal-medicine',
    content: {
      intro: 'A General Physician is trained to evaluate systemic health, manage chronic multi-organ conditions, and coordinate specialist referrals when necessary.',
      sections: [
        {
          heading: 'Primary Red Flags for Physician Consultation',
          paragraphs: [
            'Persistent low-grade fever lasting beyond 3 days, unexplained weight loss, chronic digestive alterations, and generalized body pain warrant clinical evaluation.'
          ]
        }
      ],
      whenToConsult: [
        'Annual wellness physical examinations.',
        'Flu-like symptoms accompanied by extreme weakness.'
      ],
      disclaimer: 'Informational article only. Contact medical services for evaluation.'
    }
  },
  {
    id: 'blog-6',
    slug: 'common-causes-of-persistent-cough-and-when-to-seek-care',
    title: 'Common Causes of Persistent Cough and When to Seek Care',
    category: 'Chest Medicine',
    readTime: '5 min read',
    publishedDate: 'August 25, 2026',
    author: { name: 'Editorial Medical Board', role: 'MANYACARE Clinical Content Team' },
    featuredImage: '/images/common-causes-of-persistent-cough-and-when-to-seek-care.jpg',
    excerpt: 'A cough lasting more than 3 to 8 weeks is considered chronic and requires medical investigation to identify underlying pulmonary or gastric causes.',
    relatedDepartmentSlug: 'chest-medicine',
    content: {
      intro: 'While acute coughs usually stem from viral upper respiratory infections, a persistent cough requires detailed evaluation for asthma, GERD, or environmental sensitivities.',
      sections: [
        {
          heading: 'Key Etiologies of Chronic Cough',
          paragraphs: [
            'Post-Nasal Drip Syndrome, Cough-Variant Asthma, Gastroesophageal Reflux Disease (GERD), and chronic bronchitis are primary underlying triggers.'
          ]
        }
      ],
      whenToConsult: [
        'Coughing up blood (hemoptysis).',
        'Accompanying fever, night sweats, or unintentional weight loss.'
      ],
      disclaimer: 'Educational guide. Seek pulmonology advice for persistent respiratory distress.'
    }
  },
  {
    id: 'blog-7',
    slug: 'a-complete-guide-to-preventive-health-check-ups',
    title: 'A Complete Guide to Preventive Health Check-ups',
    category: 'Preventive Care',
    readTime: '6 min read',
    publishedDate: 'August 20, 2026',
    author: { name: 'Editorial Medical Board', role: 'MANYACARE Clinical Content Team' },
    featuredImage: '/images/a-complete-guide-to-preventive-health-check-ups.jpg',
    excerpt: 'Routine preventive screenings enable early detection of metabolic, cardiac, and renal alterations before clinical symptoms manifest.',
    relatedDepartmentSlug: 'general-physician-internal-medicine',
    content: {
      intro: 'Preventive health check-ups assess physiological organ markers to identify risk factors early and formulate personalized wellness strategies.',
      sections: [
        {
          heading: 'Essential Tests in an Annual Executive Panel',
          paragraphs: [
            'A thorough panel includes CBC, Fasting Glucose, HbA1c, Lipid Profile, Liver & Kidney Function Tests, Thyroid Profile, and ECG.'
          ]
        }
      ],
      whenToConsult: [
        'Adults turning 30 or individuals with strong family history of chronic illness.'
      ],
      disclaimer: 'Educational material. Consult your physician to customize your preventive screening frequency.'
    }
  },
  {
    id: 'blog-8',
    slug: 'womens-health-important-routine-screenings',
    title: 'Women’s Health: Important Routine Screenings',
    category: 'Gynaecology & Wellness',
    readTime: '5 min read',
    publishedDate: 'August 15, 2026',
    author: { name: 'Editorial Medical Board', role: 'MANYACARE Clinical Content Team' },
    featuredImage: '/images/womens-health-important-routine-screenings.jpg',
    excerpt: 'Key preventive tests for women including Pap smears, mammography, bone density scans, and thyroid profiles across different life stages.',
    relatedDepartmentSlug: 'obstetrics-gynaecology',
    content: {
      intro: 'Proactive wellness screening empowers women to monitor hormonal balance, reproductive health, and bone mineral density.',
      sections: [
        {
          heading: 'Milestone Screenings for Women',
          paragraphs: [
            'Pap smears starting at age 21 screen for cervical cytological changes. Digital mammography starting at age 40 or 45 provides early breast imaging assessment.'
          ]
        }
      ],
      whenToConsult: [
        'Menstrual cycle irregularities, severe pelvic discomfort, or unusual palpable breast lumps.'
      ],
      disclaimer: 'Educational guide. Schedule regular evaluations with your gynaecologist.'
    }
  },
  {
    id: 'blog-9',
    slug: 'healthy-ageing-essential-health-tips-for-senior-citizens',
    title: 'Healthy Ageing: Essential Health Tips for Senior Citizens',
    category: 'Geriatric Care',
    readTime: '5 min read',
    publishedDate: 'August 10, 2026',
    author: { name: 'Editorial Medical Board', role: 'MANYACARE Clinical Content Team' },
    featuredImage: '/images/healthy-ageing-essential-health-tips-for-senior-citizens.jpg',
    excerpt: 'Promoting functional independence, joint mobility, cognitive stimulation, balanced nutrition, and regular health check-ups in older adults.',
    relatedDepartmentSlug: 'general-physician-internal-medicine',
    content: {
      intro: 'Healthy ageing focuses on maintaining cognitive vitality, skeletal integrity, and metabolic stability during senior years.',
      sections: [
        {
          heading: 'Preventing Falls and Bone Density Maintenance',
          paragraphs: [
            'DEXA scans measure bone density, while targeted physiotherapy exercises improve balance, joint flexibility, and muscle strength.'
          ]
        }
      ],
      whenToConsult: [
        'Unsteadiness while walking, frequent memory lapses, or unmanaged joint pain.'
      ],
      disclaimer: 'General health tips. Consult a geriatric specialist for individual care plans.'
    }
  },
  {
    id: 'blog-10',
    slug: 'childrens-health-building-healthy-habits-from-an-early-age',
    title: 'Children’s Health: Building Healthy Habits from an Early Age',
    category: 'Paediatrics',
    readTime: '5 min read',
    publishedDate: 'August 05, 2026',
    author: { name: 'Editorial Medical Board', role: 'MANYACARE Clinical Content Team' },
    featuredImage: '/images/childrens-health-building-healthy-habits-from-an-early-age.jpg',
    excerpt: 'Establishing early foundation habits for paediatric nutrition, vaccination schedules, physical play, and digital screen time moderation.',
    relatedDepartmentSlug: 'pediatrics',
    content: {
      intro: 'Childhood habits directly shape lifelong physical and psychological health. Early emphasis on balanced nutrition and active routines yields lifelong wellness.',
      sections: [
        {
          heading: 'Immunization and Milestone Monitoring',
          paragraphs: [
            'Adhering to recommended paediatric immunization schedules protects against preventable infectious diseases while routine visits track growth percentiles.'
          ]
        }
      ],
      whenToConsult: [
        'Recurrent childhood fever, lethargy, or failure to meet developmental milestones.'
      ],
      disclaimer: 'Educational resource. Always consult your paediatrician for childhood health issues.'
    }
  },
  {
    id: 'blog-11',
    slug: 'the-role-of-nutrition-in-diabetes-and-weight-management',
    title: 'The Role of Nutrition in Diabetes and Weight Management',
    category: 'Diet & Nutrition',
    readTime: '6 min read',
    publishedDate: 'August 01, 2026',
    author: { name: 'Editorial Medical Board', role: 'MANYACARE Clinical Content Team' },
    featuredImage: '/images/the-role-of-nutrition-in-diabetes-and-weight-management.jpg',
    excerpt: 'Understanding macronutrient balance, portion control, and fiber-rich meal structures to manage weight and stabilize blood glucose levels.',
    relatedDepartmentSlug: 'diet-nutrition',
    content: {
      intro: 'Clinical dietetics plays a pivotal role in managing metabolic health, optimizing body composition, and reducing insulin resistance.',
      sections: [
        {
          heading: 'Macronutrient Balancing & Fiber Density',
          paragraphs: [
            'Combining complex carbohydrates with lean proteins and healthy fats delays gastric emptying, preventing sharp glucose spikes.'
          ]
        }
      ],
      whenToConsult: [
        'Difficulty achieving weight loss despite caloric restriction, or unmanaged HbA1c levels.'
      ],
      disclaimer: 'General dietary guidance. Seek a clinical nutritionist for customized meal planning.'
    }
  },
  {
    id: 'blog-12',
    slug: 'understanding-medical-tests-cbc-hba1c-lipid-profile-and-more',
    title: 'Understanding Medical Tests: CBC, HbA1c, Lipid Profile and More',
    category: 'Diagnostics & Pathology',
    readTime: '7 min read',
    publishedDate: 'July 28, 2026',
    author: { name: 'Editorial Medical Board', role: 'MANYACARE Clinical Content Team' },
    featuredImage: '/images/understanding-medical-tests-cbc-hba1c-lipid-profile-and-more.jpg',
    excerpt: 'A beginner’s diagnostic guide explaining reference ranges, preparation rules, and clinical significance of common laboratory tests.',
    relatedDepartmentSlug: 'general-physician-internal-medicine',
    content: {
      intro: 'Laboratory diagnostics provide objective biological metrics that guide clinical diagnosis and therapeutic monitoring.',
      sections: [
        {
          heading: 'Decoding Common Test Abbreviations',
          paragraphs: [
            'CBC evaluates blood cells (RBC, WBC, Platelets). HbA1c measures 3-month average glucose. Lipid Profile evaluates cholesterol fractions (HDL, LDL, Triglycerides).'
          ]
        }
      ],
      whenToConsult: [
        'Values falling outside standard lab reference ranges require physician interpretation.'
      ],
      disclaimer: 'Educational guide. Lab results must always be interpreted in clinical context by a registered medical doctor.'
    }
  }
];
