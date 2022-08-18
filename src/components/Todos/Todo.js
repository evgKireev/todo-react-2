import { RiDeleteBin2Line, RiTodoFill } from 'react-icons/ri';
import { FaCheck } from 'react-icons/fa';
import styles from './Todo.module.css';

function Todo({ todo, deleteTodo, toggleTodo }) {
  return (
    <div
      className={`${styles.todo} ${
        todo.isCompleted === true ? styles.completedTodo : styles.todo
      } `}
    >
      <RiTodoFill className={styles.todoIcons} />
      <div className={styles.todoText}>{todo.text}</div>
      <RiDeleteBin2Line
        onClick={() => deleteTodo(todo.id)}
        className={styles.todoDeleteIcons}
      />
      <FaCheck
        onClick={() => {
          toggleTodo(todo.id);
        }}
        className={styles.todoCheckIcons}
      />
    </div>
  );
}
export default Todo;
