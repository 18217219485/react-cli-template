/**
 * 项目根组件
*/
import React from 'react';
import './App.less';
export default class App extends React.Component {
    render() {
        return (
            <div>
              <div className = "page-content" onClick={this.handleSubmit}>Welcome to React-cli</div>
            </div>

        );
    }
}
