const express = require('express')
const router = express.Router()
const {init, updateArray} = require('../controllers/gamePlay')

router.post('/', init)
router.patch('/:id', updateArray)

module.exports = router