import { useState } from "react";
import instance from "../utils/http";
import { useNavigate } from "react-router-dom";
import InputField from "../components/InputField";
import { useDispatch } from "react-redux";
import { userAction } from "../store/actions/UserAction";

function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [inputValue, setInputValue] = useState({
        email: '',
        password: ''
    });

    const onInputChange = (e) => {
        const { name, value } = e.target;
        setInputValue({
            ...inputValue,
            [name]: value
        });
    };

    const onLogin = async () => {
        const { data } = await instance.post('/login', inputValue);

        if ( data.accessToken ) {
            sessionStorage.setItem('accessToken', data.accessToken);
            navigate('/posts');
        }

        if ( data.user ) {
            userAction.setUserInfo(dispatch, data.user);
        }
    };

    return (
        <div>
            <InputField
                type="text"
                className=""
                name="email"
                value={inputValue.email}
                placeholder="이메일"
                onChange={onInputChange}
            />
            <InputField
                type="password"
                className=""
                name="password"
                value={inputValue.password}
                placeholder="비밀번호"
                onChange={onInputChange}
            />
            <button onClick={onLogin}>로그인</button>
        </div>
    )
}

export default Login;