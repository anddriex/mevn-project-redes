var express = require('express');
var router = express.Router();

var postsController = require('../controllers/PostsController');

/// ROOMS ROUTES ///

// GET todos los posts
router.get('/posts', postsController.list_posts);

// Add new post
router.post('/posts', postsController.add_new_post);

// Fetch single post
router.get('/post/:id', postsController.fetch_post);

// Update a post
router.put('/posts/:id', postsController.update_post);

// Delete a post
router.delete('/posts/:id', postsController.delete_post);

module.exports = router;
