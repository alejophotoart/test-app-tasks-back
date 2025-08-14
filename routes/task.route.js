const { Router } = require('express');

const {
    getTasks,
    createTask,
    updateTaskById,
    deleteTaskById,
    getTaskById} = require('../controllers/task.controller');

const router = Router();

router.get('/', getTasks)
router.get('/:id', getTaskById)
router.post('/', createTask)
router.put('/:id', updateTaskById)
router.delete('/:id', deleteTaskById)

module.exports = router