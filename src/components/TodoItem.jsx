import React from 'react';

function TodoItem({ todo, onDelete, onToggle }) {
  return (
    <li style={styles.item}>
      <span
        style={{
          textDecoration: todo.completed ? 'line-through' : 'none',
          color: todo.completed ? '#999' : '#333',
          flexGrow: 1
        }}
        >{todo.text}</span>
      <div style={{ display: 'flex', gap: '8px' }}>
        <button onClick={() => onToggle(todo.id)} style={styles.doneButton}>
          {todo.completed ? 'Undo' : 'Done'}
        </button>
        <button onClick={() => onDelete(todo.id)} style={styles.button}>Delete</button>
      </div>
    </li>
  );
}

const styles = {
  item: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
    marginBottom: '8px',
    backgroundColor: '#fff',
    borderRadius: '5px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
  },
  button: {
    padding: '6px 12px',
    fontSize: '14px',
    backgroundColor: '#e74c3c',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  },

  doneButton: {
  padding: '6px 12px',
  fontSize: '14px',
  backgroundColor: '#3498db',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer'
}

};

export default TodoItem;
