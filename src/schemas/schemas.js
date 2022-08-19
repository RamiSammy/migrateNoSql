const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    name: String,
    email: {type:String, unique: true},
    age: Number,
    createdAt: {type:Date, default: Date.now},
    country: String,
    rol: {type: String, enum: ["USER", "ADMIN"], default:"USER"},
}, {versionKey: false})

const postSchema = mongoose.Schema({
    title: String,
    content: String,
    createdAt: {type: Date, default: Date.now},
    published: {type: Boolean, default: false},
    authorId: {type: mongoose.Schema.Types.ObjectId, ref:'user'},
    categoryId: {type: mongoose.Schema.Types.ObjectId, ref: 'category'}
}, {versionKey: false})

const categorySchema = mongoose.Schema({
    name : String,
},{versionKey: false})

module.exports={
    userSchema,
    postSchema,
    categorySchema
}