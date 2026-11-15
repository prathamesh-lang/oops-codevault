import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Code2, Sun, Moon, Menu, X, Search, ChevronDown } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { CATEGORIES_LIST } from '../data/practicals_data';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [topicsDropOpen, setTopicsDropOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const searchRef = useRef<HTMLInputElement>(null);
  const dropRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Keyboard shortcut "/" to focus search and "Escape" to close
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === '/' && (e.target === document.body || (e.target as HTMLElement).tagName === 'A')) {
        e.preventDefault();
        setSearchOpen(true);
        setTimeout(() => searchRef.current?.focus(), 50);
      }
      if (e.key === 'Escape') {
        setSearchOpen(false);
        setSearchQuery('');
        setMobileOpen(false);
        setTopicsDropOpen(false);
      }
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) {
        setTopicsDropOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/practicals?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
      setSearchQuery('');
      setMobileOpen(false);
    }
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-950/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0 group">
            <div className="w-7 h-7 rounded-md bg-primary-600 flex items-center justify-center shadow-sm">
              <Code2 size={15} className="text-white" />
            </div>
            <span className="font-semibold text-slate-900 dark:text-white text-sm tracking-tight">
              OOPS <span className="text-primary-600">CodeVault</span>
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1">
            <Link
              to="/"
              className="px-3 py-1.5 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md transition-colors"
            >
              Home
            </Link>
            <Link
              to="/practicals"
              className="px-3 py-1.5 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md transition-colors"
            >
              All 10 Practicals
            </Link>

            {/* Topics Dropdown */}
            <div className="relative" ref={dropRef}>
              <button
                type="button"
                onClick={() => setTopicsDropOpen(v => !v)}
                className="flex items-center gap-1 px-3 py-1.5 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md transition-colors"
                aria-expanded={topicsDropOpen}
              >
                Topics
                <ChevronDown size={14} className={`transition-transform duration-200 ${topicsDropOpen ? 'rotate-180' : ''}`} />
              </button>
              {topicsDropOpen && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg shadow-lg py-1 z-50 animate-in fade-in zoom-in-95 duration-100">
                  <div className="px-3 py-1 text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider border-b border-slate-100 dark:border-slate-800 mb-1">
                    OOPS Core Topics
                  </div>
                  {CATEGORIES_LIST.map(cat => (
                    <Link
                      key={cat}
                      to={`/practicals?category=${encodeURIComponent(cat)}`}
                      onClick={() => setTopicsDropOpen(false)}
                      className="block px-3 py-2 text-sm text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                    >
                      {cat}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/about"
              className="px-3 py-1.5 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md transition-colors"
            >
              About
            </Link>
          </div>

          {/* Right Side Controls */}
          <div className="flex items-center gap-2">
            {/* Search Input Trigger */}
            {!searchOpen ? (
              <button
                onClick={() => { setSearchOpen(true); setTimeout(() => searchRef.current?.focus(), 50); }}
                className="hidden md:flex items-center gap-2 px-3 py-1.5 text-sm text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-md transition-colors border border-slate-200 dark:border-slate-700"
                aria-label="Open search input"
              >
                <Search size={13} />
                <span>Search practicals...</span>
                <kbd className="text-xs bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 px-1.5 py-0.5 rounded text-slate-400 font-mono">/</kbd>
              </button>
            ) : (
              <form onSubmit={handleSearchSubmit} className="hidden md:flex items-center gap-2">
                <div className="relative">
                  <Search size={14} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                  <input
                    ref={searchRef}
                    type="text"
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    placeholder="Search practicals, concepts, code..."
                    className="pl-8 pr-8 py-1.5 text-sm bg-white dark:bg-slate-900 border border-primary-400 dark:border-primary-500 rounded-md outline-none ring-2 ring-primary-200 dark:ring-primary-900/50 w-72 text-slate-900 dark:text-white placeholder-slate-400"
                    autoComplete="off"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery('')}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                      aria-label="Clear search input"
                    >
                      <X size={12} />
                    </button>
                  )}
                </div>
                <button
                  type="button"
                  onClick={() => { setSearchOpen(false); setSearchQuery(''); }}
                  className="p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-md"
                  aria-label="Close search"
                >
                  <X size={16} />
                </button>
              </form>
            )}

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle light or dark theme"
            >
              {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(v => !v)}
              className="md:hidden p-2 rounded-md text-slate-500 hover:text-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileOpen && (
        <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-4 py-3 space-y-1">
          <form onSubmit={handleSearchSubmit} className="mb-3">
            <div className="relative">
              <Search size={14} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Search practicals, concepts..."
                className="w-full pl-8 pr-3 py-2 text-sm bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-md outline-none text-slate-900 dark:text-white"
              />
            </div>
          </form>
          {[
            { to: '/', label: 'Home' },
            { to: '/practicals', label: 'All 10 Practicals' },
            { to: '/practicals?category=Operator+Overloading', label: 'Operator Overloading' },
            { to: '/practicals?category=Inheritance', label: 'Inheritance Types' },
            { to: '/practicals?category=File+Handling', label: 'File Handling' },
            { to: '/practicals?category=Templates+%26+Generics', label: 'Templates' },
            { to: '/practicals?category=Exception+Handling', label: 'Exception Handling' },
            { to: '/about', label: 'About' },
          ].map(item => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800 rounded-md transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
