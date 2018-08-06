/**
 * @file 
 */
import React from 'react';

export default class Todo extends React.Component {
    render() {
        let {onClick, complated, text} = this.props;
        return (
            <li onClick={onClick} style={{textDecoration: complated ? 'line-through' : 'none'}}>{text}</li>
        );
    }
}
