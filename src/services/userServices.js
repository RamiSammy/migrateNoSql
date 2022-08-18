const user = require('../database/User.js')

const getAllUsers = () => {

    const obtained= user.getAllUsers();

    return obtained
}

const getOneUser = (userId) => {
    const obtained = user.getOneUser(userId)
    return obtained
}

const createNewUser = (newUser) => {
    const created = user.createNewUser(newUser)

    return created
}

const deleteUser = (User) => {

    const deleteUser = user.deleteUser(User)
    return deleteUser
}

const updateUser = (User, newData) => {
    const updateUser = user.updateUser(User,newData)
    return updateUser
}

module.exports={
    getAllUsers,
    getOneUser,
    createNewUser, 
    deleteUser, 
    updateUser
}