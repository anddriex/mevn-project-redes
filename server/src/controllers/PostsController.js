var Post = require('../models/post');

// obten todos los posts
exports.list_posts = function (req, res) {
    Post.find({}, 'title description', function(error, posts) {
        if (error) {console.error(error);}
        res.send({
            posts: posts
        })
    }).sort({_id:-1})
};

// Add new Post
exports.add_new_post = function (req, res) {
    // var db = req.db;
    var title = req.body.title;
    var description = req.body.description;
    var new_post = new Post({
        title: title,
        description: description
    });

    new_post.save(function (error) {
        if (error) {
            console.log(error)
        }
        res.send({
            success: true,
            message: 'Post saved successfully!'
        })
    })
};

// Fetch single post
exports.fetch_post = function (req, res) {
    //var db = req.db;
    Post.findById(req.params.id, 'title description', function (error, post) {
        if (error) { console.error(error); }
        res.send(post)
    })
};

// Update a post
exports.update_post = function (req, res) {
    //var db = req.db;
    Post.findById(req.params.id, 'title description', function (error, post) {
        if (error) { console.error(error); }
        post.title = req.body.title;
        post.description = req.body.description;
        post.save(function (error) {
            if (error) {
                console.log(error)
            }
            res.send({
                success: true
            })
        })
    })
};

exports.delete_post = function (req, res) {
    //var db = req.db;
    Post.remove({
        _id: req.params.id
    }, function(err, post){
        if (err)
            res.send(err);
        res.send({
            success: true
        })
    })
};