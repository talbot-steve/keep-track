angular.module('keepTrack').service('scheduleService', function ($http) {
    
    this.getMeets = function (data) {
        return $http.get('http://localhost:8787/meet');
    };
    
    this.addMeets = function (data) {
        return $http.post('http://localhost:8787/meet', data);
    };
    
    this.updateMeets = function (meet) {
        return $http.put('http://localhost:8787/meet/' + meet._id, meet);
    };
    
    this.deleteMeets = function (id) {
        return $http.delete('http://localhost:8787/meet?id=' + id);
    };
    
});