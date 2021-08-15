
 docker exec idContainer  npx  knex migrate:latest --knexfile ./knex/knexfile.js
 ### idContainer verandert elke keer !!!!!!
 // het dient om je knex file te zien



### Wat doet dit project? 
Het is een API die bepaalde log’s van je leven kan bijhouden en het categoriseren bv hoeveel je sport, hoeveel tijd dat je aan bepaalde actie geeft, hoeveel tijd werk je? ... 

### Waarom is dit project nuttig? 
Het kan de log’s en categorieen opslaan,verwijderen, updaten en tonen , je kan ze ook testen en de testingen stimuleren te laten werken door integration test en end to end tests
Je kan ook docker images maken die dienen voordat je code wordt opgeslagen en runnen op de server en wordt ook gebruikt voor je code te laten werken in de container.

### Waar kan ik aan beginnen?
De code downloaden en laten starten op u eigen pc en begin met het runnen van je docker installatie

### Waar kan ik hulp vinden?
U kunt me altijd contacteren op mijn email : mayes.el.baba@student.ehb.be

### Status van het project? 
Starter project 
Auteurs?
El Baba Mayes

### DOCKER SETUP VOOR CI/CD:
### Hoe kan je met Docker starten?

docker-compose up --build -d // starten met docker
docker-compose down // stoppen met je docker om te zien is momenteel aan het runnen
 docker ps // geeft de informatie over de formaten van de twee containers
 docker images // om de juiste image te zien die momenteel aan het runnen is
 docker rmi  //// remove image + id van de image 
 docker rm // remove container
docker-compose up --build -d

then test it with postman and add an category/log


 

