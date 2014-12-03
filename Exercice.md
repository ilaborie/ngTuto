Excercices
==========

0. Bootstrap Project
--------------------

Installation de [Yeoman](http://yeoman.io/)
Création du projet à partir d'[angular-fullstack](https://github.com/DaftMonk/generator-angular-fullstack)
Lancer l'application.
Faire un tour des fichiers.

1. Grab Dummy Data
------------------

Créer un jeu de données de test pour un WebMail:

> On peut utilisé [Mockaroo](http://www.mockaroo.com/)

  from: String ex: paul.durant@plop.com
  date: String ISO-8601 Date ex: 2014-12-03T20:41:48.035Z
  subject: String
  body: String
  star: Boolean
  attachment: String
  folder: String dans la liste: inbox, project, spam, trash, archive

Insérer ces données dans la collection mails de la base <nom>-test (utiliser le nom de l'application).

Créer un nouveau 'endpoint' mail dans l'application.
Configurer le model d'un mail.
Tester le service.
 
2. Clean UI
-----------

Faire un tours du client.
Remplacer l'application de test par un squelette de WebMail.

3. Controller & Templating
--------------------------

Créer un nouveau controller mails.
Récupérer un model de mail dans la base, et l'ajouter dans le scope du controller
Utiliser ce controller pour afficher le contenu du mail dans la page HTML
Créer un bloc pour afficher ce mail
Améliorer le look dans le main.less

4. Using Service
----------------

Remplacer le mail par un tableau de mail dans le scope du controller.
Utiliser le service $http pour récuper les mails.
Utiliser le templating angular pour l'affichage des mails
Limiter à 10 l'affichage des mails.

5. Directive
------------

Créer une nouvelle directive mail pour l'affichage d'un mail

6. Filter
---------

Récupérer la bibliothèque momentjs
Créer un nouveau filter pour le formatage des dates

7. Routing
----------

Créer une nouvelle route pour composer un mail.
Déclarer cette route dans la bar de navigation.
Créer un formulaire pour l'envoie du mail.

8. Form Binding
---------------

Créer un binding pour le mail.
Implémenter l'envoie du mail en faisant simplement un console.log du mail.
Ajouter la posibilité de configurer le titre et le to du mail

