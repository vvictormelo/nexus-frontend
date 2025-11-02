# 🚀 Nexus Frontend

Portal e Intranet desenvolvidos em **React + Vite + TypeScript + Tailwind CSS**, com componentes **Shadcn/UI** e integração futura com a camada de API do Nexus Hub.

---

## 🧱 Stack Tecnológica

- ⚛️ **React 18** – Framework principal  
- ⚙️ **Vite 5** – Build tool ultra-rápida  
- 💅 **Tailwind CSS 3** – Estilização utilitária e responsiva  
- 🧩 **Shadcn/UI** – Biblioteca de componentes moderna  
- 📊 **Recharts** – Visualização de dados e gráficos  
- 🔔 **Sonner** – Notificações (toast)  
- 🧠 **TypeScript 5** – Tipagem estática e integração sólida  
- 🧑‍💻 **Lucide Icons** – Ícones vetoriais leves  

---

## 🧩 Estrutura de Pastas

```
src/
 ├─ components/              # Componentes de interface e módulos da intranet
 ├─ styles/                  # Folhas de estilo e configuração Tailwind
 ├─ App.tsx                  # Aplicação principal (rotas públicas e intranet)
 ├─ main.tsx                 # Ponto de entrada do React
 └─ ...
```

---

## ⚙️ Como rodar localmente

### 1️⃣ Clonar o repositório
```bash
git clone https://github.com/vvictormelo/nexus-frontend.git
cd nexus-frontend
```

### 2️⃣ Instalar as dependências
```bash
npm install
```

### 3️⃣ Rodar o projeto
```bash
npm run dev
```

O servidor local iniciará em:
👉 [http://localhost:5173](http://localhost:5173)

---

## ☁️ Build de Produção

Para gerar os arquivos otimizados de build:
```bash
npm run build
```

Os arquivos serão gerados na pasta `dist/` — prontos para deploy (Nginx, VPS, etc).

---

## 🔒 Estrutura de Páginas

- **HomePage** – Landing pública  
- **InstitutionalPage** – Página institucional  
- **DocumentsPage** – Área de documentos  
- **ContactPage** – Contato / Suporte  
- **LoginPage** – Acesso à intranet  
- **IntranetLayout** – Layout principal da área restrita  
- **Dashboard, Users, Banners, Announcements, Settings, Newsletter, Analytics** – Módulos administrativos  

---

## 🎨 Design System

Cores principais:
| Nome | Cor | Exemplo |
|------|------|----------|
| Primária | `#0A2E61` | ![#0A2E61](https://via.placeholder.com/12/0A2E61?text=+) |
| Secundária | `#00B8D9` | ![#00B8D9](https://via.placeholder.com/12/00B8D9?text=+) |
| Acento | `#E63946` | ![#E63946](https://via.placeholder.com/12/E63946?text=+) |

---

## 📦 Próximos Passos

- [ ] Integração com API Nexus Hub (Node/Nest)
- [ ] Módulo de upload de documentos
- [ ] Editor rich text para comunicados
- [ ] Sistema de permissões por perfil
- [ ] Deploy automatizado (CI/CD)

---

## 👨‍💻 Desenvolvido por

**Victor Melo**  
Consultor de Implantação & Desenvolvedor Frontend  

---

> _"Construído com propósito e código limpo."_ 💙

---
