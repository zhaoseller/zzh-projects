const express = require('express')

const router = express.Router();
const {getAllContact, createContact, getContact, updateContact, deleteContact } = require('../controllers/contactController');
const validateToken = require('../middleware/validateTokenHandler');
router.use(validateToken)
// get all
router.route('/').get((req, res) => {getAllContact(req, res)})
// create
router.route('/').post((req, res) => {createContact(req, res)})
// get one
router.route('/:id').get((req, res) => {getContact(req, res)})
//update
router.route('/:id').put((req, res) => {updateContact(req, res)})
//delete
router.route('/:id').delete((req, res) => {deleteContact(req, res)})



module.exports = router