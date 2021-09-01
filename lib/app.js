import express from 'express';
import notFoundMiddleware from './middleware/not-found.js';
import errorMiddleware from './middleware/error.js';
import sudokuController from './controllers/routes.js';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();

app.use(express.static(`${__dirname}/../public/normal`));
app.use(express.json());
app.use(cors({ origin: true, credentials: true }));

app.use('/api/v1/puzzle', sudokuController);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

export default app;
