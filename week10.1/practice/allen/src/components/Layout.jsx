import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function Layout(){
    return (
        <>
            <Navbar/>
            <Outlet/>
            <div>
                Footer
            </div>
        </>
    )
}

export default Layout;  