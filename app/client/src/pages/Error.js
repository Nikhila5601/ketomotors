import React from 'react';
import Batteryerror from "../assets/Battery/Errorpage.png";
import "./error.scss";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="container">
      <div>Uh Oh, The Page you are looking isn't Available</div>
      <img src={Batteryerror} alt="" width={350} />
      <Link to="/master">
        <button>Go Back Home</button>
      </Link>
    </div>
  )
}

export default Error