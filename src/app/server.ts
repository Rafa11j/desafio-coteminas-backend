import 'dotenv/config';
import './database';
import 'express-async-errors';
import { resolve } from 'path';
import express from 'express';
import cors from 'cors';
import globalException from './middlewares/globalException';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(cors());
app.use(
  '/files',
  express.static(resolve(__dirname, '..', '..', 'tmp', 'uploads')),
);
app.use(routes);
app.use(globalException);

app.listen(process.env.PORT || 3333);
