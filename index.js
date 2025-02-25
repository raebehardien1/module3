import express from 'express'

//Importing routes 
import catergoryRoute from "./routes/categorieRoutes.js"
import orderDetails from "./routes/Order_detailsRoutes.js"
import adress from "./routes/addressRoutes.js"
import orders from "./routes/ordersRoutes.js"
import payment from "./routes/paymentRoutes.js"
import wishlist from "./routes/Order_detailsRoutes.js"
import products from "./routes/productRoutes.js"
import users from "./routes/usersRoutes.js"
import cors from 'cors'
import { config } from 'dotenv'
config()

const PORT = process.env.PORT
// init app
const app =express()
app.use(cors())
 
app.use(express.json())
app.use('/category', catergoryRoute)
app.use('/order_details',orderDetails)
app.use('/adresses',adress)
app.use('/orders',orders)
app.use('/payments',payment)
app.use('/saved_items', wishlist)
app.use('/products',products)
app.use ('/users',users)

app.listen(PORT,()=>{
    console.log('http://localhost:' + PORT);
})