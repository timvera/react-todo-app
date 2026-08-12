export default function TodoItem({ task, onDelete }) {
  return (
    <div className="todo-item">
      <span>📌 {task}</span>

      <button onClick={() => onDelete(task)}>
        🗑️
      </button>
    </div>
  );
}