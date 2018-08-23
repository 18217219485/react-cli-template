/**
 * @file 公共方法
 * @date 2018-08-23
 */
export let commonFunc = {
    fetch: (options = {}) => {
        return new Promise((resolve, reject) => {
            let url = options.url || '',
                method = options.method || 'GET',
                data = options.data || {},
                async = options.async || true,
                header = options.header || {};
            let params = [];
            if (data) {
                for (let key in data) {
                    params.push(key + '=' + data[key]);
                }
            }
            let paramsData = params.join('&');
            let xhr = new XMLHttpRequest();
            if (method.toUpperCase() === 'POST') {
                xhr.open(method, url, async);
                Object.assign(header, {
                    'Content-type': 'application/x-www-form-urlencoded;charset=utf-8'
                });
                for (let i in header) {
                    xhr.setRequestHeader(i, header[i]);
                }
                xhr.send(paramsData);
            }
            else if (method.toUpperCase() === 'GET') {
                xhr.open(method, url + '?' + paramsData, async);
                xhr.send();
            }
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
            xhr.onerr = function () {
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
        let d = new Date();
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
    },
    setUniqueValue: () => {
        const s = ((Math.random + 1) * 100).toString() + '_' + new Date().getTime().toString();
        return 'unique' + s;
    }
};
