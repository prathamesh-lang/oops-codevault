import { Link } from 'react-router-dom';
import { AlertCircle, ArrowLeft } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <AlertCircle size={44} className="text-slate-300 dark:text-slate-600 mb-4" />
      <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Page Not Found</h1>
      <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 max-w-sm">
        The practical or page you are looking for does not exist or may have been moved.
      </p>
      <Link
        to="/practicals"
        className="inline-flex items-center gap-2 px-4 py-2 bg-primary-600 text-white text-sm font-medium rounded-lg hover:bg-primary-700 transition-colors shadow-sm"
      >
        <ArrowLeft size={14} />
        Back to Practicals
      </Link>
    </div>
  );
}
