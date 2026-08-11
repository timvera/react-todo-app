import { useState } from "react";

export default function TodoForm() {
  const [task, setTask] = useState("");

  function handleSubmit() {
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

      <p>{task}</p>
    </section>
  );
}