import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, ArrowRight } from 'lucide-react';
import { allPracticals } from '../data/practicals_data';
import type { Practical } from '../data/types';

function normalize(s: string) {
  return s.toLowerCase();
}

interface HeroSearchProps {
  autoFocus?: boolean;
}

export default function HeroSearch({ autoFocus = false }: HeroSearchProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Practical[]>([]);
  const [showResults, setShowResults] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (autoFocus && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [autoFocus]);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      setShowResults(false);
      return;
    }
    const q = normalize(query.trim());
    const terms = q.split(/\s+/).filter(Boolean);

    const filtered = allPracticals
      .filter(p => {
        return terms.every(term => {
          if (p.id.toString() === term) return true;
          if (`q${p.id}` === term || `p${p.id}` === term) return true;
          if (normalize(p.title).includes(term)) return true;
          if (normalize(p.shortTitle).includes(term)) return true;
          if (normalize(p.category).includes(term)) return true;
          if (normalize(p.aim).includes(term)) return true;
          if (normalize(p.filename).includes(term)) return true;
          if (p.concepts.some(c => normalize(c).includes(term))) return true;
          if (p.operations.some(op => normalize(op).includes(term))) return true;
          if (normalize(p.sourceCode).includes(term)) return true;
          return false;
        });
      })
      .slice(0, 6);

    setResults(filtered);
    setShowResults(true);
  }, [query]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/practicals?q=${encodeURIComponent(query.trim())}`);
      setShowResults(false);
    }
  };

  const handleSelect = (p: Practical) => {
    navigate(`/practicals/${p.id}`);
    setShowResults(false);
    setQuery('');
  };

  return (
    <div className="relative w-full max-w-xl">
      <form onSubmit={handleSubmit}>
        <div className="relative flex items-center">
          <Search size={18} className="absolute left-4 text-slate-400 pointer-events-none" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            onFocus={() => query && setShowResults(true)}
            onBlur={() => setTimeout(() => setShowResults(false), 200)}
            placeholder='Search: "Q1" · "Operator Overloading" · "Matrix ADT" · "ATM" ...'
            className="w-full pl-11 pr-14 py-3.5 text-sm bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-400 text-slate-900 dark:text-white placeholder-slate-400"
          />
          {query && (
            <button
              type="button"
              onClick={() => { setQuery(''); setShowResults(false); inputRef.current?.focus(); }}
              className="absolute right-12 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
            >
              <X size={14} />
            </button>
          )}
          <button
            type="submit"
            className="absolute right-2 px-3 py-2 bg-primary-600 hover:bg-primary-700 text-white text-xs font-medium rounded-lg transition-colors flex items-center gap-1 shadow-sm"
          >
            <ArrowRight size={13} />
          </button>
        </div>
      </form>

      {/* Floating Dropdown Results */}
      {showResults && results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-1.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl shadow-xl overflow-hidden z-50 text-left">
          {results.map(p => (
            <button
              key={p.id}
              type="button"
              onMouseDown={() => handleSelect(p)}
              className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors border-b border-slate-100 dark:border-slate-800 last:border-0"
            >
              <span className="shrink-0 w-8 h-8 rounded-lg bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-xs font-bold flex items-center justify-center">
                #{p.id}
              </span>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-slate-900 dark:text-white truncate">
                  {p.shortTitle}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">{p.category} · {p.filename}</p>
              </div>
            </button>
          ))}
          <button
            type="button"
            onMouseDown={() => { navigate(`/practicals?q=${encodeURIComponent(query)}`); setShowResults(false); }}
            className="w-full px-4 py-2.5 text-xs font-medium text-primary-600 dark:text-primary-400 hover:bg-slate-50 dark:hover:bg-slate-800 text-center transition-colors block border-t border-slate-100 dark:border-slate-800"
          >
            View all matching practicals for "{query}" →
          </button>
        </div>
      )}

      {showResults && query && results.length === 0 && (
        <div className="absolute top-full left-0 right-0 mt-1.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl shadow-xl px-4 py-4 text-sm text-slate-500 dark:text-slate-400 z-50 text-center">
          No practicals found for "{query}"
        </div>
      )}
    </div>
  );
}
