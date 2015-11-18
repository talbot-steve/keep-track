angular.module('keepTrack').service('scheduleService', function ($http) {
    
    this.getMeets = function (data) {
        return $http.get('/meet');
    };
    
    this.addMeets = function (data) {
        return $http.post('/meet', data);
    };
    
    this.updateMeets = function (meet) {
        return $http.put('/meet/' + meet._id, meet);
    };
    
    this.deleteMeets = function (id) {
        return $http.delete('/meet?id=' + id);
    };
    
});