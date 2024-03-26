import HomeLogo from "../assets/Battery/keto.png";
import { BsFillLightningChargeFill } from "react-icons/bs";
import React from 'react';
const Logo = () => {
    return (
        <div>

            <div className="logo">
                <div className="logo-icon">
                    <img style={{ width:"48px"}} src={HomeLogo} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Logo;