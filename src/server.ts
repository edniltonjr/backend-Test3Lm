import express, { Response, Request, NextFunction, response } from 'express';
import cors from 'cors';
import routes from './routes';

require('dotenv').config();

const app = express();

app.use(
  cors({
    credentials: true,
    origin: '*',
    allowedHeaders: '*',
    exposedHeaders: '*',
  }),
);

app.use(express.json());
app.use(routes);

const port = process.env.PORT || 3050;
app.listen(port, () => {
  console.log(`Server started on port :) ${port}`);
});
