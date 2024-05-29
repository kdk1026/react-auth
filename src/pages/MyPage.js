import { useSelector } from "react-redux";

function MyPage() {
    const userInfo = useSelector((state) => state.UserReducer.userInfo);

    return (
        <div>
            <p>{userInfo.email}</p>
            <p>{userInfo.id}</p>
        </div>
    )
}

export default MyPage;