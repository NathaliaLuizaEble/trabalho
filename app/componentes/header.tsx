'use client';

import Link from 'next/link';
import { FiFileText } from 'react-icons/fi';
import Nav from './nav';

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white shadow-sm dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-xl text-blue-600 dark:text-blue-400"
          >
            <FiFileText size={24} />
            <span className="hidden sm:inline">CurrículoApp</span>
          </Link>

          {/* Navegação */}
          <Nav />
        </div>
      </div>
    </header>
  );
}