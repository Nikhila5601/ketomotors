import mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

const batteryDataSchema = new mongoose.Schema({
    packSerialNumber: { type: String, required: true },
    bmsMake: { type: String, default: 'EXM' },
    batteryCapacity: { type: String, default: '163' },
    maxSOC: { type: Number, default: 100 },
    minSOC: { type: Number, default: 1 },
    socJump: { type: Number, default: 1 },
    fullCapacity: { type: Number, default: 99 },
    maxCellVoltage: { type: String, required: true },
    minCellVoltage: { type: String, required: true },
    cellImbalance: { type: Number, default: 2 },
    maxCellTemp: { type: Number, default: 45 },
    minCellTemp: { type: Number, default: 40 },
    thermalBehaviour: { type: Number },
    startTime: { type: Date },
    endTime: { type: Date },
    status: { type: String },
    charge: { type: Number, default: 163 },
    chargeCondition: { type: String, enum: ['INIT', 'STANDBY', 'Charger Detection', 'Discharge', 'Charging'] },
    discharge: { type: Number, default: 163 },
    dischargeCondition: { type: String, default: '95' },
    averageCurrent: { type: Number, default: '30', required: true },
    notifications: [{ type: String }],
    SOC:{ type: String,required: true}
}, { timestamps: true }); // Enable timestamps

const BatteryData = mongoose.model('BatteryData', batteryDataSchema);

export default BatteryData;
