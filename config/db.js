const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.mongo_url, {
        });
        console.log(process.env.port)
        console.log('Database connected successfully'.blue);
    } catch (error) {
        console.error(`Database connection error: ${error.message}`);
        process.exit(1); // Exit the process with a failure code
    }
};

module.exports = connectDB;
