import express from 'express'
import cors from 'cors'
import studentRouter from './Routers/studentRouter.js'

const app = express()
app.use(express.json())
app.use(cors())


app.use('/', studentRouter)

app.get('/', (req, res) => {
  res.send("Backend is running 🚀")
})


const PORT = 2000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
