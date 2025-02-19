import { useState, useContext } from "react";
import TodoDispatchContext from "../../Context/TodoDispatchContext";
import "./AddTodo.css";

function AddTodo() {
    const { dispatch } = useContext(TodoDispatchContext);
    const [newTodo, setNewTodo] = useState(""); 

    return (
        <div className="add-todo">
            <input 
                type="text" 
                value={newTodo} 
                placeholder="Enter New Todo"
                onChange={(e) => setNewTodo(e.target.value)} 
            />
            <button onClick={() => {
                if (newTodo.trim() === "") return; 
                dispatch({ type: "add_todo", payload: { todoText: newTodo } });
                setNewTodo(""); 
            }}>
                Add
            </button>
        </div>
    );
}

export default AddTodo;
