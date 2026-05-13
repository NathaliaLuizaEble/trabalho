# CurrículoApp

Uma plataforma completa para criar, organizar e gerenciar seus currículos profissionais.

## 🚀 Sobre o Projeto

O CurrículoApp é uma aplicação web desenvolvida com Next.js que permite aos usuários criar e gerenciar seus currículos de forma intuitiva e organizada. O projeto utiliza tecnologias modernas para oferecer uma experiência de usuário excepcional.

## ✨ Funcionalidades

- **Criação de Currículos**: Formulário avançado com validações e máscaras de input
- **Interface Responsiva**: Design adaptável para desktop e mobile
- **Tema Dark/Light**: Suporte para modo escuro e claro
- **Validações Avançadas**: Campos obrigatórios com feedback em tempo real
- **Notificações**: Sistema de toast para feedback das ações

## 🛠️ Tecnologias Utilizadas

- **Next.js 16** - Framework React para produção
- **React 19** - Biblioteca para interfaces de usuário
- **TypeScript** - JavaScript com tipagem estática
- **Tailwind CSS 4** - Framework CSS utilitário
- **React Hook Form** - Gerenciamento de formulários
- **Yup** - Validação de schemas
- **Sonner** - Notificações toast

## 📦 Instalação e Execução

1. **Clone o repositório**
   ```bash
   git clone <url-do-repositorio>
   cd trabalho_cv
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Execute o servidor de desenvolvimento**
   ```bash
   npm run dev
   ```

4. **Acesse no navegador**
   ```
   http://localhost:3000
   ```

## 📁 Estrutura do Projeto

```
trabalho_cv/
├── app/                    # Páginas e layouts Next.js
│   ├── componentes/        # Componentes reutilizáveis
│   │   ├── header.tsx     # Cabeçalho do site
│   │   ├── nav.tsx        # Navegação
│   │   └── footer.tsx     # Rodapé
│   ├── sistema/           # Sistema de currículos
│   │   └── paginas/
│   │       └── curriculos/ # Páginas de currículos
│   ├── globals.css        # Estilos globais
│   ├── layout.tsx         # Layout raiz
│   └── page.tsx           # Página inicial
├── components/            # Componentes UI
│   └── ui/
│       └── card.tsx       # Componente de cartão
├── lib/                   # Utilitários
└── public/                # Arquivos estáticos
```

## 🎯 Próximos Passos

- [ ] Sistema de autenticação de usuários
- [ ] Banco de dados para persistência
- [ ] Edição completa de currículos
- [ ] Templates de currículo
- [ ] Exportação em PDF
- [ ] Dashboard administrativo

## 📄 Licença

Este projeto está sob a licença MIT.
