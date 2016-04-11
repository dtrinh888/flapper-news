app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('posts', {
			url: '/posts/{id}',
			templateUrl: 'javascripts/posts/posts.html',
			controller: 'PostsCtrl'
		});
}]);
	