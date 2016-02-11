var egswiss = angular.module('contact', []);

// create the controller and inject Angular's $scope
egswiss.controller('contactController', function($scope) {
    // create a message to display in our view
    $scope.message = 'Look! I am an about page.';

});
