const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('all dogs')
})
router.post('', (req, res) => {
    res.send('creating dog')
})
router.get('/:id', (req, res) => {
    res.send('viewing 1 dog')
})
router.get('/:id/edit', (req, res) => {
    res.send('editing 1 dog')
})

module.exports = router