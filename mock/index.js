/**
 * @file mock造数据
 */
const Mock = require('mockjs');
const data = Mock.mock({
    'list|1-10': [{
        'id|+1': 1,
        'email': '@EMAIL',
        'name': '@name'
    }]
});
console.log(JSON.stringify(data, null, 5));