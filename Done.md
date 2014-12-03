Fait
====

Créer un répertoire.
Initialiser un dépot Git.
Lancer le deamon MongoDB.

0. Bootstrap Project
--------------------

Dans un terminal:

    npm install -g yo
    yo

Rechercher et installer le génerateur 'angular-fullstack'.
Lancer ce génerateur.

Choisir JavaScript,
  HTML,
  Less,
  ngRoute
  inclure Boostrap: Y
  inclure UI Boostrap: Y
  utiliser Mongoose: Y
  rejeter les templates d'authentification: N
  rejeter socket.io: N

Pour tester l'application dans un terminal:

    grunt test
    
Pour construire l'application:
     
     grunt
     
Pour lancer un serveur en mode développement:

    grunt serve
