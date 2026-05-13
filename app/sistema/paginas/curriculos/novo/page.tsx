'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { FiArrowLeft, FiSave, FiX } from 'react-icons/fi';
import { toast } from 'sonner';

// Schema de validação com Yup
const schema = yup.object({
  titulo: yup.string().required('Título é obrigatório').min(3, 'Título deve ter pelo menos 3 caracteres'),
  nomeCompleto: yup.string().required('Nome completo é obrigatório').min(3, 'Nome deve ter pelo menos 3 caracteres'),
  email: yup.string().email('Email inválido').required('Email é obrigatório'),
  telefone: yup.string().required('Telefone é obrigatório').matches(/^\(\d{2}\)\s\d{4,5}-\d{4}$/, 'Telefone deve estar no formato (XX) XXXXX-XXXX'),
  cpf: yup.string().required('CPF é obrigatório').matches(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, 'CPF deve estar no formato XXX.XXX.XXX-XX'),
  endereco: yup.string().optional(),
  resumoProfissional: yup.string().optional().max(500, 'Resumo deve ter no máximo 500 caracteres'),
});

type FormData = yup.InferType<typeof schema>;

// Funções de máscara customizadas
const applyPhoneMask = (value: string) => {
  const cleaned = value.replace(/\D/g, '');
  const match = cleaned.match(/^(\d{2})(\d{4,5})(\d{4})$/);
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`;
  }
  return value;
};

const applyCpfMask = (value: string) => {
  const cleaned = value.replace(/\D/g, '');
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{3})(\d{2})$/);
  if (match) {
    return `${match[1]}.${match[2]}.${match[3]}-${match[4]}`;
  }
  return value;
};

export default function NovoCP() {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const telefoneValue = watch('telefone');
  const cpfValue = watch('cpf');

  const onSubmit = async (data: FormData) => {
    setLoading(true);

    try {
      // Simular salvamento
      await new Promise(resolve => setTimeout(resolve, 1000));

      console.log('Currículo salvo:', data);
      toast.success('Currículo criado com sucesso!', {
        description: 'Seu currículo foi salvo e está disponível na lista.',
      });

      // Resetar formulário após sucesso
      reset();

    } catch (error) {
      toast.error('Erro ao salvar currículo', {
        description: 'Ocorreu um erro inesperado. Tente novamente.',
      });
    } finally {
      setLoading(false);
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const maskedValue = applyPhoneMask(e.target.value);
    setValue('telefone', maskedValue);
  };

  const handleCpfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const maskedValue = applyCpfMask(e.target.value);
    setValue('cpf', maskedValue);
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

          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Criar Novo Currículo
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Preencha os dados abaixo para criar seu novo currículo
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          {/* Seção: Informações Básicas */}
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-gray-200 dark:border-slate-700 p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Informações Básicas
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Título do Currículo */}
              <div className="md:col-span-2">
                <label htmlFor="titulo" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Título do Currículo *
                </label>
                <input
                  type="text"
                  id="titulo"
                  {...register('titulo')}
                  placeholder="Ex: Currículo Profissional 2026"
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-700 dark:text-white ${
                    errors.titulo ? 'border-red-500' : 'border-gray-300 dark:border-slate-600'
                  }`}
                />
                {errors.titulo && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.titulo.message}</p>
                )}
              </div>

              {/* Nome Completo */}
              <div>
                <label htmlFor="nomeCompleto" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="nomeCompleto"
                  {...register('nomeCompleto')}
                  placeholder="Seu nome completo"
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-700 dark:text-white ${
                    errors.nomeCompleto ? 'border-red-500' : 'border-gray-300 dark:border-slate-600'
                  }`}
                />
                {errors.nomeCompleto && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.nomeCompleto.message}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  {...register('email')}
                  placeholder="seu.email@exemplo.com"
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-700 dark:text-white ${
                    errors.email ? 'border-red-500' : 'border-gray-300 dark:border-slate-600'
                  }`}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email.message}</p>
                )}
              </div>

              {/* Telefone */}
              <div>
                <label htmlFor="telefone" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Telefone *
                </label>
                <input
                  type="tel"
                  id="telefone"
                  value={telefoneValue || ''}
                  onChange={handlePhoneChange}
                  placeholder="(11) 99999-9999"
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-700 dark:text-white ${
                    errors.telefone ? 'border-red-500' : 'border-gray-300 dark:border-slate-600'
                  }`}
                />
                {errors.telefone && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.telefone.message}</p>
                )}
              </div>

              {/* CPF */}
              <div>
                <label htmlFor="cpf" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  CPF *
                </label>
                <input
                  type="text"
                  id="cpf"
                  value={cpfValue || ''}
                  onChange={handleCpfChange}
                  placeholder="123.456.789-00"
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-700 dark:text-white ${
                    errors.cpf ? 'border-red-500' : 'border-gray-300 dark:border-slate-600'
                  }`}
                />
                {errors.cpf && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.cpf.message}</p>
                )}
              </div>

              {/* Endereço */}
              <div className="md:col-span-2">
                <label htmlFor="endereco" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Endereço
                </label>
                <input
                  type="text"
                  id="endereco"
                  {...register('endereco')}
                  placeholder="Rua, Número, Cidade, Estado, CEP"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-700 dark:text-white"
                />
              </div>

              {/* Resumo Profissional */}
              <div className="md:col-span-2">
                <label htmlFor="resumoProfissional" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Resumo Profissional
                </label>
                <textarea
                  id="resumoProfissional"
                  {...register('resumoProfissional')}
                  placeholder="Descreva sua experiência profissional, habilidades e objetivos de carreira..."
                  rows={5}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-700 dark:text-white ${
                    errors.resumoProfissional ? 'border-red-500' : 'border-gray-300 dark:border-slate-600'
                  }`}
                />
                {errors.resumoProfissional && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.resumoProfissional.message}</p>
                )}
              </div>
            </div>
          </div>

          {/* Seção: Instruções */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <svg className="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-blue-900 dark:text-blue-200 mb-2">
                  Próximas etapas
                </h3>
                <p className="text-sm text-blue-800 dark:text-blue-300">
                  Após criar este currículo, você poderá adicionar suas experiências profissionais, formação educacional, habilidades e outras informações relevantes na etapa de edição.
                </p>
              </div>
            </div>
          </div>

          {/* Form Actions */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              type="submit"
              disabled={loading}
              className="flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105 active:scale-95 font-semibold disabled:opacity-50 disabled:cursor-not-allowed flex-1 sm:flex-none"
            >
              <FiSave size={20} />
              {loading ? 'Salvando...' : 'Criar Currículo'}
            </button>

            <Link
              href="/sistema/paginas/curriculos"
              className="flex items-center justify-center gap-2 bg-gray-200 dark:bg-slate-700 text-gray-700 dark:text-gray-200 px-8 py-3 rounded-lg hover:bg-gray-300 dark:hover:bg-slate-600 transition-colors font-semibold flex-1 sm:flex-none"
            >
              <FiX size={20} />
              Cancelar
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
