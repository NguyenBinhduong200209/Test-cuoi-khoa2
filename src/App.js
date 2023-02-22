import logo from './logo.svg';
import './App.css';
import Task from "./Task";
import TaskForm from "./TaskForm";

function App() {
  return (
    <div className="todo-list">
      <TaskForm addTask={addTask} />
      {tasks.map((task, index) => (
        <Task
          key={index}
          index={index}
          task={task}
          completeTask={completeTask}
          removeTask={removeTask}
        />
      ))}
    </div>



  )

}
const completeTask = (index) => {
  const newTasks = [...tasks];
  newTasks[index].completed = true;
  setTasks(newTasks);
};

const removeTask = (index) => {
  const newTasks = [...tasks];
  newTasks.splice(index, 1);
  setTasks(newTasks);
};

return (
  <div className="todo-list">
    <TaskForm addTask={addTask} />
    {tasks.map((task, index) => (
      <Task
        key={index}
        index={index}
        task={task}
        completeTask={completeTask}
        removeTask={removeTask}
      />
    ))}
  </div>
);

export default App;
