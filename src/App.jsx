/**
 * 项目根组件
*/
import React from 'react';
import './App.less';
export default class App extends React.Component {
    handleSubmit = () => {
        console.log('测试数据');
    }
    render() {
        return (
            <div className = "page-content" onClick={this.handleSubmit}>Welcome to React-cli</div>
        );
    }
}
