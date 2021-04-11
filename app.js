const express = require("express")
const bodyParser = require("body-parser")
const mysql = require("mysql")

const app = express()
const port = process.env.PORT || 5000

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

// MySQL Code goes here
const pool = mysql.createPool({
  connectionLimit: 10,
  host: "45.87.80.103",
  user: "u769955481_mybalance",
  password: "mybalance",
  database: "u769955481_mybalance"
})

// Get all beers
app.get("", (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) throw err
    console.log("connected as id " + connection.threadId)
    connection.query("SELECT * from mybalance", (err, rows) => {
      connection.release() // return the connection to pool

      if (!err) {
        res.send(rows)
      } else {
        console.log(err)
      }

      // if(err) throw err
      console.log("The data from beer table are: \n", rows)
    })
  })
})

// Listen on enviroment port or 5000
app.listen(port, () => console.log(`Listening on port ${port}`))
