import React,{useState} from 'react';
import { CiCircleInfo } from "react-icons/ci";
import Battery from "../assets/Battery/battery.png";
import BatteryData from "../data/battery.json";
import "./topbox.scss";
const TopBox = ({ data }) => {
    // Accessing the battery voltage using the namespaced key
    const batteryVoltage = BatteryData["battery.voltage"];
    const batteryCurrent = BatteryData["battery.current"];
    const channelId = BatteryData["channel.id"];
    const [serialPackNumber,setSerialPackNumber] = useState(data[0].packSerialNumber);
    const [BatteryCapacity,setBatteryCapacity] = useState(data[0].batteryCapacity);
    const [MaxCellVoltage, setMaxCellVoltage] = useState(data[0].maxCellVoltage);
    const [MinCellVoltage, setMinCellVoltage] = useState(data[0].minCellVoltage);
    return (
        <div className='topBox'>
            <h1>EXM</h1>
            <span><CiCircleInfo style={{ fontSize: "18px" }} /></span>
            <div className="serial">
            {serialPackNumber} 
            </div>
            <div className="card">
                <div className="left">
                    <div className="listItem">
                        <div className="list-value">{BatteryCapacity}</div>
                        <div className="list-head">Battery Capacity</div>
                    </div>
                    <div className="listItem">
                        <div className="list-value">{MaxCellVoltage}V</div>
                        <div className="list-head">Max. Cell Voltage</div>
                    </div>
                    <div className="listItem">
                        <div className="list-value">{MinCellVoltage}V</div>
                        <div className="list-head">Min. Cell Voltage</div>
                    </div>
                </div>


                <div className="right">
                    <div className="battery-img">
                        <img src={Battery} alt="Battery" />
                    </div>
                    <div className="battery-data">
                        IMEI No:<span>
                            {BatteryData.ident} </span>
                    </div>
                    <div className="battery-data">
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
