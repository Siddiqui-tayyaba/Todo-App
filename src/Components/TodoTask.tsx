import React from "react";
import { ITask } from "../interfaces";
import "../App.css";
interface Props {
    task: ITask;
    completeTask(taskNameDelete: string): void;
    taskEdit(task: ITask): void;
}

const TodoTask = ({task, completeTask, taskEdit}: Props) => {
    return<div className="input">
     <div className="tasktodo">
        <div className="content">
        <span>{task.taskName}</span>
        <span>{task.taskDes}</span>
    </div>
    <button onClick={() => taskEdit(task)}>Edit</button>
    <button onClick={() =>{completeTask(task.taskName)}}>Delete</button>
    </div>
    </div>
};

export default TodoTask;
