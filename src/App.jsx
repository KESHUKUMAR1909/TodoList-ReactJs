import './App.css';
import AddTodo from './Components/AddTodo/AddTodo';
import { useState } from "react";
import TodoList from './Components/TodoList/TodoList';
import TodoContext from './Context/TodoContext';

function App() {
  const [list, setList] = useState([
  ]);

  return (
    <TodoContext.Provider value={{ list, setList }}>
      <div className='Container'>
        <AddTodo />
        <TodoList />
      </div>
    </TodoContext.Provider>
  );
}

export default App;
