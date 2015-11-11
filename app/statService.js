angular.module('keepTrack').service('statService', function ($http) {
    
    this.getResults = function(data){
        return $http.get('http://localhost:8787/result')
    };
    
    this.addResults = function(data){
        return $http.post('http://localhost:8787/result', data);
    };
    
    this.updateResults = function(result){
        return $http.put('http://localhost:8787/result/' + result._id, result);
    }
    
    this.deleteResults = function(id){
        return $http.delete('http://localhost:8787/result?id=' + id)
    }
    
});