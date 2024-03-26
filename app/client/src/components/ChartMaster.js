import React from 'react';
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const data = [
    { name: "Strong", value: 80, color: "#000" },
    { name: "Weak", value: 20, color: "#ed1c24" },
];
const ChartMaster = () => {
    return (
        <div className="pieChartBox">
            <div className="chart">
                <ResponsiveContainer width={100} height={100}>
                    <PieChart>
                        <Tooltip
                            contentStyle={{ borderRadius: "5px" }}
                        />
                        <Pie
                            data={data}
                            innerRadius={"70%"}
                            outerRadius={"90%"}
                            paddingAngle={5}
                            dataKey="value"
                        >
                            {data.map((item) => (
                                <Cell key={item.name} fill={item.color} />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default ChartMaster;