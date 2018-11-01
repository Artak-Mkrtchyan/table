import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import cors from 'cors';

import table from "./routes/table";

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
})

app.use("/", table);

app.get('/', (req, res) => {
  res.json('it`s work');
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(5000, () => console.log('Running on localhost:5000'));
