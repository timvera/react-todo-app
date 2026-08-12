import TodoItem from "./TodoItem";

export default function TodoList({ tasks, onDelete }) {
  return (
    <section className="todo-list">
      <h2>Today's Tasks</h2>

      {tasks.map((task) => (
        <TodoItem
          key={task}
          task={task}
          onDelete={onDelete}
        />
      ))}
    </section>
  );
}