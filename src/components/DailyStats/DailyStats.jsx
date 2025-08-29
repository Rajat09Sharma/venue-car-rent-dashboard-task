import { useEffect, useState } from "react";
import { CashCard } from "./CashCard/CashCard";
import { Chart } from "./PieChart/Chart";



export const DailyStats = () => {
    const [dateTime, setDateTime] = useState("");

    useEffect(() => {
        const update = () => {
            const now = new Date();
            const formatted = `${now.toLocaleDateString([], { weekday: "short" })}, ${now.getDate()} ${now.toLocaleDateString([], { month: "short" })} ${now.getFullYear()}, ${now.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
                hour12: true,
            })}`;
            setDateTime(formatted);
        };
        update();
        const interval = setInterval(update, 1000);
        return () => clearInterval(interval);
    }, []);


    return (
        <>
            <div className="md:py-4 md:px-6 md:w-1/4 md:min-h-screen md:bg-[#f5f5f0]">
                <div className="time-date">
                    <h2 className="md:text-xl">Todays Statistics</h2>
                    <p className="md:text-md md:text-gray-600">{dateTime}</p>
                </div>
                <CashCard title={"Income"} amt={"$9460.00"} desc={"Compared to 9940 yesterday"} lastAmt={"$25656.00"} profit={false} precent={"15"} />
                <CashCard title={"Expences"} amt={"$5660.00"} desc={"Compared to 5240 yesterday"} lastAmt={"$22658.00"} profit={true} precent={"2.5"} />
                <Chart />
            </div>
        </>
    )
}
