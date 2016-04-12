router.post('/posts/:post/comments', function(req, res, next){
	var comment = new Comment(req.body);
	comment.post = req.post;

	comment.save(function(err, comments){
		if(err) {
			return next(err);
		}

		req.post.comments.push(comment);
		req.post.save(function(err, post) {
			if(err) {
				return next(err);
			}

			res.json(comment);
		});
	});
});

//not sure if this is done right
router.put('posts/:post/comment/upvote', function(req, res, next) {
	req.post.comments(function(err, post){
		if (err) {
			return next(err);
		}

		res.json(posts);
	});
});

router.param('comment', function(req, res, next, comment){
	var query = Comment.findById(comment);

	query.exec(function(err, comment){
		if(err) {
			return next(err);
		}
		if(!comment){
			return next(new Error('can\'t find comments'));
		}

		req.comment = comment;
		return next();
	});
});