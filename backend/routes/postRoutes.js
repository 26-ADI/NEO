const express = require('express');
const router = express.Router();
const protect = require('../middleware/authMiddleware');
const {
  createPost,
  getPosts,
  deletePost
} = require('../controllers/postController');

router.route('/')
  .get(getPosts)
  .post(createPost);

router.delete('/:id', deletePost);

module.exports = router;