import React from "react";
import Task from "./Task";

interface Task {
  title: string;
  id: string;
}

interface TaskListProps {
  tasks: Task[];
  onTaskClick: (taskId: string) => void;
}

const TaskList = ({ tasks, onTaskClick }: TaskListProps) => {
  return (
    <ul className="task-list">
      {tasks.length > 0 ? (
        tasks.map((task: Task) => (
          <Task
            content={task.title}
            key={task.id}
            onClick={() => onTaskClick(task.id)}
          />
        ))
      ) : (
        <p>There are no tasks to show.</p>
      )}
    </ul>
  );
};

export default TaskList;
