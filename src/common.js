/**
 * @file 公共方法
 * @data 2018-07-23
 */
import {message} from 'antd';

module.exports = {
    fetch: (options = {}) => {
        let url = options.url || '',
            data = options.data || {},
            method = options.method.toUpperCase || 'GET',
            timeout = options.timeout || 2000,
            success = options.success,
            err = options.err;
        // 申明xhr变量
        let xhr = new XMLHttpRequest();
        let params = [];
        for (let key in data) {
            params.push(key + '=' + data[key]);
        }
        let paramsData = params.join('&');
        // 发送请求
        if (method === 'POST') {
            xhr.open(method, url);
            // 设置请求头
            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded;charset=utf-8');
            xhr.send(paramsData);
        }
        else if (method === 'GET') {
            xhr.open(method, url + '?' + paramsData);
            xhr.send();
        }
        // 超时处理
        if (timeout) {
            message('网络请求超时');
        }
        // 返回数据状态处理
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if ((xhr.status >= 200 && xhr.status <= 300) || xhr.status === 304) {
                    success && (success() || message('请求成功'));
                }
                else {
                    err && (err(xhr.status) || message(xhr.status));
                }
            }
        };
    }
};


