import React from 'react'
import { FaTimes } from 'react-icons/fa'
import './styles/Task.scss'

const Task = ({id ,task, onDelete, onToggle}) => {
  return (
    <>
      <li key={id} 
        className={`list-group-item ${task.completed ? 'active' : ''}`}
        style={{display: 'flex', flexDirection: 'row', justifyContent: 'start'}}
        onDoubleClick={() => onToggle(task.id)}
      >
        <div>
          ({task.id})
        </div>
        <div>{task.title}</div>
        <span className="float-right"><FaTimes onClick={() => onDelete(task.id)} /></span>
      </li>
    </>
  )
}

export default Task
