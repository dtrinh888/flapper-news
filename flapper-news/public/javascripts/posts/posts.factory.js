// needed to inject $http
app.factory('posts', ['$http', function($http){

	var o = {
		posts: [],
	};

	// to retrieve posts in the posts service within angularApp.js
	o.getAll = function(){
		return $http.get('/posts').success(function(data){
			angular.copy(data, o.posts);
		});
	};

	// method to create new posts
	o.create = function(post){
		return $http.post('/posts', post).success(function(data){
			o.posts.push(data);
		});
	};

	// to increment the upvotes
	o.upvote = function(post) {
		return $http.put('/posts' + post._id + '/upvote')
			.success(function(data){
				post.upvotes += 1;
			});
	};

	o.get = function(id){
		return $http.get('/posts/' + id).then(function(res){
			return res.data;
		});
	};

	// to post comments
	o.addComment = function(id, comment){
		return $http.post('/posts/' + id + '/comments', comment);
	};

	// to enable upvote comments
	o.upvoteComment = function(post, comment) {
		return $http.put('/posts/', + post._id + '/comments/' + comment._id + '/upvote')
			.success(function(data){
				comment.upvotes += 1;
			});
	};

	return o;

}]);
