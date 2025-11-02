# Intranet Nexus Hub

## Visão Geral

A Intranet do Nexus Hub é uma plataforma completa e responsiva para gerenciamento de conteúdos, comunicados, documentos, banners e usuários. Desenvolvida com React, TypeScript e Tailwind CSS, seguindo as diretrizes de design institucional do Nexus Hub.

---

## 🎨 Design System

### Paleta de Cores
- **Primária**: Azul Escuro `#0A2E61`
- **Secundária**: Ciano `#00B8D9`
- **Acento**: Coral `#E63946`
- **Fundo Claro**: `#F8F9FC`
- **Texto Principal**: `#1E1E1E`
- **Texto Secundário**: `#6B7280`

### Tipografia
- **Títulos**: Poppins/Montserrat (semi-bold, 600-700)
- **Texto**: Inter (regular, 400-500)

### Estilo Visual
- Bordas arredondadas: 12px
- Sombras suaves
- Ícones outline (Lucide)
- Layout responsivo de 12 colunas
- Suporte para modo escuro

---

## 🗂️ Estrutura da Intranet

### Layout Principal (`IntranetLayout.tsx`)

#### Header Superior (Fixo)
- Logo Nexus à esquerda
- Campo de busca global (desktop)
- Ícones à direita:
  - 🌙 Toggle tema claro/escuro
  - 💬 Chat IA Nexus
  - 🔔 Notificações (com badge)
  - 👤 Perfil do usuário (com dropdown)

#### Sidebar Lateral (Fixa)
Fundo azul escuro `#0A2E61` com menu de navegação:
1. 📊 Dashboard
2. 📢 Comunicados
3. 📁 Documentos
4. 🖼️ Banners
5. 📨 Newsletter
6. 👥 Usuários
7. ⚙️ Configurações
8. 🚪 Sair (no rodapé)

**Responsividade**:
- Desktop: Sidebar visível (264px)
- Mobile: Menu hambúrguer com overlay

#### Rodapé
- Copyright: "© 2025 Nexus Hub – Todos os direitos reservados"

---

## 📄 Módulos da Intranet

### 1️⃣ Dashboard (`DashboardPage.tsx`)
**Título**: "Painel Nexus"

**Cards de Resumo** (4 colunas):
- Comunicados publicados
- Documentos disponíveis
- Usuários ativos
- Taxa de abertura da newsletter

**Gráfico de Barras**:
- Acessos por semana (Recharts)
- Gradiente azul (primária → secundária)

**Listas**:
- Documentos recentes (com downloads)
- Últimos comunicados (com visualizações)

**Tabela de Usuários Ativos**:
- Nome, e-mail, último acesso, status online

---

### 2️⃣ Comunicados (`AnnouncementsManagementPage.tsx`)
- Lista de comunicados em cards
- Status: Publicado / Rascunho
- Botões: Editar, Excluir, Publicar
- Modal de criação com:
  - Título, conteúdo (rich text)
  - Categoria
  - Visibilidade (todos/interno/gerência)
  - Upload de imagem

---

### 3️⃣ Documentos (`DocumentsPage.tsx`)
- Tabela moderna com colunas:
  - Nome do arquivo
  - Categoria
  - Autor
  - Data
  - Ações (baixar, editar, excluir)
- Upload de documentos
- Filtros por categoria
- Indicador de progresso no upload

---

### 4️⃣ Banners (`BannersManagementPage.tsx`)
- Grade de banners com miniaturas
- Campos:
  - Título
  - Link
  - Período de exibição
  - Upload de imagem
  - Status (ativo/inativo)
- Preview da imagem

---

### 5️⃣ Newsletter (`NewsletterPage.tsx`)
**Cards de Estatísticas**:
- Total de assinantes
- Taxa de abertura
- Enviadas este mês
- Engajamento

**Formulário de Envio**:
- Assunto
- Conteúdo do e-mail
- Botão "Enviar Newsletter"

**Histórico**:
- Tabela com newsletters enviadas
- Colunas: Título, Data, Destinatários, Taxa de Abertura, Status
- Badges de status (Enviado/Falhou)

---

### 6️⃣ Usuários (`UsersManagementPage.tsx`)
- Lista/tabela de usuários
- Informações:
  - Nome, e-mail
  - Perfil (Admin, Editor, Colaborador, Leitor)
  - Status (ativo/inativo)
