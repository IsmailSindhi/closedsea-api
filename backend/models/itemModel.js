const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    description : {
        type: String,
        required: [true,"Please Enter product description"],
    },
    price: {
        type: Number,
        required: [true,"Please Enter Product Price"],
        maxlength: [8,"Price can not exceed 8 charachters"],
    },
    ratings: {
        type: Number,
        default: 0,
    },
    images: [
        {
            public_id: {
                type: String,
                required: true,
            },
            url: {
                type: String,
                required: true,
            },
        },
    ],
    category : {
        type: String,
        required: [true,"Plese Enter Product Category"],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model('Product', productSchema);