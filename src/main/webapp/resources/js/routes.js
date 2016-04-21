'use strict';

angular.module('gymApp').config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: 'resources/partials/home.html',
            controller: ''
        })
        .when('/employees', {
            templateUrl: 'resources/partials/employees.html',
            controller: ''
        })
        .when('/members', {
            templateUrl: 'resources/partials/members.html',
            controller: ''
        })
        .otherwise({redirectTo: '/home'});
}]);