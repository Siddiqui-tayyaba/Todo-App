import React, {ChangeEvent, FC, useState} from 'react';
import './App.css';
import { ITask } from './interfaces';
import TodoTask from './Components/TodoTask';
import EditTaskForm from './Components/EditTaskForm';


const App: FC =() => {
  const [task, setTask] = useState<string>("");
  const [des, setDes] = useState<string>("");
  const [todo, setTodo] = useState<ITask[]>([]);
  const [editTask, setEditTask] = useState<ITask | null>(null);

  const handleChange =(event: ChangeEvent<HTMLInputElement>): void=>{
    if (event.target.name === "task"){
      setTask(event.target.value)
    } else {
      setDes(event.target.value)
    }
    
  };

  const addTask =(): void => {
    const newTask = {id: Date.now(), taskName: task, taskDes: des };
    setTodo([...todo, newTask]);
    setTask("");
    setDes("");
  };

    const completeTask = (taskNameDelete: string): void =>{
      setTodo ((todo.filter((task) => {
        return task.taskName !== taskNameDelete
      })));
    };

    const taskEdit = (task: ITask):void => {
      setEditTask(task);
    };

    const saveTask = (updatedTask: ITask):void =>{
      setTodo(todo.map((task) => (task.id === updatedTask.id? updatedTask: task)));
      setEditTask(null);
    };

    const cancelEdit = (): void =>{
      setEditTask(null);
    };
  

  return (
    <div className="App">
     <div className='header'> Todo List</div>
     <div className='input'>
      <input type='text' placeholder='Task Title' name='task' value={task} onChange={handleChange}/>
      <input type='text' placeholder='Task description' name='des' value={des} onChange={handleChange}/>
      <button onClick={addTask}>+ Add Tasks</button>
     </div>
     <div className='todoList'>
      {todo.map((task: ITask, key: number)=> (
        editTask && editTask.id === task.id ? (
          <EditTaskForm key={key} task={task} onSave={saveTask} onCancel={cancelEdit} />
        
        ):(
          <TodoTask key={key} task={task} completeTask={completeTask} taskEdit={taskEdit} />
        )
      ))}
     </div>
    </div>
  );
}

export default App;
