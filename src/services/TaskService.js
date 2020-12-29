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

const existsById = async (id) => {
    const response = await TaskRepository.findById(id)

    return response ? true : false
}

const destroy = (id) => {
    TaskRepository.remove(id)
}

const update = async ({ id, title, description, status, created_at }) => {
    return await TaskRepository.update({
        id,
        title,
        description,
        status,
        created_at
    })
}

module.exports = {
    index,
    store,
    existsById,
    destroy,
    update
}