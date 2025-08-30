
import { RxDashboard } from "react-icons/rx";
import { BiCar } from "react-icons/bi";
import { TbBrandBooking } from "react-icons/tb";
import { LuBell } from "react-icons/lu";
import { FiSettings } from "react-icons/fi";
import { MdPayment } from "react-icons/md";
import { AiOutlineTransaction } from "react-icons/ai";
import { FiFileText } from "react-icons/fi";
import { FiLogIn } from "react-icons/fi";

import LogoImg from "../../assets/logo.png";
import { useState } from "react";

const NAVLINKS = [
    { icon: <RxDashboard size={22} />, title: "Dashboard" },
    { icon: <BiCar size={22} />, title: "Drivers" },
    { icon: <TbBrandBooking size={22} />, title: "Bookings" },
    { icon: <LuBell size={22} />, title: "Notifications" },
    { icon: <FiSettings size={22} />, title: "Settings" },
]

const REPORT_NAVLINKS = [
    { icon: <MdPayment size={22} />, title: "Payment Details" },
    { icon: <AiOutlineTransaction size={22} />, title: "Transactions" },
    { icon: <FiFileText size={22} />, title: "Car Report" },
]

export const Navbar = () => {

    const [showSidebar, setShowSidebar] = useState(false);

    const handlerSidebarHoverShow = () => {
        setShowSidebar(true);
    }

    const handlerSidebarHoverClose = () => {
        setShowSidebar(false);
    }

    return (
        <>
            <nav className={` ${showSidebar ? 'md:w-1/6' : 'md:w-0'} md:min-h-screen md:py-6 md:px-4 md:bg-neutral-900 md:flex md:flex-col md:justify-between md:cursor-pointer transition-all duration-200`} onMouseOver={handlerSidebarHoverShow} onMouseLeave={handlerSidebarHoverClose}>
                {showSidebar &&
                    <>
                        <div>
                            <div className="nav-brand md:w-full">
                                <img src={LogoImg} className="md:w-fit md:ms-2 md:me-auto md:object-cover" alt="" />
                            </div>

                            <div className="md:w-full md:flex md:flex-col md:space-y-2 md:text-sm md:text-gray-300  md:py-6 md:border-b md:border-b-gray-600  ">

                                {NAVLINKS.map((link, index) => <p key={index} className="md:w-full md:flex md:items-center md:gap-3 md:py-3 md:px-4 md:cursor-pointer md:rounded-md hover:bg-gray-800 active:bg-blue-800 active:text-white"><span>{link.icon}</span>{link.title}</p>)}

                            </div>

                            <div className="md:w-full md:space-y-2 md:py-6">
                                <p className="md:text-gray-500">Report</p>

                                <div className="md:w-full md:text-gray-300 md:space-y-2 md:text-sm">

                                    {REPORT_NAVLINKS.map((link, index) => <p key={index} className="md:w-full md:flex md:items-center md:gap-3 md:py-3 md:px-4 md:cursor-pointer md:rounded-md hover:bg-gray-800 active:bg-blue-800 active:text-white"><span>{link.icon}</span>{link.title}</p>)}

                                </div>
                            </div>
                        </div>
                        <button className="md:text-white md:py-2 md:px-4 md:flex md:items-center md:justify-center md:gap-2 md:rounded-md md:bg-[#464646] md:hover:bg-[#716f6f] md:cursor-pointer"><span><FiLogIn size={22} /></span>Logout</button>
                    </>
                }
            </nav>
        </>
    )
}
