export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400 dark:text-slate-500">
          <p>
            <span className="font-semibold text-slate-600 dark:text-slate-300">OOPS CodeVault</span>
            {' '}— 10 C++ Practicals. One CodeVault.
          </p>
          <p>
            10 programs indexed · 100% verified · C++11 · Vercel
          </p>
        </div>
      </div>
    </footer>
  );
}
