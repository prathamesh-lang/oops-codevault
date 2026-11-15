import { Link, useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ChevronLeft, ChevronRight, Home, HelpCircle } from 'lucide-react';
import CodeViewer from '../components/CodeViewer';
import { allPracticals, CATEGORY_COLORS } from '../data/practicals_data';

export default function PracticalDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const practicalId = parseInt(id ?? '', 10);
  const practical = allPracticals.find(p => p.id === practicalId);

  // Prev & Next navigation
  const currentIdx = allPracticals.findIndex(p => p.id === practicalId);
  const prevPractical = currentIdx > 0 ? allPracticals[currentIdx - 1] : null;
  const nextPractical = currentIdx < allPracticals.length - 1 ? allPracticals[currentIdx + 1] : null;

  if (!practical) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
        <HelpCircle size={44} className="text-slate-300 dark:text-slate-600 mb-4" />
        <h1 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Practical Not Found</h1>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
          Practical #{id} does not exist in the OOPS CodeVault library.
        </p>
        <Link
          to="/practicals"
          className="inline-flex items-center gap-2 px-4 py-2 bg-primary-600 text-white text-sm font-medium rounded-lg hover:bg-primary-700 transition-colors"
        >
          <ArrowLeft size={14} />
          Back to All Practicals
        </Link>
      </div>
    );
  }

  const badgeClass = CATEGORY_COLORS[practical.category] ?? 'text-slate-600 bg-slate-100 dark:bg-slate-800';

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-16">
      {/* ── Breadcrumb Bar ── */}
      <div className="border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
            <Link to="/" className="hover:text-slate-700 dark:hover:text-white flex items-center gap-1">
              <Home size={12} /> Home
            </Link>
            <span>/</span>
            <Link to="/practicals" className="hover:text-slate-700 dark:hover:text-white">Practicals</Link>
            <span>/</span>
            <span className="text-slate-900 dark:text-white font-medium">Practical {practical.id}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* ── Practical Header ── */}
        <div className="mb-6">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 text-sm font-bold text-slate-600 dark:text-slate-300">
              #{practical.id}
            </span>
            <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${badgeClass}`}>
              {practical.category}
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-full font-mono">
              {practical.filename}
            </span>
          </div>

          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
            {practical.title}
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1.5 leading-relaxed">
            {practical.aim}
          </p>
        </div>

        {/* ── Original Problem Statement Alert Box ── */}
        <div className="mb-6 p-4 sm:p-5 rounded-xl border border-indigo-100 dark:border-indigo-900/50 bg-indigo-50/50 dark:bg-indigo-950/20">
          <h2 className="text-xs font-bold uppercase tracking-wider text-primary-700 dark:text-primary-300 mb-2">
            Original Syllabus Problem Statement
          </h2>
          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 italic leading-relaxed">
            "{practical.originalProblem}"
          </p>
        </div>

        {/* ── Tabbed Code & Algorithm Viewer ── */}
        <CodeViewer practical={practical} />

        {/* ── Key Operations & Concepts ── */}
        <div className="mt-6 p-4 sm:p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
            Key Operations & Concepts
          </h3>
          <div className="flex flex-wrap gap-2">
            {practical.operations.map((op, i) => (
              <span
                key={i}
                className="text-xs text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-2.5 py-1 rounded-md"
              >
                {op}
              </span>
            ))}
          </div>
        </div>

        {/* ── Previous / Next Navigation Controls ── */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-200 dark:border-slate-800">
          <button
            type="button"
            onClick={() => navigate('/practicals')}
            className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            <ArrowLeft size={15} />
            Back to All Practicals
          </button>

          <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-end">
            {prevPractical && (
              <Link
                to={`/practicals/${prevPractical.id}`}
                className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg hover:border-primary-300 dark:hover:border-primary-700 text-slate-700 dark:text-slate-200 transition-colors shadow-2xs"
              >
                <ChevronLeft size={14} />
                <span>Practical {prevPractical.id}</span>
              </Link>
            )}
            {nextPractical && (
              <Link
                to={`/practicals/${nextPractical.id}`}
                className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg hover:border-primary-300 dark:hover:border-primary-700 text-slate-700 dark:text-slate-200 transition-colors shadow-2xs"
              >
                <span>Practical {nextPractical.id}</span>
                <ChevronRight size={14} />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
