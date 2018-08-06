/**
 * @file
 */
import React from 'react';
export default class Link extends React.Component {
    render() {
        let {active, childern, onClick} = this.props;
        return (
            <button onClick={onClick} disabled={active}>
                {childern}
            </button>
        );
    }
}
