/**
 * @file 公共方法
 * @data 2018-07-23
 */

let commonFunc = {
    /**
     * @description ajax封装的网络请求
     * @date   2018-07-24
     */
    fetch: (options = {}) => {
        return new Promise(function (resolve, reject) {
            let url = options.url || '',
                data = options.data || {},
                method = options.method || 'GET',
                async = options.async || true,
                header = options.header || {};
            let xhr = new XMLHttpRequest();
            let params = [];
            for (let key in data) {
                params.push(key + '=' + data[key]);
            }
            let paramsData = params.join('&');
            if (method.toUpperCase() === 'POST') {
                // 建立与远程服务器的连接
                xhr.open(method, url, async);
                let headers = Object.assign(header, {
                    'Content-type': 'application/x-www-form-urlencoded;charset=utf-8'
                });
                for (let i in headers) {
                    xhr.setRequestHeader(i, headers[i]);
                }
                xhr.send(paramsData);
            }
            else if (method.toUpperCase() === 'GET') {
                xhr.open(method, url + '?' + paramsData, async);
                xhr.send();
            }
            // xhr的得到响应的事件，解析resolve事件
            xhr.onload = function () {
                if (xhr.readyState === 4) {
                    if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
                        resolve(JSON.parse(xhr.responseText));
                    }
                }
                else {
                    reject(xhr.status);
                }
            };
            // 加载出错事件，执行reject函数
            xhr.onerror = function () {
                reject({
                    errorType: 'onerror',
                    xhr: xhr.status
                });
            };
        });
    },
    getQuery: name => {
        const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
        const r = window.location.search.substr(1).match(reg);
        if (r !== null) {
            return decodeURIComponent(r[2]);
        }
    },
    setCookie: (name, value, execday) => {
        const d = new Date();
        d.setTime(d.getTime() + execday * 24 * 60 * 60 * 1000);
        let expires = 'expires=' + d.toUTCString();
        document.cookie = name + '=' + value + ';' + expires;
    },
    getCookie: name => {
        const reg = new RegExp('(^|)' + name + '=([^;]*)(;|$)');
        const r = document.cookie.match(reg);
        if (r !== null) {
            return r[2];
        }
    }
};
export default commonFunc;
