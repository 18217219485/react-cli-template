/**
 * @file
 */
let textId = 0;
export const addTodo = text => ({
    type: 'ADD_TODO',
    id: textId++,
    text
});

export const toggleTodo = id => ({
    type: 'TOGGLE_TODO',
    id
});


