const postServices = require('../services/postServices.js')

const createNewPost = async (req,res) => {
    const {title,content, authorId, categoryId} = req.body

    if(!title || !content || !authorId || !categoryId){
        res.status(400).json({message: 'ERROR: Faltan Datos!!'})
    }else {
        const newPost = {
            title,
            content,
            authorId,
            categoryId
        }  

        const added = await postServices.createNewPost(newPost)
        console.log(added)

        if(added === undefined)
        {
            res.status(400).json({message: `ERROR: Al agregar un post a la base de datos`})
        }
        else
        {
            res.status(202).json({message:"Post creado correctamente!!", data: added})
        }
    }
}

const getAllPost = async (req,res) => {

    const obtained = await postServices.getAllPost()
    console.log(obtained)
    if(obtained===undefined)
    {
        res.status(400).json({message: `ERROR: Al obtener los posts de la base de datos`})
    }
    else
    {
        res.status(200).json({message:"Post obtenidos con éxito!", data: obtained})
    }
}

const updatePost = async (req,res) => {

    const id = req.params.id

    const newData = req.body

    if(!id){
        res.status(400).json({message: 'ERROR: Faltan Datos!!'})
    }
    else
    {
        const edited = await postServices.updatePost(id, newData)

        if(edited === undefined)
        {
            res.status(400).json({message: `ERROR: Al editar un post de la base de datos`})
        }
        else
        {
            res.status(202).json({message:"Post editado correctamente!!", data: edited})
        }
    }
}

const deletePost = async (req,res) => {

    const id = req.params.id

    if(!id)
    {
        res.status(400).json({message: 'ERROR: Faltan Datos!!'})
    }
    else
    {
        const deleted = await postServices.deletePost(id)

        if(deleted===undefined)
        {
            res.status(400).json({message: `ERROR: Al eliminar un post de la base de datos`})
        }
        else
        {
            res.status(202).json({message:"Post eliminado correctamente!!", data: deleted})
        }
    }

}

module.exports={
    createNewPost,
    getAllPost,
    updatePost,
    deletePost
}