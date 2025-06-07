# usa a imagem oficial do node na versão LTS com alpine (mais leve)
FROM node:22-alpine 

# defino o diretório do container
WORKDIR /usr/src/app

# copia o package.json para instalar as dependências
COPY package.json .

# instala as dependências
RUN npm i -g pnpm && pnpm i

# copia todos os arquivos do projeto para o container
COPY . .

# expõe a porta 3333 para acesso externo
EXPOSE 3333

# inicializa a aplicação em modo de desenvolvimento
CMD ["pnpm", "dev"]