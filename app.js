import express from 'express'
import dotenv from 'dotenv'
import router from './routes/email.js'
const app = express()


dotenv.config({path: "./.env"})


app.use(express.json())
app.use(router)


app.listen(process.env.PORT, ()=> {
    console.log("servidor ejecutandose en el puerto --> " + process.env.PORT)
})




