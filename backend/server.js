import express from 'express'
import cors from 'cors'
import { connectDB } from './config/db.js'
import foodRouter from './routes/foodRoutes.js'


// app config
const app = express()
const port = 4000
  

// middlewar
app.use(express.json())
app.use(cors())

//db connection
connectDB()

// api endpoint
app.use('/api/food',foodRouter)
app.use('/images',express.static('uploads'))

app.get('/',(req ,res)=>{
    res.send('API Working')
})

app.listen(port , ()=>{
    console.log(`server is runnning on ${port}`);
    
})