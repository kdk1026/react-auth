import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Posts from "../pages/Posts";
import EmptyPage from "../pages/EmptyPage";
import MyPage from "../pages/MyPage";
import Home from "../pages/Home";

function CommonRoute() {
    return (
        <>
          <BrowserRouter>
            <Routes>
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route element={<Main />}>
                  <Route path="/" element={<Home />} />
                  <Route path="/posts" element={<Posts />} />
                  <Route path="/mypage" element={<MyPage />} />
                </Route>
                <Route path="*" element={<EmptyPage />} />
            </Routes>
          </BrowserRouter>
        </>
    )
}

export default CommonRoute;