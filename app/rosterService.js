angular.module('keepTrack').service('rosterService', function ($http) {
    
    this.getAthletes = function(data){
        return $http.get('/athlete')
    };
    
    this.addAthletes = function(data){
        return $http.post('/athlete', data);
    };
    
    this.updateAthletes = function(athlete){
        return $http.put('/athlete/' + athlete._id, athlete);
    }
    
    this.deleteAthletes = function(id){
        return $http.delete('/athlete?id=' + id)
    }
    
});