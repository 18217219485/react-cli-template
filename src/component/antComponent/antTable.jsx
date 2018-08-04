/**
 * @file 基于antd组件封装的table组件，方便配置页面数据
 * @argument  第一列添加勾选，最后一列添加编辑删除，分页，筛选，展现表格详情
 * @date 2017-08-27  2017-08-30
 */
import React from 'react';
import {Table, Select} from 'antd';
export default class AntTable extends React.Component {
    state = {
        columns: [],
        dataSource: []
    }
    pageData = {
        paginationObj: {

        }
    }
    componentDidMount() {
        this.setState({
            columns: this.formatLocalData(this.props.localData),
            dataSource: this.formatOutsideData(this.props.outsideData)
        });
    }

    clickOpearate = (id, type) => {
        this.props.onClick && this.props.onClick(id, type);
    }

    selectOpearate = value => {
        this.props.onSelect && this.props.onSelect(value);
    }

    /**
     * @argument 处理本地数据的方法
     * @param {data}   Array  本地配置的数据
     * @date 2018-07-30
     */

    formatLocalData = data => {
        let tmpData = [];
        Array.isArray(data) && data.forEach(item => {
            if (item.type === 'click') {
                tmpData.push({
                    title: item.value,
                    dataIndex: item.key,
                    key: item.key,
                    render: (text, record) => {
                        return (
                            <a onClick = {this.clickOpearate.bind(this, text.key, item.key)}>
                                {text.value}
                            </a>
                        );
                    }
                });
            }
            else if (item.type === 'select') {
                tmpData.push({
                    title: item.value,
                    dataIndex: item.key,
                    key: item.key,
                    render: (text, record) => {
                        return (
                            <Select
                                onChange = {this.selectOpearate}
                                defaultValue = {text.defaultValue}
                            >
                                {
                                    Array.isArray(text.options) && text.options.map((item, key) => {
                                        return (
                                            <Select.Option value={item.value} key={key}>{item.displayName}</Select.Option>
                                        );
                                    })
                                }
                            </Select>
                        );
                    }
                });
            }
            else {
                tmpData.push({
                    title: item.title,
                    dataIndex: item.dataIndex,
                    key: item.key
                });
            }
        });
        return tmpData;
    }

    /**
     * @argument 处理异步请求过来的数据
     * @param {data} Array
     * @date 2018-07-31
     */

    formatOutsideData = data => {
        data && Array.isArray(data) && data.forEach((contentItem, key) => {
            this.props.localData.forEach(headerItem => {
                let tmpJson = {};
                if (headerItem.type === 'click') {
                    tmpJson = Object.assign(contentItem, {
                        [headerItem.key]: headerItem.content
                    });
                }
                else if (headerItem.type === 'select') {
                    headerItem.content.defaultValue = contentItem[headerItem.key];
                    // 将改变之后的headerItem.content值进行拷贝
                    let content  = JSON.parse(JSON.stringify(headerItem.content));
                    tmpJson = Object.assign(contentItem, {
                        [headerItem.key]: content
                    });
                }
                // 为外面的数据添加唯一标识
                tmpJson.key = key;
                return tmpJson;
            });
        });
        return data;
    }
    
    
    render() {
        return (
            <div>
                <Table
                    dataSource = {this.state.dataSource}
                    columns = {this.state.columns}
                    rowSelection = {this.props.rowSelection || null}
                    pagination = {this.props.pagination || false}
                />
            </div>
        );
    }
}


