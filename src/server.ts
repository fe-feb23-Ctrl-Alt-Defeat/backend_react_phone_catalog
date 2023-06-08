import express from 'express';
import cors from 'cors';

const app = express();

const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.get('/', (_, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
