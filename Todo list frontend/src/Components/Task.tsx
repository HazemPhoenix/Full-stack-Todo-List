import React, { MouseEvent } from "react";

interface TaskProps {
  content: string;
  onClick: (event: MouseEvent<HTMLLIElement>) => void;
}

const Task = ({ content, onClick }: TaskProps) => {
  return <li onClick={onClick}>{content}</li>;
};

export default Task;
