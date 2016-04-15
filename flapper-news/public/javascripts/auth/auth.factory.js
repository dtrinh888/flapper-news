app.factory('auth', ['$http', 'window', function($http, $window){
	var auth = {};

	// created saveToken and getToken function for getting and
	// setting our token to localStorage
	auth.saveToken = function(token){
		$window.localStorage['flapper-news-token'] = token;
	};

	auth.getToken = function(){
		return $window.localStorage['flapper-news-token'];
	};

	// created isLoggedIn() to return a boolean value for 
	// if the user is logged in
	auth.isLoggedIn = function(){
		var token = auth.getToken();

		if(token){
			var payload = JSON.parse($window.atob(token.split('.')[1]));

			return payload.exp > Date.now() / 1000;
		} else {
			return false;
		}
	};

	// currentUser() to return the userneame of the user that's
	// logged in
	auth.currentUser = function(){
		if(auth.isLoggedIn()){
			var token = auth.getToken();
			var payload = JSON.parse($window.atob(token.split('.')[1]));

			return payload.username;
		}
	};

	// register function to posts a user to our /register route 
	// and save token returned
	auth.register = function(user){
		return $http.post('/register', user).success(function(data){
			auth.saveToken(data.token);
		});
	};

	// login function that posts a user to /login route 
	// and save token returned
	auth.logIn = function(user){
		return $http.post('/login', user).success(function(data){
			auth.saveToken(data.token);
		});
	};

	// logout function that removes the user's token from 
	// localStorage, logging the user out

	auth.logOut = function(){
		$window.localStorage.removeItem('flapper-news-token');
	};

	return auth;
}]);