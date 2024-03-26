import React, { useEffect, useRef, useState } from 'react';
import { Area, AreaChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis, defs, linearGradient, stop } from 'recharts';
import "./chart.scss";
const Chart = () => {
    const [chartWidth, setChartWidth] = useState(window.innerWidth + 80 ); // Example default width, adjust as needed
    const chartContainerRef = useRef(null); // Ref for the chart container
    const [selectedHeading, setSelectedHeading] = useState('Battery Capacity');
    useEffect(() => {
        const handleResize = () => {
            if (chartContainerRef.current) {
                setChartWidth(chartContainerRef.current.offsetWidth);
            }
        };

        // Listen for resize events
        window.addEventListener('resize', handleResize);

        // Set initial size
        handleResize();

        // Cleanup
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    const handleSelectChange = (event) => {
        setSelectedHeading(event.target.value);
    };
    const data = [
        { name: 'Page A', time: 301, pv: 24, amt: 240 },
        { name: 'Page B', time: 202, pv: 13, amt: 202 },
        { name: 'Page C', time: 143, pv: 98, amt: 232 },
        { name: 'Page D', time: 324, pv: 39, amt: 194 },
        { name: 'Page E', time: 185, pv: 48, amt: 153 },
        { name: 'Page F', time: 108, pv: 38, amt: 241 },
        { name: 'Page G', time: 324, pv: 43, amt: 180 },
    ];
    return (<div className='chart'>
        
        <div className="header">
            {/* Heading that changes based on dropdown selection */}
            <p className="head">{selectedHeading}</p>

            {/* Dropdown menu */}
            <select className='selectval' onChange={handleSelectChange} value={selectedHeading}>
                <option value="Battery Capacity">Battery Capacity</option>
                <option value="Battery Voltage">Battery Voltage</option>
                <option value="Battery">Battery</option>
            </select>
        </div>

        <div ref={chartContainerRef}>
            <AreaChart
                width={chartWidth}
                height={300}
                data={data}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#7379E1" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="2">
                        <stop offset="5%" stopColor="#CCB003" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#CCB003" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorAt" x1="0" y1="0" x2="0" y2="2">
                        <stop offset="5%" stopColor="#F18D6D" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#F18D6D" stopOpacity={0} />
                    </linearGradient>
                </defs>
                <XAxis dataKey="time" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Legend verticalAlign="right" height={36} />
                {/* <Area type="monotone" dataKey="pv" stroke="#CCB003" fillOpacity={1} fill="url(#colorPv)" /> */}
                {/* <Area type="monotone" dataKey="time" stroke="#A2A4EF" fillOpacity={1} fill="url(#colorUv)" /> */}
                <Area type="monotone" dataKey="amt" stroke="#F18D6D" fillOpacity={1} fill="url(#colorAt)" />
            </AreaChart></div>
    </div>
    )
}

export default Chart;