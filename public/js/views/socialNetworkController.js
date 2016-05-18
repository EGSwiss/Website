var egswiss = angular.module('socialNetwork', []);

// create the controller and inject Angular's $scope
egswiss.controller('socialNetworkController', function($scope) {
    // create a message to display in our view
    $scope.message = 'Look! I am an about page.';

});
