import { Outlet } from "react-router-dom"
import Sidebar from "../components/main/Sidebar"
import Summary from "../components/main/Summary"

export default function Layout() {
    return (
        <div className="flex flex-col md:flex-row">
            <Sidebar/>
            
            <main className="flex-1 p-2 h-svh overflow-y-auto scrollbar-thin">
                <Outlet />
            </main>

            <Summary/>
        </div>
    )
}
