

import { FaBell } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { CarAvailability } from "./CarAvailability/CarAvailability";
import { CarStatus } from "./CarStatus/CarStatus";
import { LChart } from "./LineChart/LChart";


export const CarBoard = () => {
    return (
        <>
            <div className="md:w-3/4 md:py-4 md:px-6 md:bg-[#fafafa]">
                <div className="md:flex md:justify-end md:items-center md:gap-6">
                    <span className="md:cursor-pointer md:relative"><span className="after:content-[''] after:absolute after:top-0 after:right-0  after:w-2 after:h-2 after:bg-red-400 after:rounded-full"></span><FaBell size={20} /></span>
                    <div className="md:w-80 md:flex md:items-center md:justify-between md:gap-2 md:py-3 md:px-6 md:bg-white md:rounded-2xl md:shadow-lg md:shadow-gray-200">
                        <input type="search" className="md:w-full md:outline-0" placeholder="Search here" />
                        <span className="md:cursor-pointer"><CiSearch size={22} /></span>
                    </div>
                </div>
                <CarAvailability />
                <CarStatus />
                <LChart />
            </div>
        </>
    )
}
