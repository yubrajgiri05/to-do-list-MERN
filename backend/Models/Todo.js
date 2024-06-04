// const mongoose = require('mongoose')

// const TodoSchema = new mongoose.Schema({
//     task: String
// })

// const TodoModle = mongoose.model("todos", TodoSchema)
// module.exports = TodoModle

const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    task: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('Todo', TodoSchema);