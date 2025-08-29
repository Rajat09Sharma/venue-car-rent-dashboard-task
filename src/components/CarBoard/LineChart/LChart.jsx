
import { IoIosArrowDown } from "react-icons/io";
import LineChartImg from "../../../assets/line-chart.png";

const DATA = [
    "Last 6 months",
    "Same period last year"
]

export const LChart = () => {
    return (
        <>
            <div className="md:w-full md:mt-4 md:py-4 md:px-6 md:bg-white md:space-y-4 md:rounded-md md:shadow-lg md:shadow-gray-200">

                <div className="md:flex md:items-center md:justify-between">
                    <div className="md:flex md:items-center md:gap-8">
                        <h2 className="md:text-xl md:font-bold">Earning Summary</h2>
                        <p className="md:flex md:items-center md:gap-3 md:text-sm">May 2022 - Oct 2022 <span><IoIosArrowDown /></span></p>
                    </div>
                    <div className="md:flex md:items-center md:gap-8">
                        {
                            DATA.map((item, index) => <div key={index} className="md:flex md:items-center md:gap-3">
                                <p className={`md:w-2 md:h-2 md:rounded-full ${index == 0 ? 'md:bg-blue-700' : 'md:bg-gray-400'}`}></p>
                                <p className="md:text-sm">{item}</p>
                            </div>
                            )}
                    </div>
                </div>
                <div className="md:w-full">
                    <img className="md:w-full md:object-cover" src={LineChartImg} />
                </div>
            </div>
        </>
    )
}
