# Docker NodeJS

## Sobre

Projeto criado com Node.js (Fastify), Prisma, Docker e PostgreSQL, com foco em estudos de backend, arquitetura escalável e boas práticas de desenvolvimento.

Consiste em uma API de usuários modular, extensível e pronta para evoluir para cenários mais complexos. O projeto segue convenções modernas, separação de responsabilidades e está aberto a sugestões e melhorias.

---

## Principais bibliotecas e ferramentas

- **Fastify**: Framework web Node.js extremamente rápido e leve, usado para criar a API HTTP. Permite tipagem, validação e performance superior ao Express.
- **Prisma**: ORM moderno para Node.js e TypeScript. Facilita o acesso ao banco de dados, migrations, validação de dados e geração de tipos automáticos.
- **Zod**: Biblioteca de validação de esquemas para TypeScript, usada para garantir a integridade dos dados recebidos e enviados pela API.
- **Docker**: Utilizado para orquestrar o ambiente de desenvolvimento e produção, garantindo portabilidade e facilidade de setup.
- **Jest**: Framework de testes para garantir a qualidade do código, com suporte a testes unitários e E2E.
- **pnpm**: Gerenciador de pacotes rápido e eficiente, usado para instalar dependências e rodar scripts do projeto.

---

## Primeiros passos

1. **Clone o repositório:**
   ```sh
   git clone <url-do-repositorio>
   cd Docker-NodeJS
   ```
2. **Instale as dependências:**
   ```sh
   pnpm install
   ```
3. **Copie o arquivo de variáveis de ambiente:**
   - Para desenvolvimento local:
     ```sh
     cp .env.example .env
     ```
   - Para rodar no Docker:
     ```sh
     cp .env.example .env.docker
     ```

---

## Como rodar localmente (fora do Docker)

1. Suba o banco de dados com Docker:

   ```sh
   docker compose up -d postgresql
   ```

2. Ajuste o `.env` para usar `localhost` no `DATABASE_URL`.
3. Instale as dependências (caso ainda não tenha feito):

   ```sh
   pnpm install
   ```

4. Rode as migrações e o seed:

   ```sh
   pnpm prisma:migrate
   pnpm prisma:seed
   ```

5. Inicie o servidor:

   ```sh
   pnpm dev
   ```

Acesse a API em [http://localhost:3333](http://localhost:3333)

---

## Como rodar tudo no Docker

1. Ajuste o `.env.docker` se necessário.
2. Suba todos os serviços:

   ```sh
   pnpm docker:up
   # ou
   docker compose up --build
   ```

3. Rode as migrações e o seed dentro do container:

   ```sh
   pnpm db:migrate
   pnpm db:seed
   ```

Acesse a API em [http://localhost:3333](http://localhost:3333)

---

## Scripts úteis

- `pnpm db:migrate` — roda as migrações Prisma dentro do container
- `pnpm db:generate` — gera o Prisma Client dentro do container
- `pnpm db:seed` — roda o seed dentro do container
- `pnpm db:studio` — abre o Prisma Studio dentro do container
- `pnpm docker:up` — sobe os containers em background
- `pnpm docker:stop` — para os containers

---

# Explicação dos scripts principais do package.json

- **pnpm lets-code**: Sobe os containers Docker em background (`docker:up`) e inicia o servidor localmente (`dev`). Útil para desenvolvimento local rápido.
- **pnpm dev**: Inicia o servidor em modo desenvolvimento, com hot reload. Usa o arquivo `.env` local.
- **pnpm build**: Faz o build do projeto TypeScript para a pasta `build` usando o `tsup`.
- **pnpm start**: Inicia o servidor em modo produção, rodando o arquivo já compilado em `build/server.cjs`.
- **pnpm test**: Roda todos os testes com Jest, sem cache, usando até 80% dos workers.
- **pnpm test:watch**: Roda os testes em modo watch (reexecuta ao salvar arquivos).
- **pnpm test:watchAll**: Roda todos os testes em modo watch.
- **pnpm test:coverage**: Gera relatório de cobertura de testes.

Scripts de banco e Docker já estão explicados no README.

---

Esses scripts facilitam o fluxo de desenvolvimento, build, testes e deploy, tanto local quanto em Docker.

## Boas práticas

- Nunca versionar `.env`, `.env.docker` ou arquivos com segredos.
- Use `.env` para desenvolvimento local e `.env.docker` para Docker.
- Sempre rode comandos Prisma dentro do container quando estiver usando Docker.
- Consulte este README para saber qual comando usar em cada ambiente.
- Sempre rode `pnpm install` após clonar o projeto.

---

## Contribuição

1. Fork este repositório
2. Crie uma branch: `git checkout -b minha-feature`
3. Commit suas mudanças: `git commit -m 'feat: minha feature'`
4. Push para o branch: `git push origin minha-feature`
5. Abra um Pull Request

---

## Autor

Nathan Rodrigues Vieira
