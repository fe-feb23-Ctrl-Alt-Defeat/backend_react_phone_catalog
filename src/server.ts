import express from 'express';
import cors from 'cors';
import { phonesRouter } from './routes/phones';

const app = express();

const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use('/phones', phonesRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
