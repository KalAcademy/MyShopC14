import express from 'express'
import dotenv from 'dotenv'
import productRoutes from './routes/productRoutes.js'
import connectDB from './config/db.js'
import errorHandler from './middleware/errorMiddleware.js'

const app = express()
dotenv.config()
connectDB()

app.use('/api/products', productRoutes)

app.use(errorHandler)

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server is running on port ${PORT}`))