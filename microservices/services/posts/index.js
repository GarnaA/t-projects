import express from 'express';

const app = express();

app.use(express.json());

const posts = [];

app.post('/posts', (req, res) => {
  const newPost = {
    id: posts.length + 1,
    content: req.body.content
  };
  posts.push(newPost);
  res.status(201).json(newPost);
});

app.get('/posts', (req, res) => {
  res.json(posts);
});

app.listen(4001, () => {
  console.log('Posts service running on port 4001');
});