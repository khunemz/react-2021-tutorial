import {React} from 'react'
import Task from './Task'

const Tasks = ({tasks, onDelete ,onToggle}) => {



  return (
    <>
      <div className="col-10" style={{marginTop: '20px',paddingTop: '5px', paddingBottom: '5px'}}>
        <ul className="list-group">
          {
            tasks.map((task) => {
             return tasks.length > 0 ? ( <Task 
              key={task.id} 
              task={task} 
              onDelete={onDelete}
              onToggle={onToggle}
              />) : (<div>No data to show</div>)
            })
          }
        </ul>
      </div>
    </>
  )
}

Tasks.propTypes = {

}

export default Tasks
