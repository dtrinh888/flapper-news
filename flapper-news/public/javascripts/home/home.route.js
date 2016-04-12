app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
	$stateProvider
		.state('home', {
			url: '/home',
			templateUrl: 'javascripts/home/home.html',
			controller: 'MainCtrl',
			resolve: {
				postPromise: ['posts', function(posts){
					return posts.getAll();
				}]
			}
		});

		$urlRouterProvider.otherwise('home');
}]);