const mongoose = require('mongoose');

const transectionSchema = new mongoose.Schema({
    Hash: {
        type: String,
        required: true,
    },
    fromAddress: {
        type: String,
        required: true,
    },
    toAddress : {
        type: String,
        required: true,
    },
    timeStamp: {
        type: Date,
        default: Date.now()
    },
    blockNum: {
        type: Number,
    },
    total_burn: {
        ammount : Float,
        currencyName: String,
    }
})