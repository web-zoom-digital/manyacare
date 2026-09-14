export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Appointments' | 'Diagnostics' | 'Home Care' | 'Education';
}

export const GLOBAL_FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What healthcare services does MANYACARE HealthCity provide?',
    answer: 'MANYACARE HealthCity provides multispecialty outpatient consultations, pathology laboratory testing, digital radiology & imaging, home healthcare services, preventive health check-up packages, teleconsultations, and medical education guidance.',
    category: 'General'
  },
  {
    id: 'faq-2',
    question: 'How can I book an appointment with a specialist?',
    answer: 'You can book an appointment by filling out our online Appointment Form on the website, calling our helpline at +91-9953239561, or opting for an in-clinic or teleconsultation slot.',
    category: 'Appointments'
  },
  {
    id: 'faq-3',
    question: 'Can I request a doctor visit or nursing care at home?',
    answer: 'Yes, MANYACARE HealthCity provides qualified home doctor visits, home nursing care, physiotherapy, elderly care, and sample collection subject to clinical eligibility and location availability.',
    category: 'Home Care'
  },
  {
    id: 'faq-4',
    question: 'Do you provide laboratory testing and home sample collection?',
    answer: 'Yes! Our laboratory services cover CBC, HbA1c, Lipid Profile, Liver Function, Kidney Function, Thyroid Profile, and home sample collection can be scheduled by calling +91-9953239562.',
    category: 'Diagnostics'
  },
  {
    id: 'faq-5',
    question: 'How can I consult a specialist online (Teleconsultation)?',
    answer: 'Select "Online Consultation" when scheduling an appointment on our portal. Our care team will provide a secure consultation link and doctor availability timing.',
    category: 'Appointments'
  },
  {
    id: 'faq-6',
    question: 'How can I enquire about preventive health packages?',
    answer: 'You can view our Health Packages page, review included test listings, and click "Enquire Now" or call +91-9953239561 for personalized package guidance.',
    category: 'General'
  },
  {
    id: 'faq-7',
    question: 'Where is MANYACARE HealthCity located?',
    answer: 'Our main campus address parameters can be confirmed via our location directory. Please visit our Locations page or contact +91-9953239561 for exact directions.',
    category: 'General'
  },
  {
    id: 'faq-8',
    question: 'What are the OPD consultation hours?',
    answer: 'Standard OPD consultation hours are Monday through Saturday from 8:00 AM to 8:00 PM. Emergency guidance and diagnostic appointments are coordinated via our helpline.',
    category: 'General'
  }
];
