import './App.css';
import AddTodo from './Components/AddTodo/AddTodo';
import { useReducer, useState } from "react";
import TodoList from './Components/TodoList/TodoList';
import TodoContext from './Context/TodoContext';
import TodoDispatchContext from './Context/TodoDispatchContext';
import todoReducer from './reducers/todoReducer';

function App() {
  const [list , dispatch] = useReducer(todoReducer ,[]);

  return (
    <>
    <TodoContext.Provider value={{list}}>
    <TodoDispatchContext.Provider value={{dispatch}}>
      <div className='Container'>
        <AddTodo />
        <TodoList />
      </div>
      </TodoDispatchContext.Provider>
    </TodoContext.Provider>
    </>
  );
}

export default App;
