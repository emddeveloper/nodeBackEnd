const express = require("express")
const bodyParser = require("body-parser")
const mysql = require("mysql")

const app = express()
const port = process.env.PORT || 5000

var mysql = require("mysql")
var connection = mysql.createConnection({
  host: "45.87.80.103",
  user: "u769955481_mybalance",
  password: "mybalance",
  database: "u769955481_mybalance"
})

connection.connect()

connection.query("SELECT * from mybalance", function (err, rows, fields) {
  if (err) throw err

  console.log("The solution is: ", rows[0].solution)
})

connection.end()
// Listen on enviroment port or 5000
app.listen(port, () => console.log(`Listening on port ${port}`))
