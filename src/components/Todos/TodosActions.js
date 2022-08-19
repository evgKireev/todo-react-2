import {
  RiDeleteBin2Line,
  RiRefreshLine,
  RiDeleteBin4Line,
} from 'react-icons/ri';
function TodoActions({ resetTodos, clearComplited, completedTodosExist,deleteLastTodo }) {

  return (
    <div>
      <button title="Reset Todos" onClick={resetTodos}>
        <RiRefreshLine />
      </button>
      <button
        title="Clear Completed Todos"
        onClick={clearComplited}
        disabled={!completedTodosExist}
      >
        <RiDeleteBin2Line />
      </button>
      <button title="Delete Last" onClick={deleteLastTodo}>
        <RiDeleteBin4Line />
      </button>
    </div>
  );
}

export default TodoActions;
