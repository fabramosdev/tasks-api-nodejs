const TaskRepository = require('../repositories/TaskRepository')

const index = async () => {
    return TaskRepository.findAll()
}

module.exports = {
    index
}