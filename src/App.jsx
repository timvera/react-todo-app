import { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";

export default function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <main className="app-container">
      <Header />
      <TodoForm setTasks={setTasks} />
      <TodoList tasks={tasks} />
      <Footer />
    </main>
  );
}