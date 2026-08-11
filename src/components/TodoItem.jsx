
export default function TodoItem({ task }) {
  return (
    <div className="todo-item">
      <span>📌 {task}</span>

      <button>🗑️</button>
    </div>
  );
}