import React, {useState} from 'react';
import './App.css';


function App() {

  const [tasks, setTasks] = useState([
    { name: "Eat Breakfast", priority: "high" },
    { name: "Clean House", priority: "low" },
    { name: "Cook Dinner", priority: "high" }

  ]);
  
  const [newTask, setNewTask] = useState("")

  const taskNodes = tasks.map((task, index) => {
    return(
      
      <li key ={index} className={task.isPriority ? "high" : "low"}>
        <span>{task.name}</span>
      </li>

    )
  });

  const handleTaskInput = (event) => {
    setNewTask(event.target.value)
  };

  const saveNewTask = (event) => {
    event.preventDefault();
    const copyTasks = [...tasks]
    copyTasks.push({name: newTask, isPriority: "false"})
    copyTasks.push(newTask)
    setTasks(copyTasks)
    setNewTask("")
  }

  // const prioritiseTask = (index) => {
  //   const copyTasks = [...tasks]
  //   copyTasks[index].isPriority = true;
  //   setTasks(copyTasks)
  // }

  

  return (
    <div className="App">

        <h1>ToDo's</h1>

        <form onSubmit={saveNewTask}>
          <label htmlFor='new-task'></label>
          <input id='new-task' type='text' value={newTask} onChange = {handleTaskInput}/>
          <span><input type="radio" value="High" name="priority"/>High <input type="radio" value="Low" name="priority"/>Low </span>
          <button type='submit' value='Save Task'>Save Task</button>
        </form>

        <ul>
          {taskNodes}
        </ul>

    

    </div>
);
}

export default App;
