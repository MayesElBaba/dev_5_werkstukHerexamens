###  migratie file maken
npx knex migrate:make dev_5 --migrations-directory ./knex/migrations

### migratie aanpassen met de nieuwe informatie
npx knex migrate:latest --knexfile ./knex/knexfile.js

## jest dient voor docker installatie
npm install --save-dev jest
npm install --save-dev supertest

## je file runnen
npm run test