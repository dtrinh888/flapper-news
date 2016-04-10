app.config(['$stateProvider', '$urlRouteProvider', function($stateProvider, $urlRouteProvider){
	$stateProvider
		.state('home', {
			url: '/home',
			templateUrl: 'js/flapper-news/home.html',
			controller: 'MainCtrl'
		});

		$urlRouteProvider.otherwise('home');
}]);