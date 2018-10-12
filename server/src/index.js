import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import Promise from 'bluebird';

import table from "./routes/table";

const app = express();
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
})

// let doesNotModifyBody = function(request, response, next) {
//   request.params = {
//     a: "b"
//   };
//   // calls next because it hasn't modified the header
//   next();
// };

// // middleware that modify the response body
// let doesModifyBody = function(request, response, next) {
//   response.setHeader("Content-Type", "text/html");
//   response.write("<p>Hello World</p>");
//   response.end();
//   // doesn't call next()
// };

// app.use(doesNotModifyBody);
// app.use(doesModifyBody);

app.use("/", table);

app.get('/', (req, res) => {
  res.json({ user: '12344' });
  console.log(req, 'ds');
  console.log('it is work');
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(5000, () => console.log('Running on localhost:5000'));
