const mongoose = require("mongoose")
const {userModel} = require('../modules/modules.js')

async function mostrarUsuarios() {
    const usuarios = await userModel.aggregate([{$lookup: {from: 'posts', localField: '_id', foreignField: 'authorId', as: 'posts'}}])
   // console.log(usuarios[0])
   // console.log(usuarios[0].posts)
}
mostrarUsuarios()

const getAllUsers = async ()=>{

    try{

        const allUsers = await userModel.find()
        return allUsers

    }catch(err)
    {
        console.log(err)
    }
    
}

const getOneUser = async (userId)=>{

    try{
        const user = await userModel.findById(userId).exec()
        return user
    }
    catch(err)
    {
        console.log(err)
    }
}


const createNewUser = async (newUser)=>{
    try
    {

    const added = await userModel.create(
        {
            name : newUser.name ,
            email : newUser.email , 
            age : newUser.age ,
            country : newUser.country,
            rol :  newUser.rol
        }
        )

    return added

    }catch(err)
    {
        console.log(err)
    }   
}


const deleteUser = async (User) => {
    try
    {
    
        const deleteUser = await userModel.findByIdAndRemove(User)
          
        return deleteUser
    } 
    catch (error) {
        console.log(error)
    }
} 


const updateUser = async (User , newData) => {
    try
    {
        const updateUser = await userModel.findByIdAndUpdate(User , newData )
          
        return updateUser
    } 
    catch (error) {
        console.log(error)
    }
}


module.exports={
    getAllUsers,
    getOneUser,
    createNewUser,
    deleteUser, 
    updateUser
    
}