# Quarkus demo: Hibernate ORM, Hibernate Search + Elasticsearch and RESTEasy
Control de MANTENIMIENTO

Este es un servicio CRUD que expone un par de puntos finales sobre REST,
con un front-end basado en Angular para que puedas jugar con él desde tu navegador.

Si bien el código es sorprendentemente simple, en el fondo se utiliza:
  - RESTFácil de exponer los puntos finales REST
  - Hibernar ORM para realizar las operaciones CRUD en la base de datos.
  - Hibernate Search + Elasticsearch para indexar las entidades en un índice de Elasticsearch
  - Una base de datos PostgreSQL; consulte a continuación para ejecutar uno a través de Docker
  - ArC, la herramienta de inyección de dependencia inspirada en CDI sin gastos generales
  - El pool de conexiones Agroal de alto rendimiento.
  - Almacenamiento en caché basado en Infinispan
  - Todo coordinado de forma segura por el Gerente de Transacciones de Narayana

## Requisitos

- JDK 11+
- GraalVM

puedesa usar un PostgreSQL database, o Docker

## Building the demo

en la terminal del proyecto

> ./mvnw package

Tenga en cuenta que al ejecutar este comando se iniciará un clúster de Elasticsearch, se iniciará una instancia de PostgreSQL y se ejecutarán las pruebas.

## Running the demo

### Live coding with Quarkus

El complemento Maven Quarkus proporciona un modo de desarrollo que admite
codificación en vivo. Para probar esto:

>  ./mvnw quarkus:dev

### Run Quarkus in JVM mode

compila:
> ./mvnw package

Tenga en cuenta que este comando iniciará una instancia de PostgreSQL y un clúster de Elasticsearch para ejecutar las pruebas.
Por lo tanto, es necesario detener sus contenedores PostgreSQL y Elasticsearch.

A continuación, debemos asegurarnos de tener una instancia de PostgreSQL y una instancia de Elasticsearch ejecutándose.
(Quarkus inicia automáticamente uno de cada uno para el modo de desarrollo y de prueba).

Para configurar una base de datos PostgreSQL usando Docker:

> docker run -it --rm=true --name postgresql_quarkus_test -e POSTGRES_USER=quarkus_test -e POSTGRES_PASSWORD=quarkus_test -e POSTGRES_DB=quarkus_test -p 5432:5432 postgres:13.3

Para configurar una intancia elasticsearch usando Docker:

> docker run -it --rm=true --name elasticsearch_quarkus_test -p 9200:9200 -p 9300:9300 -e "discovery.type=single-node" docker.elastic.co/elasticsearch/elasticsearch-oss:7.10.0

correr aplicacion

> java -jar ./target/quarkus-app/quarkus-run.jar


### Run Quarkus as a native application

> ./mvnw package -Dnative

> ./target/hibernate-search-orm-elasticsearch-quickstart-1.0.0-SNAPSHOT-runner

## See the demo in your browser

<http://localhost:8080/>

## Running the demo in Kubernetes

This section provides extra information for running both the database and the demo on Kubernetes.
As well as running the DB on Kubernetes, a service needs to be exposed for the demo to connect to the DB.

Then, rebuild demo docker image with a system property that points to the DB. 

```bash
-Dquarkus.datasource.jdbc.url=jdbc:postgresql://<DB_SERVICE_NAME>/quarkus_test
```
