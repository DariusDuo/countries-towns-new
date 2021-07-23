require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
const app = express();

const PORT = process.env.PORT || 5000;

// prisijungimas prie duomenu bazes
mongoose
  .connect(process.env.MONGO_CONNECT_STIRNG, {
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => {
    console.log('Conneced to Mongo ooooooooose');
  })
  .catch((err) => console.error(err.message));

//MiddleWare
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

app.get('/', function (req, res) {
  res.send('Hello World');
});

app.listen(PORT, console.log(`server is running on port ${PORT}`));
