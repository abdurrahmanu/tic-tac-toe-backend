const mongoose = require('mongoose')
const {Schema} = mongoose

const playArray = new Schema({
    play: Array,
})

const Play = mongoose.model('Play', playArray)
module.exports = Play





















