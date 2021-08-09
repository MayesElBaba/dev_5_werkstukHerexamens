docker-compose up --build -d
docker-compose down 
 docker exec idContainer  npx  knex migrate:latest --knexfile ./knex/knexfile.js
 ### idContainer verandert elke keer !!!!!!
 docker ps
 
 