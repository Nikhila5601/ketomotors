import { DatabaseFilled, HomeOutlined, ProductFilled } from '@ant-design/icons';
import { Menu } from 'antd';
import React from 'react';

const MenuList = ({ darkTheme }) => {
  return (
    <Menu className='menu-bar' theme={darkTheme ? 'dark' : 'light'} mode='inline'>
      <Menu.Item key="home" icon={<HomeOutlined style={{ color: darkTheme ? '#fff' : '#000', marginRight: 24, fontSize: '24px' }} />} >
        Master
      </Menu.Item>
      <Menu.SubMenu key="battery" icon={<ProductFilled  style={{ color: darkTheme ? '#fff' : '#000', marginRight: 24, fontSize: '24px' }} />} title="Batteries">
        <Menu.Item key="battery1">
          <DatabaseFilled /> Battery 1
        </Menu.Item>
        <Menu.Item key="battery2">
          <DatabaseFilled /> Battery 2
        </Menu.Item>
        <Menu.Item key="battery3">
          <DatabaseFilled /> Battery 3
        </Menu.Item>
        <Menu.Item key="battery4">
          <DatabaseFilled /> Battery 4
        </Menu.Item>
      </Menu.SubMenu>
    </Menu>
  )
}

export default MenuList;