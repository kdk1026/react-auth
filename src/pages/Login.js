import { useState } from "react";
import instance from "../utils/http";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();

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
    };

    return (
        <div>
            <input type="text" name="email" placeholder="이메일" onChange={onInputChange} />
            <input type="password" name="password" placeholder="비밀번호" onChange={onInputChange} />
            <button onClick={onLogin}>로그인</button>
        </div>
    )
}

export default Login;