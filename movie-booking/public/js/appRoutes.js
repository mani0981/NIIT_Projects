angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'mainController'
		})

		// movie page
		.when('/movie', {
			templateUrl: 'views/movie.html',
			controller: 'movieController'
		})

		// admin page
		.when('/admin', {
			templateUrl: 'views/admin.html',
			controller: 'adminController'
		});

		
		

	$locationProvider.html5Mode(true);

}]);