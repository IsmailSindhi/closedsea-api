const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: 'backend/config/config.env' })

const connectMongoDB = () => {


    mongoose.connect(process.env.DB_URI).then(
        (data) => {
            console.log(`MongoDB connected with server ${data.connection.host}`);
        }).catch((err) => {
            console.log(err);

        })


}

module.exports = connectMongoDB