const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 8000;

const app = express();

// Routes
app.use('/api/goals', require('./routes/goalRoutes'));

app.listen(port, () => console.log(`Server started on PORT ${port}`));
