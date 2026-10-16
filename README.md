## Backend de MicroServiço Cinema-Ingresso

Microserviço parte de um projeto de um website de um Cinema ficticio. Esse Microserviço é responsável pela compra e vendo de ingresso, assim como sua locação de assentos.

## Project setup

Instalação de dependencias
```bash
$ npm install
```

Copiar .env para alteração em powershell
```bash
$ Copy-Item .env.example .env
```


Criação de JWT Secret
```bash
$ node -e "console.log(require('crypto').randomBytes(48).toString('base64url'))
```


```bash
npx prisma generate
```

alterar "database_url" apenas no .env a fim de manter o sigilo no acesso ao banco de dados. E incluir JWT Secret


## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

