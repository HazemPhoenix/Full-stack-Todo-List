import { useState } from "react";
import React from "react";

interface Task {
  title: string;
  id: string;
}

interface updateTaskListProps {
  updateTaskList: (task: Task) => void;
}

const AddTask = ({ updateTaskList }: updateTaskListProps) => {
  const [currentTask, setCurrentTask] = useState<string>("");

  const taskInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentTask(e.target.value);
  };

  const addTaskHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (currentTask.trim().length > 0) {
      updateTaskList({ title: currentTask, id: Math.random().toString() });
      setCurrentTask("");
    } else {
      alert("Task cannot be empty!");
    }
  };

  return (
    <form onSubmit={addTaskHandler}>
      <label htmlFor="task-name">Task: </label>
      <input
        type="text"
        id="task-name"
        onChange={taskInputHandler}
        value={currentTask}
      />
      <button>Add Task</button>
    </form>
  );
};

export default AddTask;
