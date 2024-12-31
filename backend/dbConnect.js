const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/BookMyShow');
        console.log('Database connected');
    } catch (error) {
        console.log('Error in connecting database');
        console.log(error);
    }
}

module.exports = connectDB;