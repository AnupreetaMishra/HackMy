var app = angular.module("app", ['ngRoute','ui.bootstrap']);
app.config(['$routeProvider','$httpProvider',
    function ($routeProvider,$httpProvider ) {
        $routeProvider.
            when('/Home', {
                templateUrl: 'features/home.html',
               // controller: 'addStudentsController'
            }).
             when('/Landing', {
                templateUrl: 'features/landing.html'
                // controller: 'fullnameController'
             }).

            otherwise({
                redirectTo: '/Landing'
            });
    }]); 