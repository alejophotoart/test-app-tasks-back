const { request, response } = require('express');
const Task = require("../models/task")

const getTasks = async(req = request, res = response) => {

    try {
        const tasks = await Task.find()

        return res.status(200).send({
            error: false,
            msg: "Tareas",
            tasks
        })
    } catch (error) {
        return res.status(500).send({
            error: true,
            msg: error.message
        })
    }

}

const getTaskById = async (req = request, res = response) => {

    const { id } = req.params

    try {

        const task = await Task.findById(id)

        return res.status(200).send({
            error: false,
            msg: "Tarea",
            task
        })
        
    } catch (error) {
        return res.status(500).send({
            error: true,
            msg: error.message
        })
    }
}

const createTask = async(req = request, res = response) => {

    const task = req.body

    try {        
        // Prepararlo para la DB
        const taskSave = new Task(task)
        // Guardar DB
        await taskSave.save()

        return res.status(200).send({
            msg: "Tarea creada",
            task: taskSave
        })
    } catch (error) {
        return res.status(500).send({
            error: true,
            msg: error.message
        })
    }

}

const updateTaskById = async(req = request, res = response) => {

    const { id } = req.params
    const task = req.body

    try {
        
        const taskUpdated = await Task.findByIdAndUpdate(id, task, { new: true })

        return res.status(200).send({
            error: false,
            msg: "tarea actualizada",
            task: taskUpdated
        })
    } catch (error) {
        return res.status(500).send({
            error: true,
            msg: error.message
        })
    }
}

const deleteTaskById = async(req = request, res = response) => {

    const { id } = req.params
    try {        
        await Task.findByIdAndDelete(id)

        return res.status(200).send({
            error: false,
            msg: "tarea borrada",
        })
    } catch (error) {
        return res.status(500).send({
            error: true,
            msg: error.message
        })
    }
}

module.exports = {
    getTasks,
    createTask,
    updateTaskById,
    deleteTaskById,
    getTaskById
}