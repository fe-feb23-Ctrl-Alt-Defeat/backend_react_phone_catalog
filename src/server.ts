import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());
app.get('/', (_, res) => {
  res.send('Hello World!');
});

app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});
