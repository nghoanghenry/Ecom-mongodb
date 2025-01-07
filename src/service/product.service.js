const { product, clothing, electronics, furniture } = require('../model/product')

class ProductFactory {
    static productRegistry = {}

    static registerProduct(type, product) {
        ProductFactory.productRegistry[type] = product
    }

    static async createProduct(type, payload) {
        const productClass = ProductFactory.productRegistry[type]
        return new productClass(payload).createProduct()
    }
}

class Product {
    constructor({product_name, product_description, product_price, product_quantity, product_attributes}) {
        this.product_name = product_name
        this.product_description = product_description
        this.product_price = product_price
        this.product_quantity = product_quantity
        this.product_attributes = product_attributes
    }

    async createProduct(product_id) {
        return await product.create({...this, _id: product_id})
    }
}

class Clothing extends Product {
    async createProduct() {
        const newClothing = await clothing.create(this.product_attributes)
        const newProduct = await super.createProduct(newClothing._id)
    }
}

class Electronics extends Product {
    async createProduct() {
        const newElectronics = await electronics.create(this.product_attributes)
        const newProduct = await super.createProduct(newElectronics._id)
    }
}

class Furniture extends Product {
    async createProduct() {
        const newFurniture = await furniture.create(this.product_attributes)
        const newProduct = await super.createProduct(newFurniture._id)
    }
}

ProductFactory.registerProduct('clothing', Clothing)
ProductFactory.registerProduct('electronics', Electronics)
ProductFactory.registerProduct('furniture', Furniture)

module.exports = ProductFactory;
