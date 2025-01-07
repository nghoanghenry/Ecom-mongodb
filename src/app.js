const express = require('express');
const app = express();
const db = require('./dbs/mongodb');
app.use(express.json()); // Thêm dòng này để parse JSON

const ProductController = require('./controller/product.controller');

app.get('/', (req, res) => {
    res.send('Hello World!');
    }
);

app.use('/products', ProductController);


module.exports = app;
