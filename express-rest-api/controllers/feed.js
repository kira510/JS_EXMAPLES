 const posts = [{title: 'post1', content:'post1'}];

exports.getPosts = (req, res, next) => {
    res.status(200).json({
        posts: posts
    })
}

exports.postPosts = (req, res, next) => {
    const title = req.body.title;
    const content = req.body.content;

    posts.push({title: title, content: content});
    res.status(201).json({
        message: 'Post created Successfully',
        posts: posts
    });
}