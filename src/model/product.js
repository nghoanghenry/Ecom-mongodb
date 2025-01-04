'use-strict'

const {model, Schema, Types} = require('mongoose')
const { type } = require('os')

const DOCUMENT_NAME = 'Product'
const COLLECTION_NAME = 'products'

const productSchema = new Schema({
    product_name: {type: String, required: true},
    product_description: String,
    product_price: {type: Number, required: true},
    product_quantity: {type: Number, required: true},
    product_atributes: {type: Schema.Types.Mixed, required: true}
}, {
    collection: COLLECTION_NAME,
    timestamps: true
})

const clothingSchema = new Schema({
    brand: {type: String, required: true},
    size: {type: String, required: true},
    color: {type: String, required: true}
}, {
    collection: COLLECTION_NAME,
    timestamps: true
})

const electronicsSchema = new Schema({
    brand: {type: String, required: true},
    model: {type: String, required: true},
    color: {type: String, required: true}
}, {
    collection: COLLECTION_NAME,
    timestamps: true
})

const furnitureSchema = new Schema({
    brand: {type: String, required: true},
    type: {type: String, required: true},
    color: {type: String, required: true}
}, {
    collection: COLLECTION_NAME,
    timestamps: true
})

module.exports = {
    Product: model(DOCUMENT_NAME, productSchema),
    Clothing: model(DOCUMENT_NAME, clothingSchema),
    Electronics: model(DOCUMENT_NAME, electronicsSchema),
    Furniture: model(DOCUMENT_NAME, furnitureSchema)
}


