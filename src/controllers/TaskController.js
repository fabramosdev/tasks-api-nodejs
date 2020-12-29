const { Router } = require('express')

const TaskController = Router()

TaskController.get('', (req, res) => {
    res.send('Ok')
})

module.exports = TaskController