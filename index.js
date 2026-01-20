
require('dotenv').config()
const express = require('express')
const app = express()
const port = 2000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/about', (req, res) => {
  res.send('About Page')
})
app.get('/contect',(req,res)=>{s
    res.send("<h1>Hallo contects</h1>")
}) 
app.get('/profile', (req,res)=>{
res.send ("<h1> hello gee</h1>")
})
app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${port}`)
})
