import { Link } from 'react-router-dom';
import { Code2, Github, BookOpen, Search, Download, Copy, CheckCircle } from 'lucide-react';
import { allPracticals, CATEGORIES_LIST } from '../data/practicals_data';

export default function AboutPage() {
  const categoryCounts = CATEGORIES_LIST.map(cat => ({
    name: cat,
    count: allPracticals.filter(p => p.category === cat).length,
  }));

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-xl bg-primary-600 flex items-center justify-center shadow-sm">
            <Code2 size={20} className="text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white">OOPS CodeVault</h1>
            <p className="text-sm text-slate-500 dark:text-slate-400">10 C++ Practicals. One CodeVault.</p>
          </div>
        </div>

        {/* Description */}
        <div className="prose prose-sm dark:prose-invert max-w-none mb-10">
          <p className="text-slate-700 dark:text-slate-200 leading-relaxed text-sm sm:text-base">
            OOPS CodeVault is a standalone, public-facing C++ Object-Oriented Programming practical library
            containing all 10 syllabus practical assignments with verified standalone C++ source code,
            step-by-step numbered algorithms, real compiled outputs, and high-yield viva questions. Built
            for Computer Engineering students to study, understand, copy, and download solutions for their
            practical exams.
          </p>
        </div>

        {/* Source Audit Box */}
        <div className="mb-10 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm">
          <div className="px-5 py-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
            <h2 className="font-semibold text-slate-900 dark:text-white text-sm">Source Audit Report</h2>
            <span className="inline-flex items-center gap-1 text-xs font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30 px-2 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800">
              <CheckCircle size={12} />
              100% Verified
            </span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-y sm:divide-y-0 divide-slate-100 dark:divide-slate-800">
            {[
              { label: 'Total Practicals', value: '10' },
              { label: 'Available & Verified', value: '10' },
              { label: 'Missing Sources', value: '0' },
              { label: 'OOP Categories', value: '8' },
            ].map(s => (
              <div key={s.label} className="px-5 py-4 text-center">
                <p className="text-2xl font-bold text-slate-900 dark:text-white">{s.value}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
          <div className="px-5 py-3 bg-emerald-50 dark:bg-emerald-900/10 border-t border-emerald-100 dark:border-emerald-900/20">
            <p className="text-xs text-emerald-700 dark:text-emerald-400">
              All 10 programs have been independently compiled with <code>g++ -std=c++11 -Wall -Wextra</code> and validated against test cases.
            </p>
          </div>
        </div>

        {/* Category Breakdown */}
        <div className="mb-10 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm">
          <div className="px-5 py-4 border-b border-slate-100 dark:border-slate-800">
            <h2 className="font-semibold text-slate-900 dark:text-white text-sm">Category Breakdown</h2>
          </div>
          <div className="divide-y divide-slate-100 dark:divide-slate-800">
            {categoryCounts.map(cat => (
              <div key={cat.name} className="flex items-center justify-between px-5 py-3">
                <span className="text-sm text-slate-700 dark:text-slate-200">{cat.name}</span>
                <span className="text-sm font-semibold text-slate-900 dark:text-white">{cat.count} practical{cat.count > 1 ? 's' : ''}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="mb-10">
          <h2 className="font-semibold text-slate-900 dark:text-white mb-4">Core Features</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { icon: Search, title: 'Global Search', desc: 'Search by practical number, topic, keyword, or C++ source code.' },
              { icon: BookOpen, title: 'Step-by-Step Algorithms', desc: 'Practical-record style sequential algorithms for every assignment.' },
              { icon: Copy, title: 'Copy Code', desc: 'One-click copy of the complete C++ source code with instant feedback.' },
              { icon: Download, title: 'Download .cpp', desc: 'Download the exact standalone C++ source file ready to compile.' },
            ].map(f => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="flex gap-3 p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl">
                  <div className="shrink-0 w-8 h-8 rounded-lg bg-primary-50 dark:bg-primary-900/30 flex items-center justify-center">
                    <Icon size={15} className="text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">{f.title}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{f.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-10 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm">
          <div className="px-5 py-4 border-b border-slate-100 dark:border-slate-800">
            <h2 className="font-semibold text-slate-900 dark:text-white text-sm">Technology Stack</h2>
          </div>
          <div className="px-5 py-4 grid sm:grid-cols-2 gap-2">
            {[
              ['React 18', 'Component UI library'],
              ['TypeScript', 'Type safety and schemas'],
              ['Vite 5', 'Next-generation build tool'],
              ['Tailwind CSS', 'Utility-first dark/light styling'],
              ['React Router v6', 'Client-side SPA routing'],
              ['Prism.js', 'C++ syntax highlighting'],
              ['Lucide React', 'Consistent iconography'],
              ['Vercel', 'Zero-config static deployment'],
            ].map(([name, desc]) => (
              <div key={name} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-500 shrink-0" />
                <span className="text-sm font-medium text-slate-900 dark:text-white">{name}</span>
                <span className="text-xs text-slate-500 dark:text-slate-400">— {desc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* GitHub Link Card */}
        <div className="flex items-center gap-3 p-4 bg-slate-900 dark:bg-slate-800/90 rounded-xl border border-slate-800">
          <Github size={20} className="text-white shrink-0" />
          <div className="flex-1">
            <p className="text-sm font-medium text-white">GitHub Repository</p>
            <p className="text-xs text-slate-400 font-mono">prathamesh-lang/oops-codevault</p>
          </div>
          <a
            href="https://github.com/prathamesh-lang/oops-codevault"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-primary-600 hover:bg-primary-500 text-white transition-colors"
          >
            View Repo →
          </a>
        </div>

        {/* Back to Library */}
        <div className="mt-8 text-center">
          <Link
            to="/practicals"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary-600 hover:bg-primary-700 text-white text-sm font-semibold rounded-lg transition-colors shadow-sm"
          >
            Browse All 10 Practicals
          </Link>
        </div>
      </div>
    </div>
  );
}
