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

1. Grab Dummy Data
------------------

Creer un schema sur Mockaroo: <http://www.mockaroo.com/schemas/6327>
Regarder un exemple de donnée avec [httpie](https://github.com/jakubroztocil/httpie) ou cURL:

     http "http://www.mockaroo.com/c123aa80/download?count=1&key=c0eea960"

Inserer 1000 mails dans MongoDB:

    curl "http://www.mockaroo.com/c123aa80/download?count=1000&key=c0eea960" | mongoimport --jsonArray --drop --db test-dev --collection mails
    
Créer un nouveau endpoints 'mail'

    yo angular-fullstack:endpoint mail

Relancer le serveur
Tester l'api des mails dans un navigateur ou dans un terminal:

    http :9000/api/mails

2. Clean UI
-----------

Vider le MainCtrl.
Utiliser Emmet (zencoding) dans la page main.html

    .container>.row>.col-sm-12>ul.list-unstyled.mails>li{Mails...}
    

