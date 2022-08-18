import { useState } from 'react';
import './App.css';
import Todo from './components/Todos/Todo';
import TodoForm from './components/Todos/TodoForm';
import TodoList from './components/Todos/TodoList';

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

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodoHandler} />
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
