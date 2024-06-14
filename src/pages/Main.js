import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import NavBar2 from "../components/NavBar2";
import { getToken } from "../utils/token";

function Main() {
    const accessToken = getToken();
    
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