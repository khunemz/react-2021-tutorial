import {React, useState} from 'react'

const AddTask = ({onAdd}) => {
  const [title , setTitle ] = useState('');
  const [completed, setCompleted] = useState(false);

  const submitTask = (e) => {
    e.preventDefault();
    if(!title) {
      alert('please add a task');
      return;
    }
    onAdd({title, completed})
    setTitle('')
    setCompleted(false)
  }
  return (
    <>
      <form className="add-task" onSubmit={(e) => submitTask(e)}>
        <div className="form-group">
          <input className="form-control"
            placeholder="Add any task"
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </div>
        
        <div className="form-group">
          <input className=""
            type="checkbox"
            onChange={(e) => setCompleted(e.target.checked)}
            checked={completed}
            value={completed}
          /><span>Completed ? </span>
        </div>
        <input type="submit" value="Add Task" className="btn btn-block btn-success" />
      </form>
    </>
  )
}


export default AddTask
