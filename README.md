# Docker NodeJS

## 💡 Sobre

Projeto criado com Node.js (Fastify), Prisma, Docker e PostgreSQL, com foco em estudos de backend, arquitetura escalável e boas práticas de desenvolvimento.

Consiste em uma API de usuários modular, extensível e pronta para evoluir para cenários mais complexos. O projeto segue convenções modernas, separação de responsabilidades e está aberto a sugestões e melhorias.

---

## 🧰 Principais bibliotecas e ferramentas

- **Fastify**: Framework web Node.js extremamente rápido e leve, usado para criar a API HTTP. Permite tipagem, validação e performance superior ao Express.
- **Prisma**: ORM moderno para Node.js e TypeScript. Facilita o acesso ao banco de dados, migrations, validação de dados e geração de tipos automáticos.
- **Zod**: Biblioteca de validação de esquemas para TypeScript, usada para garantir a integridade dos dados recebidos e enviados pela API.
- **Docker**: Utilizado para orquestrar o ambiente de desenvolvimento e produção, garantindo portabilidade e facilidade de setup.
- **Jest**: Framework de testes para garantir a qualidade do código, com suporte a testes unitários e E2E.
- **pnpm**: Gerenciador de pacotes rápido e eficiente, usado para instalar dependências e rodar scripts do projeto.

---

## 🏁 Primeiros passos

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

## Diferenças entre rodar Localmente e com Docker

Rodar o projeto localmente ou via Docker muda a forma como você executa comandos e interage com o ambiente. Veja as principais diferenças:

### 💻 Rodando Localmente

- O Node.js roda diretamente na sua máquina.
- O banco de dados pode rodar em container Docker **ou** em uma instância local instalada manualmente (ex: criada via pgAdmin, PostgreSQL nativo, etc).
- Os comandos (migrations, seed, start, etc) são executados diretamente no seu terminal.
- O arquivo de ambiente usado é o `.env`.

**Fluxo típico:**

1. Certifique-se de que o banco de dados PostgreSQL está rodando:
   - Pode ser um container Docker **ou** um banco local criado manualmente (ex: via pgAdmin).
2. Ajuste o `.env` para usar `localhost` (ou o host correto) no `DATABASE_URL`.
3. Instale as dependências (caso ainda não tenha feito):

   ```sh
   pnpm install
   ```

4. Rode as migrações e o seed (direto no seu terminal):

   ```sh
   pnpm prisma:migrate
   pnpm prisma:seed
   ```

5. Inicie o servidor localmente:

   ```sh
   pnpm dev
   ```

Acesse a API em [http://localhost:3333](http://localhost:3333)

---

### 🐳 Rodando com Docker

- Tanto o Node.js quanto o banco de dados rodam em containers Docker.
- Os comandos de banco (migrations, seed, etc) devem ser executados _dentro_ do container.
- O arquivo de ambiente usado é o `.env.docker`.

**Fluxo típico:**

1. Ajuste o `.env.docker` se necessário.
2. Suba todos os serviços (Node.js e banco):

   ```sh
   pnpm docker:up
   # ou
   docker compose up --build
   ```

3. Rode as migrações e o seed **dentro do container**:

   ```sh
   pnpm db:migrate
   pnpm db:seed
   ```

Acesse a API em [http://localhost:3333](http://localhost:3333)

---

**Resumo prático:**

- Use `.env` e comandos `pnpm prisma:*`/`pnpm dev` no terminal local para desenvolvimento fora do Docker.
- Use `.env.docker` e comandos `pnpm db:*`/`pnpm docker:*` dentro do container para desenvolvimento 100% Docker.

Consulte sempre este README para saber qual comando usar em cada ambiente.

---

## 🛠️ Scripts úteis

- `pnpm db:migrate` — roda as migrações Prisma dentro do container
- `pnpm db:generate` — gera o Prisma Client dentro do container
- `pnpm db:seed` — roda o seed dentro do container
- `pnpm db:studio` — abre o Prisma Studio dentro do container
- `pnpm docker:up` — sobe os containers em background
- `pnpm docker:stop` — para os containers

---

## Explicação dos scripts principais do package.json

### 👨‍💻 Desenvolvimento

- **pnpm dev**: Inicia o servidor em modo desenvolvimento, com hot reload. Usa o arquivo `.env` local.
- **pnpm build**: Faz o build do projeto TypeScript para a pasta `build` usando o `tsup`.
- **pnpm start**: Inicia o servidor em modo produção, rodando o arquivo já compilado em `build/server.cjs`.

### 🎨 Lint e formatação

- **pnpm lint**: Corrige automaticamente problemas de lint nos arquivos `.ts` em `src/`.
- **pnpm format**: Formata todo o projeto com o Prettier.

### 📝 Prisma (local)

- **pnpm prisma:generate**: Gera o Prisma Client localmente.
- **pnpm prisma:migrate**: Executa as migrations Prisma localmente.
- **pnpm prisma:seed**: Executa o seed localmente.
- **pnpm prisma:deploy**: Aplica migrations e gera o Prisma Client para produção.
- **pnpm prisma:studio**: Abre o Prisma Studio localmente.

### 🗄️ Banco de dados (via Docker)

- **pnpm db:migrate**: Executa as migrations Prisma dentro do container Docker.
- **pnpm db:generate**: Gera o Prisma Client dentro do container Docker.
- **pnpm db:seed**: Executa o seed dentro do container Docker.
- **pnpm db:studio**: Abre o Prisma Studio dentro do container Docker.

### 🐳 Docker

- **pnpm docker:up**: Sobe os containers Docker em background.
- **pnpm docker:stop**: Para os containers Docker.

### 🧪 Testes

- **pnpm test**: Roda todos os testes com Jest, sem cache, usando até 80% dos workers.
- **pnpm test:watch**: Roda os testes em modo watch (reexecuta ao salvar arquivos).
- **pnpm test:watchAll**: Roda todos os testes em modo watch.
- **pnpm test:staged**: Roda testes relacionados a arquivos staged no Git.
- **pnpm test:push**: Roda testes com cobertura e para na primeira falha (útil para CI/push).
- **pnpm test:coverage**: Gera relatório de cobertura de testes.
- **pnpm test:e2e**: Roda testes end-to-end.
- **pnpm test:e2e:watch**: Roda testes end-to-end em modo watch.
- **pnpm test:e2e:coverage**: Gera cobertura dos testes end-to-end.

### 🧩 Outros

- **pnpm prepare**: Inicializa hooks do Husky para Git.

---

Esses scripts facilitam o fluxo de desenvolvimento, build, testes e deploy, tanto local quanto em Docker.

## 👍 Boas práticas

- Nunca versionar `.env`, `.env.docker` ou arquivos com segredos.
- Use `.env` para desenvolvimento local e `.env.docker` para Docker.
- Sempre rode comandos Prisma dentro do container quando estiver usando Docker.
- Consulte este README para saber qual comando usar em cada ambiente.
- Sempre rode `pnpm install` após clonar o projeto.

---

## 🤝 Contribuição

1. Fork este repositório
2. Crie uma branch: `git checkout -b minha-feature`
3. Commit suas mudanças: `git commit -m 'feat: minha feature'`
4. Push para o branch: `git push origin minha-feature`
5. Abra um Pull Request

---

## 👤 Autor

Nathan Rodrigues Vieira
