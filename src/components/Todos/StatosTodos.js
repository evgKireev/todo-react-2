import styles from './StatusTodos.module.css'

function StatusTodos({ completedTodo, activeTodo }) {
  return (
    <div className={styles.statusTodo}>
      <p>Active todo: {activeTodo} </p>
      <p>Completed todo: {completedTodo}</p>
    </div>
  );
}

export default StatusTodos;
