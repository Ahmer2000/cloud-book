const express = require('express')
const connectToMongo = require('./dataBase');
const cors = require('cors')
require('dotenv').config()

connectToMongo();
const app = express()

 
app.use(cors({
  origin:["https://cloud-book-client.vercel.app"],
  methods:["POST" , "GET" , "PUT" , "DELETE"],
  credentials: true,
}))//-->middleware
const port = process.env.PORT;
app.use(express.json())//-->Middleware

app.use(function(res) {
  res.header('Access-Control-Allow-Origin',"https://cloud-book-client.vercel.app")
})

app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))

app.listen(port, () => {
  console.log(`cloudbook's backend listening at http://localhost:${port}`)
})