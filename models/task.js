const { Schema, model } = require('mongoose')

const TaskSchema = Schema({
    sqliteId: {
        type: Number,
        require: true
    },
    name: {
        type: String,
        required: [true, 'Field name is required']
    },
    description: {
        type: String,
        required: [true, 'Field description is required'],
    },
    completed: {
        type: Boolean,
        default: false
    },
    sync_status: {
        type: String,
        require: true
    },
    type: {
        type: String,
        require: true
    }
}, {
    timestamps: true
})

module.exports = model('Task', TaskSchema);