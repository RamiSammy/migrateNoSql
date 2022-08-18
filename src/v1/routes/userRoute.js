const express = require('express')
const router = express.Router()

const userController = require('../../controllers/userController.js')


router
    .post('/', userController.createNewUser)
    .get('/', userController.getAllUsers)
    .get('/:id', userController.getOneUser)
    .put('/:id', userController.updateUser)
    .delete('/:id', userController.deleteUser)

module.exports=router