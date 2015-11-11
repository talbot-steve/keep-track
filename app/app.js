var app = angular.module('keepTrack', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
    .when('/home', {
        templateUrl: 'app/views/homeTmpl.html'
    })
    .when('/roster', {
        templateUrl: 'app/views/rosterTmpl.html',
        controller: 'rosterCtrl',
        resolve: {
            athletes: function(rosterService) {
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
            meets: function(scheduleService) {
                return scheduleService.getMeets()
            }
        }
    })
    .when('/contact', {
        templateUrl: 'app/views/contactTmpl.html'
    })
    .otherwise('/roster');
});