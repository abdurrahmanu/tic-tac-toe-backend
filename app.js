const express = require('express')
const app = express()
const play = require('./routes/tic-tac-toe')
const connectDB = require('./db/play')
require('dotenv').config()

app.use(express.static('./public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use('/api/v1/', play)

const start = async (url) => {
    try {
        app.listen('2000', ()=> console.log('Server running at 2000') )
        await connectDB(url)
    } catch (error) {
        console.log('Server not running');
    }
}

start(process.env.MONGO_URI)