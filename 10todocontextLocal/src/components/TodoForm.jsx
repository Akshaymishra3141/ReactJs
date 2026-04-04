import React, { useState } from 'react'
import { useTodo } from '../contexts';

function TodoForm() {
    const [todo,setTodo] = useState("");
    const {addTodo} = useTodo();

    const add=(e)=>{
        e.preventDefault()
        if(!todo) return 

        addTodo({ id: Date.now(), todo: todo, completed: false });
        setTodo("")
    }

  return (
    <form onSubmit={add} className="flex group relative w-full shadow-lg shadow-indigo-500/5 rounded-xl">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl blur opacity-10 group-hover:opacity-30 transition duration-500"></div>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="What needs to be done?"
        className="w-full border border-white/10 border-r-0 rounded-l-xl px-5 outline-none transition-all duration-300 bg-black/20 backdrop-blur-md py-3 text-white placeholder-white/40 focus:bg-white/5 focus:border-indigo-400/50 relative z-10 font-medium"
      />
      <button
        type="submit"
        className="rounded-r-xl px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold hover:from-indigo-500 hover:to-purple-500 transition-all duration-200 active:scale-95 shrink-0 relative z-10 border border-transparent hover:border-white/10"
      >
        Add Task
      </button>
    </form>
  );
}

export default TodoForm;
