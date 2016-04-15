app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('posts', {
			url: '/posts/{id}',
			templateUrl: 'javascripts/posts/posts.html',
			controller: 'PostsCtrl',
			resolve: {
				post: ['$stateParams', 'posts', function($stateParams, posts){
					return posts.get($stateParams.id);
				}]
			}
		});
}]);
	