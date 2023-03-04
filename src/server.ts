import express from 'express';
import * as bodyParser from 'body-parser';
import { apiCofing } from './config/app';

const app: express.Application = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.listen(apiCofing.port || 5000, () => {
  console.clear();
  console.log(`Server started in port ${apiCofing.host}:${apiCofing.port}`);
});
