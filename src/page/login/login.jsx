/**
 * @file
 */
import React from 'react';
import AntTable from '../../component/antComponent/antTable.jsx';
import localData from '../../component/antComponent/localData/antTableData';
import common from '../../common';
import './login.less';
export default class Login extends React.Component {
    handleClick = (id, type) => {
        common.fetch({
            url: 'api/user/manager',
            method: 'POST'
        }).then(response => {
            console.log(response);
        }).catch(err => {
            console.log('错误码' + err);
        });
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
