'use client';

import Link from 'next/link';
import { useState } from 'react';
import {
  FiMenu,
  FiX,
  FiHome,
  FiFileText,
  FiLogIn,
} from 'react-icons/fi';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { label: 'Início', href: '/', icon: FiHome },
    {
      label: 'Meus Currículos',
      href: '/sistema/paginas/curriculos',
      icon: FiFileText,
    },
  ];

  return (
    <>
      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-2 text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400 transition-colors font-medium"
            >
              <Icon size={18} />
              {item.label}
            </Link>
          );
        })}

        <Link
          href="/sistema/paginas/curriculos"
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
        >
          <FiLogIn size={18} />
          Login
        </Link>
      </div>

      {/* Mobile Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
      >
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-slate-700 md:hidden">
          <div className="py-4 space-y-3 px-4">
            {menuItems.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-blue-50 dark:text-gray-200 dark:hover:bg-slate-800 rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <Icon size={20} />
                  {item.label}
                </Link>
              );
            })}

            <Link
              href="/sistema/paginas/curriculos"
              className="flex items-center gap-3 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              <FiLogIn size={20} />
              Login
            </Link>
          </div>
        </div>
      )}
    </>
  );
}