/**
 * @file
 */
export default (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ];
        case 'TOGGLE_TODO':
            let toggle = state.map(todo => {
                return todo.id === action.id ? {...todo, completed: !todo.completed} : todo;
            });
            return toggle;
        default:
            return state;
    }
};