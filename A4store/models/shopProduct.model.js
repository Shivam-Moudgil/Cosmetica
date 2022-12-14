import { model, Schema, models } from 'mongoose'


const ProductsSechema = new Schema({
    onsale: Number,
    "image-none href": String,
    "attachment-woocommerce_thumbnail src": String,
    "name": { type: String, required: true },
    "widget-lite-container href": String,
    "widget-lite-score-detailed": String,
    "widget-lite-score-detailed 2": String,
    "widget-lite-score-detailed 3": String,
    "widget-lite-score-detailed 4": String,
    "widget-lite-score-detailed 5": String,
    "widget-lite-score-detailed 6": String,
    "widget-lite-score-detailed 7": String,
    "widget-lite-score-detailed 8": String,
    "widget-lite-score-detailed 9": String,
    "widget-lite-score-detailed 10": String,
    "widget-lite-count": String,
    "woocommerce-Price-amount": Number,
    "woocommerce-Price-amount 2": Number,
    "category": String,
    Quantity: Number,
})

const Products = models.shopproduct || model('shopproduct', ProductsSechema)
export { Products }