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
    product_attributes: {type: Schema.Types.Mixed, required: true}
}, {
    collection: COLLECTION_NAME,
    timestamps: true
})

const clothingSchema = new Schema({
    brand: {type: String, required: true},
    size: {type: String, required: true},
    color: {type: String, required: true}
}, {
    collection: "clothes",
    timestamps: true
})

const electronicsSchema = new Schema({
    brand: {type: String, required: true},
    model: {type: String, required: true},
    color: {type: String, required: true}
}, {
    collection: "electronics",
    timestamps: true
})

const furnitureSchema = new Schema({
    brand: {type: String, required: true},
    type: {type: String, required: true},
    color: {type: String, required: true}
}, {
    collection: "furniture",
    timestamps: true
})

module.exports = {
    product: model('Product', productSchema),
    clothing: model('Clothing', clothingSchema),
    electronics: model('Electronics', electronicsSchema),
    furniture: model('Furniture', furnitureSchema)
}


