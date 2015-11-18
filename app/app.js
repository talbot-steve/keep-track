var app = angular.module('keepTrack', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
    .when('/home', {
        templateUrl: 'app/views/homeTmpl.html',
        controller: 'homeCtrl'
    })
    .when('/login', {
        templateUrl: 'app/views/loginTmpl.html',
        controller: 'loginCtrl'
    })
    .when('/register', {
        templateUrl: 'app/views/registerTmpl.html',
        controller: 'loginCtrl'
    })
    .when('/roster', {
        templateUrl: 'app/views/rosterTmpl.html',
        controller: 'rosterCtrl',
        resolve: {
            user: function(rosterService) {
                return rosterService.getAthletes()
            }
        }
    })
    .when('/stats', {
        templateUrl: 'app/views/statsTmpl.html',
        controller: 'statCtrl',
        resolve: {
            results: function(statService) {
                return statService.getResults();
            },
            meets: function(scheduleService) {
                return scheduleService.getMeets()
            },
            athletes: function(rosterService) {
                return rosterService.getAthletes()
            }
        }
    })
    .when('/schedule', {
        templateUrl: 'app/views/scheduleTmpl.html',
        controller: 'scheduleCtrl',
        resolve: {
            user: function(scheduleService) {
                return scheduleService.getMeets()
            }
        }
    })
    .when('/contact', {
        templateUrl: 'app/views/contactTmpl.html'
    })
    .otherwise('/home');
});