/**
 * @file
 */
import React from 'react';
import AntTable from '../../component/antComponent/antTable.jsx';
import localData from '../../component/antComponent/localData/antTableData';
// import {Table} from 'antd';
import './login.less';
export default class Login extends React.Component {
    handleClick = (id, type) => {
        console.log('每条数据的' + id);
        console.log('每条数据类型' + type);
    }
    render() {
        return (
            <div className="page-login-content">
                <AntTable
                    localData={localData.LOGIN.header}
                    outsideData={localData.OUT}
                    onClick = {this.handleClick}
                ></AntTable>
            </div>
        );
    }
}
