// import TodoItem from './TodoItem';
// import React from 'react';

// function TodoList({ todos, onDelete }) {
//   return (
//     <ul className="max-h-64 overflow-y-auto border rounded-md p-2 space-y-2 mt-4">
//       {todos.map(todo => (
//         <TodoItem key={todo.id} todo={todo} onDelete={onDelete} />
//       ))}
//     </ul>
//   );
// }

// export default TodoList;

import React from 'react';
import { useEffect, useRef } from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, onDelete, onToggle }) {
  const listRef = useRef(null);

  useEffect(() => {
    // Scroll to bottom smoothly when new todo is added
    if (listRef.current) {
      listRef.current.scrollTo({
        top: listRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [todos]); // runs every time todos change

  return (
    <ul
      ref={listRef}
      className="min-h-[96px] max-h-[192px] overflow-y-auto border rounded-md p-2 space-y-2 mt-4"
    >
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} onDelete={onDelete} onToggle={onToggle} />        
      ))}
    </ul>
  );
}

export default TodoList;
