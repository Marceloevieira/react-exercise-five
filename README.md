This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).


# Exercício 5

Nesta atividade iremos praticar os conceitos aprendidos sobre SSR + CSS-in-JS.

Para isso, neste exercício iremos traduzir o nosso exercício 03 para a abordagem SSR + CSS-in-JS.

IMPORTANTE: não é necessário implementar o Redux nesse exercício!

### Passo 1
O Next.js possui uma ferramenta de CLI similar ao React, chamada “create-next-app”. Para dar o start na nossa aplicação, entre no prompt de comando e digite “npx create-next-app movies-ssr”.

### Passo 2
Entre no projeto criado e instale os pacotes necessários para o Emotion: npm i styled-components

### Passo 3
No exercício 03, utilizamos um serviço para fazer as requisições na API. Neste exercício, o nosso serviço não será apenas uma classe, será uma rota de API conforme visto no slide 19 em diante. Para isso, crie duas rotas conforme exemplos: “/movies” e “/movies/:id”. A primeira irá fazer a requisição para listagem dos filmes e a segunda para recuperar um filme único.

### Passo 4
Na pasta pages, crie duas páginas: index.js e movie-detail.js. A primeira irá fazer uma requisição em “http://localhost:3000/api/movies”, para listar todos os filmes. A segunda, irá fazer uma requisição em “http://localhost:3000/api/movies/id”, substituindo “id” pelo id do filme requisitado.

### Passo 5
Crie estilos, ao seu critério, utilizando o conceito de CSS-in-JS.


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
