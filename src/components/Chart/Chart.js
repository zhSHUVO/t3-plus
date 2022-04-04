import React from "react";
import {
    Bar,
    BarChart,
    CartesianGrid,
    Legend,
    Line,
    LineChart,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";
import useChart from "../../hooks/useChart";
import "./Chart.css";
const Chart = () => {
    const [chartData, setChartData] = useChart([]);
    return (
        <div className="charts">
            <div className="chart">
                <h3>Monthly Sell</h3>
                <LineChart
                    width={500}
                    height={400}
                    data={chartData}
                    label="aksjhd"
                >
                    <Line
                        type="monotone"
                        dataKey={"sell"}
                        stroke="#ffd57a"
                    ></Line>
                    <Legend></Legend>
                    <CartesianGrid stroke="#dce8f2"></CartesianGrid>
                    <XAxis dataKey={"month"}></XAxis>
                    <YAxis dataKey={"sell"}></YAxis>
                    <Tooltip></Tooltip>
                </LineChart>
            </div>
            <div className="chart">
                <h3>Investment vs Revenue</h3>
                <BarChart
                    width={500}
                    height={400}
                    data={chartData}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="investment" stackId="a" fill="#fcba19" />
                    <Bar dataKey="revenue" stackId="a" fill="#ffd57a" />
                </BarChart>
            </div>
        </div>
    );
};

export default Chart;
