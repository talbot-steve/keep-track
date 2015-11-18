angular.module('keepTrack').controller('loginCtrl', function ($scope, $location, loginService) {
    
    $scope.createUser = function(user){
		loginService.createUser(user).then(function(resp) {
            $scope.currentUser = resp.data;
            $location.path('/login');
		}, function(err) {
			return err;
		});
	}
	
	$scope.loginUser = function(user){
		loginService.loginUser(user).then(function(resp) {
            $scope.currentUser = resp.data;
			console.log("login", $scope.currentUser);
            $location.path('/roster');
		}, function(err) {
			alert("Email or password is incorrect. Please try again.")
			return err;
		});
	}
    
    $scope.updateUser = function(currentUser){
        loginService.updateUser(currentUser).then(function(response){
            console.log(response)
        })
    }
    
})
