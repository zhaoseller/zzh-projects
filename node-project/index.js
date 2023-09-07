const express = require('express');
const errorHandler = require('./middleware/errorhandler');
const connectDb = require('./config/dbConnection');
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;

const app = express()
connectDb()
app.use(express.json())
app.use('/api/contacts', require('./routes/contactRoutes'))
app.use('/api/user', require('./routes/userRoutes'))
app.use(errorHandler)
app.listen(port, () => {
    console.log('server running on ' + port)
})