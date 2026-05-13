'use client';

import Link from 'next/link';
import { FiFileText, FiMail, FiPhone, FiGithub, FiLinkedin } from 'react-icons/fi';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-slate-800 to-slate-900 dark:from-black dark:to-slate-950 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand section */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <FiFileText size={28} className="text-blue-400" />
              <span className="text-xl font-bold">CurrículoApp</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Plataforma completa para gerenciamento e organização de seus currículos profissionais.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <nav className="flex flex-col gap-2">
              <Link
                href="/"
                className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
              >
                Início
              </Link>
              <Link
                href="/sistema/paginas/curriculos"
                className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
              >
                Meus Currículos
              </Link>
              <Link
                href="/sistema/paginas/curriculos/novo"
                className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
              >
                Novo Currículo
              </Link>
            </nav>
          </div>

          {/* Contact section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:contato@curriculoapp.com"
                className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors text-sm"
              >
                <FiMail size={16} />
                contato@curriculoapp.com
              </a>
              <a
                href="tel:+5511999999999"
                className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors text-sm"
              >
                <FiPhone size={16} />
                +55 (11) 99999-9999
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-700"></div>

        {/* Bottom footer */}
        <div className="py-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © {currentYear} CurrículoApp. Todos os direitos reservados.
          </p>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="p-2 rounded-full hover:bg-gray-700 transition-colors text-gray-400 hover:text-blue-400"
              aria-label="GitHub"
            >
              <FiGithub size={20} />
            </a>
            <a
              href="#"
              className="p-2 rounded-full hover:bg-gray-700 transition-colors text-gray-400 hover:text-blue-400"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={20} />
            </a>
          </div>
        </div>

        {/* Tech stack */}
        <div className="py-6 border-t border-gray-700 text-center">
          <p className="text-xs text-gray-500">
            Desenvolvido com Next.js 16, React 19 e Tailwind CSS 4
          </p>
        </div>
      </div>
    </footer>
  );
}