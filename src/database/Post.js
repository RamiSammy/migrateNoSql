const mongoose = require("mongoose")
const {postModel, categoryModel} = require('../modules/modules.js')

const getAllPost = async () =>  {
    try {
        const allPost = await postModel.find().populate('authorId').populate('categoryId') //Recupera el documento que tenga la id de ese atributo
        return allPost
    } 
    catch(err) 
    {
        console.log(err)
    }
}

const createNewPost = async (newPost)=>{
    try
    {

    const added = await postModel.create({

        title: newPost.title,
        content: newPost.content,
        authorId: new mongoose.Types.ObjectId(newPost.authorId),
        categoryId: new mongoose.Types.ObjectId(newPost.categoryId)
    })

    return added

    }catch(err)
    {
        console.log(err)
    }
}

const updatePost = async (idPost, newData) => {
    try
    {
        const updatedPost = await postModel.findByIdAndUpdate(idPost , newData)

        return updatedPost
    }
    catch(err)
    {
        console.log(err)
    }
}

const deletePost = async (postId) => {
    try
    {
    
        const deletedPost = await postModel.findByIdAndRemove(postId)
          
        return deletedPost
    } 
    catch (err) {
        console.log(err)
    }
}

module.exports={
    getAllPost,
    createNewPost,
    updatePost,
    deletePost
}