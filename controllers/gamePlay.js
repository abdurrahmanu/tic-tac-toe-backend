const Play = require('../models/play')

const checkWin = (req, res) => {
    const {play} = req.body
    Play.create({play: play})
    res.send('This is it')
}

module.exports = {checkWin}