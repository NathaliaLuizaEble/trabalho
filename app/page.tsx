'use client';


import Link from 'next/link';
import { FiArrowRight, FiCheckCircle } from 'react-icons/fi';

export default function Home() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
         {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          {/* Left side - Text content */}
          <div className="flex-1 text-white max-w-2xl">
            <div className="mb-6 inline-block">
              <span className="px-4 py-2 bg-white bg-opacity-20 text-black rounded-full text-sm font-semibold backdrop-blur-sm">
                ✨ Gerenciador de Currículos
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Organize seus Currículos com Facilidade
            </h1>

            <p className="text-lg sm:text-xl text-blue-100 mb-8 leading-relaxed max-w-xl">
              Crie, organize e gerencie seus currículos profissionais em um único lugar. Importe, edite e compartilhe com facilidade.
            </p>

            {/* Features list */}
            <div className="flex flex-col gap-3 mb-8">
              {[
                'Múltiplos currículos em um único lugar',
                'Editor intuitivo e poderoso',
                'Compartilhamento fácil com empregadores'
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <FiCheckCircle className="text-green-300 flex-shrink-0" size={20} />
                  <span className="text-blue-50">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/sistema/paginas/curriculos/novo"
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition-all transform hover:scale-105 active:scale-95"
              >
                Criar Novo Currículo
                <FiArrowRight size={20} />
              </Link>

              <Link
                href="/sistema/paginas/curriculos"
                className="inline-flex items-center justify-center gap-2 bg-white bg-opacity-20 text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-opacity-30 transition-all backdrop-blur-sm border border-white border-opacity-30"
              >
                Ver Meus Currículos
              </Link>
            </div>
          </div>

          {/* Right side - Illustration */}
          <div className="hidden md:flex flex-1 items-center justify-center">
            <div className="relative">
              {/* Document cards stack */}
              <div className="relative w-64 h-80">
                {/* Card 1 */}
                <div className="absolute inset-0 bg-white rounded-2xl shadow-2xl p-6 transform translate-x-2 translate-y-2 opacity-80">
                  <div className="bg-blue-100 h-2 rounded w-20 mb-3"></div>
                  <div className="space-y-2">
                    <div className="bg-blue-50 h-2 rounded"></div>
                    <div className="bg-blue-50 h-2 rounded w-32"></div>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="absolute inset-0 bg-white rounded-2xl shadow-2xl p-6 transform -translate-x-1 translate-y-1 opacity-90">
                  <div className="bg-indigo-100 h-2 rounded w-20 mb-3"></div>
                  <div className="space-y-2">
                    <div className="bg-indigo-50 h-2 rounded"></div>
                    <div className="bg-indigo-50 h-2 rounded w-32"></div>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="absolute inset-0 bg-white rounded-2xl shadow-2xl p-6">
                  <div className="bg-purple-100 h-2 rounded w-20 mb-3"></div>
                  <div className="space-y-2">
                    <div className="bg-purple-50 h-2 rounded"></div>
                    <div className="bg-purple-50 h-2 rounded w-32"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
