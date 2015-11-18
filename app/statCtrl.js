angular.module('keepTrack').controller('statCtrl', function ($scope, rosterService, scheduleService, user) {

    $scope.user = user.data[0];
    $scope.athletes = $scope.user.athletes;
    $scope.meets = $scope.user.meets;
    
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