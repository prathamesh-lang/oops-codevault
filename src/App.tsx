import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import LibraryPage from './pages/LibraryPage';
import PracticalDetailPage from './pages/PracticalDetailPage';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/practicals" element={<LibraryPage />} />
          <Route path="/practicals/:id" element={<PracticalDetailPage />} />
          <Route path="/about" element={<AboutPage />} />

          {/* Sibling compatibility & convenience redirects */}
          <Route path="/sets" element={<Navigate to="/practicals" replace />} />
          <Route path="/sets/:id" element={<Navigate to="/practicals/:id" replace />} />
          <Route path="/library" element={<Navigate to="/practicals" replace />} />
          <Route path="/categories" element={<Navigate to="/practicals" replace />} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
