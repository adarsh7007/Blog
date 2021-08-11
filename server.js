const express = require("express");
const cors = require("cors");
// const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const app = express();
const db = require("./db");
const path = require('path');
const artRoute = require('./routes/articles')
const multer = require("multer");
app.use(cors());
// var obj;
// fs.readFile('file', 'utf8', function (err, data) {
//   if (err) throw err;
//   obj = JSON.parse(data);
// });
app.use(express.static('public'))
app.use(bodyParser.json({ limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb'}));
app.use(multer({dest: __dirname + '/client/src/image/'}).single('picture'))

// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/', artRoute.routes);
// app.use("/", require("./routes/articles"));

const port = process.env.Port || 5000;
app.listen(port, () => {
  console.log(port, "server start");
});
