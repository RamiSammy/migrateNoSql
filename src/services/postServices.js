const post = require('../database/Post.js')

const getAllPost = () => {

    const obtained = post.getAllPost();

    return obtained
}

const createNewPost = (newPost) => {
    const created = post.createNewPost(newPost)

    return created
}

const updatePost = (postId, newData) => {
    const edited = post.updatePost(postId, newData)

    return edited
}

const deletePost = (postId) => {
    const deleted = post.deletePost(postId)

    return deleted
}

module.exports={
    getAllPost,
    createNewPost,
    updatePost,
    deletePost
}