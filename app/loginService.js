angular.module('keepTrack').service('loginService', function($http){
    
	this.createUser = function(user){
        return $http.post('/users', user).then(function(err, res){
			if(err){
				console.log(err);
				return(err);
			} else {
				console.log(res);
				return res;
			}
		})
	}
    
    this.updateUser = function (user) {
        console.log(user);
        return $http.put('/users/ + user_.id', user).then(function(data){
			console.log('updateUser', data)
            return data.data;
        })
    }
    
    var currentUser = null;
	
	this.getCurrentUser = function(id){
		return $http.get('/users/ + id').then(function(response){
			console.log('users', response)
			return response.data
		})
	}
	
	this.logout = function(){
		var currentUser = null;
	}
	
	this.loginUser = function(user){
        return $http.post('/login', user).then(function(res, err){
			if(err){
				console.log(err);
				return(err);
			} else {
				currentUser = res.data;
				return res;
			}
		})
	}
	
})