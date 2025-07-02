import React, { useState } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

function TodoApp() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    if (!text.trim()) return;
    const newTodo = {
      id: Date.now(),
      text: text.trim(),
      completed: false
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleComplete = (id) => {
  setTodos(todos.map(todo =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo
  ));
};

  return (
    <div>
      <TodoInput onAdd={addTodo} />
      <TodoList todos={todos} onDelete={deleteTodo}  onToggle={toggleComplete} />
    </div>
  );
}

export default TodoApp;
