import React from 'react';
import { CiCircleInfo } from "react-icons/ci";
import Battery from "../assets/Battery/battery.png";
import BatteryData from "../data/battery.json";
import "./topbox.scss";
const TopBox = () => {
    // Accessing the battery voltage using the namespaced key
    const batteryVoltage = BatteryData["battery.voltage"];
    const batteryCurrent = BatteryData["battery.current"];
    const channelId = BatteryData["channel.id"];
    console.log(channelId);
    return (
        <div className='topBox'>
            <h1>EXM</h1>
            <span><CiCircleInfo style={{ fontSize: "18px" }} /></span>
            <div className="card">
                <div className="left">
                    <div className="listItem">
                        <div className="list-value">{batteryVoltage}V</div>
                        <div className="list-head">Min. Cell Voltage</div>
                    </div>
                    <div className="listItem">
                        <div className="list-value">{batteryCurrent}</div>
                        <div className="list-head">Max. Cell Voltage</div>
                    </div>
                    <div className="listItem">
                        <div className="list-value">{batteryVoltage}V</div>
                        <div className="list-head">Rem. Capacity</div>
                    </div>
                </div>


                <div className="right">
                    <div class="battery-img">
                        <img src={Battery} alt="Battery" />
                    </div>
                    <div class="battery-data">
                        IMEI No:<span>
                            {BatteryData.ident} </span>
                    </div>
                    <div class="battery-data">
                        Channel:<span>
                            {channelId}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopBox;
