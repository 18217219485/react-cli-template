/**
 * @file 
 */
export default (state = [], action) => {
    switch (action.type) {
        case 'ADD':
            return state++;
        default:
            return state;
    }
};
