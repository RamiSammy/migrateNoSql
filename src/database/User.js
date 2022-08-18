

const getAllUsers = async ()=>{

    try{

        const allUsers = await prisma.user.findMany()
        return allUsers

    }catch(err)
    {
        console.log(err)
    }
    
}

const getOneUser = async (userId)=>{

    try{
        const user = await prisma.user.findUnique({
            where: {
                id: userId
            },
            include: {
                posts: true
            }
        })

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

    const added = await prisma.user.create({
        data: newUser
    })

    return added

    }catch(err)
    {
        console.log(err)
    }   
}

const deleteUser = async (User) => {
    try
    {
    
        const deleteUser = await prisma.user.delete({
            where: {
              id : Number(User),
            },
          })
          
        return deleteUser
    } 
    catch (error) {
        console.log(error)
    }
} 


const updateUser = async (User , newData) => {
    try
    {
        const updateUser = await prisma.user.update({
            where: {
              id : Number(User),
            },
            data : newData
          })
          
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