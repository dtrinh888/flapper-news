app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('posts', {
			url: '/posts/{id}',
			templateUrl: 'js/flapper-news/posts/posts.html',
			controller: 'PostsCtrl'
		});
}]);
	