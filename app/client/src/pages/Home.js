import { BellFilled, MenuFoldOutlined, MenuUnfoldOutlined, ReloadOutlined, SettingFilled, UserOutlined } from '@ant-design/icons';
import { Button, Layout } from 'antd';
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom'; // Import Outlet
import Logo from '../components/Logo.js';
import MenuList from '../components/MenuList.js';
import ThemeToggle from '../components/ThemeToggle.js';
import "./Home.scss";
import Footer from "../pages/Footer.js";
const { Header, Sider, Content } = Layout;

function Home() {
    const [collapsed, setCollapsed] = useState(false);
    const [darkTheme, setDarkTheme] = useState(false);

    const toggleTheme = () => {
        setDarkTheme(!darkTheme);
    };

    return (
        <Layout hasSider style={{ minHeight: '100vh' }}>
            <Sider
                collapsible
                collapsed={collapsed}
                onCollapse={setCollapsed}
                theme={darkTheme ? 'dark' : 'light'}
                className='sidebar'
            >
                <Logo />
                <MenuList darkTheme={darkTheme} />
                {/* <ThemeToggle darkTheme={darkTheme} toggleTheme={toggleTheme} /> */}
            </Sider>
            <Layout style={{background:"#E6ECF9"}}>
                <Header className='header' style={{ padding: 0, background: darkTheme ? '#001529' : '#fff' }}>
                    {/* <Button
                        type='tex t'
                        className='toggle'
                        onClick={() => setCollapsed(!collapsed)}
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                    /> */}
                    <div class="icons-left">CDC Dashboard</div>
                    <div className="icons-right">
                        <ReloadOutlined style={{ color: darkTheme ? '#fff' : '#000', marginRight: 24, fontSize: '24px' }} />
                        <SettingFilled style={{ color: darkTheme ? '#fff' : '#000', marginRight: 24, fontSize: '24px' }} />
                        <BellFilled style={{ color: darkTheme ? '#fff' : '#000', marginRight: 24, fontSize: '24px' }} />
                        <UserOutlined style={{ color: darkTheme ? '#fff' : '#000', fontSize: '24px' }} />
                    </div>
                </Header>
                <Content className='contentContainer' style={{ margin: '24px', minHeight: 280 }}>
                    <Outlet />
                </Content>
                <Footer />
            </Layout>
        </Layout>
    );
}

export default Home;