- Modal de criação/edição:
  - Nome, e-mail, senha
  - Seleção de perfil
  - Checkbox para 2FA/Face ID

---

### 7️⃣ Configurações (`SettingsPage.tsx`)
**3 Abas**:

#### Aba 1: Branding
- Nome do portal
- Upload de logotipo
- Cores personalizáveis:
  - Primária
  - Secundária
  - Acento

#### Aba 2: Acesso
- Toggle para:
  - Autenticação 2FA
  - Expiração de senha
  - Restrição por IP
- Tempo de sessão (minutos)

#### Aba 3: Integrações
- **API Nexus**: Chave de API
- **AWS S3**: Access Key, Secret Key
- **SMTP**: Host, Porta, Usuário, Senha

---

## 🤖 Chat IA Flutuante

### Botão Flutuante
- Posição: Canto inferior direito
- Estilo: Gradiente azul com animação bounce
- Ícone: 💬 MessageSquare

### Painel de Chat (quando aberto)
- Dimensões: 384px × 500px
- Header gradiente com:
  - Avatar da IA
  - Título: "IA Nexus"
  - Botão fechar
- Área de mensagens:
  - Mensagens da IA (fundo cinza)
  - Mensagens do usuário (gradiente azul)
- Input + botão "Enviar"

**Funcionalidade**:
- Assistente virtual para ajuda
- Histórico de conversas
- Layout similar ao ChatGPT

---

## 📱 Responsividade

### Mobile (até 768px)
- Sidebar em menu hambúrguer
- Cards empilhados verticalmente
- Tabelas com scroll horizontal
- Busca compacta

### Tablet (768px - 1024px)
- Sidebar em mini ícones
- Dashboard em 2 colunas
- Tabelas responsivas

### Desktop (1024px+)
- Sidebar completa (264px)
- Layout em 12 colunas
- Gráficos e tabelas completos

---

## 🔐 Autenticação

### Login
- E-mail e senha
- Validação de campos
- Redirecionamento para Dashboard

### Sessão
- Nome do usuário exibido no header
- Avatar com iniciais
- Menu dropdown com:
  - Perfil
  - Configurações
  - Sair

---

## 🛠️ Tecnologias Utilizadas

- **React 18** + TypeScript
- **Tailwind CSS v4.0**
- **Shadcn/UI** (componentes)
- **Lucide React** (ícones)
- **Recharts** (gráficos)
- **Sonner** (notificações toast)

---

## 📂 Estrutura de Arquivos

```
/components
├── IntranetLayout.tsx          # Layout principal
├── DashboardPage.tsx           # Dashboard
├── AnnouncementsManagementPage.tsx
├── BannersManagementPage.tsx
├── NewsletterPage.tsx          # NOVO
├── UsersManagementPage.tsx
├── SettingsPage.tsx            # NOVO
├── LoginPage.tsx
└── ui/                         # Componentes Shadcn
```

---

## 🚀 Como Usar

### Acesso à Intranet
1. Clique em "Área Restrita" no site público
2. Faça login com qualquer e-mail e senha (demo)
3. Você será redirecionado ao Dashboard

### Navegação
- Use o menu lateral para navegar entre módulos
- Use o botão de chat IA para assistência
- Alterne entre modo claro/escuro no header

### Recursos Principais
- ✅ Gerenciamento completo de comunicados
- ✅ Upload e organização de documentos
- ✅ Controle de banners da home page
- ✅ Envio de newsletters com estatísticas
- ✅ Gestão de usuários e permissões
- ✅ Configurações de branding e integrações
- ✅ Chat IA para suporte

---

## 🎯 Próximos Passos

- [ ] Implementar editor rich text para comunicados
- [ ] Integração real com AWS S3
- [ ] Sistema de permissões por perfil
- [ ] Analytics e relatórios detalhados
- [ ] Notificações em tempo real
- [ ] Implementação completa do módulo de documentos

---

## 📞 Suporte

Para dúvidas ou sugestões sobre a intranet, entre em contato através do chat IA ou do módulo de Configurações.

---

**Desenvolvido com ❤️ pela equipe Nexus Hub**
