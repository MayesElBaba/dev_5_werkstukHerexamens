###  
npx knex migrate:make dev_5 --migrations-directory ./knex/migrations

###
npx knex migrate:latest --knexfile ./knex/knexfile.js

