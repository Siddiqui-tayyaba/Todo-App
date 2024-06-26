import React, {ChangeEvent, FC,FormEvent,useState} from "react";
import { ITask } from "../interfaces";
import '../App.css';


interface EditTaskFormProps {
    task: ITask;
    onSave: (updatedTask: ITask) => void;
    onCancel: ()=> void;
}

const EditTaskForm = ({task, onSave, onCancel}: EditTaskFormProps) => {
    const [taskName, setTaskName] = useState<string>(task.taskName);
    const [taskDes, setTaskDes] = useState<string>(task.taskDes);

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void =>{
        if(event.target.name === "taskName"){
            setTaskName(event.target.value);
        } else{
            setTaskDes(event.target.value);
        }
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        onSave({...task, taskName, taskDes});
    };

    return(
      
        <form onSubmit={handleSubmit} >
            <div className="edit-task">
                <div className="edit-content">
            <span><input type="text" placeholder="Edit Task Title" name="taskName" value={taskName} onChange={handleChange}/> </span>
           
            <span><input type="text" placeholder="Edit Task Des" name="taskDes" value={taskDes} onChange={handleChange}/></span>
          
            <button type="submit">Save</button>
            <button type="button" onClick={onCancel}>Cancel</button>   </div>
            
            </div>

        </form>
      
    );

};
export default EditTaskForm;