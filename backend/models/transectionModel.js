const mongoose = require('mongoose');

const transectionSchema = new mongoose.Schema({
    blockHash: {
        type: String,
        required: true,
    },
    from: {
        type: String,
        required: true,
    },
    to : {
        type: String,
        required: true,
    },
    gas: 
})