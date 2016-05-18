var egswiss = angular.module('games', []);

// create the controller and inject Angular's $scope
egswiss.controller('gamesController', function($scope) {
    // create a message to display in our view
    $scope.message = 'Look! I am an about page.';

});
