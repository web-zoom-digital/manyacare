import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Metadata } from 'next';
import { BLOG_POSTS } from '@/data/blogs';
import { DEPARTMENTS } from '@/data/departments';
import Breadcrumb from '@/components/Breadcrumb';
import HeroCurveDivider from '@/components/HeroCurveDivider';
import {
  Clock,
  Calendar,
  UserCheck,
  ShieldAlert,
  CheckCircle2,
  ChevronLeft,
  BookOpen,
  ArrowRight,
  Stethoscope,
  Phone,
} from 'lucide-react';

interface Props {
  params: Promise<{ slug: string }>;
}

const BASE_URL = 'https://manyacare.in';

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return { title: 'Article Not Found' };

  return {
    title: `${post.title} | MANYACARE Health Blog`,
    description: post.excerpt,
    keywords: [
      post.title,
      post.category,
      'MANYACARE health blog',
      'Medical information Greater Noida West',
      'Doctor verified health article',
    ],
    alternates: {
      canonical: `${BASE_URL}/blog/${post.slug}`,
    },
    openGraph: {
      type: 'article',
      locale: 'en_IN',
      url: `${BASE_URL}/blog/${post.slug}`,
      title: `${post.title} | MANYACARE Health Blog`,
      description: post.excerpt,
      siteName: 'MANYACARE HealthCity',
      publishedTime: post.publishedDate,
      authors: [post.author.name],
      images: [
        {
          url: post.featuredImage || '/images/manyacare-og-social.jpg',
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${post.title} | MANYACARE Health Blog`,
      description: post.excerpt,
      images: [post.featuredImage || '/images/manyacare-og-social.jpg'],
    },
  };
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedDept = DEPARTMENTS.find((d) => d.slug === post.relatedDepartmentSlug);

  const blogPostingSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${BASE_URL}/blog/${post.slug}/#article`,
    headline: post.title,
    description: post.excerpt,
    image: post.featuredImage ? `${BASE_URL}${post.featuredImage}` : `${BASE_URL}/images/manyacare-og-social.jpg`,
    datePublished: post.publishedDate,
    author: {
      '@type': 'Organization',
      name: post.author.name,
      jobTitle: post.author.role,
    },
    publisher: {
      '@id': `${BASE_URL}/#organization`,
    },
    mainEntityOfPage: `${BASE_URL}/blog/${post.slug}`,
    articleSection: post.category,
    inLanguage: 'en-IN',
  };

  return (
    <div className="pb-16 space-y-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />

      {/* Hero Header */}
      <section className="relative bg-gradient-to-b from-[#EAF5FF]/80 via-[#F7FAFC] to-white pt-8 pb-14 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-left">
          <Breadcrumb
            items={[
              { label: 'Health Blog', href: '/blog' },
              { label: post.category },
            ]}
            className="mb-4"
          />

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF5FF] border border-[#2196F3]/40 text-[#2196F3] text-xs sm:text-sm font-bold uppercase tracking-wider">
            <BookOpen className="w-4 h-4 text-[#2196F3]" />
            <span>{post.category}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B3C5D] leading-tight font-display">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-[#64748B] pt-2 border-t border-[#D7E0E8]">
            <div className="flex items-center gap-2">
              <UserCheck className="w-4 h-4 text-[#2196F3]" />
              <span className="font-semibold text-[#0B3C5D]">{post.author.name}</span>
              <span className="text-slate-400">({post.author.role})</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-[#2196F3]" />
              <span>{post.publishedDate}</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#2196F3]" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
        <HeroCurveDivider fillColor="#F7FAFC" />
      </section>

      {/* Article Body */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-left">
        {/* Featured Image */}
        <div className="rounded-3xl overflow-hidden border border-[#D7E0E8] shadow-md bg-white">
          <img
            src={post.featuredImage}
            alt={post.title}
            className="w-full h-[350px] sm:h-[450px] object-cover"
          />
        </div>

        {/* Intro */}
        <div className="bg-white border border-[#D7E0E8] rounded-3xl p-6 sm:p-8 shadow-xs">
          <p className="text-base sm:text-lg text-[#172B4D] leading-relaxed font-medium">
            {post.content.intro}
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-8">
          {post.content.sections.map((section, idx) => (
            <div key={idx} className="bg-white border border-[#D7E0E8] rounded-3xl p-6 sm:p-8 shadow-xs space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-[#0B3C5D]">
                {section.heading}
              </h2>
              {section.paragraphs.map((p, pIdx) => (
                <p key={pIdx} className="text-sm sm:text-base text-[#64748B] leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          ))}
        </div>

        {/* When to Consult a Specialist */}
        {post.content.whenToConsult && post.content.whenToConsult.length > 0 && (
          <div className="bg-[#EAF5FF] border border-[#2196F3]/30 rounded-3xl p-6 sm:p-8 space-y-4">
            <h3 className="text-lg sm:text-xl font-bold text-[#0B3C5D] flex items-center gap-2">
              <Stethoscope className="w-6 h-6 text-[#2196F3]" />
              When Should You Consult a Specialist?
            </h3>
            <ul className="space-y-2.5">
              {post.content.whenToConsult.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm sm:text-base text-[#172B4D]">
                  <CheckCircle2 className="w-5 h-5 text-[#16A34A] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {relatedDept && (
              <div className="pt-4">
                <Link
                  href={`/departments/${relatedDept.slug}`}
                  className="manyacare-btn-primary py-3 px-6 text-sm inline-flex items-center gap-2"
                >
                  <span>Consult {relatedDept.name} Specialist</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            )}
          </div>
        )}

        {/* Medically Responsible Disclaimer Box */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 text-xs sm:text-sm text-slate-600 flex items-start gap-3">
          <ShieldAlert className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
          <div>
            <p className="font-bold text-[#0B3C5D] mb-1">Medical Information & Responsibility Disclaimer</p>
            <p className="leading-relaxed">{post.content.disclaimer}</p>
          </div>
        </div>

        {/* CTA Contact Footer */}
        <div className="bg-white border border-[#D7E0E8] rounded-3xl p-6 sm:p-8 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-6 text-left">
          <div className="space-y-1">
            <h4 className="text-lg font-bold text-[#0B3C5D]">Need Personal Medical Advice?</h4>
            <p className="text-sm text-[#64748B]">Book an OPD consultation or request a home doctor visit with MANYACARE HealthCity.</p>
          </div>
          <a
            href="tel:+919953239561"
            className="manyacare-btn-primary py-3.5 px-6 text-sm shrink-0 inline-flex items-center gap-2"
          >
            <Phone className="w-4 h-4" />
            <span>Call Helpline: +91-9953239561</span>
          </a>
        </div>
      </article>
    </div>
  );
}
