const TaskRepository = require('../repositories/TaskRepository')

const index = async () => {
    return TaskRepository.findAll()
}

const store = async ({ title, description, status }) => {
    return await TaskRepository.save({
        title,
        description,
        status
    })
}

module.exports = {
    index,
    store
}