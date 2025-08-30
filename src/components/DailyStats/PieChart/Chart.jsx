
import { IoIosArrowRoundDown } from "react-icons/io";
import { IoIosArrowRoundUp } from "react-icons/io";

import PieChartImg from "../../../assets/pie-chart.png";

import {
    PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer
} from "recharts";

const pieData = [
    { name: "Marketing", value: 200 },
    { name: "Development", value: 300 },
    { name: "Sales", value: 400 },
];

const COLORS = [
    "#00c951",
    "#fb2c36",
    "#0088FE",
];

const DATAS = [
    {
        title: "Total Hired",
        percent: "54",
        up: true
    },
    {
        title: "Total Canceled",
        percent: "20",
        up: true
    },
    {
        title: "Total Pending",
        percent: "26",
        up: false
    },
]

export const Chart = () => {
    return (
        <div className="md:mt-4 md:py-4 md:px-3 md:bg-white md:border md:border-gray-300 md:rounded-md md:shadow-xl md:shadow-neutral-400">
            <div className="md:flex md:justify-between">
                <p className="md:text-lg md:text-gray-500 md:font-semibold">Hire vs Cancel</p>
                <p className="md:text-xs md:py-1 md:px-2 md:bg-gray-100 md:rounded-md">Today</p>
            </div>
            {/* <img className="md:w-35 md:mx-auto md:my-4" src={PieChartImg} /> */}
            <div className="w-full h-60">
                <ResponsiveContainer>
                    <PieChart>
                        <Pie
                            data={pieData}
                            dataKey="value"
                            nameKey="name"
                            cx="50%"
                            cy="50%"
                            outerRadius={90}
                            innerRadius={60}
                            paddingAngle={3}
                        >
                            {pieData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </div>
            <div className="md:mt-2 md:space-y-2">
                {DATAS.map((data, index) => {

                    let dotCss;
                    if (data.title == "Total Hired") {
                        dotCss = 'md:bg-blue-600';
                    } else if (data.title == "Total Canceled") {
                        dotCss = 'md:bg-green-500';
                    } else {
                        dotCss = 'md:bg-red-500';
                    }

                    return (
                        <div key={index} className="md:flex md:items-center md:justify-between">
                            <div className="md:flex md:items-center md:gap-3">
                                <p className={`md:w-3 md:h-3 md:rounded-full ${dotCss}`}></p>
                                <p>{data.title}</p>
                            </div>
                            <p className="md:flex md:items-center">{data.percent}% <span className={`${data.up ? 'md:text-green-500' : 'md:text-red-500'}`}>{data.up ? <IoIosArrowRoundUp size={25} /> : <IoIosArrowRoundDown size={25} />}</span></p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

