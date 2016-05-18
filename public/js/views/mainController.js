var egswiss = angular.module('home', []);

// create the controller and inject Angular's $scope
egswiss.controller('mainController', function($scope) {
    // create a message to display in our view
    $scope.message = 'Look! I am an about page.';

});
