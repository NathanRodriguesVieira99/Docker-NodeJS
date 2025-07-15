# TODO

## Principal

- [] Terminar o CRUD básico de usuários (método de PATCH e/ou PUT )
- [] Criar novas entidades, tabelas no banco e relacioná-las entre si
- [x] Melhorar logs (pino)
- [x] Refatorar use cases de listar e deletar para ser menos acoplado ao prisma usando o repository
- [x] Adicionar factories
- [ ] Adicionar cache com Redis (usar com Docker)
- [x] Fazer setup do Jest para testes E2E
- [ ] Escrever testes unitários e e2e para as partes mais importantes do projeto
- [ ] Criar client.http para listar e testar as rotas
- [x] Configurar commitlint e commitzen
- [x] Configurar CI/CD
- [ ] Documentar com Swagger (tentar novamente pois está dando erro)
- [ ] Autenticação com JWT
- [ ] Melhores validações com zod (schemas)
- [ ] Fazer deploy do projeto

## Urgente

- [x] Corrigir erro do localhost ao rodar com Docker
- [x] Corrigir erro ao rodar o prisma com o docker

## Secundário/Opcional

- [ ] Aplicar Clean Code e SOLID
- [x] Criar um test environment
- [ ] Criar mais ambientes de desenvolvimento env e docker (.env.production, .env.test(?) e docker-compose.production.yml etc.)
- [ ] Escalar o projeto (colab com alguém?)
- [ ] Consumir no front-end (testar Orval?)
