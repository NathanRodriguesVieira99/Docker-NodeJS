# API com NodeJS e Docker

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

3. **Configure o arquivo de ambiente:**

   O projeto utiliza apenas dois arquivos de ambiente:

   - `.env.docker` — para rodar o projeto via Docker Compose
   - `.env` — para rodar o projeto em produção/local

   Exemplos:

   ```sh
   # Para Docker Compose
   Copy-Item .env.example .env.docker   # Windows
   cp .env.example .env.docker          # Linux/Mac

   # Para produção/local
   Copy-Item .env.example .env          # Windows
   cp .env.example .env                 # Linux/Mac
   ```

---

## 🚀 Como usar

### **📋 Configuração inicial:**

1. **Clone e instale:**

   ```sh
   git clone <url-do-repositorio>
   cd Docker-NodeJS
   pnpm install
   ```

2. **Escolha o ambiente:**

   **🏠 Para desenvolvimento LOCAL:**

   ```sh
   # Windows
   Copy-Item .env.example .env

   # Linux/Mac
   cp .env.example .env
   ```

   **🐳 Para desenvolvimento com DOCKER:**

   ```sh
   # Windows
   Copy-Item .env.docker .env

   # Linux/Mac
   cp .env.docker .env
   ```

### **⚡ Comandos por ambiente:**

| Ação               | LOCAL                     | DOCKER            |
| ------------------ | ------------------------- | ----------------- |
| **Subir serviços** | Instalar PostgreSQL local | `pnpm docker:up`  |
| **Migrações**      | `pnpm prisma:migrate`     | `pnpm db:migrate` |
| **Seed**           | `pnpm prisma:seed`        | `pnpm db:seed`    |
| **Rodar app**      | `pnpm dev`                | Container já roda |
| **Studio**         | `pnpm prisma:studio`      | `pnpm db:studio`  |

### **🔄 Alternar entre ambientes:**

Para alternar entre ambientes, basta copiar o arquivo de exemplo para o nome correto:

```sh
# Para Docker Compose
Copy-Item .env.example .env.docker   # Windows
cp .env.example .env.docker          # Linux/Mac

# Para produção/local
Copy-Item .env.example .env          # Windows
cp .env.example .env                 # Linux/Mac
```

Acesse a API em [http://localhost:3333](http://localhost:3333)

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

- Nunca versionar `.env`, `.env.local`, `.env.test`, `.env.docker` ou arquivos com segredos.
- Use `.env.local` para desenvolvimento local, `.env.test` para testes, `.env.docker` para Docker e `.env` para produção.
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
