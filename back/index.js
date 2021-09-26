const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const http = require('http')
const cors = require('cors')
const { routes } = require('./src/routes')

// подключение к БД
const username = "admin";
const password = "admin2123126";
const cluster = "mevn.26xqf";
const dbname = "mevnadmin";

mongoose.connect(`mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`,
  {
    useUnifiedTopology: true
  }
)
// инициализация приложения
const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

routes.forEach(item => {
  app.use(`/api/v1/${item}`, require(`./src/routes/${item}`))
})

// роуты
const PORT = 3000
http.createServer({},app).listen(PORT)
console.log(`Server running at Port: ${PORT}`)
