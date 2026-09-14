'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  title?: string;
  subtitle?: string;
  badgeText?: string;
  faqs: FaqItem[];
  className?: string;
}

export default function FaqAccordion({
  title = "Frequently Asked Questions",
  subtitle,
  badgeText = "Departments FAQs",
  faqs,
  className = "",
}: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (!faqs || faqs.length === 0) return null;

  return (
    <div className={`space-y-8 text-center ${className}`}>
      <div className="space-y-2 text-center max-w-xl mx-auto">
        <span className="text-xs font-bold text-[#2196F3] bg-[#EAF5FF] px-4 py-1.5 rounded-full uppercase tracking-wider inline-block">
          {badgeText}
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0B3C5D] font-display">
          {title}
        </h2>
        {subtitle && (
          <p className="text-xs sm:text-sm text-[#64748B]">
            {subtitle}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 gap-4 text-left max-w-4xl mx-auto">
        {faqs.map((faq, i) => {
          const isOpen = openIndex === i;
          return (
            <div
              key={i}
              className={`bg-white rounded-3xl border transition-all duration-300 overflow-hidden shadow-xs ${
                isOpen
                  ? 'border-[#2196F3] ring-2 ring-[#2196F3]/10 shadow-md'
                  : 'border-[#D7E0E8] hover:border-[#2196F3]/50'
              }`}
            >
              <button
                type="button"
                onClick={() => toggleIndex(i)}
                className="w-full p-5 sm:p-6 flex items-center justify-between gap-4 text-left cursor-pointer focus:outline-none"
                aria-expanded={isOpen}
              >
                <div className="flex items-start sm:items-center gap-3.5">
                  <span
                    className={`w-8 h-8 rounded-2xl text-xs font-bold flex items-center justify-center shrink-0 transition-colors ${
                      isOpen
                        ? 'bg-[#2196F3] text-white shadow-sm'
                        : 'bg-[#EAF5FF] text-[#2196F3]'
                    }`}
                  >
                    0{i + 1}
                  </span>
                  <h4 className="font-medium text-sm sm:text-base text-[#0B3C5D] leading-snug">
                    {faq.question}
                  </h4>
                </div>

                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                    isOpen ? 'bg-[#EAF5FF] text-[#2196F3] rotate-180' : 'bg-slate-100 text-slate-500'
                  }`}
                >
                  <ChevronDown className="w-5 h-5" />
                </div>
              </button>

              {isOpen && (
                <div className="px-5 pb-6 sm:px-6 sm:pb-6 pt-0 animate-in fade-in slide-in-from-top-1 duration-200">
                  <div className="pl-11 pt-1">
                    <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
