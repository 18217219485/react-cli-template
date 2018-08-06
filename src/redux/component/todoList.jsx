/**
 * @file
 */
import React from 'react';
import Todo from './todo.jsx';
export default class TodoList extends React.Component {
    render() {
        let {todos, toggleTodo} = this.props;
        return (
            <ul>
                {
                    todos.map((item, index)=> {
                        return (
                            <Todo key={item.id} {...item} onClick={toggleTodo(item.id)}>
                            </Todo>
                        );
                    })
                }
            </ul>
        );
    }
}
