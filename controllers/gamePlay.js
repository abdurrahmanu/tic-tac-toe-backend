const Play = require('../models/play')

const checkWin = async (req, res) => {
    const {play} = req.body
    let mark = await Play.create({play: play})
    res.send(mark)
}

const lastPlay = () => {
    Play.find({}).sort({_id: -1}).limit(1).then(data => {
        console.log(data)
    })
}

module.exports = {checkWin}












