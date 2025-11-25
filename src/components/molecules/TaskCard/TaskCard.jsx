
import { useState } from "react";
import AddNewTaskInput from "../../atoms/TaskInput/AddNewTaskInput";
import Title from "../../atoms/Title/title";

export default function TaskCard({ title }) {
  const [taskInput, setTaskInput] = useState("");

  return (
    <div className="bg-white border rounded-xl p-5 shadow-sm w-full">
      <Title>{title}</Title>

      <AddNewTaskInput
        value={taskInput}
        onChange={setTaskInput}
        onAdd={() => {
          if (taskInput.trim() === "") return;
          alert(`Added task: ${taskInput}`);
          setTaskInput("");
        }}
      />
    </div>
  );
}
