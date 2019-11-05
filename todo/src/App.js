import React, {useState, useReducer} from 'react';
import {initialState, reducer} from './reducers/reducer';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css';

function App() {

  // const [todos, setTodos] = useState([])
  const [initialState, dispatch] = useReducer(reducer, initialState);

  const addNewToDo = whatYouTyped => {
    const newItem = {
      task: whatYouTyped,
      id: Date.now(),
      completed: false
    };
    setTodos([...todos, newItem])
  }

  const toggleCompleted = id => {
    setTodos(
      todos.map(item => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed
          };
        } else {
          return item;
        }
      }) 
    )
  }

  const filterCompleted = () => {
    setTodos(
        todos.filter(item => {
        return item.completed === false
      })
    )
  }


  return (
    <div className="App">
      <div className='formHeader'>
        <h2>My To-Do List</h2>
        <TodoForm addNewToDo={addNewToDo}  />
      </div>
      <TodoList todos={todos} toggleCompleted={toggleCompleted} filterCompleted={filterCompleted} />
    </div>
  );
}

export default App;
