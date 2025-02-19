import { useState } from "react";
import "./Todo.css";

function Todo({ todoText, id, finished, EditTodo, DeleteTodo, ToggleFinished }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedText, setEditedText] = useState(todoText);

    return (
        <li className="todo">
            <input
                type="checkbox"
                checked={finished}
                onChange={() => ToggleFinished(id , !finished)}
            />

            {isEditing ? (
                <input
                    type="text"
                    value={editedText}
                    onChange={(e) => setEditedText(e.target.value)}
                    disabled={finished} 
                />
            ) : (
                <p style={{ color: finished ? "red" : "black" }}>
                    {editedText || todoText}
                </p>
            )}

            <div className="button">
                <button
                    onClick={() => {
                        if (finished) {
                            alert("You can't update as you finished it already");
                            return;
                        }
                        if (isEditing) {
                            EditTodo(id, editedText);
                        }
                        setIsEditing(!isEditing);
                    }}
                >
                    {isEditing ? "Save" : "Edit"}
                </button>

                <button onClick={() => DeleteTodo(id)}>Delete</button>
            </div>
        </li>
    );
}

export default Todo;
