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
    externalLink: {
        type: String,
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
    Notforsale : {
        type: Boolean,
        default: false,
    },
    sellingPrice : {
        type: Float,
        required: true,
    }
    owner : {
        type: String,
        required: [ture, "Please define owner of NFT"]
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    bids : [{
        user: {
            type: mongoose.Schema.ObjectID,
            ref : "user"
        },
        ammountOfBid: Float,
        currencyName: String,
    }
    ],
});

module.exports = mongoose.model('Product', productSchema);