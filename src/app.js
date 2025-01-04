const express = require('express');
const app = express();
const db = require('./dbs/mongodb');

app.get('/', (req, res) => {
    res.send('Hello World!');
    }
);

module.exports = app;
