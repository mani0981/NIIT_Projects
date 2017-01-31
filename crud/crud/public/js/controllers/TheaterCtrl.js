angular.module('TheaterCtrl', []).controller('TheaterController', function($scope, $http) {

	$scope.tagline = 'Add your Theater here!';
    
    	var refresh = function() {
        $http.get('/theater/getTheater').success(function(response) {
            console.log('add READ THEATERS IS SUCCESSFUL');
            $scope.theaterList = response;
           $scope.theater = "";
        });
    };
   
   refresh();
$scope.addTheater = function(theater) {
             
            var theaterdb = {
            	theaterName:theater.theaterName,
            	city:theater.city,
            	seats:theater.seats
            };
           
            $http.defaults.headers.post["Content-Type"] = "application/json";

            $http({
                    method: 'POST',
                    url: '/theater/addTheater',
                    headers: {'Content-Type': 'application/json'},    
                    data: theaterdb
                })
                .then(function(response) {
                    console.log(response);
                    console.log("CREATE IS SUCCESSFUL");
                    refresh();
                });
                refresh()    

           
    };
 

    $scope.removeTheater = function(theater) {
        
        $http.delete('/theater/deleteTheater/' + theater._id).success(function(response) {
            console.log(response);
            console.log('DELETED SUCCESSFULLY');
            refresh();
        });
    };

    $scope.editTheater = function(theater) {
    	console.log(theater);
        $http.get('/theater/getTheater/' + theater._id).success(function(response) {
            console.log(response[0]);
            $scope.theater = response[0];
            console.log("edit success")
        });
    };

    $scope.updateTheater = function(theater) {
        console.log("REACHED UPDATE");
        console.log($scope.theater._id);
        $http.put('/theater/updateTheater/' + $scope.theater._id, $scope.theater).success(function(response) {
            console.log(response);
            refresh();
        })
    }
   
 });