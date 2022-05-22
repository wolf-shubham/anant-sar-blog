const mongoose = require('mongoose')

const dbConnection = () => {
    try {
        mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log(`MongoDB Connected`)
    } catch (error) {
        console.log(`Error : ${error.message}`)
    }
}

module.exports = dbConnection