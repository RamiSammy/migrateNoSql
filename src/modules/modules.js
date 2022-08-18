const mongoose = require("mongoose")
const {categorySchema} = require("../schemas/schemas.js")

const categoryModel = mongoose.model("category" , categorySchema)

module.exports={
    categoryModel
}