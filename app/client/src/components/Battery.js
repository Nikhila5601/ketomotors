import React, { useEffect, useState } from 'react';
import { RiFlashlightFill, RiPlugLine } from 'react-icons/ri';
import average from "../assets/Battery/average.png";
import charge from "../assets/Battery/charge.png";
import discharge from "../assets/Battery/discharge.png";
import "./battery.css";
const BatteryStatus = ({ data }) => {
    const [isCharging, setIsCharging] = useState(false);
    const [activeCapsule, setActiveCapsule] = useState('charge');
    console.log(data);
    const [batteryLevel, setBatteryLevel] = useState(data[0].SOC);
    const [State, setState] = useState(data[0]?.chargeCondition);
    const handleStatClick = (capsuleId) => {
        setActiveCapsule(capsuleId);
    };
    useEffect(() => {
        // const updateBatteryStatus = (battery) => {
        //     setBatteryLevel(battery.level * 100);
        //     setIsCharging(battery.charging);
        // };

        // navigator.getBattery().then(battery => {
        //     updateBatteryStatus(battery);
        //     battery.addEventListener('chargingchange', () => updateBatteryStatus(battery));
        //     battery.addEventListener('levelchange', () => updateBatteryStatus(battery));
        // });
    }, []);

    const getLiquidClass = (level) => {
        if (level <= 20) return 'gradient-color-red';
        else if (level <= 40) return 'gradient-color-orange';
        else if (level <= 80) return 'gradient-color-yellow';
        else return 'gradient-color-green';
    };

    return (
        <>
            <div className="battery-body">
                <section className="battery">
                    <div className="battery__card">
                        <div className="battery__data">
                            <p className="battery__text">Battery</p>
                            <h1 className="battery__percentage">{batteryLevel}%</h1>
                            <p className="battery__status">
                                {batteryLevel === 100 && <div>
                                    Full Battery <RiPlugLine />
                                </div>}


                                <span>
                                    Battery Status <br />
                                    {State} <RiFlashlightFill />
                                </span>

                            </p>
                        </div>

                        <div className="battery__pill">
                            <div className="battery__level" >
                                <div className={`battery__liquid ${getLiquidClass(batteryLevel)}`} style={{ height: batteryLevel === 100 ? '104%' : `${batteryLevel}%` }}></div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div>
                <div className="status">
                    <div className="stat-img" onClick={() => handleStatClick('charge')}><img src={charge} alt="" /></div>
                    <div className="stat-img" onClick={() => handleStatClick('discharge')}><img src={discharge} alt="" /></div>
                    <div className="stat-img" onClick={() => handleStatClick('average')}><img src={average} alt="" /></div>
                    <div className="stat-img" onClick={() => handleStatClick('charge')}><img src={charge} alt="" /></div>
                </div>
                {activeCapsule === 'charge' && (
                    <div className="capsule">
                        <div className="info-img"> <img src={charge} alt="" /> </div>
                        <div className="card">
                            <div className="info-head">Charge Condition</div>
                            <div className="info-value">123 mah</div>
                        </div>
                    </div>
                )}
            </div>
            {activeCapsule === 'discharge' && (<div className="capsule">
                <div className="info-img"> <img src={discharge} alt="" /> </div>
                <div className="card">
                    <div className="info-head">Discharge Condition</div>
                    <div className="info-value">95%</div>
                </div>
            </div>

            )}
            {activeCapsule === 'average' && (<div className="capsule">
                <div className="info-img"> <img src={average} alt="" /> </div>
                <div className="card">
                    <div className="info-head">Average Current</div>
                    <div className="info-value">50 Ah</div>
                </div>
            </div>

            )}
        </>
    );
};


export default BatteryStatus;
