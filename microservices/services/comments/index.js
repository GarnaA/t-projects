import express from 'express'
import { randomBytes } from 'crypto';

const app = express();

app.use(express.json());

const commentsByPostId = {};

app.post('/posts/:id/comments', (req, res) => {
  const commentId = randomBytes(4).toString('hex');
  const { content } = req.body;

  const comments = commentsByPostId[req.params.id] || [];

  comments.push({
    id: commentId,
    content,
  });

  commentsByPostId[req.params.id] = comments;

  res.status(201).send(comments);
});

app.get('/posts/:id/comments', (req, res) => {
  return res.send(commentsByPostId[req.params.id] || []);
});

app.listen(4000, () => {
  console.log('Server is running on port 4000');
});
