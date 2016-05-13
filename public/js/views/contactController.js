var egswiss = angular.module('contact', []);

egswiss.controller('contactController', function($scope) {
    $scope.emailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    $scope.submit = function () {
    };

    $scope.validate = function (fieldName) {
        return $scope.contactForm[fieldName].$dirty && $scope.contactForm[fieldName].$invalid;
    };
});
