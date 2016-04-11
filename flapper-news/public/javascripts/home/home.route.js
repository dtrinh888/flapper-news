app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
	console.log('test');
	$stateProvider
		.state('home', {
			url: '/home',
			templateUrl: 'js/flapper-news/home/home.html',
			controller: 'MainCtrl'
		});

		$urlRouterProvider.otherwise('home');
}]);