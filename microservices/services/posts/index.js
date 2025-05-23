import express from 'express';
import { randomBytes } from 'crypto';

const app = express();

app.use(express.json());

const posts = {};

app.post('/posts', (req, res) => {
  const id = randomBytes(4).toString('hex');
  const { title } = req.body;

  posts[id] = {
    id,
    title
  };

  return res.status(201).send(posts[id]);
});

app.get('/posts', (req, res) => {
  res.send(posts);
});

app.listen(4001, () => {
  console.log('Posts service running on port 4001');
});
