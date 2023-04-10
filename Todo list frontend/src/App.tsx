import { useState } from "react";
import "./App.css";
import AddTask from "./Components/AddTask";
import TaskList from "./Components/TaskList";

function App() {
  interface Task {
    title: string;
    id: string;
  }

  const [taskList, setTaskList] = useState<Task[]>([]);

  const removeTask = (taskId: string) => {
    setTaskList(taskList.filter((task) => task.id !== taskId));
  };
  const updateTaskList = (task: Task): void => {
    setTaskList((prevTasks) => [...prevTasks, task]);
  };

  return (
    <div>
      <AddTask updateTaskList={updateTaskList} />
      <TaskList tasks={taskList} onTaskClick={removeTask} />
    </div>
  );
}

export default App;
