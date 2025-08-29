
import { IoIosArrowRoundDown } from "react-icons/io";
import { IoIosArrowRoundUp } from "react-icons/io";

export const CashCard = ({ title, desc, amt, lastAmt, profit, precent }) => {
    return (
        <div className="Cash-card md:mt-4 md:py-4 md:px-3 md:bg-white md:border md:border-gray-300 md:rounded-md md:shadow-xl md:shadow-neutral-400">
            <div className="md:flex md:justify-between md:pb-2 md:border-b md:border-b-gray-300">
                <p className="md:text-lg md:text-gray-500 md:font-semibold">{title}</p>
                <p className="md:text-xs md:py-1 md:px-2 md:bg-gray-100 md:rounded-md">Today</p>
            </div>
            <div className="md:my-2 md:flex md:justify-between">
                <p className="md:mb-1 md:font-bold md:text-3xl md:flex md:justify-between md:items-baseline">{amt}</p>
                <div className="md:flex md:flex-col md:justify-end">
                    <span className={`md:flex md:items-center md:font-medium md:text-[18px] ${profit ? 'md:text-green-500' : 'md:text-red-500'}`}>{profit ? <IoIosArrowRoundUp size={25} /> : <IoIosArrowRoundDown size={25} />}{precent}%</span>
                </div>
            </div>
            <div className="space-y-0.5">
                <p className="md:text-gray-500">{desc}</p>
                <div className="md:flex md:justify-between md:text-sm md:text-gray-700 md:font-medium">
                    <p>Last week {title}</p>
                    <p>{lastAmt}</p>
                </div>
            </div>
        </div>
    )
}
