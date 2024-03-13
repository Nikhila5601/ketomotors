import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Button, Layout, theme } from 'antd';
import React, { useState } from 'react';
import { Route, RouterProvider, Routes, createBrowserRouter } from "react-router-dom";
import Logo from './components/Logo.js';
import MenuList from './components/MenuList.js';
import Navbar from './components/Navbar.js';
import ThemeToggle from './components/ThemeToggle.js';
import Dashboard from './pages/Dashboard.js';
import Home from './pages/Home.js';
import Login from './pages/Login.js';
import Master from "./pages/Mastery.js";
import Register from "./pages/Register.js";
const { Header, Sider } = Layout;
function App() {

  // const router = createBrowserRouter([
  //   {
  //     path: "/", element: <Home />,
  //     children: {
  //       path: "/",
  //       element: <Dashboard />
  //     },
  //     children: {
  //       path: "/master",
  //       element: <Master />
  //     },
  //   }
  // ])

  return (
    // <RouterProvider router={router} />
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/master" element={<Master />} />
        </Route>

        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
