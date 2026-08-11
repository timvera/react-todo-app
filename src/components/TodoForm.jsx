import { useState } from "react";

export default function TodoForm({ setTasks }) {
  const [task, setTask] = useState("");

  function handleSubmit() {
    if (task.trim() === "") {
      return;
    }

    setTasks((previousTasks) => [...previousTasks, task]);

    setTask("");
  }

  return (
    <section className="todo-form">
      <input
        type="text"
        placeholder="What do you need to do today?"
        value={task}
        onChange={(event) => setTask(event.target.value)}
      />

      <button onClick={handleSubmit}>Add Task</button>
    </section>
  );
}