export default function TodoForm() {
  return (
    <section className="todo-form">
      <input
        type="text"
        placeholder="What do you need to do today?"
      />

      <button>Add Task</button>
    </section>
  );
}