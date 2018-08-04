/**
 * @file 表格配置的本地测试数据
 * @date 2017-07-27
 */
const OPTIONS = {
    COMPANY_TYPE: [
        {
            displayName: '个体工商户',
            value: 'G'
        },
        {
            displayName: '大型企业',
            value: 'D'
        }
    ]
};
export default {
    LOGIN: {
        header: [
            {
                title: '姓名',
                dataIndex: 'name',
                key: 'name'
            },
            {
                title: '年龄',
                dataIndex: 'age',
                key: 'age'
            },
            {
                title: '住址',
                dataIndex: 'address',
                key: 'address'
            },
            {
                type: 'click',
                value: '操作',
                key: 'view',
                content: {
                    key: 'view',
                    value: '查看'
                }

            },
            {
                type: 'click',
                value: '操作',
                key: 'delete',
                content: {
                    key: 'delete',
                    value: '删除'
                }
            },
            {
                type: 'select',
                value: '选择',
                key: 'study',
                content: {
                    defaultValue: '',
                    options: OPTIONS.COMPANY_TYPE
                }
            }
        ]
    },
    OUT: [
        {
            name: 'JON',
            age: '17',
            address: '上海市',
            study: 'G'
        },
        {
            name: 'Sam',
            age: '18',
            address: '12343424',
            study: 'G'
        },
        {
            name: 'Kate',
            age: '20',
            address: 'hunghzoushi',
            study: 'D'
        }
    ]
};
