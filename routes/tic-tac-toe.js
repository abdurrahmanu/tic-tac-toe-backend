const express = require('express')
const router = express.Router()
const {checkWin} = require('../controllers/gamePlay')

router.post('/', checkWin)
//This

module.exports = router