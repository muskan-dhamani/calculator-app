const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const calculatorRoutes = require('./routes/calculator');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/calculate', calculatorRoutes);

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(3000, () => console.log('Server running on port 3000')))
    .catch(err => console.error(err));
