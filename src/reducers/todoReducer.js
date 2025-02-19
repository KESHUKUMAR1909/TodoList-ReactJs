function todoReducer(state, action) {
    if (action.type === "add_todo") {
        let todoText = action.payload.todoText;
        return [
            ...state, 
            { todoData: todoText, id: state.length + 1, finished: false }
        ];
    } 

    else if (action.type === "delete_todo") {
        let id = action.payload.id;
        return state.filter(t => t.id !== id); 
    } 

    else if (action.type === "edit_todo") {
        let id = action.payload.id;
        let todoText = action.payload.todoText;
        return state.map(t => 
            t.id === id ? { ...t, todoData: todoText } : t  
        );
    } 

    else if (action.type === "Finished") {
        let id = action.payload.id;
        let isFinished = action.payload.isFinished;
        return state.map(t => 
            t.id === id ? { ...t, finished: isFinished } : t
        );
    } 

    else {
        return state;
    }
}

export default todoReducer;
