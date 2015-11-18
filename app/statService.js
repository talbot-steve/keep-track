angular.module('keepTrack').service('statService', function ($http) {
    
    this.getResults = function(data){
        return $http.get('/result')
    };
    
    this.addResults = function(data){
        return $http.post('/result', data);
    };
    
    this.updateResults = function(result){
        return $http.put('/result/' + result._id, result);
    }
    
    this.deleteResults = function(id){
        return $http.delete('/result?id=' + id)
    }
    
});