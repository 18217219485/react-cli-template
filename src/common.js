/**
 * @file 公共方法(ajax,getQuery,getCookie,setCookie,getUniqueValue)
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
                method = options.method.toUpperCase || 'GET',
                async = options.async || true,
                header = options.header || {};
            // 申明xhr变量
            let xhr = new XMLHttpRequest();
            let params = [];
            for (let key in data) {
                params.push(key + '=' + data[key]);
            }
            let paramsData = params.join('&');

            if (method === 'POST') {
                // 建立与远程服务器的连接
                xhr.open(method, url, async);
                // 设置请求头
                let headers = Object.assign(header, {
                    'Content-type': 'application/x-www-form-urlencoded;charset=utf-8'
                });
                for (let i in headers) {
                    xhr.setRequestHeader(i, headers[i]);
                }
                // 发送请求
                xhr.send(paramsData);
            }
            else if (method === 'GET') {
                xhr.open(method, url + '?' + paramsData, async);
                xhr.send();
            }
            // 返回数据状态处理
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
                        try {
                            resolve(JSON.parse(xhr.responseText));
                        }
                        catch (e) {
                            reject(e);
                        }
                    }
                }
                else {
                    reject(new Error(xhr.statusText));
                }
            };
            xhr.onload = resolve(xhr.responseText);
            xhr.onerror = reject(xhr.status);
        });

    }
};
export default commonFunc;




