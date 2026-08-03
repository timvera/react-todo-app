import "./App.css";

import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";

export default function App() {
  return (
    <main className="app-container">
      <Header />
      <TodoForm />
      <TodoList />
      <Footer />
    </main>
  );
}