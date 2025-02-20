import express from 'express'
import catergoryRoute from "./routes/categorieRoutes.js"
import cors from 'cors'
import { config } from 'dotenv'
config()

const PORT = process.env.PORT


const app =express()
app.use(cors())

app.use(express.json())
app.use('/category', catergoryRoute)



app.listen(PORT,()=>{
    console.log('http://localhost:' + PORT);
    
})