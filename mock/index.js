/**
 * @file 
 */
const proxy = {
    'GET /api/user': {
        status: 0,
        content: {
            username: 'kenny',
            sex: 6
        }
    },
    'GET /api/user/list': [
        {
            id: 2,
            username: 'json',
            sex: 5
        },
        {
            id: 3,
            username: 'jake',
            sex: 4
        }
    ],
    'POST /api/simple/submit': {
        status: 'ok',
        message: '请求成功'
    },
    'POST /api/argument/submit': (req, res) => {
        console.log('-----' + req.body);
        res.send({status: 'ok', message: '提交成功'});
    }
};
module.exports = proxy;