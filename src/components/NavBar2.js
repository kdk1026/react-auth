import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { userAction } from "../store/actions/UserAction";
import { removeToken } from "../utils/token";

function NavBar2() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onLogout = () => {
        removeToken();
        userAction.removeUserInfo(dispatch);
        navigate('/login');
    };

    return (
        <div>
            <Link to="/posts">게시물</Link> | <Link to="/mypage">마이페이지</Link>
            <button onClick={onLogout}>로그아웃</button>
        </div>
    )
}

export default NavBar2;