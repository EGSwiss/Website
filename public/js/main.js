var egswiss = angular.module('egswiss', ['ui.router', "home", "games", "contact", "socialNetwork", "team"]);

    egswiss.config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/");
        $stateProvider
            .state('home', {
              label: "EG Swiss",
              templateUrl : './pages/home.html',
              url: "/",
              controller  : 'mainController'
            })
            .state('games', {
              label: "Spiele",
              templateUrl : './pages/games.html',
              url: "/Spiele",
              controller  : 'gamesController'
            })
            .state('socialNetwork', {
              label: "Social Netzwerk",
              templateUrl : './pages/socialNetwork.html',
              url: "/SocialNetzwerk",
              controller  : 'socialNetworkController'
            })
            .state('team', {
              label: "Team",
              templateUrl : './pages/team.html',
              url: "/Team",
              controller  : 'teamController'
            })
            .state('contact', {
              label: "Kontakt",
              templateUrl : './pages/contact.html',
              url: "/Kontakt",
              controller  : 'contactController'
            });
  });

  egswiss.run(function ($rootScope) {
       $rootScope.$on("$stateChangeSuccess", function (event, state) {
           $rootScope.currentState = state.name.split(".")[0];
       });
  });

  egswiss.controller('MainController', function () {
      if ($(window)[0].innerWidth > 767) {
          $('#teamspeakOverview').parent().parent().removeAttr('data-toggle');
      }

      $(window).resize(function(event){
          if (event.currentTarget.innerWidth > 767) {
              $('#teamspeakOverview').parent().parent().removeAttr('data-toggle');
          } else {
              $('#teamspeakOverview').parent().parent().attr('data-toggle', 'collapse');
          }
      });
  });
