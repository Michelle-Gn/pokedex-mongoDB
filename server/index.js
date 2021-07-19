const express = require('express')
const app = express()
const port = 3000
const controllers = require('./controllers.js')


app.use(express.json())

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.get('/pokemon', controllers.get)

app.use(express.static('client/dist'))



app.listen(port, () => {
  console.log(`Listening at port ${port}`)
})