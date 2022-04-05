import React from "react";
import {
    Area,
    Bar,
    BarChart,
    CartesianGrid,
    ComposedChart,
    Legend,
    Line,
    LineChart,
    Scatter,
    ScatterChart,
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
                    width={350}
                    height={300}
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
                    width={350}
                    height={300}
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

            <div className="chart">
                <h3>Overall</h3>
                <ComposedChart
                    width={350}
                    height={300}
                    data={chartData}
                    margin={{
                        top: 20,
                        right: 20,
                        bottom: 20,
                        left: 20,
                    }}
                >
                    <CartesianGrid stroke="#f5f5f5" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Area
                        type="monotone"
                        dataKey="investment"
                        fill="#ffd57a"
                        stroke="#fcba19"
                    />
                    <Line type="monotone" dataKey="revenue" stroke="#ff7300" />
                    <Scatter dataKey="sell" fill="#ffd05c" />
                </ComposedChart>
            </div>
            <div className="chart">
                <h3>Revenue</h3>
                <ScatterChart width={350} height={300}>
                    <CartesianGrid />
                    <Legend />
                    <XAxis
                        type="number"
                        dataKey="investment"
                        name="investment"
                        unit="tk"
                    />
                    <YAxis
                        type="number"
                        dataKey="revenue"
                        name="revenue"
                        unit="tk"
                    />
                    <Tooltip cursor={{ strokeDasharray: "3 3" }} />
                    <Scatter name="revenue" data={chartData} fill="#ffd57a" />
                </ScatterChart>
            </div>
        </div>
    );
};

export default Chart;
