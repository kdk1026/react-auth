import { Link } from "react-router-dom";

function NavBar() {
    return (
        <div>
            <Link to="/register">회원가입</Link> | <Link to="/login">로그인</Link> | <Link to="/posts">게시물</Link>
        </div>
    )
}

export default NavBar;