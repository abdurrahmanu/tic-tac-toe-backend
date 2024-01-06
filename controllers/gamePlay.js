const Play = require('../models/play')

const init = async (req, res) => {
    try {
        let play = await Play.create({array: req.body})
        res.json({id: play._id})
    } catch (error) {
        res.status(500).json({msg: 'db error'})
    }
}

const updateArray = async (req, res) => {
    try {
        const {id: gameID} = req.params
        const array = await Play.findOneAndUpdate({_id: gameID}, req.body, {new: true})
        console.log(array);
        if (!array) {
            return res.status(404).json({msg: 'game ID does not exist'})
        }
        res.status(200).json(array)
    } catch (error) {
        res.status(500).json({msg: 'db error ...'})
    }
};

module.exports = {init, updateArray}


