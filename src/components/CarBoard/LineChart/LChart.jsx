import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

import { IoIosArrowDown } from "react-icons/io";

const DATA = [
    "Last 6 months",
    "Same period last year"
];

const lineData = [
    { name: "Jan", uv: 1000, pv: 2809 },
    { name: "Feb", uv: 1300, pv: 1200 },
    { name: "Mar", uv: 1240, pv: 2350 },
    { name: "Apr", uv: 1680, pv: 1280 },
    { name: "May", uv: 1640, pv: 1310 },
    { name: "Jun", uv: 1609, pv: 2150 },
    { name: "Jul", uv: 1690, pv: 1900 },
    { name: "Aug", uv: 1500, pv: 2200 },
    { name: "Sept", uv: 1460, pv: 1653 },
    { name: "Oct", uv: 1200, pv: 1853 },
    { name: "Nov", uv: 1090, pv: 1570 },
    { name: "Dec", uv: 900, pv: 2200 },
];

export const LChart = () => {
    return (
        <div className="md:w-full md:mt-4 md:py-4 md:px-6 md:bg-white md:space-y-4 md:rounded-md md:shadow-lg md:shadow-gray-200">
            {/* Header */}
            <div className="md:flex md:items-center md:justify-between">
                <div className="md:flex md:items-center md:gap-8">
                    <h2 className="md:text-xl md:font-bold">Earning Summary</h2>
                    <p className="md:flex md:items-center md:gap-3 md:text-sm">
                        May 2022 - Oct 2022 <span><IoIosArrowDown /></span>
                    </p>
                </div>
                <div className="md:flex md:items-center md:gap-8">
                    {DATA.map((item, index) => (
                        <div key={index} className="md:flex md:items-center md:gap-3">
                            <p className={`md:w-2 md:h-2 md:rounded-full ${index === 0 ? 'md:bg-blue-700' : 'md:bg-gray-400'}`}></p>
                            <p className="md:text-sm">{item}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Chart */}
            <div className="w-full h-80 py-4 px-1">
                <ResponsiveContainer>
                    <AreaChart data={lineData}>
                        {/* Remove horizontal grid lines */}
                        <CartesianGrid horizontal={false} />
                        <XAxis dataKey="name" />
                        <YAxis />
                        {/* <Tooltip /> */}

                        {/* Gradient definitions */}
                        <defs>
                            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#1447e6" stopOpacity={0.4} />
                                <stop offset="95%" stopColor="#1447e6" stopOpacity={0} />
                            </linearGradient>
                        </defs>

                        {/* Area with gradient */}
                        <Area
                            type="natural"
                            dataKey="pv"
                            stroke="#1447e6"
                            fill="url(#colorPv)"
                            strokeWidth={2}
                            dot={{ r: 0 }}
                            activeDot={{ r: 0 }}
                        />
                        <Area
                            type="natural"
                            dataKey="uv"
                            stroke="#c3c7ce"
                            fill="url(#colorUv)"
                            strokeWidth={2}
                            strokeDasharray="3 4 5 2"
                            dot={{ r: 0 }}
                            activeDot={{ r: 0 }}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};
