angular.module('keepTrack').controller('statCtrl', function ($scope, rosterService, scheduleService, athletes, meets) {

    $scope.athletes = athletes.data;
    $scope.meets = meets.data;
    
    $scope.selectAthlete = function(athlete) {
        $scope.selectedAthlete = athlete;
        $scope.showme = true;
        $scope.getResults(athlete);
    }
    
    $scope.addResult = function(selectedAthlete) {
        selectedAthlete.results.push($scope.newResult);
        rosterService.updateAthletes(selectedAthlete).then(function (response){
            
        })
    }
    
    $scope.getResults = function(athlete) {
        $scope.athleteResults = athlete.results;
    }
    
})