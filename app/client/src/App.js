import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Button, Layout, theme } from 'antd';
import React, { useState } from 'react';
import { Route, RouterProvider, Routes, createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute.js";
import Dashboard from './pages/Dashboard.js';
import Home from './pages/Home.js';
import Login from './pages/Login.js';
import Master from "./pages/Mastery.js";
import Register from "./pages/Register.js";
import Error from './pages/Error.js';

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
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="/master" element={<ProtectedRoute><Master /></ProtectedRoute>} />
        </Route>

        {/* <Route path="/register" element={<Register />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Error/>} />
      </Routes>
    </>
  );
}

export default App;
