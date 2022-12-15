const express = require('express')
const app = express()

let f = function (req, res) {
  res.send('Hello World')
}

app.get('/', f)

app.use(express.json())
app.get('/array', (req, res) => {
  res.send(" Sum is " + 
    req.body.array.reduce(
      (acc, val) => acc + val, 0))
})


console.log("Hey it's working")
app.listen(3000)