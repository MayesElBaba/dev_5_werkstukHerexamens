docker-compose up --build -d
docker-compose down 
 docker exec idContainer  npx  knex migrate:latest --knexfile ./knex/knexfile.js
 ### idContainer verandert elke keer !!!!!!


 docker ps
 docker images 
 docker rmi  //// remove image + id van de image 
 docker rm // remove container
docker-compose up --build -d

then test it with postman and add an category/log
