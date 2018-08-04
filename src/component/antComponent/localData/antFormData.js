/**
 * @file 配置的本地页面数据
 * @date 2018-07-25
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
        base: [
            {
                type: 'text',
                name: 'username',
                displayName: '用户名',
                defaultValue: '',
                isRequired: false,
                options: null
            },
            {
                type: 'text',
                name: 'password',
                displayName: '密码',
                defaultValue: '',
                isRequired: false,
                options: null
            },
            {
                type: 'select',
                name: 'companyType',
                displayName: '商户类型',
                defaultValue: '',
                isRequired: false,
                size: 'large',
                options: OPTIONS.COMPANY_TYPE
            }
        ]
    }
};
