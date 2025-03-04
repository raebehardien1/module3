import express from 'express'

//Importing routes 
import catergoryRoute from "./routes/categorieRoutes.js"
import orderDetails from "./routes/Order_detailsRoutes.js"
import payment from "./routes/paymentRoutes.js"
import wishlist from "./routes/Order_detailsRoutes.js"
import products from "./routes/productRoutes.js"
import users from "./routes/usersRoutes.js"
import admin from "./routes/adminRouter.js"
import login from "./routes/authRouter.js"
import cors from 'cors'
import {config } from 'dotenv'
config()

const PORT = process.env.PORT
// init app 
const app =express()
app.use(cors())

app.use(express.json())
app.use('/category', catergoryRoute)
app.use('/order_details',orderDetails)
app.use('/payments',payment)
app.use('/saved_items', wishlist)
app.use('/products',products)
app.use ('/users',users) 
app.use ('/admin',admin)
app.use ('/login',users)

app.listen(PORT,()=>{
    console.log('http://localhost:' + PORT);
})
