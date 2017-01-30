angular.module('TheaterCtrl', []).controller('TheaterController', function($scope, $http) {

    $scope.tagline = 'Add your theaters  here!';



    var refresh = function() {
        $http.get('/theater/getTheater').success(function(response) {
            console.log('READ IS SUCCESSFUL');
            $scope.theaterList = response;
            $scope.theater = "";
        });
    };

    refresh();

$scope.addTheater = function(theater) {
        
    var theaterObj= {
                     theaterName = $scope.theaterName ,
                     theaterCity = this.theaterCity,
                     theaterSeat = this.theaterSeat    
                    }
           

            $http({
                    method: 'POST',
                    url: '/theater/addTheater',
                     headers: {'Content-Type': 'application/json'},    
                    data: theaterObj
                })
                .then(function(response) {
                    console.log(response);
                    console.log("CREATE IS SUCCESSFUL");
                    refresh();
                });


            // var serviceName = 'movi'
            // $http.post('/movie/addMovie', movieObj).success(function(response) {
            //     console.log(response);
            //     console.log("CREATE IS SUCCESSFUL");
            //     refresh();
            // });

        });
        console.log($scope.contact);

    };
});