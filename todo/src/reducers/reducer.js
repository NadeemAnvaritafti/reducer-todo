export const initialState = {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589,
    todos: []
}

export const reducer = (state, action) => {
    switch(action.type) {
        case 'ADD_TODO':
            const newTodo = {
                item: action.payload,
                completed: false,
                id: Date.now()
            }
            return {
                ...state,
                todos: [...state.todos, newTodo]
            };
        case 'TOGGLE_COMPLETED':
            return {
                ...state,
                completed: !state.completed
            }
            default:
                return state;
    }
}