// const express = require('express')
// const mongoose = require('mongoose')
// const cors = require('cors')
// const TodoModle = require('./Models/Todo')


// const app = express()
// app.use(cors())
// app.use(express.json())

// mongoose.connect('mongodb://121.0.0.1:27017/test')

// app.post('/add', (req, res) =>{
//     const task = req.body.task;
//     TodoModle.create({
//         task: task
//     }).then(result => res.json(result))
//     .catch(err => res.json(err))
// } )

// app.listen(3001, ()=> {
//     console.log("server is running")
// })
///////////////////////////////////////////////////
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const TodoModel = require('./Models/Todo'); // Corrected path

const app = express();
app.use(cors());
app.use(express.json());

// Corrected MongoDB URI
mongoose.connect('mongodb://localhost:27017/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('MongoDB connected');
}).catch(err => console.error('MongoDB connection error:', err));

app.post('/add', (req, res) => {
    const task = req.body.task;
    TodoModel.create({ task: task })
        .then(result => res.json(result))
        .catch(err => res.status(500).json(err));
});

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});
