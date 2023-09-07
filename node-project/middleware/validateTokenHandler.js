const asyncHandler = require('express-async-handler')
const jwt = require('jsonwebtoken')

const validateToken = asyncHandler(async(req, res, next) => {
    let token
    let authHeader = req.header.Authorization || req.headers.authorization
    if (authHeader && authHeader.startsWith('Bearer')) {
        token = authHeader.split(' ')[1]
        jwt.verify(token, '123123', (err, decoded) => {
            if (err) {
                res.status(401);
                throw new Error('token 不对')
            }
            req.user = decoded.user
            next()
        })
    }
})

module.exports = validateToken