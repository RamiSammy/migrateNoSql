const express = require("express")
const app = express()
const mongoose = require("mongoose")
const dotenv = require("dotenv")


const userRouter = require('./v1/routes/userRoute.js')
const postRouter = require('./v1/routes/postRoute.js')
const categoryRouter = require('./v1/routes/categoryRoute.js')

//Variables
const PORT = process.env.PORT || 3000

//Middlewares
app.use(express.json())
dotenv.config()

//Mongoose connection
mongoose.connect(process.env.MONGO_KEY , {
    useNewUrlParser : true , 
    useUnifiedTopology : true
})
.then(() => console.log("Conectado a MongoDb"))
.catch(err => console.log(err))

//---------------------------------------

app.get('/', (req,res)=>{
    res.send('Index')
})

app.use('/api/v1/users', userRouter)
app.use('/api/v1/posts' , postRouter)
app.use('/api/v1/categories', categoryRouter)

app.listen(PORT , () => {
    console.log("Servidor en el puerto 3000")
})
