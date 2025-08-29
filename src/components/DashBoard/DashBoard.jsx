import { CarBoard } from "../CarBoard/CarBoard"
import { DailyStats } from "../DailyStats/DailyStats"
import { Navbar } from "../Navbar/Navbar"

export const DashBoard = () => {
    return (
        <>
            <div className="md:flex">
                <Navbar />
                <DailyStats />
                <CarBoard />
            </div>
        </>
    )
}
