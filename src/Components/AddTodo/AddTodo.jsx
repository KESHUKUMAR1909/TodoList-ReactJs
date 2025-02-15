import { useState, useContext } from "react";
import TodoContext from "../../Context/TodoContext";
import "./AddTodo.css"

function AddTodo() {
    const { list, setList } = useContext(TodoContext);
    const [newTodo, setNewTodo] = useState("");

    function addTodo() {
        if (newTodo.trim() === "") return;
        setList([...list, { id: list.length + 1, todoData: newTodo, finished: false }]);
        setNewTodo("");
    }

    return (
        <div className="add-todo">
            <input 
                type="text" 
                value={newTodo} 
                placeholder="Enter New Todo"
                onChange={(e) => setNewTodo(e.target.value)} 
            />
            <button onClick={addTodo}>Add</button>
        </div>
    );
}

export default AddTodo;
