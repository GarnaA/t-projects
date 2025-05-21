import express from 'express'

const app = express();

app.use(express.json());

const comments = [];

app.post('/comments', (req, res) => {
  const newComment = {
    id: comments.length + 1,
    content: req.body.content
  };
  comments.push(newComment);
  res.status(201).json(newComment);
});

app.get('/comments', (req, res) => {
  res.json(comments);
});

app.listen(4000, () => {
  console.log('Server is running on port 4000');
});
