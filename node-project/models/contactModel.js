const mongoose = require("mongoose")

const contactSchema = mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "user" 
    },
    name: {
        type: String,
        required: [true, 'please input the contact name']
    },
    email: {
        type: String,
        required: [true, 'please input the email']
    },
    phone: {
        type: String,
        required: [true, 'please input the phone']
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("Contact", contactSchema)