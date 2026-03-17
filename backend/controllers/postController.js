const Post = require('../models/Post');

// Create Post
exports.createPost = async (req, res) => {
  try {
    const post = await Post.create({
      title: req.body.title,
      content: req.body.content,
      image: req.body.image   // 👈 ADD THIS
    });

    res.json(post);
  } catch (error) {
    res.status(500).json({ message: "Error creating post" });
  }
};

// Get Posts
exports.getPosts = async (req, res) => {
  const posts = await Post.find();
  res.json(posts);
};

// Delete Post
exports.deletePost = async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting" });
  }
};