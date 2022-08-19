const mongoose = require("mongoose")
const {userSchema, postSchema, categorySchema} = require("../schemas/schemas.js")

const userModel = mongoose.model("user", userSchema)
const postModel = mongoose.model("post", postSchema)
const categoryModel = mongoose.model("category" , categorySchema)

module.exports={
    userModel,
    postModel,
    categoryModel
}