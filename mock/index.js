/**
 * @file 模拟接口
 */
const proxy = {
    'GET /api/user/message': {
        code: '0',
        message: '请求发送成功',
        content: {
            id: 1,
            name: 'Jake'
        }
    },
    'POST /api/send/message': {
        code: '0',
        message: '请求发送成功',
        content: {}
    }
};
module.exports = proxy;