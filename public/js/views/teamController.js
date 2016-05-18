var egswiss = angular.module('team', []);

// create the controller and inject Angular's $scope
egswiss.controller('teamController', function($scope) {
    // create a message to display in our view
    $scope.message = 'Look! I am an about page.';

});
