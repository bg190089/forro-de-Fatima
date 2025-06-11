# Forró de Fátima 2025 - Site em Next.js

Este é o site oficial do evento Forró de Fátima 2025, desenvolvido com Next.js e Tailwind CSS.

## Instruções para Deploy no Vercel via GitHub

### 1. Crie um repositório no GitHub

1. Acesse [GitHub](https://github.com) e faça login
2. Clique em "New" para criar um novo repositório
3. Nomeie o repositório (ex: `forro-de-fatima-2025`)
4. Escolha a visibilidade (público ou privado)
5. Clique em "Create repository"

### 2. Faça upload do código para o GitHub

```bash
# Clone o repositório vazio
git clone https://github.com/seu-usuario/forro-de-fatima-2025.git
cd forro-de-fatima-2025

# Extraia os arquivos do zip para esta pasta
# (Copie todos os arquivos do zip para esta pasta)

# Adicione os arquivos ao Git
git add .
git commit -m "Versão inicial do site Forró de Fátima 2025"
git push origin main
```

### 3. Deploy no Vercel

1. Acesse [Vercel](https://vercel.com) e faça login (pode usar sua conta GitHub)
2. Clique em "Add New" > "Project"
3. Selecione o repositório `forro-de-fatima-2025`
4. Mantenha as configurações padrão do Next.js
5. Clique em "Deploy"

O Vercel irá automaticamente detectar que é um projeto Next.js e configurar tudo corretamente.

### 4. Configurar Domínio Personalizado (Opcional)

1. No dashboard do projeto no Vercel, vá para "Settings" > "Domains"
2. Adicione seu domínio personalizado (ex: `forrodefatima.com.br`)
3. Siga as instruções para configurar os registros DNS

## Desenvolvimento Local

Para executar o projeto localmente:

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Construir para produção
npm run build

# Iniciar servidor de produção
npm run start
```

## Estrutura do Projeto

- `src/app/page.js` - Página principal
- `src/app/layout.js` - Layout compartilhado
- `src/app/globals.css` - Estilos globais
- `public/images/` - Imagens e recursos estáticos

## Tecnologias Utilizadas

- Next.js 15
- React 18
- Tailwind CSS
- Font Awesome (ícones)

## Manutenção

Para atualizar o conteúdo do site, edite os arquivos em `src/app/page.js` e `src/app/layout.js`.

Para adicionar ou modificar imagens, coloque-as na pasta `public/images/` e referencie-as no código.

