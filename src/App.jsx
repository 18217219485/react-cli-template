/**
 * 项目根组件
*/
import React from 'react';
import {Button, message} from 'antd';
import Login from './page/login/login.jsx';
import config from './common';
import './App.less';
export default class App extends React.Component {
    // handleSumbit = () => {
    //     message.success('测试按钮');
    //     config.fetch({
    //         url: '/use',
    //         method: 'GET',
    //         async: true,
    //         header: {}
    //     }).then(response => {
    //         console.log(response);
    //     });
    // }
    render() {
        return (
            <div className = "page-content">
                <Login/>
            </div>
        );
    }
}
