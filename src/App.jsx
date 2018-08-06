/**
 * 项目根组件
*/
import React from 'react';
import Demo from './redux/component/index.jsx';
import './App.less';

export default class App extends React.Component {
    render() {
        return (
            <div className = "page-content">
                <Demo></Demo>
            </div>
        );
    }
}

