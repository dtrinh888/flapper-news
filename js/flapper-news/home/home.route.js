app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
	$stateProvider
		.state('home', {
			url: '/home',
			templateUrl: 'js/flapper-news/home/home.html',
			controller: 'PostsCtrl'
		});

		$urlRouterProvider.otherwise('home');
}]);