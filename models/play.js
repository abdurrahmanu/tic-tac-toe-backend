const mongoose = require('mongoose')
const {Schema} = mongoose

const playArray = new Schema({
    play: Array,
    mark: String,
})

const Play = mongoose.model('Play', playArray)
module.exports = Play