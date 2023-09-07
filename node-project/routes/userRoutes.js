const express = require('express')
const validateToken = require('../middleware/validateTokenHandler') 
const router = express.Router();
const {getRegister, getLogin, getCurrent} = require('../controllers/userController')
router.route("/register").post((req, res) => getRegister(req, res))
router.route("/login").post((req, res) => getLogin(req, res))
router.get("/current",validateToken, (req, res) => getCurrent(req, res))


module.exports = router