const category = require('../database/Category.js')

function createNewCategory(newCategory)
{
    const created = category.createNewCategory(newCategory)

    return created
}

function readCategories()
{
    const obtained = category.readCategories()

    return obtained
}

function updateCategory(idCategory, newData)
{
    const updated = category.updateCategory(idCategory, newData)

    return updated
}

function deleteCategory(idCategory)
{
    const deleted = category.deleteCategory(idCategory)

    return deleted
}

function getOneCategory(idCategory){
    const getCategory = category.getOneCategory(idCategory)

    return getCategory
}

module.exports={
    createNewCategory,
    readCategories,
    updateCategory,
    deleteCategory,
    getOneCategory
}

