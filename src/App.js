import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Posts from "./pages/Posts";
import EmptyPage from "./pages/EmptyPage";
import { Provider } from "react-redux";
import store from "./store";
import MyPage from "./pages/MyPage";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<Main />}>
                <Route path="/posts" element={<Posts />} />
                <Route path="/mypage" element={<MyPage />} />
              </Route>
              <Route path="*" element={<EmptyPage />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
