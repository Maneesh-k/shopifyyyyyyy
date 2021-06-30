const express = require('express');
const shopifyRoutes = require('./routes/shopifyRoutes');

const app = express();

// Body parser, reading data from body into req.body
app.use(express.json({ limit: '10kb' }));

//ROUTES
app.use('/', shopifyRoutes);

module.exports = app;