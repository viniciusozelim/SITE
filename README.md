# 🏗️ OZM Engenharia — Site Institucional

[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.2-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

Website institucional e interativo da **OZM Engenharia**, especializada em soluções abrangentes de Engenharia Civil, Instalações Elétricas industriais e prediais (em conformidade com a NBR 5410), Automação Industrial e Consultoria Técnica.

---

## 📌 Sumário

- [Visão Geral](#-visão-geral)
- [Principais Funcionalidades](#-principais-funcionalidades)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Pré-requisitos](#-pré-requisitos)
- [Como Executar](#-como-executar)
- [Scripts Disponíveis](#-scripts-disponíveis)
- [Otimização e SEO](#-otimização-e-seo)
- [Contato](#-contato)

---

## 🚀 Visão Geral

O projeto foi construído focando em alta performance, usabilidade moderna e experiência de usuário fluida em qualquer dispositivo. Ele conta com design responsivo, animações suaves, modal interativo de orçamento rápido, portfólio dinâmico e integração direta com canais de atendimento como WhatsApp.

---

## ✨ Principais Funcionalidades

- **Hero & Proposta de Valor:** Apresentação de alto impacto com destaques dos diferenciais da empresa.
- **Catálogo de Serviços:** Detalhamento das áreas de atuação (Civil, Elétrica, Automação e Consultoria).
- **Portfólio de Projetos Interativo:** Exibição dos projetos executados com suporte a filtros e modal de detalhes (`ProjectDetailModal`).
- **Orçamento Rápido Interativo:** Modal dedicado para solicitação ágil de cotações (`QuickQuoteModal`).
- **Diferenciais e Depoimentos:** Seções estruturadas para transmitir autoridade, segurança e satisfação dos clientes.
- **FAQ Interativo:** Perguntas frequentes organizadas no formato accordion.
- **Formulário de Contato e Atendimento Flutuante:** Formulário com validações e botão fixo para contato direto via WhatsApp.
- **Políticas de Privacidade:** Modal com os termos e política de privacidade (`PrivacyModal`).

---

## 🛠️ Tecnologias Utilizadas

### Frontend
- **[React 19](https://react.dev/)**: Biblioteca para construção de interfaces de usuário reativas.
- **[TypeScript](https://www.typescriptlang.org/)**: Tipagem estática para maior confiabilidade no código.
- **[Vite 6](https://vitejs.dev/)**: Bundler e servidor de desenvolvimento ultra-rápido.
- **[Tailwind CSS v4](https://tailwindcss.com/)**: Framework CSS utilitário para estilização ágil e responsiva.
- **[Motion](https://motion.dev/)**: Animações fluidas e interatividade micro-animada.
- **[Lucide React](https://lucide.dev/)**: Conjunto de ícones modernos e leves.

---

## 📁 Estrutura do Projeto

```text
ozmEngenharia/
├── public/                 # Arquivos estáticos (favicons, imagens, logos)
├── src/
│   ├── components/         # Componentes React reutilizáveis
│   │   ├── About.tsx               # Seção "Sobre a OZM"
│   │   ├── Benefits.tsx            # Seção de Benefícios e Diferenciais
│   │   ├── Contact.tsx             # Formulário de Contato e Mapa
│   │   ├── FAQ.tsx                 # Perguntas Frequentes
│   │   ├── FinalCTA.tsx            # Chamada para Ação Final
│   │   ├── Footer.tsx              # Rodapé Institucional
│   │   ├── Hero.tsx                # Seção Principal / Banner Hero
│   │   ├── Navbar.tsx              # Barra de Navegação Responsiva
│   │   ├── PrivacyModal.tsx        # Modal de Política de Privacidade
│   │   ├── ProjectDetailModal.tsx  # Modal de Detalhes dos Projetos
│   │   ├── Projects.tsx            # Galeria / Portfólio de Projetos
│   │   ├── QuickQuoteModal.tsx     # Modal de Solicitação de Orçamento
│   │   ├── Services.tsx            # Lista de Serviços Oferecidos
│   │   ├── Testimonials.tsx        # Depoimentos de Clientes
│   │   └── WhatsAppButton.tsx      # Botão Flutuante do WhatsApp
│   ├── App.tsx             # Componente Raiz da Aplicação
│   ├── index.css           # Estilos Globais e Configurações Tailwind
│   └── main.tsx            # Ponto de Entrada da Aplicação
├── index.html              # Template HTML com Configurações de SEO e Meta Tags
├── metadata.json           # Metadados do Projeto
├── package.json            # Dependências e Scripts npm
├── tsconfig.json           # Configurações do TypeScript
└── vite.config.ts          # Configuração do Vite
```

---

## 📋 Pré-requisitos

Antes de iniciar, você precisará ter instalado em sua máquina:
- **[Node.js](https://nodejs.org/)** (versão 18 ou superior recomendada)
- **[npm](https://www.npmjs.com/)** ou **yarn** / **pnpm**

---

## 🔧 Como Executar

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/viniciusozelim/SITE.git
   cd ozmEngenharia
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

4. **Acesse a aplicação:**
   Abra o seu navegador e acesse `http://localhost:3000`.

---

## ⚙️ Scripts Disponíveis

No diretório do projeto, você pode executar os seguintes comandos:

| Comando | Descrição |
| :--- | :--- |
| `npm run dev` | Inicia o servidor de desenvolvimento local na porta `3000`. |
| `npm run build` | Compila o aplicativo otimizado para produção na pasta `dist`. |
| `npm run preview` | Executa visualização local do build de produção. |
| `npm run lint` | Executa a verificação estática de tipos com o TypeScript (`tsc --noEmit`). |
| `npm run clean` | Remove a pasta `dist`. |

---

## 🔍 Otimização e SEO

O projeto conta com boas práticas de **Search Engine Optimization (SEO)** aplicadas diretamente no `index.html`:
- **Meta Tags Globais & Open Graph**: Otimizado para compartilhamento em redes sociais (LinkedIn, WhatsApp, Facebook).
- **Dados Estruturados (JSON-LD)**: Schema.org configurado para `EngineeringService`, melhorando a indexação no Google.
- **Design Semântico**: Estrutura HTML5 semântica e tags `h1`, `h2`, `h3` organizadas hierarquicamente.

---

## 📞 Contato

**OZM Engenharia**
- **Website:** [www.ozmengenharia.com.br](https://www.ozmengenharia.com.br)
- **E-mail:** eng.viniciusozelim@hotmail.com
- **Telefone:** +55 (18) 99145-0514
- **Localização:** Araçatuba — SP, Brasil

---

<div align="center">
  <sub>Desenvolvido com excelência técnica por <strong>OZM Engenharia</strong>.</sub>
</div>