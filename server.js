const express = require('express');
const connectDB = require('./config/db');
const http = require("http");

const app = express();
//connectDB();

app.get('/', (req, res) => res.json({ message: 'API is live!' }));
// app.use(miniLogger);

// enable CORS without external module
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.json({ extended: false }));

// API Routes
app.use('/api/users', require('./routes/users'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
