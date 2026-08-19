# Tuto_Docker 

# Mini-Blog Conteneurisé (Node.js & MySQL)

Ce projet consiste en la conteneurisation et l'orchestration d'une application web dynamique Node.js interconnectée à une base de données relationnelle MySQL, développée dans le cadre de ma reconversion DevOps.

# Architecture du Projet

L'application repose sur deux services isolés communiquant au sein d'un réseau bridge dédié :

* Web (Node.js / Express) : Application web permettant l'affichage et la création d'articles.
* Database (MySQL 8.0) : Base de données relationnelle assurant la persistance.
* Volume Docker : Conservation des données MySQL indépendamment du cycle de vie du conteneur.

```text
+--------------------------------------------------------+
|                      DOCKER ENGINE                     |
|                                                        |
|  +-------------------+        +---------------------+  |
|  |   Conteneur Web   |        |    Conteneur BDD    |  |
|  |  (Node.js / App)  |------> |     (MySQL 8.0)     |  |
|  +-------------------+        +---------------------+  |
|            |                             |             |
+------------|-----------------------------|-------------+
        Port :3000                 Volume : mysql_data

