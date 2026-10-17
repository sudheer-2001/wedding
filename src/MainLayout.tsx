import { Outlet } from "react-router-dom";
import Header from "./components/Header";


export default function MainLayout() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <Header />
            <div className="app-container flex">
                {/* <SideBar /> */}
                <main className="app-content">
                    <Outlet />
                </main>
            </div>
        </div>
    )
}