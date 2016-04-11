app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
	console.log('test');
	$stateProvider
		.state('home', {
			url: '/home',
			templateUrl: 'javascripts/home/home.html',
			controller: 'MainCtrl'
		});

		$urlRouterProvider.otherwise('home');
}]);