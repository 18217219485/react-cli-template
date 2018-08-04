/**
 * @file 基于antd自带的Form表单，进行二次封装，实现页面可配置
 * @date 2018-07-25   complete 2018-07-26
 */
import React from 'react';
import {Form, Input, Select, Radio, Upload, Button, DatePicker, Icon} from 'antd';
const FormItem = Form.Item;

class AntForm extends React.Component {

    defaultOptions = {
        formItemlayout: {
            labelCol: {span: 6},
            wrapperCol: {span: 10, offset: 1}
        },
        events: {
            inputChange: () => {},
            selectChange: () => {},
            radioSelect: () => {},
            uploadChange: () => {},
            dateChange: () => {}
        }
    }

    /**
     * @argument 将本地的页面数据和接口的数据通过关键字关联
     * @param {localData} Array
     * @param {outsideData} json
     */

    handleMergeData = (localData, outsideData) => {
        localData.forEach(item => {
            if (item.name && outsideData) {
                item.defaultValue = outsideData[item.name];
            }
        });
        return localData;
    }

   /**
    * @param {localData}    本地页面的配置数据
    * @param {outsideData}  接口请求回来的数据
    * @param {options}      将默认的样式和外面传进来的样式进行合并
    */

    handleForm = (localData, outsideData, outsideOptions) => {

        let options = Object.assign(this.defaultOptions, outsideOptions);
        let layout = options.formItemlayout;
        let data = localData && this.handleMergeData(localData, outsideData);

        return data && Array.isArray(data) && data.map((item, index) => {

            let formItemRules = Object.assign(layout, {
                label: item.displayName,
                extra: item.extra || null,
                initialValue: item.defaultValue,
                key: index
            });
            let rules = [{
                isRequired: item.isRequired,
                message: item.message
            }];
            if (item.type === 'text') {
                return (
                    <FormItem {...formItemRules}>
                       <span className="ant-form-text">{item.defaultValue}</span>
                    </FormItem>
                );
            }
            else if (item.type === 'input') {
                return (
                    <FormItem {...formItemRules}>
                        {
                            this.props.getFieldDecorator(item.name, {
                                rules
                            })(
                               <Input
                                placeholder = {item.placeholder || null}
                                disabled = {item.disabled || false}
                                onChange = {options.events.inputChange}
                               />
                           )
                        }
                    </FormItem>
                );
            }
            else if (item.type === 'select') {
                return (
                    <FormItem {...formItemRules}>
                        {
                            this.props.form.getFieldDecorator(item.name, {
                                rules
                            })(
                                <Select
                                    placeholder = {item.placeholder || null}
                                    onChange = {options.events.selectChange}
                                >
                                    {
                                        Array.isArray(item.options) && item.options.map((item, index) => {
                                            return (
                                                <Select.Option value={item.value} key={index}>
                                                    {item.displayName}
                                                </Select.Option>
                                            );
                                        })
                                    }
                                </Select>
                            )
                        }
                    </FormItem>
                );
            }
            else if (item.type === 'radio') {
                return (
                    <FormItem {...formItemRules}>
                        {
                            this.props.form.getFieldDecorator(item.name, {
                                rules
                            })(
                                <Radio.Group
                                    defaultValue = {item.defaultValue || null}
                                    buttonStyle = {item.buttonStyle || 'outline'}
                                    onChange = {options.events.radioSelect}
                                    disabled = {item.disabled || false}
                                >
                                {
                                    Array.isArray(item.options) && item.options.map((item, index) => {
                                        return (
                                            <Radio.Button value={item.value} key={index}>
                                                {item.displayName}
                                            </Radio.Button>
                                        );
                                    })
                                }
                                </Radio.Group>
                            )
                        }
                    </FormItem>
                );
            }
            else if (item.type === 'upload') {
                let uploadRules = {
                    action: item.url,
                    data: item.data || null,
                    listType: item.listType || 'text',
                    multiple: item.isMultiple || false,
                    directory: item.isDirectory || false,
                    onChange: options.events.uploadChange
                };
                return (
                    <FormItem {...formItemRules}>
                        {
                            this.props.form.getFieldDecorator(item.displayName)(
                                <Upload {...uploadRules}>
                                    <Button><Icon type='upload'/>Click to Upload</Button>
                                </Upload>
                            )
                        }
                    </FormItem>
                );
            }
            else if (item.type === 'date') {
                return (
                    <FormItem {...formItemRules}>
                        {
                            this.props.form.getFieldDecorator()(
                                <DatePicker size={item.size} onChange={options.events.dateChange}/>
                            )
                        }
                    </FormItem>
                );
            }
        });
    }
    render() {
        return (
            <div>{this.handleForm(this.props.localData, this.props.outsideData)}</div>
        );
    }
}
export default Form.create()(AntForm);
