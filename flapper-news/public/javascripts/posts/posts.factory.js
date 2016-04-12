app.factory('posts', ['$http', [function($http){
	
	var o = {
		posts: [],
	};
	
	o.getall = function(){
		return $http.get('/posts').success(function(data){
			angular.copy(data. o.posts);
		});
	};
	
	return o;

}]]);

