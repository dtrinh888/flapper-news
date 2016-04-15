app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
	$stateProvider
		.state('login', {
			url: '/login',
			templateUrl: 'javascripts/auth/login.html',
			controller: 'AuthCtrl',
			onEnter: ['$state', 'auth', function($state, auth){
				if(auth.isLoggedIn()) {
					$state.go('home');
				}
			}]
		})
		.state('register', {
			url: '/register',
			templateUrl: 'javascripts/auth/register.html',
			controller: 'AuthCtrl',
			onEnter: ['$state', 'auth', function($state, auth){
				if(auth.isLoggedIn()){
					$state.go('home');
				}
			}]
		});
}]);