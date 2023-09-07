const asyncHandler = require('express-async-handler')
const Contact = require("../models/contactModel")
//desc Get all contact
// @route Get /api/contacts
// @access private
const getAllContact = asyncHandler( async(req, res) => {
    const contacts = await Contact.find({user_id: req.user.id});
    res.status(200).json(contacts)
})
//desc create contact
// @route Post /api/contacts
// @access private
const createContact = asyncHandler(async (req, res) => {
    const {name, email, phone} = req.body
    if (!email || !name || !phone) {
        res.status(400)
        throw new Error('信息不全1')
    }
    console.log(req.user)
    const contact = await Contact.create({
        name,
        email,
        phone,
        user_id: req.user.id
    })
    res.status(201).json(contact)
})
//desc Get one contact
// @route Get /api/contacts
// @access private
const getContact = asyncHandler(async(req, res) => {
    try {
        const contact = await Contact.findById(req.params.id)
        if (!contact) {
            res.status(404);
            throw new Error(req.params.id + "Contact not found")
        }
        res.status(200).json(contact)
    } catch {
        console.log(1)
    }
})
//desc update contact
// @route Get /api/contacts
// @access private
const updateContact = asyncHandler(async(req, res) => {
    const contact = await Contact.findById(req.params.id)
    if (!contact) {
        res.status(404);
        throw new Error("Contact not found")
    }
    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true}
    )
    res.status(200).json(updatedContact)
})
//desc delete contact
// @route Get /api/contacts
// @access private
const deleteContact = asyncHandler(async(req, res) => {
    
    const contact = await Contact.findById(req.params.id)
    if (!contact) {
        res.status(404);
        throw new Error("Contact not found")
    }
    await Contact.deleteOne(contact)
    res.status(200).json(contact)
})

module.exports = {getAllContact, createContact, getContact, updateContact, deleteContact }