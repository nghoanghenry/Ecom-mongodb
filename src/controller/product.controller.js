'use-strict'
const express = require('express');
const router = express.Router();
const ProductService = require('../service/product.service');

class ProductController {
    static async createProduct(req, res, next) {
        try {
            const product = await ProductService.createProduct(req.body.product_type, req.body)
            res.status(201).json(product);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}  

router.post('/', ProductController.createProduct);

module.exports = router;