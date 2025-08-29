
import UserImg from "../../../assets/user.png"
import User2Img from "../../../assets/user-2.png"
import { HiAdjustmentsHorizontal } from "react-icons/hi2";

const TableHeads = ["No.", "Car no.", "Driver", "Status", "Earning", ""];

const TABLECONTENT = [
    {
        no: "1",
        carNo: "6465",
        driver: "Alex Noamn",
        img: UserImg,
        status: "Completed",
        earning: "$35.44"
    },
    {
        no: "2",
        carNo: "5665",
        driver: "Razib Rahman",
        img: User2Img,
        status: "Pending",
        earning: "$0.00"
    },
    {
        no: "3",
        carNo: "1755",
        driver: "Luke Norton",
        img: UserImg,
        status: "In route",
        earning: "$23.50"
    },
]

export const CarStatus = () => {
    return (
        <div className="md:mt-4 md:py-4 md:px-6 md:bg-white md:space-y-3 md:rounded-md md:shadow-lg md:shadow-gray-200">

            <div className="md:flex md:items-center md:justify-between">
                <h2 className="md:text-xl md:font-bold">Live Car Status</h2>
                <p className="md:flex md:items-center md:gap-1.5 md:py-1 md:px-2 md:bg-gray-100 md:rounded-md"><HiAdjustmentsHorizontal />Filter</p>
            </div>

            <div className="md:overflow-x-auto md:text-gray-500">
                <table className="md:min-w-full md:border-none">
                    <thead className="">
                        <tr>
                            {TableHeads.map((head, index) => <th key={index} className="md:px-4 md:py-2 md:text-left md:font-medium">{head}</th>)}
                        </tr>
                    </thead>
                    <tbody>
                        {TABLECONTENT.map((item) => {

                            let statusCss;
                            if (item.status == "Completed") {
                                statusCss = 'md:bg-green-500 md:ring-2 md:ring-green-500';
                            } else if (item.status == "Pending") {
                                statusCss = 'md:bg-blue-500 md:ring-2 md:ring-blue-500';
                            } else {
                                statusCss = 'md:bg-red-500 md:ring-2 md:ring-red-500';
                            }

                            return (
                                <tr key={item.no} className="md:border-t md:border-gray-300">
                                    <td className="md:px-4 md:py-2">{item.no}</td>
                                    <td className="md:px-4 md:py-2"><p className="md:w-fit md:py-1 md:px-4 md:bg-gray-100 md:rounded-md">{item.carNo}</p></td>
                                    <td className="md:px-4 md:py-2">
                                        <div className="md:flex md:items-center md:gap-5">
                                            <img src={item.img} alt={item.driver} />
                                            <h3 className="md:text-black md:font-medium">{item.driver}</h3>
                                        </div>
                                    </td>
                                    <td className="md:px-4 md:py-2">
                                        <div className="md:flex md:items-center md:gap-5">
                                            <p className={`md:w-2.5 md:h-2.5 md:rounded-full ${statusCss} md:ring-offset-1 md:ring-offset-gray-100`}>
                                            </p>
                                            <h3>{item.status}</h3>
                                        </div>
                                    </td>
                                    <td className="md:px-4 md:py-2">{item.earning}</td>
                                    <td className="md:px-4 md:py-2 md:text-right">
                                        <button className="md:py-1 md:px-4 md:text-white md:bg-blue-700 md:rounded-md md:cursor-pointer transition-colors duration-200 md:hover:bg-blue-600">Details</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>

        </div>
    )
}
