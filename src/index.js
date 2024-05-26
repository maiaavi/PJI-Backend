import express from 'express'
import cors from 'cors'
import productsRouter from './routes/products.route.js'

const PORT = 5000
const app = express()
app.use(cors())
app.use(express.json())

app.use('/products', productsRouter)

app.listen(PORT, () => console.log(`[${new Date().toISOString()}] app running on port ${PORT}`))
