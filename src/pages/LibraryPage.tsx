import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, X, LayoutGrid, List, ChevronDown } from 'lucide-react';
import PracticalCard from '../components/PracticalCard';
import { allPracticals, CATEGORIES_LIST, CATEGORY_COLORS } from '../data/practicals_data';
import type { Practical, ViewMode } from '../data/types';

function normalize(s: string) {
  return s.toLowerCase();
}

function matchesFilter(practical: Practical, query: string, category: string): boolean {
  if (category && practical.category !== category) return false;
  if (!query) return true;

  const terms = normalize(query).split(/\s+/).filter(Boolean);
  return terms.every(term => {
    if (practical.id.toString() === term) return true;
    if (`q${practical.id}` === term || `p${practical.id}` === term) return true;
    if (normalize(practical.title).includes(term)) return true;
    if (normalize(practical.shortTitle).includes(term)) return true;
    if (normalize(practical.category).includes(term)) return true;
    if (normalize(practical.aim).includes(term)) return true;
    if (normalize(practical.originalProblem).includes(term)) return true;
    if (normalize(practical.filename).includes(term)) return true;
    if (practical.concepts.some(c => normalize(c).includes(term))) return true;
    if (practical.operations.some(op => normalize(op).includes(term))) return true;
    if (practical.keyClassesAndFunctions.some(k => normalize(k.name).includes(term) || normalize(k.description).includes(term))) return true;
    if (normalize(practical.sourceCode).includes(term)) return true;
    return false;
  });
}

export default function LibraryPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('q') ?? '');
  const [category, setCategory] = useState(searchParams.get('category') ?? '');
  const [view, setView] = useState<ViewMode>('grid');
  const [sort, setSort] = useState<'number' | 'title' | 'category'>('number');

  // Sync URL search params
  useEffect(() => {
    const q = searchParams.get('q') ?? '';
    const cat = searchParams.get('category') ?? '';
    setQuery(q);
    setCategory(cat);
  }, [searchParams]);

  const results = allPracticals
    .filter(p => matchesFilter(p, query, category))
    .sort((a, b) => {
      if (sort === 'number') return a.id - b.id;
      if (sort === 'title') return a.shortTitle.localeCompare(b.shortTitle);
      if (sort === 'category') return a.category.localeCompare(b.category);
      return 0;
    });

  const hasFilters = query || category;

  const clearAll = () => {
    setQuery('');
    setCategory('');
    setSearchParams({});
  };

  const updateQuery = (q: string) => {
    setQuery(q);
    const params: Record<string, string> = {};
    if (q) params.q = q;
    if (category) params.category = category;
    setSearchParams(params);
  };

  const updateCategory = (cat: string) => {
    setCategory(cat);
    const params: Record<string, string> = {};
    if (query) params.q = query;
    if (cat) params.category = cat;
    setSearchParams(params);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      {/* ── Page Header ── */}
      <div className="border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
            OOPS Practical Library
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            {results.length} of {allPracticals.length} practicals
            {hasFilters ? ' (filtered)' : ''}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* ── Toolbar ── */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
            <input
              type="text"
              value={query}
              onChange={e => updateQuery(e.target.value)}
              placeholder="Search practicals, concepts, operators, keywords, code..."
              className="w-full pl-9 pr-9 py-2.5 text-sm bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-slate-900 dark:text-white placeholder-slate-400"
            />
            {query && (
              <button
                type="button"
                onClick={() => updateQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                <X size={14} />
              </button>
            )}
          </div>

          {/* Category Dropdown */}
          <div className="relative">
            <select
              value={category}
              onChange={e => updateCategory(e.target.value)}
              className="appearance-none w-full sm:w-56 pl-3 pr-8 py-2.5 text-sm bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-slate-700 dark:text-slate-200 cursor-pointer"
            >
              <option value="">All Topics ({allPracticals.length})</option>
              {CATEGORIES_LIST.map(c => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
            <ChevronDown size={13} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
          </div>

          {/* Sort Selector */}
          <div className="relative">
            <select
              value={sort}
              onChange={e => setSort(e.target.value as 'number' | 'title' | 'category')}
              className="appearance-none w-full sm:w-36 pl-3 pr-8 py-2.5 text-sm bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-slate-700 dark:text-slate-200 cursor-pointer"
            >
              <option value="number">Sort: Number</option>
              <option value="title">Sort: Title</option>
              <option value="category">Sort: Topic</option>
            </select>
            <ChevronDown size={13} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center gap-1 shrink-0 self-end sm:self-auto">
            <div className="flex border border-slate-200 dark:border-slate-700 rounded-md overflow-hidden bg-white dark:bg-slate-900">
              <button
                type="button"
                onClick={() => setView('grid')}
                className={`p-2 transition-colors ${view === 'grid' ? 'bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400' : 'text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800'}`}
                aria-label="Grid view"
              >
                <LayoutGrid size={15} />
              </button>
              <button
                type="button"
                onClick={() => setView('list')}
                className={`p-2 transition-colors ${view === 'list' ? 'bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400' : 'text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800'}`}
                aria-label="List view"
              >
                <List size={15} />
              </button>
            </div>
          </div>
        </div>

        {/* ── Active Filters Bar ── */}
        {hasFilters && (
          <div className="flex flex-wrap items-center gap-2 mb-5">
            <span className="text-xs text-slate-500 dark:text-slate-400">Active Filters:</span>
            {query && (
              <span className="inline-flex items-center gap-1 text-xs bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 border border-primary-200 dark:border-primary-800 px-2.5 py-0.5 rounded-full">
                <span>"{query}"</span>
                <button type="button" onClick={() => updateQuery('')} className="hover:text-primary-900 dark:hover:text-white">
                  <X size={11} />
                </button>
              </span>
            )}
            {category && (
              <span className={`inline-flex items-center gap-1 text-xs px-2.5 py-0.5 rounded-full ${CATEGORY_COLORS[category] ?? ''}`}>
                <span>{category}</span>
                <button type="button" onClick={() => updateCategory('')} className="hover:opacity-75">
                  <X size={11} />
                </button>
              </span>
            )}
            <button
              type="button"
              onClick={clearAll}
              className="text-xs text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-white underline ml-1"
            >
              Clear all
            </button>
          </div>
        )}

        {/* ── Results Container ── */}
        {results.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-4">
            <Search size={32} className="text-slate-300 dark:text-slate-600 mb-3" />
            <p className="text-base font-semibold text-slate-900 dark:text-white mb-1">No practicals found</p>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 max-w-sm">
              We couldn't find any practical matching "{query || category}". Try searching for concepts like "operator", "inheritance", or "template".
            </p>
            <button
              type="button"
              onClick={clearAll}
              className="px-4 py-2 bg-primary-600 text-white text-xs font-semibold rounded-lg hover:bg-primary-700 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : view === 'grid' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
            {results.map(practical => (
              <PracticalCard key={practical.id} practical={practical} view="grid" />
            ))}
          </div>
        ) : (
          <div className="flex flex-col gap-2">
            {results.map(practical => (
              <PracticalCard key={practical.id} practical={practical} view="list" />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
