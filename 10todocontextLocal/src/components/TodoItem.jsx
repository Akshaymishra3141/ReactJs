import React, { useState } from 'react'
import { useTodo } from '../contexts';

function TodoItem({ todo }) {
  const [isTodoEditable,setIsTodoEditable] = useState(false);
  const [todoMsg,setTodoMsg] = useState(todo.todo);
  const {deleteTodo,toggleTodo,updateTodo} = useTodo();

  const editTodo = ()=>{
    updateTodo(todo.id,{...todo,todo:todoMsg});
    setIsTodoEditable(false);
  }

  const toggleCompleted = ()=>{
    toggleTodo(todo.id);
  }
  return (
    <div
      className={`flex items-center border rounded-xl px-4 py-3 gap-x-4 shadow-lg transition-all duration-300 text-white group ${
        todo.completed 
          ? "bg-white/5 border-emerald-500/30 shadow-emerald-500/10" 
          : "bg-white/10 border-white/20 shadow-black/20 hover:bg-white/15 hover:shadow-indigo-500/10 cursor-default"
      } backdrop-blur-md relative overflow-hidden`}
    >
      {/* Checkbox enhancement (CSS styled) */}
      <div className="relative flex items-center justify-center shrink-0">
         <input
          type="checkbox"
          className="peer appearance-none w-6 h-6 border-2 border-indigo-400/50 rounded-md checked:bg-emerald-500 checked:border-emerald-500 transition-all duration-200 cursor-pointer shadow-inner"
          checked={todo.completed}
          onChange={toggleCompleted}
        />
        <svg
          className="absolute w-4 h-4 text-white pointer-events-none opacity-0 peer-checked:opacity-100 transition-all duration-300 scale-50 peer-checked:scale-100"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>

      <input
        type="text"
        className={`outline-none w-full bg-transparent rounded-lg text-lg font-medium transition-all duration-300 ${
          isTodoEditable ? "border border-indigo-500/50 px-3 py-1 bg-black/40 shadow-inner" : "border-transparent"
        } ${todo.completed ? "line-through text-white/40" : "text-white/90"}`}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
      />
      {/* Edit, Save Button */}
      <button
        className={`inline-flex w-10 h-10 rounded-lg text-sm justify-center items-center transition-all duration-200 shrink-0 shadow-sm ${
          todo.completed 
            ? "opacity-30 cursor-not-allowed bg-black/20 border border-transparent" 
            : isTodoEditable
               ? "bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30 border border-emerald-500/50"
               : "bg-white/10 text-indigo-300 hover:bg-indigo-400/20 border border-white/10 hover:border-indigo-400/50"
        } opacity-0 group-hover:opacity-100 sm:opacity-100 focus:opacity-100`}
        onClick={() => {
          if (todo.completed) return;

          if (isTodoEditable) {
            editTodo();
          } else setIsTodoEditable((prev) => !prev);
        }}
        disabled={todo.completed}
      >
        {isTodoEditable ? (
          <svg className="w-5 h-5 drop-shadow-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
        ) : (
          <svg className="w-4 h-4 drop-shadow-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
        )}
      </button>
      {/* Delete Todo Button */}
      <button
        className="inline-flex w-10 h-10 rounded-lg text-sm justify-center items-center shrink-0 transition-all duration-200 bg-white/10 text-rose-400 hover:bg-rose-500/20 hover:text-rose-300 border border-white/10 hover:border-rose-400/30 shadow-sm opacity-0 group-hover:opacity-100 sm:opacity-100 focus:opacity-100"
        onClick={() => deleteTodo(todo.id)}
      >
        <svg className="w-5 h-5 drop-shadow-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
      </button>
    </div>
  );
}

export default TodoItem;
