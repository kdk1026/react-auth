import { Link, useNavigate } from "react-router-dom";

function NavBar2() {
    const navigate = useNavigate();

    const onLogout = () => {
        sessionStorage.removeItem('accessToken');
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