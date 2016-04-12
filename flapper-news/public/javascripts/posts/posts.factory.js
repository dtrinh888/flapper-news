// needed to inject $http
app.factory('posts', ['$http', [function($http){
	
	var o = {
		posts: [],
	};
	
	// to retrieve posts in the posts service within angularApp.js
	o.getall = function(){
		return $http.get('/posts').success(function(data){
			angular.copy(data. o.posts);
		});
	};

	// method to create new posts
	o.create = function(post){
		return $http.post('/posts', post).success(function(data){
			o.posts.push(data);
		});
	};

	o.upvote = function(post) {
		return $http.put('/posts' + post._id + '/upvote')
			.success(function(data){
				post.upvotes += 1;
			});
	};
	
	return o;

}]]);

