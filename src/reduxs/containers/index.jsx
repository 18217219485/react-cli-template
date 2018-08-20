/**
 * @file
 */
import React from 'react';
import {connect} from 'react-redux';
import {addTodo, toggleTodo} from '../actions';

import config from '../../../mock/server';
import common from '../../common';
class MyDemo extends React.Component {
    constructor(props) {
        super(props);
        this.textInput = React.createRef();
        this.arguments = React.createRef();
    }
    handleSubmit = e => {
        e.preventDefault();
        if (!this.textInput.current.value.trim()) {
            return;
        }
        this.props.add(this.textInput.current.value);
        this.textInput.current.value = '';
    }
    handleArgumentsSubmit = e => {
        e.preventDefault();
        if (!this.arguments.current.value.trim()) {
            return;
        }
        console.log(this.arguments.current.value);

    }
    render() {
        let {todos, toggle} = this.props;
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" ref={this.textInput}/>
                    <button type="submit">Add Todo</button>
                </form>
                <ul>
                    {
                        todos && todos.map(todo => {
                            return (
                                <li
                                    key={todo.id}
                                    onClick ={() => toggle(todo.id)}
                                    style = {{textDecoration: todo.completed ? 'line-through' : 'none'}}
                                >
                                    {todo.text}
                                </li>
                            );
                        })
                    }
                </ul>
                <div>
                    <span>Show:</span>
                    <button>ALL</button>
                    <button>ACTIVE</button>
                    <button>COMPLETED</button>
                </div>
                <hr/>
                <div>
                    <p>测试redux</p>
                    <p>情境一：没有参数的简单异步请求</p>
                    <p>情境二：带参数的异步请求</p>
                    <form onSubmit = {this.handleArgumentsSubmit} >
                        <input type="text" ref={this.arguments}/>
                        <button type="submit">提交</button>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    todos: state.todo,
    async: state.async
});

const mapDispatchToProps = dispatch => ({
    add: text => dispatch(addTodo(text)),
    toggle: id => dispatch(toggleTodo(id))
});
// mapDispatchToProps包裹一层之后，没有起作用
export default connect(mapStateToProps, mapDispatchToProps)(MyDemo);
