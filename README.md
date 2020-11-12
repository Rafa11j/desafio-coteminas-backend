# Desafio Coteminas (Backend)

## Tecnologias Utilizadas

- Nodejs
- TypeScript
- TypeORM
- PostgreSQL
- Jest 
- Babel
- Eslint
- Prettier

## Requisitos para executar o projeto

Para executar o projeto, será necessário ter os seguintes requisitos: 
- Nodejs 
- Yarn
- PostgreSQL

## Configuração do projeto

### Passo 1 - Configurar o Banco de Dados:
  
  Criar um banco de dados PostgreSQL para o projeto.

### Passo 2 - Baixar as dependencias do projeto

  Execute o seguinte comando:

```
  yarn install
``` 

### Passo 3 - Configurar variáveis de ambiente:
 
 Renomear o arquio `.env.example` para `.env`. Este arquivo contem as variáveis de ambiente necessárias para executar o projeto. Entre elas temos:

 - `DATABASE_URL`: onde você passará a configuração do seu banco de dados. `postgres://{username}:{password}@{host}:{port}/{database}`. Renomei os variáveis pelas do seu banco.

 - `NODE_ENV`: para controlar o ambiente da aplicação se estará em `development`(desenvolvimento) ou `production`(produção). Por padrão deixe em `development`.

 - `API_URL`: url da api para enviarmos o caminho correto das imagens dos produtos. Por padrão deixe em `http://localhost:3333`, caso queira mudar a porta da aplicação no arquivo `src/app/server.ts`, lembre-se de mudar o valor da porta da `API_URL`.

### Passo 4 - Executano migrations:
 
 Caso a conexão com a base de dados esteja correta, rode o seguinte comando para executar as migrations: 

```
  yarn typeorm migration:run
``` 

### Passo 5 - Executando o Projeto:

 Dando tudo certo nos passos anteriores, basta executar o seguinte comando:

```
  yarn dev
``` 