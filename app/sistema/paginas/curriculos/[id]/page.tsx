'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useState } from 'react';
import { FiArrowLeft, FiEdit2, FiSave, FiX, FiDownload, FiShare2, FiTrash2 } from 'react-icons/fi';

export default function CurriculoPage() {
  const params = useParams();
  const id = params.id;
  const [isEditing, setIsEditing] = useState(false);

  // Dados de exemplo do currículo
  const curriculo = {
    id,
    titulo: 'Currículo Profissional',
    nomeCompleto: 'Nathália Luiza Eble',
    email: 'nathalia.eble@exemplo.com',
    telefone: '(47) 99229-2332',
    endereco: 'Blumenau, Santa Catarina, Brasil',
    resumoProfissional: 'Desenvolvedora de sistema com experiencia em desenvolvimento de software, Apaixonada por tecnologia e inovação, buscando sempre aprimorar minhas habilidades e contribuir para projetos desafiadores.',
    experiencias: [
      {
        id: 1,
        cargo: 'Desenvolvedora de sistemas',
        empresa: 'Cedup',
        periodo: '2024 - Presente',
        descricao: 'Desenvolvimento de aplicações web com React e Node.js'
      },
      {
        id: 2,
        cargo: 'Desenvolvedora de sistemas',
        empresa: 'StartUp Inovadora',
        periodo: '2024 - Presente',
        descricao: 'Contribuição no desenvolvimento frontend e backend.',
      }
    ],
    formacao: [
      {
        id: 1,
        curso: 'Tecnico em desenvolvimento de sistemas',
        instituicao: 'Cedup Herman Hering',
        ano: '2026'
      },
      {
        id: 2,
        curso: 'Tecnico em desenvolvimento de sistemas',
        instituicao: 'Cedup Herman Hering',
        ano: '2026'
      }
    ],
    habilidades: ['React', 'Node.js', 'TypeScript', 'TailwindCSS', 'Git', 'java', 'HTML', 'Css']
  };

  return (
    <div className="bg-gray-50 dark:bg-slate-900 min-h-screen py-8 sm:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/sistema/paginas/curriculos"
            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors font-medium mb-6"
          >
            <FiArrowLeft size={18} />
            Voltar
          </Link>

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                {curriculo.titulo}
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                {curriculo.nomeCompleto}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 flex-wrap">
              {!isEditing && (
                <>
                  <button
                    onClick={() => setIsEditing(true)}
                    className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm"
                  >
                    <FiEdit2 size={18} />
                    Editar
                  </button>
                  <button className="flex items-center gap-2 bg-gray-200 dark:bg-slate-700 text-gray-700 dark:text-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300 dark:hover:bg-slate-600 transition-colors font-medium text-sm">
                    <FiDownload size={18} />
                    PDF
                  </button>
                  <button className="flex items-center gap-2 bg-gray-200 dark:bg-slate-700 text-gray-700 dark:text-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300 dark:hover:bg-slate-600 transition-colors font-medium text-sm">
                    <FiShare2 size={18} />
                    Compartilhar
                  </button>
                </>
              )}
              {isEditing && (
                <>
                  <button
                    onClick={() => setIsEditing(false)}
                    className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors font-medium text-sm"
                  >
                    <FiSave size={18} />
                    Salvar
                  </button>
                  <button
                    onClick={() => setIsEditing(false)}
                    className="flex items-center gap-2 bg-gray-200 dark:bg-slate-700 text-gray-700 dark:text-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300 dark:hover:bg-slate-600 transition-colors font-medium text-sm"
                  >
                    <FiX size={18} />
                    Cancelar
                  </button>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Seção: Dados Pessoais */}
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-gray-200 dark:border-slate-700 p-8 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Dados Pessoais</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Nome Completo</label>
              <p className="text-gray-900 dark:text-white">{curriculo.nomeCompleto}</p>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Email</label>
              <p className="text-gray-900 dark:text-white">{curriculo.email}</p>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Telefone</label>
              <p className="text-gray-900 dark:text-white">{curriculo.telefone}</p>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Endereço</label>
              <p className="text-gray-900 dark:text-white">{curriculo.endereco}</p>
            </div>
          </div>

          <div className="mt-6">
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Resumo Profissional</label>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{curriculo.resumoProfissional}</p>
          </div>
        </div>

        {/* Seção: Experiências Profissionais */}
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-gray-200 dark:border-slate-700 p-8 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Experiências Profissionais</h2>

          <div className="space-y-6">
            {curriculo.experiencias.map((exp) => (
              <div key={exp.id} className="pb-6 border-b border-gray-200 dark:border-slate-700 last:border-b-0 last:pb-0">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">{exp.cargo}</h3>
                    <p className="text-blue-600 dark:text-blue-400">{exp.empresa}</p>
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">{exp.periodo}</span>
                </div>
                <p className="text-gray-700 dark:text-gray-300">{exp.descricao}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Seção: Formação Acadêmica */}
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-gray-200 dark:border-slate-700 p-8 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Formação Acadêmica</h2>

          <div className="space-y-6">
            {curriculo.formacao.map((form) => (
              <div key={form.id} className="pb-6 border-b border-gray-200 dark:border-slate-700 last:border-b-0 last:pb-0">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{form.curso}</h3>
                <p className="text-blue-600 dark:text-blue-400 mb-1">{form.instituicao}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{form.ano}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Seção: Habilidades */}
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-gray-200 dark:border-slate-700 p-8 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Habilidades</h2>

          <div className="flex flex-wrap gap-3">
            {curriculo.habilidades.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-full font-medium text-sm border border-blue-200 dark:border-blue-800"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Zona de Risco */}
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-red-900 dark:text-red-200 mb-4">Zona de Risco</h2>
          <p className="text-red-800 dark:text-red-300 mb-6">
            As ações abaixo são permanentes e não podem ser desfeitas.
          </p>
          <button className="flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors font-semibold">
            <FiTrash2 size={18} />
            Deletar este Currículo
          </button>
        </div>
      </div>
    </div>
  );
}

