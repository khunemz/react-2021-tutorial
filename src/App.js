import Header from './components/Header'
import { useState, useEffect } from 'react';
import { BrowserRouter as Router , Route} from 'react-router-dom'
import Footer from './components/Footer'
import './App.scss';
import Tasks from './components/Tasks';
import About from './components/About';

import AddTask from './components/AddTask';

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const tasksArr = [
  ]
  const [tasks, setTasks] = useState(tasksArr)

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer)
    }
    getTasks();
  }, [])


  const fetchTasks = async () => {
    const res = await fetch(`http://localhost:5000/tasks`);
    const data = await res.json();
    return data;
  }

  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();
    return data;
  }

  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE',
    })

    // setTasks(fetchTasks);
    setTasks(tasks.filter((task) => task.id !== id ))

  }
  const toggleReminder = async (id) => {
    const taskToToggle =  await  fetchTask(id); 
    taskToToggle.completed = !taskToToggle.completed;
    const res =  await fetch(`http://localhost:5000/tasks/${id}`,{
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        body: JSON.stringify(taskToToggle)
      }
    });
    var data =  await res.json();
    setTasks(tasks.map((task) => task.id === id ? {...task, completed: data.completed} : task))
  }

  const onAdd = async (task) => {
    const id = Math.floor(Math.random() * 1000 ) +1;
    task.id  = id;
    const res = await fetch(`http://localhost:5000/tasks`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(task)
    });
    const data =  await res.json();
    setTasks([...tasks , data])
  }
  return (
    <Router>
      <div className="container">
      <Header title="App tracker" onAdd={(e) => setShowAddTask(!showAddTask)} />
      
      <Route path='/' exact render={(props) => (
        <>
        {
          showAddTask && <AddTask onAdd={(task) => onAdd(task)} />
        }
        <Tasks tasks={tasks} onDelete={(id) => deleteTask(id)} onToggle={(id) => toggleReminder(id)}/>
        </>
      )} />
      <Route path='/about' component={About} />
      <Footer />
    </div>
    </Router>
   
  );
}

export default App;
