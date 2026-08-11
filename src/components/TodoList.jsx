import TodoItem from "./TodoItem";

export default function TodoList({ tasks }) {
  return (
    <section className="todo-list">
      <h2>Today's Tasks</h2>

      {tasks.map((task) => (
        <TodoItem task={task} />
      ))}
    </section>
  );
}