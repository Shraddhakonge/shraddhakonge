const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
//const auth = require( + '/routes/auth');
const authRouter = require('./routes/auth');

const app = express();
const port = process.env.PORT || 5000;
app.use('/api/auth', authRouter);
const medicineRouter = require('./routes/medicine');
app.use('/api/medicine', medicineRouter);

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/pharmacy-care', { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

// Routes
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

