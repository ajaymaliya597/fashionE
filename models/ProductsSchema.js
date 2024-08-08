const moongoose = require("mongoose");
const ProductSchema = new moongoose.Schema({
    
        product_id: {
            type: Number,
            required: true,
            unique: true
        },
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        productImg: {
            type: String,
            required: true
        },
        new_price: {
            type: Number,
            required: true
        },
        old_price: {
            type: Number,
            required: true
        },
        product_qty: {
            type: Number,
            required: true,
        },
        category: {
            type: String,
            required: true,
        },
        sub_category: {
            type: String,
            required: true
        },
        rating: {
            type: Number,
            required: true
        },
        colors: {
            type: [String],
            required: true
        
    }
    

})

const productcollection = moongoose.model("products",ProductSchema);
module.exports = productcollection;
