import axios from "axios";
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Logo from "../assets/Battery/keto.png";
import "./login.scss";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Make POST request to login endpoint
      const response = await axios.post('https://ketomotors.in/login', { email, password });
      console.log(response.data);

      localStorage.setItem('token', response.data.token);
      toast.info('Login Sucessfull', {
        position: "bottom-right",
        autoClose: false,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: 1,
        theme: "dark",
      });
      // Handle response data here, such as saving the token
      navigate("/master");
      // For example: localStorage.setItem('token', response.data.token);
    } catch (error) {
      console.error(error.response ? error.response.data : error.message);
      // Handle error here, such as showing an error message to the user
      toast.info(error.response ? error.response.data : error.message, {
        position: "bottom-right",
        autoClose: false,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: 1,
        theme: "dark",
      });
    }


  };

  return (<>
    <ToastContainer
      position="bottom-right"
      autoClose={false}
      newestOnTop
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      theme="dark"
    />
    <div className="login-container">
      <div className="heading">
      </div>
      <div className="container">
        <div className="logo-card">
          <div className="logo">
            <img src={Logo} alt="keto" />
          </div>

        </div>
        <div className="login-card">
          <form onSubmit={handleLogin}>
            <input type="email" placeholder='Email' onChange={e => setEmail(e.target.value)} value={email} required />
            <input type="password" placeholder='Password' onChange={e => setPassword(e.target.value)} value={password} required />
            <div className="row">
              <p>KetoMotors ™️</p>
              <button type="submit">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </>
  )
}

export default Login;