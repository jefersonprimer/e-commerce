como vai ser seguido as estruturas de pastas

/ecommerce
│── /public                # Imagens, ícones e assets estáticos
│── /src
│   ├── /domain            # Regras de negócio e entidades (NÃO depende de nada externo)
│   │   ├── /entities      # Modelos de domínio (Produto, Usuário, Pedido)
│   │   │   ├── Product.ts
│   │   │   ├── User.ts
│   │   │   ├── Order.ts
│   │   ├── /useCases      # Casos de uso (Adicionar ao carrinho, Checkout)
│   │   │   ├── AddToCart.ts
│   │   │   ├── Checkout.ts
│   │   │   ├── GetProduct.ts
│   │   │   ├── GetCart.ts
│   ├── /infra             # Infraestrutura: APIs externas, Banco de dados, Repositórios
│   │   ├── /database      # Configuração do banco (Prisma, Firebase, etc.)
│   │   │   ├── prisma.ts
│   │   ├── /repositories  # Implementações dos repositórios (Produtos, Usuários)
│   │   │   ├── ProductRepository.ts
│   │   │   ├── UserRepository.ts
│   │   ├── /payment       # Integração com Stripe/PicPay
│   │   │   ├── PaymentGateway.ts
│   ├── /main              # Configuração e injeção de dependências
│   │   ├── routes.ts      # Definição de repositórios e casos de uso
│   │   ├── server.ts      # Inicialização do servidor (caso tenha API separada)
│   ├── /presentation      # Camada de UI e páginas do Next.js
│   │   ├── /app           # App Router (Next.js 15)
│   │   │   ├── layout.tsx # Layout principal
│   │   │   ├── /page.tsx  # Página inicial
│   │   │   ├── /produto   # Página de produto
│   │   │   │   ├── [id]/page.tsx
│   │   │   ├── /carrinho  # Página do carrinho de compras
│   │   │   │   ├── page.tsx
│   │   │   ├── /checkout  # Página de checkout
│   │   │   │   ├── page.tsx
│   │   │   ├── /conta     # Página de conta do usuário
│   │   │   │   ├── page.tsx
│   │   │   ├── /admin     # Dashboard para admin (proteção de rota necessária)
│   │   │   │   ├── page.tsx
│   │   ├── /components    # Componentes reutilizáveis (UI)
│   │   │   ├── /ui        # Botões, Inputs, Modais
│   │   │   ├── /layout    # Header, Footer, Sidebar
│   │   │   ├── /product   # Card de produto, Galeria
│   ├── /validation        # Validações de entrada (Zod/Yup)
│   │   ├── schemas.ts     # Schemas de validação (Usuário, Produto, Pedido)
│   │   ├── form.ts        # Validações de formulários
│   ├── /store             # Estado global (Zustand/Redux)
│   │   ├── cartStore.ts   # Estado do carrinho
│   │   ├── authStore.ts   # Estado do usuário autenticado
│   ├── /hooks             # Hooks customizados (useCart, useAuth, useProduct)
│   ├── /lib               # Bibliotecas auxiliares (ex.: formatadores)
│   ├── /services          # Chamadas para APIs (produtos, checkout, user)
│   ├── /types             # Tipagens do projeto (Produto, Usuário, Pedido)
│   ├── /utils             # Funções utilitárias (ex.: formatar preço, datas)
│── /tests                 # Testes unitários e integração
│── /styles                # Estilos globais (Tailwind, CSS Modules, etc.)
│── next.config.mjs        # Configuração do Next.js
│── tsconfig.json          # Configuração do TypeScript
│── package.json           # Dependências do projeto
│── .eslintrc.js           # Configuração do ESLint para manter Clean Code
│── .prettierrc            # Configuração do Prettier para formatação de código
