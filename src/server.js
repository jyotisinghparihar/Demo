// server.js

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 5000;

let posts = [];

app.use(bodyParser.json());

// POST endpoint to create new post
app.post('/api/posts', (req, res) => {
  const newPost = req.body;
  posts.push(newPost);
  res.status(201).json({ message: 'Post created successfully', post: newPost });
});

// GET endpoint to fetch all posts
app.get('/api/posts', (req, res) => {
  res.json(posts);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
