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
        res.status(400).json({message: 'wrong params'})
        return
    }
    const contacts = await User.findOne({email});
    if (contacts) {
        res.status(400).json({message: 'email exists'})
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
        res.status(400).json({
            message: 'password and email is necessary'
        })
        return
    }
    const user = await User.findOne({email})
    if (!user) {
        res.status(400).json({
            message: 'user not exist'
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
        {expiresIn: '10m'})
        res.status(200).json({message: 'login user', token: accessToken})
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