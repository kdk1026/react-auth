import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getToken } from "../utils/token";

function MyPage() {
    const navigate = useNavigate();

    useEffect(() => {
        const accessToken = getToken();
        if ( !accessToken ) {
            navigate('/login');
        }
    }, [navigate]);

    const userInfo = useSelector((state) => state.user.userInfo);

    return (
        <div>
            <p>{userInfo.email}</p>
            <p>{userInfo.id}</p>
        </div>
    )
}

export default MyPage;