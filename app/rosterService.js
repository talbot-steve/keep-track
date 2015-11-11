angular.module('keepTrack').service('rosterService', function ($http) {
    
    this.getAthletes = function(data){
        return $http.get('http://localhost:8787/athlete')
    };
    
    this.addAthletes = function(data){
        return $http.post('http://localhost:8787/athlete', data);
    };
    
    this.updateAthletes = function(athlete){
        return $http.put('http://localhost:8787/athlete/' + athlete._id, athlete);
    }
    
    this.deleteAthletes = function(id){
        return $http.delete('http://localhost:8787/athlete?id=' + id)
    }
    
});