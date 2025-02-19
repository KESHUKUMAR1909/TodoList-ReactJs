import { useContext } from "react";
import Todo from "../Todo/Todo";
import TodoContext from "../../Context/TodoContext";
import TodoDispatchContext from "../../Context/TodoDispatchContext";

function TodoList() {
    const { list } = useContext(TodoContext);  
    const { dispatch } = useContext(TodoDispatchContext);

    function editTodo(id, todoText) {
        dispatch({ type: "edit_todo", payload: { id, todoText } });
    }

    function deleteTodo(id) {
        dispatch({ type: "delete_todo", payload: { id } });
    }

    function toggleFinished(id, finished) {
        dispatch({ type: "Finished", payload: { id, isFinished: finished } });
    }

    return (
        <>
            {list.length > 0 ? (
                list.map((todo) => (
                    <Todo
                        todoText={todo.todoData}  
                        key={todo.id}
                        id={todo.id}
                        finished={todo.finished}
                        EditTodo={editTodo}
                        DeleteTodo={deleteTodo}
                        ToggleFinished={toggleFinished}
                    />
                ))
            ) : (
                <p>No todos yet.</p>
            )}
        </>
    );
}

export default TodoList;
