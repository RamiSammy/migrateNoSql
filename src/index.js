const express = require("express")
const app = express()


const userRouter = require('./v1/routes/userRoute.js')
const postRouter = require('./v1/routes/postRoute.js')
const categoryRouter = require('./v1/routes/categoryRoute.js')

//Variables
const PORT = process.env.PORT || 3000

app.use(express.json())

app.get('/', (req,res)=>{
    res.send('Index')
})



app.use('/api/v1/users', userRouter)
app.use('/api/v1/posts' , postRouter)
app.use('/api/v1/categories', categoryRouter)

app.listen(PORT , () => {
    console.log("Servidor en el puerto 3000")
})
