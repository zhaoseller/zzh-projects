const mongoose = require('mongoose')

const connectDb = async() => {
    try {
        const connect = await mongoose.connect('mongodb://localhost/')
        console.log("database connected")
    } catch {
        console.log(err)
        process.exit(1)
    }
}

module.exports = connectDb