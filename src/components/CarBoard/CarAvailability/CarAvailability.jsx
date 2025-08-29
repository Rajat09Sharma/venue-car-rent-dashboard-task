
import { BiCar } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import { FaCalendarCheck } from "react-icons/fa";
import { CiClock2 } from "react-icons/ci";

export const CarAvailability = () => {

    return (
        <div className="md:w-full md:mt-4 md:py-8 md:px-6 md:bg-white md:space-y-4 md:rounded-md md:shadow-lg md:shadow-gray-200">
            <h2 className="md:text-xl md:font-bold">Car Availablity</h2>

            <div className="md:flex md:justify-between">

                <div className="md:w-55 md:py-2 md:px-4 md:flex md:justify-between md:items-center md:text-gray-500 md:font-semibold md:border md:border-gray-300 md:rounded-md md:cursor-pointer">
                    <p className="md:flex md:items-center md:gap-3"><BiCar size={22} />Car number</p>
                    <span><IoIosArrowDown /></span>
                </div>

                <div className="md:flex">
                    <div className="md:w-40 md:py-2 md:px-4 md:flex md:justify-between md:items-center md:text-gray-500 md:font-semibold md:border md:border-gray-300 md:rounded-md md:rounded-tr-none md:rounded-br-none md:cursor-pointer">
                        <p className="md:flex md:items-center md:gap-3"><FaCalendarCheck size={22} />Car number</p>
                    </div>
                    <div className="md:w-40 md:py-2 md:px-4 md:flex md:justify-between md:items-center md:text-gray-500 md:font-semibold md:border md:border-gray-300 md:rounded-md md:rounded-tl-none md:rounded-bl-none md:cursor-pointer">
                        <p className="md:flex md:items-center md:gap-3"><CiClock2 size={22} />10 Am</p>
                        <span><IoIosArrowDown /></span>
                    </div>
                </div>
                <button className="md:py-3 md:px-4 md:w-28 md:bg-blue-700 md:text-white md:rounded-md md:cursor-pointer  transition-colors duration-200  md:hover:bg-blue-500">Check</button>
            </div>
        </div>
    )
}
