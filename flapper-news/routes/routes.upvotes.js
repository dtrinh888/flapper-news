router.put('/posts/:post/upvote', function(req, res, next){
	req.post.upvote(function(err, post){
		if (err) {
			return next(err);
		}

		res.json(posts);
	});
});