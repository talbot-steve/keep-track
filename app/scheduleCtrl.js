angular.module('keepTrack').controller('scheduleCtrl', function ($scope, scheduleService, user) {
    $scope.user = user.data[0];
    $scope.meets = $scope.user.meets;
    
    $scope.selectMeet = function (meet) {
        $scope.selectedMeet = meet;
        $scope.select_meet = true;
    }
    
    $scope.getMeet = function () {
        scheduleService.getMeets().then(function (response) {
            $scope.meets = response.data;
        });
    };
    
    $scope.addMeet = function (meet) {
        var data = meet;
        scheduleService.addMeets(data).then(function (response) {
            $scope.getMeet();
        });
    };
    
    $scope.updateMeet = function (selectedMeet) {
        scheduleService.updateMeets(selectedMeet).then(function (response) {
            $scope.getMeet();
        });
        $scope.select_meet = false;
    };
    
    $scope.deleteMeet = function (id) {
        var confirmDelete = confirm('Remove this meet from your schedule?');
        if (confirmDelete === true) {
            scheduleService.deleteMeets(id).then(function (response) {
                $scope.getMeet();
            });
        $scope.select_meet = false;
        }
    };
    
});