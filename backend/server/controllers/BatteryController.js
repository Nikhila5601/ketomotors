import axios from "axios";
import hex2ascii from "hex2ascii";
import hex2decimal from "hex2decimal";
import BatteryData from "../models/Battery.js";

export const fetchData = async () => {
    const url = 'https://flespi.io/gw/channels/1196274/messages?data={"limit_count":1}';
    const token = 'oMnzBCes5MKDOqEb8KSHEOlxd20iSvT465tvxvNq7mRJClIBTq6o5hL87CgPV0JP'; // Consider moving this to a secure place

    try {
        const response = await axios.get(url, {
            headers: {
                Authorization: token
            }
        });
        const data = await response.data;

        const fetchBatterySerialNumber = async () => {
            const canData26 = data.result[0]?.["can.data.frame.26"];
            const canData27 = data.result[0]?.["can.data.frame.27"];
            const canData28 = data.result[0]?.["can.data.frame.28"];
            // console.log(data);
            const splitData26 = canData26.substring(2);
            // console.log(splitData26);
            const splitData27 = canData27.substring(2);
            // console.log(splitData27);
            const splitData28 = canData28.substring(2);
            // console.log(splitData28);
            const joinedData = splitData26 + splitData27 + splitData28;
            const asciiResult = hex2ascii(joinedData);
            console.log("BSN " + asciiResult);
            return asciiResult;
        }

        const fetchBatteryCapacity = async () => {
            const canData4 = data.result[0]?.["can.data.frame.4"];
            const batteryCapacity = hex2decimal(canData4);
            console.log(batteryCapacity);
            return batteryCapacity;
        }
        const fetchDate = () => {
            const currentDate = new Date();
            const formattedDate =

                ('0' + currentDate.getDate()).slice(-2) + '-' + ('0' + (currentDate.getMonth() + 1)).slice(-2) + '-' + currentDate.getFullYear();

            console.log(formattedDate);
            return formattedDate;
        }
        const fetchMaxCellVoltage = async () => {
            const canData7 = await data.result[0]?.["can.data.frame.7"];
            console.log(canData7);

            // Make sure canData7 is not undefined before proceeding
            if (canData7) {
                // Extract the first two values
                const maxCellVoltageHex = canData7.substring(0, 2);

                // Convert the extracted hex values to decimal using hex2decimal
                const maxCellVoltage = hex2decimal(maxCellVoltageHex);

                console.log(maxCellVoltage);
                return maxCellVoltage;
            }
        }

        const fetchMinCellVoltage = async () => {
            const canData7 = await data.result[0]?.["can.data.frame.7"];
            const minCellVoltageHex = canData7.substring(2, 4);
            const minCellVoltage = hex2decimal(minCellVoltageHex);
            console.log(minCellVoltage);
            return minCellVoltage;

        }
        const fetchStatus = async () => {
            const canData3 = data.result[0]?.["can.data.frame.3"];
            const StatusHex = canData3.substring(canData3.length - 2);
            const Status = hex2decimal(StatusHex);
            console.log(Status);
            return Status;

        }
        const fetchSOC = async () => {
            const canData10 = data.result[0]?.["can.data.frame.10"];
            const canData11 = data.result[0]?.["can.data.frame.11"];
            const canData12 = data.result[0]?.["can.data.frame.12"];
            const canData13 = data.result[0]?.["can.data.frame.13"];
            const firstTwoValues = canData10 ? canData10.substring(8,10) : null;
            const NextTwoValues = canData10 ? canData10.substring(10, 12) : null;
            console.log("10"+canData10);
            console.log(firstTwoValues);
            console.log(NextTwoValues);
            const value = hex2decimal(NextTwoValues+firstTwoValues);
            const SOC = value * 0.01;
            console.log("SOC " + SOC);
            return SOC;
        }
        const fetchCharge = async () => {
            const canData9 = data.result[0]?.["can.data.frame.9"];
            if (canData9) {
                const ChargeHex = canData9.substring(canData9.length - 4);
                const Charge = hex2decimal(ChargeHex);
                console.log(Charge);
                return Charge;
            } else {
                console.log("canData9 is not available.");
                return null;
            }

        }
        const fetchDischarge = async () => {
            const canData9 = data.result[0]?.["can.data.frame.9"];
            const Dischargehex = canData9.substring(3, 4); // Gets the 3rd to 4th values (5th and 6th characters)

            // Convert the extracted hex value to decimal
            const Discharge = hex2decimal(Dischargehex);

            return Discharge;
        }
        const fetchCondition = async () => {
            const canData3 = data.result[0]?.["can.data.frame.3"];
            if (canData3) {

                const ConditionHex = canData3.slice(-2);
                const decimalValue = hex2decimal(ConditionHex);
                let state = ''
                switch (decimalValue) {
                    case '0':
                        state = 'INIT';
                        break;
                    case '1':
                        state = 'STANDBY';
                        break;
                    case '2':
                        state = 'Discharging';
                        break;
                    case '3':
                        state = 'Charger Detection';
                        break;
                    case '4':
                        state = 'Charging';
                        break;
                }
                console.log(state);
                return state;
            } else {
                console.log("canData3 is undefined or not present");
                return null;
            }
        };
        async function saveBatteryData() {
            try {
                const BatterySerialNumber = await fetchBatterySerialNumber();
                const BatteryCapacity = await fetchBatteryCapacity();
                const BatteryDate = await fetchDate();
                const MaxCellVoltage = await fetchMaxCellVoltage();
                const MinCellVoltage = await fetchMinCellVoltage();
                const Status = await fetchStatus();
                const Charge = await fetchCharge();
                const Discharge = await fetchDischarge();
                const Condition = await fetchCondition();
                const SOC = await fetchSOC();

                const newBatteryData = new BatteryData({
                    packSerialNumber: BatterySerialNumber,
                    batteryCapacity: BatteryCapacity,
                    date: BatteryDate,
                    maxCellVoltage: MaxCellVoltage,
                    minCellVoltage: MinCellVoltage,
                    status: Status,
                    charge: Charge,
                    discharge: Discharge,
                    chargeCondition: Condition,
                    SOC: SOC
                });
                await newBatteryData.save();
                console.log('Data saved to DB successfully.');
            } catch (error) {
                console.error('Error fetching data or saving to DB:', error);
            }
        }


        saveBatteryData().then(() => {
            console.log('Operation complete.');
        }).catch(error => {
            console.error('Failed to save battery data:', error);
        });

    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

