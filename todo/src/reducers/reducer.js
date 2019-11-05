export const initialState = {
    todos: [ 
        {
        task: 'Learn about reducers',
        completed: false,
        id: 3892987589 
        } 
    ]
}

export const reducer = (state, action) => {
    switch(action.type) {
        case 'ADD_TODO':
            const newTodo = {
                task: action.payload,
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
                todos: state.todos.map(item => {
                          if (item.id === action.payload) {
                            return {
                              ...item,
                              completed: !item.completed
                            };
                          } else {
                            return item;
                          }
                        })
            }
        case 'FILTER':
            return {
                ...state,
                todos: state.todos.filter(item => {
                    return item.completed === false
                  })
            }
            default:
                return state;
    }
}