//Hago conexion con mongoDB
const mongoose = require("mongoose")

const {categoryModel} = require("../modules/modules.js")

async function mostrarCategorias() {
    const categorias = await categoryModel.find()
    console.log(categorias)
}
//mostrarCategorias()



async function readCategories()
{
    try
    {
        const obtained = categoryModel.find()
        return obtained
    }catch(err)
    {
        console.log(err)
    }
}

async function createNewCategory(newCategory)
{
    try
    {
        const added = await categoryModel.create(
            {
                name: newCategory.name
            }
        )
    
        return added
    }catch(err)
    {
        console.log(err)
    }
}

async function updateCategory(idCategory, newData)
{
    try
    {
        const updated = await categoryModel.findByIdAndUpdate(idCategory , newData)
        return updated
    }catch(err)
    {
        console.log(err)
    }
}

async function deleteCategory(idCategory)
{
    try
    {
        const deleted = await categoryModel.findByIdAndRemove(idCategory)

        return deleted
    }catch(err)
    {
        console.log(err)
    }
}

const getOneCategory = async (idCategory)=>{

    try{
        const oneCategory = await categoryModel.findById(idCategory).exec()
        return oneCategory
    }
    catch(err)
    {
        console.log(err)
    }
}

module.exports={
    createNewCategory,
    readCategories,
    updateCategory,
    deleteCategory,
    getOneCategory
}