const express = require('express');

const db = require('../data/db-config.js');
const Posts = require('./posts-model');

const router = express.Router();

router.get('/', (req, res) => {
  Posts.listPosts()
  .then(posts => {
    res.json(posts);
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to get users' });
  });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  Posts.listPostById(id)
  .then(post => {

    if (post) {
      res.json(post);
    } else {
      res.status(404).json({ message: 'Could not find user with given id.' })
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get user' });
  });
});

module.exports = router;