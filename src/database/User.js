const mongoose = require("mongoose")
const {userModel} = require('../modules/modules.js')

const getAllUsers = async ()=>{

    try{
        const users = await userModel.find()
        return users
    }catch(err)
    {
        console.log(err)
    }
    
}

const getOneUser = async (userId)=>{

    try{

    const user = await userModel.aggregate([  //aggregate es similar al JOIN de SQL

        {$match: {_id: new mongoose.Types.ObjectId(userId)}}, //Si _id es igual a ObjectId(userId) (Filtra según la id que recibe)
        {$lookup: {from: 'posts', localField: '_id', foreignField: 'authorId', as: 'posts'}} //Obtiene de la colección 'posts', donde _id === authorId del post

    ])
        
    //Se obtiene un arreglo con los que cumplan con la condicion (Siempre va a ser uno porque buscamos por Id)

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