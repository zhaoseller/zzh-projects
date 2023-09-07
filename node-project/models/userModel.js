const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
        userName: {
            type: String,
            required: [true, 'please add the user name']
        },
        email: {
            type: String,
            required: [true, 'please add the email address'],
            unique: [true, 'emial address exists']
        },
        password: {
            type: String,
            required: [true, 'please input the password']
        }
    },
    {
        timestamp: true
    }
)

module.exports = mongoose.model("user", userSchema)