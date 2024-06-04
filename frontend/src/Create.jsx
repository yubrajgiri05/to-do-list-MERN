import React, { useState } from 'react'
import axios from 'axios'

const Create = () => {

  const [task, setTask] = useState()
  const handleAdd =() =>{
    axios.post('http://localhost:3001/add', {task: task})
    .then (result => console.log(result))
    .catch (err => console.log(err))

  }
  return (
    <>
     <div className="d-flex gap-2">
     <input type="text" onChange={(e) => setTask(e.target.value)}/>
      <button type='button' className='btn btn-danger' onClick={handleAdd}>Add</button>
     </div>
    </>
  )
}

export default Create
