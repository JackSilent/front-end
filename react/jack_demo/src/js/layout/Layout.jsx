import React from 'react';
import {Layout,Menu} from 'antd';

const { Header, Content, Sider } = Layout;

class JackLayout extends React.Component{

    render(){
        return <div>
            <Layout>
                <Header id="header" style={{background:'#FF9900'}}>
                    <h2>这里是header</h2>
                </Header>
                <Layout>
                    <Sider width={200} style={{ background: '#fff' }}>
                        <Menu>

                        </Menu>
                    </Sider>
                </Layout>
                <Layout>
                    <Content id="content">
                        这是content
                    </Content>
                </Layout>
            </Layout>
        </div>
    }
}

export default JackLayout;