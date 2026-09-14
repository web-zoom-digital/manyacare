import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Metadata } from 'next';
import { BLOG_POSTS } from '@/data/blogs';
import { DEPARTMENTS } from '@/data/departments';
import { ChevronLeft, Clock, User, ShieldAlert, BookOpen } from 'lucide-react';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((b) => b.slug === slug);
  if (!post) return { title: 'Article Not Found' };
  return {
    title: `${post.title} | MANYACARE Health Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((b) => b.slug === slug);

  if (!post) {
    notFound();
  }

  const dept = DEPARTMENTS.find((d) => d.slug === post.relatedDepartmentSlug);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: post.featuredImage,
    datePublished: post.publishedDate,
    author: {
      '@type': 'Organization',
      name: post.author.name,
    },
    publisher: {
      '@type': 'Organization',
      name: 'MANYACARE HealthCity',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.manyacare.com/logo.png',
      },
    },
  };

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Link
        href="/blog"
        className="inline-flex items-center gap-1 text-xs font-semibold text-[#0B3C5D] hover:text-[#2196F3]"
      >
        <ChevronLeft className="w-4 h-4" />
        Back to Health Blog
      </Link>

      <div className="space-y-4 text-left">
        <span className="text-xs font-bold text-[#2196F3] bg-[#EAF5FF] px-2.5 py-1 rounded-full border border-[#2196F3]/30">
          {post.category}
        </span>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-[#0B3C5D] leading-tight">
          {post.title}
        </h1>

        <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 border-y border-[#D7E0E8] py-3">
          <span className="flex items-center gap-1 font-medium text-[#0B3C5D]">
            <User className="w-3.5 h-3.5 text-[#2196F3]" />
            {post.author.name} ({post.author.role})
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-[#2196F3]" />
            {post.publishedDate} ({post.readTime})
          </span>
        </div>
      </div>

      {/* Featured Image */}
      <div className="rounded-2xl overflow-hidden border border-[#D7E0E8] shadow-sm">
        <img
          src={post.featuredImage}
          alt={post.title}
          className="w-full h-[280px] sm:h-[400px] object-cover"
        />
      </div>

      {/* Article Content */}
      <div className="bg-white border border-[#D7E0E8] rounded-2xl p-6 sm:p-10 space-y-6 text-sm text-[#172B4D] leading-relaxed">
        <p className="font-semibold text-[#0B3C5D] text-base leading-relaxed bg-[#EAF5FF]/50 p-4 rounded-xl border border-[#2196F3]/20">
          {post.content.intro}
        </p>

        {post.content.sections.map((sec, idx) => (
          <div key={idx} className="space-y-3 pt-2">
            <h2 className="text-xl font-bold text-[#0B3C5D]">{sec.heading}</h2>
            {sec.paragraphs.map((p, pIdx) => (
              <p key={pIdx} className="text-[#64748B] leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        ))}

        {/* When to Consult Section */}
        {post.content.whenToConsult && post.content.whenToConsult.length > 0 && (
          <div className="bg-[#F7FAFC] border border-[#D7E0E8] p-5 rounded-xl space-y-2 mt-6">
            <h3 className="text-base font-bold text-[#0B3C5D]">When to Consult a Healthcare Professional</h3>
            <ul className="list-disc list-inside space-y-1 text-xs text-[#64748B]">
              {post.content.whenToConsult.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Related Department Link */}
        {dept && (
          <div className="pt-4 border-t border-[#D7E0E8] flex items-center justify-between text-xs">
            <span className="text-slate-500">Related Specialty:</span>
            <Link
              href={`/departments/${dept.slug}`}
              className="font-bold text-[#2196F3] hover:underline"
            >
              Explore {dept.name} Department →
            </Link>
          </div>
        )}

        {/* Medical Disclaimer */}
        <div className="bg-amber-50/60 border border-amber-200 p-4 rounded-xl text-xs text-amber-900 flex items-start gap-2 mt-6">
          <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <p>{post.content.disclaimer}</p>
        </div>
      </div>
    </article>
  );
}
