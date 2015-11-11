angular.module('keepTrack').controller('rosterCtrl', function ($scope, rosterService, athletes) {
    
    $scope.athletes = athletes.data;
    
    $scope.selectAthlete = function(athlete){
        $scope.selectedAthlete = athlete;
        $scope.showme = true;
        $scope.show_season = true;
        $scope.show_info = false;
        $scope.show_emergency = false;
        if ($scope.show_info === true) {
            $scope.show_season_info = false;
        } else {
            $scope.show_season_info = true;
        }
        $scope.active_firstName = athlete.firstName;
        $scope.active_lastName = athlete.lastName;
        $scope.getInjuries(athlete);
        $scope.getExpectations(athlete);
        $scope.getAttendance(athlete);
    }
    
    $scope.showInfo = function(){
        $scope.show_info = true;
        $scope.show_season = false;
        $scope.show_emergency = false; 
        $scope.show_season_info = false;
        $scope.show_injuries = false;
        $scope.show_expectations = false;
        $scope.show_attendance = false;
    }
    
    $scope.showSeason = function() {
        $scope.show_info = false;
        $scope.show_season = true;
        $scope.show_emergency = false;
        $scope.show_season_info = true;
    }
    
    $scope.showEmergency = function() {
        $scope.show_info = false;
        $scope.show_season = false;
        $scope.show_emergency = true;
        $scope.show_season_info = false;
        $scope.show_injuries = false;
        $scope.show_expectations = false;
        $scope.show_attendance = false;  
    }
    
    $scope.showInjuries = function(){
        $scope.show_injuries = true;
        $scope.show_expectations = false;
        $scope.show_attendance = false;    
    }
    
    $scope.addInjury = function(selectedAthlete){
        selectedAthlete.injuries.push($scope.newInjury);
        selectedAthlete.injured = true;
        rosterService.updateAthletes(selectedAthlete).then(function (response){
            
        })
    }
    
    $scope.getInjuries = function(athlete) {
        $scope.athleteInjuries = athlete.injuries;
    }
    
    $scope.clearInjury = function(selectedAthlete) {
        selectedAthlete.injured = false;
        rosterService.updateAthletes(selectedAthlete).then(function (response){
            
        })
    }
    
    $scope.showExpectations = function() {
        $scope.show_injuries = false;
        $scope.show_expectations = true;
        $scope.show_attendance = false;
    }
    
    $scope.addExpectation = function(selectedAthlete){
        selectedAthlete.expectations.push($scope.newExpectation);
        rosterService.updateAthletes(selectedAthlete).then(function (response){
            
        })
    }
    
    $scope.getExpectations = function(athlete) {
        $scope.athleteExpectations = athlete.expectations;
    }
    
    $scope.showAttendance = function() {
        $scope.show_injuries = false;
        $scope.show_expectations = false;
        $scope.show_attendance = true;
    }
    
    $scope.addAttendance = function(selectedAthlete) {
        selectedAthlete.attendance.push($scope.newAttendance);
        rosterService.updateAthletes(selectedAthlete).then(function (response){
            
        })
    }
    
    $scope.getAttendance = function(athlete) {
        $scope.athleteAttendance = athlete.attendance;
    }
    
    $scope.getAthlete = function() {
        rosterService.getAthletes().then(function (response){
            $scope.athletes = response.data;
        })
    }
    
    $scope.addAthlete = function(athlete) {
        var data = athlete;
        rosterService.addAthletes(data).then(function (response){
            $scope.getAthlete();
        })
    }
    
    $scope.updateAthlete = function(selectedAthlete){
        rosterService.updateAthletes(selectedAthlete).then(function (response){
            selectedAthlete.edit = !selectedAthlete.edit;
        })
    }
    
    $scope.updateContact = function(selectedAthlete){
        rosterService.updateAthletes(selectedAthlete).then(function (response){
            selectedAthlete.edit = !selectedAthlete.edit;
        })
    }
    
    $scope.deleteAthlete = function(id){
        var confirmDelete = confirm('Are you sure?');
        if (confirmDelete === true){
            rosterService.deleteAthletes(id).then(function (response){
                $scope.showme = false;
                $scope.getAthlete();
            })
        }
    }
    
})