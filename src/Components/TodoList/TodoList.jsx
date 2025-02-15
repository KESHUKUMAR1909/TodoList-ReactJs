import { useContext } from "react";
import Todo from "../Todo/Todo";
import TodoContext from "../../Context/TodoContext";

function TodoList() {
    const { list, setList } = useContext(TodoContext);

    function editTodo(id, todoText) {
        const updatedList = list.map(todo =>
            todo.id === id ? { ...todo, todoData: todoText } : todo
        );
        setList(updatedList);
    }

    function deleteTodo(id) {
        setList(list.filter(todo => todo.id !== id));
    }

    function toggleFinished(id) {
        const updatedList = list.map(todo =>
            todo.id === id ? { ...todo, finished: !todo.finished } : todo
        );
        setList(updatedList);
    }

    return (
        <>
            {list.map((todo) => (
                <Todo 
                    todoText={todo.todoData} 
                    key={todo.id} 
                    id={todo.id} 
                    finished={todo.finished} 
                    EditTodo={editTodo} 
                    DeleteTodo={deleteTodo} 
                    ToggleFinished={toggleFinished}
                />
            ))}
        </>
    );
}

export default TodoList;
