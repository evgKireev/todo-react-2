import { useState } from 'react';
import './App.css';
import StatusTodos from './components/Todos/StatosTodos';
import TodoForm from './components/Todos/TodoForm';
import TodoList from './components/Todos/TodoList';
import TodoActions from './components/Todos/TodosActions';

function App() {
  const [todos, setTodos] = useState([]);
  const addTodoHandler = (text) => {
    const newTodo = {
      text: text,
      isCompleted: false,
      id: Math.random(),
    };
    if (!text) {
      alert('Please enter todo');
    } else {
      setTodos([...todos, newTodo]);
    }
  };
  const deleteTodoHandler = (id) => {
    setTodos(todos.filter((value) => value.id !== id));
  };

  const toggleTodoHandler = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : { ...todo }
      )
    );
  };

  const completedTodoHandler = () =>
    todos.filter((todo) => todo.isCompleted).length;
  const activeTodoHandler = () =>
    todos.filter((todo) => todo.isCompleted === false).length;

  const resetTodosHandler = () => {
    setTodos([]);
  };

  const clearComplitedHandler = () => {
    return setTodos(todos.filter((todo) => todo.isCompleted === false));
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodoHandler} />
      <StatusTodos
        activeTodo={activeTodoHandler()}
        completedTodo={completedTodoHandler()}
      />
      {todos.length > 0 && (
        <TodoActions
          resetTodos={resetTodosHandler}
          clearComplited={clearComplitedHandler}
          completedTodosExist={!!completedTodoHandler}
        />
      )}

      {todos.length === 0 ? (
        <h2>Todo list is empty</h2>
      ) : (
        <TodoList
          deleteTodo={deleteTodoHandler}
          todos={todos}
          toggleTodo={toggleTodoHandler}
        />
      )}
    </div>
  );
}

export default App;
