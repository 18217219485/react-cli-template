/**
 * 项目根组件
*/
import React from 'react';
import {Button, message} from 'antd';
import './App.less';
export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isRender: true
        };
    }
    handleSumbit = () => {
        message.success('测试按钮');
    }
    render() {
        return (
            <div className = "page-content">
                Welcome to React-cli
                <Button type="primary" onClick={this.handleSumbit.bind(this)}>测试按钮</Button>
            </div>
        );
    }
}
