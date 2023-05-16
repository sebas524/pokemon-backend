<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# execute in development

1. clone repository
2. excecute
   `yarn install`
3. have nest cli already installed
   `npm i -g @nestjs/cli`

4. run database
   `docker-compose up -d`

5. clone file **.env.template** and rename to **.env**

6. fill-out environmental variables in **.env**

7. run dev app:
   `yarn start:dev`

8. reconstruct db with seed:
   `http://localhost:3000/api/v2/seed`

## stack being used:

- mongodb
- nest
