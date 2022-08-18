import { useState } from 'react';
import styles from './TodoForm.modules.css';
function TodoForm({ addTodo }) {
  const [text, setText] = useState('');
  return (
    <div>
      <form className={styles}
        onSubmit={(e) => {
          e.preventDefault();
          addTodo(text);
          setText('');
        }}
      >
        <input
          onChange={(e) => {
            setText(e.target.value);
          }}
          placeholder="Enter new todo"
          value={text}
        />
        <button type="submit">add todo</button>
      </form>
    </div>
    
  );
}
export default TodoForm;
