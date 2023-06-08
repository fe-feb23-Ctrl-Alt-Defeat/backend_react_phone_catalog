import expres from 'express';

const app = expres();

app.get('/', (_, res) => {
  res.send('Hello World!');
});

app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});