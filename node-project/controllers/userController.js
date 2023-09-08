const asyncHandler = require('express-async-handler')
const User = require("../models/userModel.js")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

//desc register a user
// @route post /api/user/register
// @access public
const getRegister = asyncHandler(async(req, res) => {
    const {email, password, userName} = req.body
    if (!email || !password || !userName) {
        res.status(200).json({message: 'wrong params', code: 400})
        return
    }
    const contacts = await User.findOne({email});
    if (contacts) {
        res.status(200).json({message: 'email exists', code:400})
        return
    }
    const hashPassword = await bcrypt.hash(password, 10)
    const user = User.create({
        userName,
        password: hashPassword,
        email
    })
    if (user) {
        res.status(200).json({
            code:200,
            message: 'userCreated Successfully'
        })
    }
    

})
//desc Get all contact
// @route post /api/user/login
// @access public
const getLogin = asyncHandler( async(req, res) => {
    const {email, password} = req.body
    if (!email || !password) {
        res.status(200).json({
            code:400,
            message: 'password and email is necessary',
            data: null
        })
        return
    }
    const user = await User.findOne({email})
    if (!user) {
        res.status(200).json({
            code:400,
            message: 'user not exist',
            data: null
        })
        return
    }
    if (user && (await bcrypt.compare(password, user.password ))) {
        // 三个参数分别是：用户信息对象。加密秘钥、配置对象 
        const accessToken = jwt.sign({
            user: {
                username: user.userName,
                email: user.email,
                id: user.id
            },
        },
        '123123',
        {expiresIn: '10h'})
        res.status(200).json({message: 'login user', data: {token: accessToken}, code: 200})
    } else {
        res.status(400)
    }
})
//desc Get all contact
// @route Get /api/user/current
// @access public
const getCurrent = asyncHandler( async(req, res) => {
    res.status(200).json({message: 'Current user information'})
})

module.exports = {getRegister, getLogin, getCurrent}