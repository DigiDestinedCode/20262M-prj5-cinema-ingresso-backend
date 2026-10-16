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
alterar "database_url" apenas no .env a fim de manter o sigilo no acesso ao banco de dados.

Criação de JWT Secret
```bash
$ node -e "console.log(require('crypto').randomBytes(48).toString('base64url'))
```

Alterar no .env o JWT Secret


Geração de prisma de schema prisma do banco de dados importado
```bash
npx prisma generate
```




## Compilar e rodar o programa

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Rodar Testes

```bash
# unit tests
$ npm run test

# test coverage
$ npm run test:cov
```

