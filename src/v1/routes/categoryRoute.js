const express = require('express')
const router = express.Router()

const categoryController = require('../../controllers/categoryController.js')

router
    .post('/', categoryController.createNewCategory)
    .get('/', categoryController.readCategories)
    .put('/:id', categoryController.updateCategory)
    .delete('/:id', categoryController.deleteCategory)
    .get('/:id' , categoryController.getOneCategory)

module.exports=router