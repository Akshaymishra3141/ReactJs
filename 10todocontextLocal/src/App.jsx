import { useState, useEffect } from "react";

import "./App.css";

import { TodoProvider } from "./contexts";
import { TodoForm, TodoItem } from "./components";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [{ ...todo }, ...prev]);
  };
  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((item) => (item.id === id ? todo : item)));
  };
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };
  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item,
      ),
    );
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <TodoProvider
        value={{ todos, addTodo, updateTodo, deleteTodo, toggleTodo }}
      >
        <div className="bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#0f172a] min-h-screen py-8 sm:py-12 flex items-start justify-center transition-colors duration-500">
          <div className="w-full max-w-2xl mx-auto backdrop-blur-2xl bg-white/5 border border-white/10 shadow-2xl shadow-indigo-900/40 rounded-3xl px-6 sm:px-8 py-8 text-white relative overflow-hidden">
            {/* Ambient decorative blobs */}
            <div className="absolute -top-32 -left-32 w-80 h-80 bg-indigo-500/30 rounded-full mix-blend-screen filter blur-[80px] opacity-60"></div>
            <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-purple-500/30 rounded-full mix-blend-screen filter blur-[80px] opacity-60"></div>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 via-purple-300 to-indigo-200 text-center mb-10 mt-2 drop-shadow-sm tracking-tight relative z-10">
              Manage Your Todos
            </h1>
            <div className="mb-8 relative z-10">
              <TodoForm />
            </div>
            <div className="flex flex-wrap gap-y-4 relative z-10">
              {todos.map((todo) => (
                <div key={todo.id} className="w-full transition-transform duration-300">
                  <TodoItem todo={todo} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </TodoProvider>
    </>
  );
}

export default App;
