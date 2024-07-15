import { Outlet, useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import NavBar2 from "../components/NavBar2";
import { getToken } from "../utils/token";
import { useEffect } from "react";

function Main() {
    const accessToken = getToken();
    const navigate = useNavigate();

    useEffect(() => {
        navigate('/main');
    }, [navigate]);

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