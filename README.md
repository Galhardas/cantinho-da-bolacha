# Cantinho da Bolacha — site base reutilizável

React + TypeScript + Vite. Todo o conteúdo e o tema vivem em **`src/data/site.ts`**;
os componentes em `src/components` e as páginas em `src/pages` não têm texto do cliente.

## Arrancar

```bash
npm install react react-dom react-router-dom
npm install -D vite @vitejs/plugin-react typescript @types/react @types/react-dom
npm run dev        # http://localhost:5173
npm run build      # verifica tipos e gera /dist
```

## Estrutura

```
src/
  data/site.ts        <- textos, imagens, horários, contactos, cores (único ficheiro a editar por cliente)
  types.ts            <- formato do site.ts (SiteConfig)
  SiteContext.tsx     <- useSite(): qualquer componente lê a config sem props
  components/         <- Navbar, Hero, Section, CardGrid, OpeningHours, ContactInfo, SocialLinks, OrderForm, Footer
  pages/              <- Home, Products, Order, About (só compõem componentes)
  styles/global.css   <- estilos; cores/fontes vêm de variáveis CSS ligadas ao tema
vercel.json           <- reescrita para o React Router funcionar em refresh/links diretos
```

## Novo cliente em ~1 hora

1. Copiar esta pasta (ou marcar o repositório como *Template repository* no GitHub e usar "Use this template").
2. Editar `src/data/site.ts`: nome, tema, textos, imagens, horários, contactos.
3. Imagens: pôr em `public/images/` e referir como `/images/foto.jpg`.
4. Se faltar uma secção (ex.: menu de restaurante, galeria), criar um componente novo em `components/`
   e uma página em `pages/`; o que ficar genérico passa a fazer parte da base.

## Formulário de encomendas

Sem backend. Duas opções em `order.formEndpoint`:
- **Vazio**: abre o email do cliente com o pedido preenchido (funciona logo, mas é menos profissional).
- **Formspree** (ou similar): criar o formulário em formspree.io, colar o endpoint (`https://formspree.io/f/xxxx`).
  Os pedidos chegam por email ao cliente e ficam guardados.

## Publicar (GitHub + Vercel + domínio)

1. `git init`, commit, criar repositório no GitHub e fazer push.
2. Em vercel.com: *Add New → Project → importar o repositório*. Framework: Vite (deteta sozinho). Deploy.
   Cada push para `main` publica automaticamente; os outros branches geram pré-visualizações.
3. Domínio: em Vercel → *Settings → Domains* adicionar o domínio. A Vercel mostra os registos DNS a criar.
4. No painel da PTisp (gestão de DNS do domínio) criar esses registos (normalmente um registo `A` para o domínio raiz
   e um `CNAME` de `www` para o valor que a Vercel indicar). A propagação pode demorar de minutos a algumas horas.
5. HTTPS é emitido automaticamente pela Vercel.

Verifica os valores exatos de DNS no ecrã da Vercel, porque podem mudar.
