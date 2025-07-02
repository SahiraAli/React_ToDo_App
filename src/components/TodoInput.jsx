import React, { useState } from 'react';

function TodoInput({ onAdd }) {
  const [inputValue, setInputValue] = useState('');

  const handleAdd = () => {
    if (!inputValue.trim()) return;
    onAdd(inputValue);
    setInputValue(''); // Clear input after adding
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAdd();
    }
  };

  return (
    <div style={styles.inputContainer}>
      <input
        type="text"
        placeholder="Enter a new task"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyPress}
        style={styles.input}
      />
      <button onClick={handleAdd} style={styles.button}>Add</button>
    </div>
  );
}

const styles = {
  inputContainer: {
    display: 'flex',
    gap: '10px',
    marginBottom: '1rem'
  },
  input: {
    flex: 1,
    padding: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc'
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  }
};

export default TodoInput;
