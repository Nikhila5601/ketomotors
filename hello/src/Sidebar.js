import React from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
// import 'react-pro-sidebar/dist/css/styles.css';
import Logo from "./logo192.png";
const MySidebar = ({ collapsed, toggled, handleToggleSidebar }) => {
    return (
        <Sidebar collapsed={true} toggled={toggled} onToggle={handleToggleSidebar}>
            {/* Logo section */}
            <div className="sidebar-header">
                <img src={Logo} alt="Logo" className="sidebar-logo" width={30} />
            </div>

            {/* Menu items */}
            <Menu iconShape="square">
                <MenuItem>Dashboard</MenuItem>
                <SubMenu title="Charts">
                    <MenuItem>  <img src={Logo} alt="Logo" className="sidebar-logo" width={30} /></MenuItem>
                    <MenuItem>  <img src={Logo} alt="Logo" className="sidebar-logo" width={30} /></MenuItem>
                </SubMenu>
                {/* Add more menu items here */}
            </Menu>

            {/* Footer or additional content */}
            {/* ... */}
        </Sidebar>
    );
};

export default MySidebar;

