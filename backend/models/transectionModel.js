const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
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
});


module.exports = mongoose.model('transaction', transactionSchema);