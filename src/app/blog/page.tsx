'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { BLOG_POSTS } from '@/data/blogs';
import { Search, ChevronRight, BookOpen, Clock, ShieldCheck, CheckCircle2, Sparkles } from 'lucide-react';
import HeroCurveDivider from '@/components/HeroCurveDivider';
import Breadcrumb from '@/components/Breadcrumb';

export default function BlogIndexPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const categories = Array.from(new Set(BLOG_POSTS.map((b) => b.category)));

  const filteredBlogs = BLOG_POSTS.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCat = selectedCategory ? post.category === selectedCategory : true;
    return matchesSearch && matchesCat;
  });

  const heroHeadingTitle = "MANYACARE Health Blog";
  const heroHeadingSubtitle = "Medically Responsible Articles & Wellness Insights";
  const heroHeadingFull = `${heroHeadingTitle} - ${heroHeadingSubtitle}`;
  const heroImageFileName = "rheumatology-autoimmune-care.jpg";
  const heroImagePath = `/images/${heroImageFileName}`;

  return (
    <div className="pb-16 space-y-12">
      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-b from-[#EAF5FF]/80 via-[#F7FAFC] to-white pt-8 pb-16 lg:pt-16 lg:pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Health Blog' }]} className="mb-6" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Hero Content Area */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#EAF5FF] border border-[#2196F3]/40 text-[#0B3C5D] text-sm font-bold">
                <BookOpen className="w-4 h-4 text-[#2196F3]" />
                <span>Medical Publications & Health Articles</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium text-[#0B3C5D] tracking-tight leading-tight font-display">
                {heroHeadingTitle}
                <span className="block text-[#2196F3] font-bold text-3xl sm:text-4xl lg:text-5xl mt-2">
                  {heroHeadingSubtitle}
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-[#64748B] font-normal leading-relaxed max-w-2xl">
                Explore medically responsible health articles, preventive wellness guides, diagnostic insights, and medical publications authored by our clinical experts.
              </p>

              {/* Trust & Feature Badges */}
              <div className="grid grid-cols-3 gap-4 pt-4 text-left">
                <div className="bg-white p-4 rounded-2xl border border-[#D7E0E8] shadow-xs">
                  <BookOpen className="w-6 h-6 text-[#2196F3] mb-1.5" />
                  <p className="text-sm font-bold text-[#0B3C5D]">Evidence-Based</p>
                  <p className="text-xs text-slate-500">Clinical Publications</p>
                </div>
                <div className="bg-white p-4 rounded-2xl border border-[#D7E0E8] shadow-xs">
                  <ShieldCheck className="w-6 h-6 text-[#2196F3] mb-1.5" />
                  <p className="text-sm font-bold text-[#0B3C5D]">Doctor Reviewed</p>
                  <p className="text-xs text-slate-500">Verified Medical Content</p>
                </div>
                <div className="bg-white p-4 rounded-2xl border border-[#D7E0E8] shadow-xs">
                  <Sparkles className="w-6 h-6 text-[#2196F3] mb-1.5" />
                  <p className="text-sm font-bold text-[#0B3C5D]">Latest Insights</p>
                  <p className="text-xs text-slate-500">Updated Weekly</p>
                </div>
              </div>
            </div>

            {/* Right Hero Visual Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none rounded-3xl overflow-hidden border-2 border-[#D7E0E8] shadow-xl bg-white">
                <img
                  src={heroImagePath}
                  alt={heroHeadingFull}
                  title={heroHeadingFull}
                  className="w-full h-[360px] sm:h-[450px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B3C5D]/80 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                  <div className="bg-white/95 backdrop-blur-xs text-[#0B3C5D] p-4.5 rounded-2xl border border-[#D7E0E8] shadow-lg space-y-1">
                    <p className="text-sm font-bold flex items-center gap-2 text-[#0B3C5D]">
                      <CheckCircle2 className="w-5 h-5 text-[#16A34A]" />
                      Medically Verified Content
                    </p>
                    <p className="text-xs sm:text-sm text-slate-600">
                      Empowering patients with reliable medical knowledge, disease prevention, and diagnostic clarity.
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

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Filter & Search Bar */}
        {/* <div className="bg-white border border-[#D7E0E8] rounded-2xl p-4 sm:p-6 shadow-2xs space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <Search className="w-5 h-5 text-slate-400 absolute left-3 top-3.5" />
              <input
                type="text"
                placeholder="Search articles by title or keyword..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 text-sm rounded-xl border border-[#D7E0E8] focus:border-[#2196F3] focus:outline-none"
              />
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full py-3 px-3 text-sm rounded-xl border border-[#D7E0E8] focus:border-[#2196F3] focus:outline-none bg-white text-[#172B4D] cursor-pointer"
            >
              <option value="">All Health Categories ({BLOG_POSTS.length} Articles)</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
        </div> */}

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBlogs.map((post) => (
            <div key={post.id} className="manyacare-card overflow-hidden flex flex-col justify-between cursor-pointer">
              <div>
                <div className="h-48 w-full relative bg-slate-100">
                  <img
                    src={post.featuredImage}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-[#2196F3] text-white text-xs font-bold px-3 py-1 rounded">
                    {post.category}
                  </div>
                </div>
                <div className="p-5 space-y-3">
                  <div className="text-xs text-slate-500 flex items-center gap-2">
                    <span>{post.publishedDate}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#0B3C5D] line-clamp-2">{post.title}</h3>
                  <p className="text-sm text-[#64748B] line-clamp-3 leading-relaxed">{post.excerpt}</p>
                </div>
              </div>
              <div className="p-5 pt-0 mt-2 flex items-center justify-between">
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-sm font-bold text-[#2196F3] hover:text-[#0B3C5D] flex items-center gap-1 cursor-pointer"
                >
                  Read Article
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
