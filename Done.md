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
    
3. Controller & Templating
--------------------------

Créer un nouveau controller mails avec:

    yo angular-fullstack:controller mails
    
Récupérer un model de mail dans la base

    mongo test-dev --eval "JSON.stringify(db.mails.findOne(), false, 2)"

Ajouter dans le scope du controller

    $scope.mail = {
      "_id": {
        "str": "547f7be6a82a8395b89744dd"
      },
      "from": "bflores0@creativecommons.org",
      "date": "2014-11-05T00:16:05Z",
      "subject": "ut massa volutpat",
      "body": "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
      "star": null,
      "attachment": null,
      "folder": "inbox"
    };
    
Déclaration du controller

    ng-controller="MailsCtrl"
    
Affichage brute du mail
      
    <pre>{{mail | json}}</pre>
  
Affichage correct du mail

    .mail>.date+.from+.title
    
    <div class="mail">
      <div class="date">{{mail.date}}</div>
      <div class="from"><a href="mailto:{{mail.from}}">{{mail.from}}</a></div>
      <div class="title">{{mail.subject}}</div>
    </div>  

Améliorer le look dans le main.less

    // Mail
    .mail {
      padding: .5em;
    
      .from {}
      .date {
        float: right;
      }
      .title {
        font-weight: bold;
      }
    } 
   
4. Using Service
----------------

Utiliser le service $http pour récuper les mails.

    $scope.mails = [];
    $http.get("api/mails").success(function (mails) {
      $scope.mails = mails;
    });

Utiliser le templating angular pour l'affichage des mails
  
    <li ng-repeat="mail in mails">

Limiter à 10 l'affichage des mails.

    <li ng-repeat="mail in mails | limitTo:16">
    
Amélioration du style:

    @mailOver: #e0e9ff;
    @mailOdd: #ebebeb;
    @mailOddOver: #c2d4ff;
    
    // Mails
    ul li {
      border-radius: 4px;
      margin-bottom: 0.5em;
      border: thin solid transparent;
    
      &:nth-child(odd) {
        background-color: @mailOdd;
      }
    
      &:hover {
        background-color: @mailOver;
        border-color: darken(@mailOver,10%);
        box-shadow: 1px 1px 1em black;
      }
    }

5. Directive
------------

Créer une nouvelle directive mail

    yo angular-fullstack:directive myMail
        
Utiliser la directive dans le mail.html

    <my-mail></my-mail>

Déplacer le code correspondant dans le html et le less
 
Ajouter le mail dans le scope de la directive

    scope: { mail: "=" },

