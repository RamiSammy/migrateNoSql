const userServices = require('../services/userServices.js')

const { Prisma } = require('@prisma/client')

const { isNumber } = require('../regex/regex.js')

const createNewUser = async (req, res) => {

    const { name, email, age, country, rol } = req.body

    if (!name || !email || !isNumber.test(String(age)) || !country) {
        res.status(400).json({message: 'ERROR: Faltan Datos!!'})
    }
    else {
        const newUser = {
            name,
            email,
            age,
            country
        }

        if (rol) //Si se agregó un usuario...
        {
            newUser.rol = rol
        }

        const added = await userServices.createNewUser(newUser)

        console.log(added)

        if (added === undefined) {
            res.status(400).json({message: `ERROR: Al agregar un usuario a la base de datos`})
        }
        else {
            res.status(202).json({ message: "Usuario creado correctamente!!", data: added })
        }
    }
}

const getAllUsers = async (req, res) => {

    const obtained = await userServices.getAllUsers()

    //console.log(obtained)

    if (obtained === undefined) {
        res.status(400).json({message: `ERROR: Al obtener usuarios de la base de datos`})
    }
    else {
        res.status(200).json({ message: "Usuarios obtenidos con éxito!", data: obtained })
    }
}

const getOneUser = async (req,res) => {
    const id = req.params.id
    
    if(!isNumber.test(id))
    {
        res.status(400).json({message: 'ERROR: Faltan Datos!!'})
    }
    else
    {
        const obtained = await userServices.getOneUser(id)
        
        if(obtained!==undefined)
        {
            res.status(202).json({message: 'Usuario obtenido con éxito!', data:obtained})
        }
        else
        {
            res.status(400).json({message: 'ERROR: Al obtener un usuario en la base de datos'})
        }
    }
}

const updateUser = async (req, res) => {

    const { id } = req.params
    const newData = req.body

    if (!isNumber.test(id)) {
        res.status(400).json({message: 'ERROR: Faltan Datos!!'})
    }
    else {
        const updateUser = await userServices.updateUser(id, newData)
        console.log(updateUser)

        if (deleteUser === undefined) {
            res.status(400).json({message: `ERROR: Al editar un usuario de la base de datos`})
        }
        else {
            res.status(200).json({ message: "Usuario actualizado con éxito!" })
        }
    }
}

const deleteUser = async (req, res) => {
    const { id } = req.params

    if (!isNumber.test(id)) {
        res.status(400).json({message: 'ERROR: Faltan Datos!!'})
    }
    else
    {
        const deleteUser = await userServices.deleteUser(id)

        //console.log(deleteUser)

        if (deleteUser === undefined) {
            res.status(400).json({message: `ERROR: Al eliminar un usuario de la base de datos`})
        }
        else {
            res.status(200).json({ message: "Usuario borrado con éxito!" })
        }
    }
}

module.exports = {
    createNewUser,
    getAllUsers,
    getOneUser,
    updateUser,
    deleteUser
}