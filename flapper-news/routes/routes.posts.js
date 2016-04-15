var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Post = mongoose.model('Post');
var Comment = mongoose.model('Comment');

router.param('post', function(req, res, next, id){
	var query = Post.findById(id);

	query.exec(function(err, post){
		if(err) {
			return next(err);
		}
		if(!post) {
			return next(new Error('can\'t find post'));
		}

		req.post = post;
		return next();
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

router.get('/', function(req, res, next){
	Post.find(function(err, posts){
		if(err){
			return next(err);
		}

		res.json(posts);
	});
});

router.post('/', function(req, res, next){
	var post = new Post(req.body);

	post.save(function(err, post){
		if(err) {
			return next(err);
		}

		res.json(post);
	});
});

router.put('/:post/upvote', function(req, res, next){
	req.post.upvote(function(err, post){
		if (err) {
			return next(err);
		}

		res.json(post);
	});
});

router.post('/:post/comments', function(req, res, next){
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

router.put('/:post/comments/:comment/upvote', function(req, res, next) {
	req.comment.upvote(function(err, comment){
		if (err) {
			return next(err);
		}

		res.json(comment);
	});
});

router.get('/:post', function(req, res, next){
	req.post.populate('comments', function(err, post){
		if(err) {
			return next(err);
		}
		
		res.json(req.post);
	});
});

// require authentication for creating a post
router.post('/posts', auth, function(req, res, next){

});

// require authentication for upvoting
router.put('/posts/:post/upvote', auth, function(req, res, next){

});

// require authentication for commenting and set the author for comments
router.post('/posts/:post/comments', auth, function(req, res, next){

});

// require authentication for upvoting comments
router.put('posts/:post/comments/:comment/upvote', auth, function( req, res, next){

});

// set the author field when creating posts
router.post('/posts', auth, function(req, res, next){
	var post = new Post(req.body);
	post.author = req.payload.username;
});

// set the author field when creating comments
router.post('/posts/:post/comments', auth, function(req, res, next){
	var comment = new Comment(req.body);
	comment.post = req.post;
	comment.author = req.payload.username;
});

module.exports = router;