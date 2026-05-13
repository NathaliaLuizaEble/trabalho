'use client';

import Link from 'next/link';
import { FiPlus, FiArrowLeft, FiGrid, FiEye, FiEdit2, FiDownload, FiTrash2, FiSearch } from 'react-icons/fi';
import { useState } from 'react';

export default function CurriculosPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('todos');

  // Dados de exemplo
  const curriculos = [
    {
      id: 1,
      titulo: 'Currículo Profissional',
      nome: 'João Silva Santos',
      cargoDesejado: 'Desenvolvedor Full Stack Senior',
      email: 'joao.silva@exemplo.com',
      telefone: '(11) 98765-4321',
      cpf: '123.456.789-00',
      descricao: 'Currículo completo com experiências e formação',
      resumoProfissional: 'Desenvolvedor Full Stack com 5+ anos de experiência em desenvolvimento de aplicações web modernas. Apaixonado por tecnologia e sempre buscando aprender novas ferramentas.',
      dataModificacao: '12 maio 2026',
      status: 'Completo',
      dataC: '2026-05-12',
      experiencias: [
        { cargo: 'Desenvolvedor Full Stack', empresa: 'Tech Company Brasil', periodo: '2023 - Presente', descricao: 'Desenvolvimento de aplicações web com React e Node.js' },
        { cargo: 'Desenvolvedor Junior', empresa: 'StartUp Inovadora', periodo: '2021 - 2023', descricao: 'Contribuição no desenvolvimento frontend' }
      ],
      formacoes: [
        { curso: 'Bacharelado em Ciência da Computação', instituicao: 'Universidade Federal de São Paulo', ano: '2020' },
        { curso: 'Especialização em Web Development', instituicao: 'Code Academy Brasil', ano: '2021' }
      ],
      habilidades: ['React', 'Node.js', 'TypeScript', 'TailwindCSS', 'Git', 'Docker', 'PostgreSQL', 'MongoDB']
    },
    {
      id: 2,
      titulo: 'Currículo Executivo',
      nome: 'Maria Oliveira Costa',
      cargoDesejado: 'Gerente de Projetos',
      email: 'maria.costa@exemplo.com',
      telefone: '(11) 99876-5432',
      cpf: '987.654.321-00',
      descricao: 'Versão resumida para posições sênior',
      resumoProfissional: 'Gerente de Projetos com experiência em metodologias ágeis e liderança de equipes. Certificada em PMP com histórico de projetos bem-sucedidos.',
      dataModificacao: '10 maio 2026',
      status: 'Em desenvolvimento',
      dataC: '2026-05-10',
      experiencias: [
        { cargo: 'Gerente de Projetos', empresa: 'Consultoria XYZ', periodo: '2022 - Presente', descricao: 'Gestão de projetos complexos com orçamento acima de R$ 5M' },
        { cargo: 'Scrum Master', empresa: 'Agência Digital', periodo: '2019 - 2022', descricao: 'Implementação de metodologias ágeis em equipes de 10-15 pessoas' }
      ],
      formacoes: [
        { curso: 'MBA em Gestão de Projetos', instituicao: 'FGV', ano: '2019' },
        { curso: 'Bacharel em Administração', instituicao: 'Universidade de São Paulo', ano: '2017' }
      ],
      habilidades: ['Liderança', 'Agile', 'Scrum', 'JIRA', 'Excel', 'Apresentação', 'Negociação', 'Planejamento Estratégico']
    },
    {
      id: 3,
      titulo: 'Currículo Técnico',
      nome: 'Pedro Ferreira Santos',
      cargoDesejado: 'Engenheiro de Software',
      email: 'pedro.ferreira@exemplo.com',
      telefone: '(21) 99876-1234',
      cpf: '456.789.123-00',
      descricao: 'Foco em habilidades técnicas e projetos',
      resumoProfissional: 'Engenheiro de Software especializado em arquitetura de sistemas e otimização de performance. Apaixonado por código limpo e boas práticas.',
      dataModificacao: '8 maio 2026',
      status: 'Completo',
      dataC: '2026-05-08',
      experiencias: [
        { cargo: 'Engenheiro de Software', empresa: 'Big Tech Company', periodo: '2021 - Presente', descricao: 'Desenvolvimento de microserviços e arquitetura em nuvem' },
        { cargo: 'Desenvolvedor Backend', empresa: 'FinTech Startup', periodo: '2019 - 2021', descricao: 'Desenvolvimento de APIs RESTful e integração com sistemas legados' }
      ],
      formacoes: [
        { curso: 'Mestrado em Ciência da Computação', instituicao: 'UFRJ', ano: '2021' },
        { curso: 'Bacharelado em Engenharia de Software', instituicao: 'UFRJ', ano: '2019' }
      ],
      habilidades: ['Java', 'Python', 'AWS', 'Kubernetes', 'Microserviços', 'GraphQL', 'MySQL', 'Redis']
    },
    {
      id: 4,
      titulo: 'Currículo Acadêmico',
      nome: 'Ana Carolina Silva',
      cargoDesejado: 'Pesquisadora em IA/Machine Learning',
      email: 'ana.carolina@exemplo.com',
      telefone: '(85) 98765-9876',
      cpf: '789.123.456-00',
      descricao: 'Ênfase em educação e pesquisa',
      resumoProfissional: 'Pesquisadora em Machine Learning e IA com foco em processamento de linguagem natural. Publicações em conferências internacionais e experiência em projetos de pesquisa.',
      dataModificacao: '5 maio 2026',
      status: 'Completo',
      dataC: '2026-05-05',
      experiencias: [
        { cargo: 'Pesquisadora Pós-doc', empresa: 'Instituto de Pesquisa Avançada', periodo: '2023 - Presente', descricao: 'Pesquisa em modelos de linguagem natural e transformer' },
        { cargo: 'Bolsista de Iniciação Científica', empresa: 'USP', periodo: '2018 - 2023', descricao: 'Projetos em deep learning e visão computacional' }
      ],
      formacoes: [
        { curso: 'Doutorado em Ciência da Computação', instituicao: 'USP', ano: '2023' },
        { curso: 'Mestrado em Inteligência Artificial', instituicao: 'USP', ano: '2020' },
        { curso: 'Bacharel em Ciência da Computação', instituicao: 'UFPE', ano: '2018' }
      ],
      habilidades: ['Python', 'TensorFlow', 'PyTorch', 'NLP', 'Deep Learning', 'SQL', 'Linux', 'Pesquisa Científica']
    },
  ];

  // Filtrar currículos
  const curriculosFiltrados = curriculos.filter(curr => {
    const matchSearch = curr.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       curr.descricao.toLowerCase().includes(searchTerm.toLowerCase());
    const matchStatus = filterStatus === 'todos' || curr.status === filterStatus;
    return matchSearch && matchStatus;
  });

  return (
    <div className="bg-gray-50 dark:bg-slate-900 min-h-screen py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header com breadcrumb */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors font-medium mb-6"
          >
            <FiArrowLeft size={18} />
            Voltar
          </Link>

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                Meus Currículos
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                Gerencia seus currículos em um único lugar
              </p>
            </div>
            <Link
              href="/sistema/paginas/curriculos/novo"
              className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105 active:scale-95 font-semibold whitespace-nowrap"
            >
              <FiPlus size={20} />
              Novo Currículo
            </Link>
          </div>
        </div>

        {/* Search and Filter Bar */}
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-gray-200 dark:border-slate-700 p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <FiSearch className="absolute left-3 top-3 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Buscar currículos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-700 dark:text-white"
                />
              </div>
            </div>

            {/* Filter by status */}
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-700 dark:text-white font-medium"
            >
              <option value="todos">Todos</option>
              <option value="Completo">Completos</option>
              <option value="Em desenvolvimento">Em desenvolvimento</option>
            </select>
          </div>
        </div>

        {/* Results count */}
        {curriculosFiltrados.length > 0 && (
          <div className="mb-6 text-sm text-gray-600 dark:text-gray-400">
            Mostrando <span className="font-semibold">{curriculosFiltrados.length}</span> de {curriculos.length} currículos
          </div>
        )}

        {/* Currículos Grid */}
        {curriculosFiltrados.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {curriculosFiltrados.map((curriculo) => (
              <div
                key={curriculo.id}
                className="group bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-gray-200 dark:border-slate-700 overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                {/* Card Header Bar */}
                <div className="h-1 bg-gradient-to-r from-blue-500 to-indigo-600"></div>

                {/* Card Content */}
                <div className="p-6 flex flex-col h-full">
                  {/* Title and Status */}
                  <div className="mb-3">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors flex-1">
                        {curriculo.titulo}
                      </h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap flex-shrink-0 ${
                        curriculo.status === 'Completo'
                          ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                          : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                      }`}>
                        {curriculo.status}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed flex-1">
                    {curriculo.descricao}
                  </p>

                  {/* Modified date */}
                  <p className="text-xs text-gray-500 dark:text-gray-500 mb-4">
                    Modificado em {curriculo.dataModificacao}
                  </p>

                  {/* Action Buttons */}
                  <div className="border-t border-gray-100 dark:border-slate-700 pt-4">
                    <div className="flex gap-2 mb-3">
                      <Link
                        href={`/sistema/paginas/curriculos/${curriculo.id}`}
                        className="flex-1 flex items-center justify-center gap-2 bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-400 px-3 py-2 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-800 transition-colors font-medium text-sm"
                      >
                        <FiEye size={16} />
                        Ver
                      </Link>
                      <Link
                        href={`/sistema/paginas/curriculos/${curriculo.id}`}
                        className="flex-1 flex items-center justify-center gap-2 bg-indigo-50 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 px-3 py-2 rounded-lg hover:bg-indigo-100 dark:hover:bg-indigo-800 transition-colors font-medium text-sm"
                      >
                        <FiEdit2 size={16} />
                        Editar
                      </Link>
                      <button className="flex items-center justify-center gap-2 bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-200 px-3 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-slate-600 transition-colors font-medium text-sm">
                        <FiDownload size={16} />
                      </button>
                    </div>

                    {/* Secondary action */}
                    <button className="w-full flex items-center justify-center gap-2 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900 px-3 py-2 rounded-lg transition-colors font-medium text-sm">
                      <FiTrash2 size={16} />
                      Deletar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-gray-200 dark:border-slate-700 p-12 text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gray-100 dark:bg-slate-700 rounded-full flex items-center justify-center">
                <FiGrid className="text-gray-400" size={32} />
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              {searchTerm || filterStatus !== 'todos' ? 'Nenhum resultado encontrado' : 'Nenhum currículo criado'}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md mx-auto">
              {searchTerm || filterStatus !== 'todos'
                ? 'Tente ajustar seus filtros ou termos de busca'
                : 'Comece criando seu primeiro currículo'}
            </p>
            {!searchTerm && filterStatus === 'todos' && (
              <Link
                href="/sistema/paginas/curriculos/novo"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                <FiPlus size={18} />
                Criar Primeiro Currículo
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
}