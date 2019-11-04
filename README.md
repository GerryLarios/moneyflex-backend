# Moneyflex [BACKEND]

Coded with love by Gerry Larios

## Express

This project was structured with express generator with the following command:

`express --no-view`

### Passport

## Sequelize

The models of this project are made with sequelize-cli:

`sequelize init`

To create the database:

`sequelize db:create`

To create models:

```bash
sequelize model:create --name Users --attributes email:string,password:string,admin:boolean,active:boolen

sequelize model:create --name Concepts --attributes userId:integer,name:string,active:boolean

sequelize model:create --name Days --attributes userId:integer,initBalance:double,totalExpense:double,totalIncome:double,finalBalance:double

sequelize model:create --name Records --attributes userId:integer,conceptId:integer,dayId:integer,amount:double,description:string
```

## Postgres

### Docker

The database was created in a Docker container from the official postgres image:

`docker pull postgres`

The container run command:

`docker run -p 5432:5432 --name postgres --env-file=db.env postgres`

The `db.env` file has the following environtmen variables:

```bash
POSTGRES_USER=
POSTGRES_PASSWORD=
POSTGRES_DB=
```

To run a container with status exit:

`docker start [container id]`

To enter into the container

`docker exec -it postgres psql -U moneyflex_root -d moneyflex_development -w`

It helps to keep the configuration but if the container was removed the process has to be made once again and run the sequelize migrations.

To stop containers:

`docker stop [container id]`

to remove containers:

`docker rm [container id]`
