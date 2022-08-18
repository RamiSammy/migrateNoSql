const categoryServices = require('../services/categoryServices.js')

const {isNumber} = require('../regex/regex.js')

const createNewCategory = async (req,res) => {

    const name = req.body.name

    if(!name)
    {
        res.status(400).json({message: 'ERROR: Faltan Datos!!'})
    }
    else
    {
        const newCategory = {
            name
        }

        const created = await categoryServices.createNewCategory(newCategory)

        if(created!==undefined)
        {
            res.status(202).json({message:'Se creó la categoría correctamente!', data: created})
        }
        else
        {
            res.status(400).json({message:'ERROR: Al crear la categoría en la base de datos'})
        }
    }
}

const readCategories = async (req,res)=>
{
    const obtained = await categoryServices.readCategories()

    if(obtained!==undefined)
    {
        res.status(202).json({message:'Se obtuvieron las categorías correctamente', data: obtained})
    }
    else
    {
        res.status(400).json({message:'ERROR: Al obtener las categorías en la base de datos'})
    }
}

const updateCategory = async (req,res)=>
{
    const id = req.params.id

    const name = req.body.name

    if(!name || !isNumber.test(id))
    {
        res.status(400).json({message: 'ERROR: Faltan Datos!!'})
    }
    else
    {
        const newData = {
            name
        }

        const updated = await categoryServices.updateCategory(Number(id), newData)

        if(updated!==undefined)
        {
            res.status(202).json({message: 'Se editó la categoría correctamente!', data: updated})
        }
        else
        {
            res.status(400).json({message: 'ERROR: Al editar la categoría en la base de datos'})
        }
    }
}

const deleteCategory = async (req,res)=>
{
    const id = req.params.id

    if(!isNumber.test(id))
    {
        res.status(400).json({message: 'ERROR: Faltan Datos!!'})
    }
    else
    {
        const deleted = await categoryServices.deleteCategory(Number(id))

        if(deleted!==undefined)
        {
            res.status(202).json({message: 'Se eliminó la categoría correctamente!', data: deleted})
        }
        else
        {
            res.status(400).json({message: 'ERROR: Al eliminar la categoría en la base de datos'})
        }
    }
}

const getOneCategory = async (req,res) => {
    const id = req.params.id

    const obtained = await categoryServices.getOneCategory(Number(id))

    if(obtained!==undefined)
    {
        res.status(202).json({message:'Se obtuvo las categoria correctamente', data: obtained})
    }
    else
    {
        res.status(400).json({message:'ERROR: Al obtener la categoria en la base de datos'})
    }

}

module.exports={
    createNewCategory,
    readCategories,
    updateCategory,
    deleteCategory,
    getOneCategory
}