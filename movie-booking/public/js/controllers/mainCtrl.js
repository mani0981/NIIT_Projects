movieBookingApp.controller('mainController', function($scope, $http) {

	$scope.tagline = 'Welcome to movie booking website!';	
    
    $http.get('/movie/getMovie').success(function(response) {
            console.log('READ IS SUCCESSFUL');
            $scope.moviList = response;
            $scope.movi = "";
        });

});