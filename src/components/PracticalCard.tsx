import { Link, useNavigate } from 'react-router-dom';
import { ChevronRight, FileCode } from 'lucide-react';
import type { Practical, ViewMode } from '../data/types';
import { CATEGORY_COLORS } from '../data/practicals_data';

interface PracticalCardProps {
  practical: Practical;
  view?: ViewMode;
}

export default function PracticalCard({ practical, view = 'grid' }: PracticalCardProps) {
  const navigate = useNavigate();
  const badgeClass = CATEGORY_COLORS[practical.category] ?? 'text-slate-600 bg-slate-100 dark:bg-slate-800';
  const concepts = practical.concepts.slice(0, 3);

  if (view === 'list') {
    return (
      <div
        onClick={() => navigate(`/practicals/${practical.id}`)}
        className="group flex items-center gap-4 px-4 py-3.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg hover:border-primary-300 dark:hover:border-primary-700 hover:shadow-sm cursor-pointer transition-all"
      >
        {/* Number badge */}
        <div className="shrink-0 w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
          <span className="text-xs font-bold text-slate-600 dark:text-slate-300">
            #{practical.id}
          </span>
        </div>

        {/* Title + category */}
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-slate-900 dark:text-white truncate group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
            {practical.shortTitle}
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400 truncate">{practical.category}</p>
        </div>

        {/* Concept pills */}
        <div className="hidden lg:flex items-center gap-1.5">
          {concepts.slice(0, 2).map(c => (
            <span
              key={c}
              className="text-xs text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/80 px-2 py-0.5 rounded border border-slate-200 dark:border-slate-700/60"
            >
              {c}
            </span>
          ))}
        </div>

        {/* Category badge */}
        <span className={`shrink-0 hidden sm:inline-flex text-xs font-medium px-2.5 py-0.5 rounded-full ${badgeClass}`}>
          {practical.category}
        </span>

        {/* Lines */}
        <span className="shrink-0 hidden sm:inline text-xs text-slate-400 dark:text-slate-500">
          {practical.lineCount} lines
        </span>

        <ChevronRight size={15} className="shrink-0 text-slate-300 dark:text-slate-600 group-hover:text-primary-400 transition-colors" />
      </div>
    );
  }

  // Grid view
  return (
    <Link
      to={`/practicals/${practical.id}`}
      className="group flex flex-col bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl hover:border-primary-300 dark:hover:border-primary-700 hover:shadow-md transition-all overflow-hidden"
    >
      {/* Header */}
      <div className="px-4 pt-4 pb-3">
        <div className="flex items-start justify-between gap-2 mb-2.5">
          <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-slate-100 dark:bg-slate-800 text-xs font-bold text-slate-600 dark:text-slate-300 shrink-0">
            #{practical.id}
          </span>
          <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${badgeClass}`}>
            {practical.category}
          </span>
        </div>

        <h3 className="text-sm font-semibold text-slate-900 dark:text-white leading-snug group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors line-clamp-2 min-h-[2.5rem]">
          {practical.shortTitle}
        </h3>

        <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 line-clamp-2">
          {practical.aim}
        </p>
      </div>

      {/* Concepts */}
      <div className="px-4 pb-4 flex flex-wrap gap-1 mt-auto">
        {concepts.map(c => (
          <span
            key={c}
            className="text-xs text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/80 px-2 py-0.5 rounded border border-slate-200 dark:border-slate-700/60 truncate max-w-[150px]"
          >
            {c}
          </span>
        ))}
      </div>

      {/* Footer line */}
      <div className="mt-auto border-t border-slate-100 dark:border-slate-800 px-4 py-2.5 flex items-center justify-between text-xs text-slate-400 dark:text-slate-500 bg-slate-50/50 dark:bg-slate-900/50">
        <span className="flex items-center gap-1 font-mono">
          <FileCode size={13} className="text-primary-500" />
          {practical.filename}
        </span>
        <span>{practical.lineCount} lines</span>
      </div>
    </Link>
  );
}
