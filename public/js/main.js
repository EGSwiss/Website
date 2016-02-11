var egswiss = angular.module('egswiss', ['ui.router', "home", "games", "contact", "socialNetwork", "team"]);

  // configure our routes
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

  egswiss.run(function ($rootScope, $window) {
       $rootScope.$on("$stateChangeSuccess", function (event, state) {
           $window.document.title = state.label;

            var currentState = state.name.split(".")[0];
            var val = "#navigationItem-" + currentState;
            console.log(val);
            $("#navbar ul li").each(function(li){
                $("li").removeClass("active");
            });
            $(val).addClass("active");
       });
   });
