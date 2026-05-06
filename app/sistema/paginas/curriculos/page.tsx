import React from 'react';
import { FaUser, FaBriefcase } from 'react-icons/fa';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface Curriculo {
  id: number;
  nome: string;
  cargo: string;
  resumo: string;
}

const curriculos: Curriculo[] = [
  {
    id: 1,
    nome: 'João Silva',
    cargo: 'Desenvolvedor Full Stack',
    resumo: 'Experiência em React, Node.js e bancos de dados. Apaixonado por tecnologia e inovação.'
  },
  {
    id: 2,
    nome: 'Maria Santos',
    cargo: 'Designer UX/UI',
    resumo: 'Especialista em design de interfaces intuitivas e acessíveis. Trabalha com Figma e Adobe Creative Suite.'
  },
  {
    id: 3,
    nome: 'Pedro Oliveira',
    cargo: 'Analista de Dados',
    resumo: 'Habilidades em Python, SQL e machine learning. Focado em insights acionáveis para negócios.'
  },
  {
    id: 4,
    nome: 'Ana Costa',
    cargo: 'Gerente de Projetos',
    resumo: 'Experiência em metodologias ágeis e gestão de equipes. Certificada PMP.'
  },
  {
    id: 5,
    nome: 'Carlos Ferreira',
    cargo: 'DevOps Engineer',
    resumo: 'Especialista em CI/CD, containers e infraestrutura em nuvem. Trabalha com AWS e Kubernetes.'
  }
];

export default function CurriculosPage() {
  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-foreground">
          Currículos
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {curriculos.map((curriculo) => (
            <Card key={curriculo.id} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center">
                  <FaUser className="text-primary mr-3" size={24} />
                  <CardTitle className="text-foreground">
                    {curriculo.nome}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center mb-4">
                  <FaBriefcase className="text-secondary mr-3" size={20} />
                  <p className="text-muted-foreground font-medium">
                    {curriculo.cargo}
                  </p>
                </div>
                <p className="text-foreground text-sm leading-relaxed">
                  {curriculo.resumo}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}