import TodoItem from "./TodoItem";

export default function TodoList() {
  return (
    <section className="todo-list">
      <h2>Today's Tasks</h2>

      <TodoItem />
      <TodoItem />
      <TodoItem />
    </section>
  );
}