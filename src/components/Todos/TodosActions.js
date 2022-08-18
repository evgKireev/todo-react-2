import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri';
function TodoActions({resetTodos,clearComplited,completedTodosExist}) {
  return (
    <div>
      <button title="Reset Todos" onClick={resetTodos}>
        <RiRefreshLine />
      </button>
      <button title="Clear Completed Todos"  onClick={clearComplited} disabled={!completedTodosExist}> 
        <RiDeleteBin2Line />
      </button>
    </div>
  );
}

export default TodoActions;
