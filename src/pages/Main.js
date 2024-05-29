import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import NavBar2 from "../components/NavBar2";

function Main() {
    const accessToken = sessionStorage.getItem('accessToken');
    
    return (
        <>
            {
                !accessToken ? <NavBar /> : <NavBar2 />
            }
            <Outlet />
        </>
    )
}

export default Main;