import { Link } from 'react-router-dom';
import {
  Binary, Database, GitBranch, Layers,
  FileText, Code, Search, ShieldAlert,
  ArrowRightLeft, ArrowRight
} from 'lucide-react';
import HeroSearch from '../components/HeroSearch';
import PracticalCard from '../components/PracticalCard';
import { allPracticals, CATEGORY_CARDS } from '../data/practicals_data';

const FEATURED_IDS = [1, 3, 4, 5, 8, 10];
const featuredPracticals = FEATURED_IDS.map(id => allPracticals.find(p => p.id === id)!).filter(Boolean);

const stats = [
  { label: 'Total Practicals', value: '10', sub: 'core syllabus questions' },
  { label: 'Programs Indexed', value: '10', sub: '100% available & verified' },
  { label: 'Core Topics', value: '8', sub: 'OOP paradigms covered' },
  { label: 'C++ Standard', value: 'C++11', sub: 'clean compilation guaranteed' },
];

const ICON_MAP: Record<string, React.ElementType> = {
  Binary,
  Database,
  GitBranch,
  Layers,
  FileText,
  Code,
  Search,
  ShieldAlert,
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      {/* ── Hero Section ── */}
      <section className="border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
          <div className="inline-flex items-center gap-2 bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs font-semibold px-3 py-1.5 rounded-full border border-primary-100 dark:border-primary-800 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse" />
            C++ Object-Oriented Practical Library
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white tracking-tight mb-4">
            10 OOPS Practicals.
            <span className="block text-primary-600">One CodeVault.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-slate-500 dark:text-slate-400 text-base sm:text-lg mb-10 leading-relaxed">
            A standalone practical library for Computer Engineering students. Search,
            study, copy, and download all 10 verified C++ OOP practical implementations,
            sequential algorithms, real outputs, and viva questions.
          </p>
          <div className="flex justify-center mb-6">
            <HeroSearch autoFocus={false} />
          </div>
          <p className="text-xs text-slate-400 dark:text-slate-500">
            Press <kbd className="px-1.5 py-0.5 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded text-xs font-mono">/</kbd> anywhere to search
          </p>
        </div>
      </section>

      {/* ── Stats Strip ── */}
      <section className="border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-y sm:divide-y-0 divide-slate-100 dark:divide-slate-800">
            {stats.map(stat => (
              <div key={stat.label} className="px-6 py-6 text-center">
                <p className="text-3xl font-bold text-slate-900 dark:text-white">{stat.value}</p>
                <p className="text-sm font-medium text-slate-600 dark:text-slate-300 mt-0.5">{stat.label}</p>
                <p className="text-xs text-slate-400 dark:text-slate-500">{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Browse by Category ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">Browse by Topic</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">Filter practicals by Object-Oriented concepts</p>
          </div>
          <Link
            to="/practicals"
            className="text-sm font-medium text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-1"
          >
            View all 10 <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {CATEGORY_CARDS.map(cat => {
            const Icon = ICON_MAP[cat.iconName] ?? Code;
            return (
              <Link
                key={cat.name}
                to={`/practicals?category=${encodeURIComponent(cat.name)}`}
                className="flex flex-col gap-2 p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-primary-300 dark:hover:border-primary-700 hover:shadow-sm transition-all group"
              >
                <div className="flex items-center justify-between">
                  <div className="p-2 rounded-lg bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400">
                    <Icon size={18} />
                  </div>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                    {cat.count} practical{cat.count > 1 ? 's' : ''}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white leading-tight group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {cat.name}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
                    {cat.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ── Featured Practicals ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">Featured Practicals</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">Core exam programs from the SPPU / University syllabus</p>
          </div>
          <Link
            to="/practicals"
            className="text-sm font-medium text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-1"
          >
            Browse all 10 <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {featuredPracticals.map(p => (
            <PracticalCard key={p.id} practical={p} view="grid" />
          ))}
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2">
            Ready to study all 10 verified practicals?
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 max-w-lg mx-auto">
            Explore step-by-step numbered algorithms, verified console output, high-yield viva Q&As, and direct source downloads.
          </p>
          <Link
            to="/practicals"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary-600 hover:bg-primary-700 text-white text-sm font-semibold rounded-lg transition-colors shadow-sm"
          >
            Open Full Library
            <ArrowRightLeft size={14} />
          </Link>
        </div>
      </section>
    </div>
  );
}
