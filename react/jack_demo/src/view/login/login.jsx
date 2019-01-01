import React from 'react';
import {Form,Row,Col} from 'antd'
import FormItem from "antd/es/form/FormItem";
import Button from "antd/es/button";

// let FormItem = Form.Item;

class Login extends React.Component{

    constructor(){
        super();
        this.state = {
            userInfo:{
                userName:'',
                password:''
            }
        }
    }

    render(){
        return <div>
            <Row>
                <Col span={12}>
                </Col>
                <Col span={6}>
                    <Form layout="vertical">
                        <Form.Item label="username">
                            <input placeholder="请输入用户名" type="text"/>
                        </Form.Item>
                        <Form.Item label="password">
                            <input placeholder="请输入密码" type="password"/>
                        </Form.Item>
                        <Form.Item>
                            <Button type={"primary"} htmlType={"submit"}>
                                登陆
                            </Button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        </div>
    }
}

export default Login;