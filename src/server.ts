import expres from 'express';
import cors from 'cors';

const app = expres();

app.use(cors());
app.use(expres.json());
app.get('/', (_, res) => {
  res.send('Hello World!');
});

app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});
