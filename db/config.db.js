const mongoose = require('mongoose')

const dbConnection = async () => {
    
    try {
        
        await mongoose.connect(process.env.MONGODB_CNN)

        console.log("database connected");


    } catch (error) {
        console.log(error);
        throw new Error('error connection database')
    }
}

module.exports = {
    dbConnection,
}