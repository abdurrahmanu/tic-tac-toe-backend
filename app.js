const express = require('express')
const app = express()
const gamePlay = require('./routes/tic-tac-toe')
const connectDB = require('./db/play')
require('dotenv').config()

app.use(express.static('./public'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use('/api/v1/', gamePlay)

const start = async (url) => {
    try {
        console.log('done');
        app.listen('2000', ()=> console.log('Server running at 2000') )
        await connectDB(url)
    } catch (error) {
        console.log('not done');
    }
}

start(process.env.MONGO_URI)