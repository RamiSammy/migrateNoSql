const express = require('express')
const router = express.Router()

const postController = require('../../controllers/postController.js')

router
    .post('/', postController.createNewPost)
    .get('/', postController.getAllPost)
    .put('/:id', postController.updatePost)
    .delete('/:id', postController.deletePost)

module.exports=router