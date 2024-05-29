import { useState } from "react";
import instance from "../utils/http";
import { useNavigate } from "react-router-dom";

function Register() {
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

    const onSignUp = async () => {
        const { data } = await instance.post('/register', inputValue);

        if ( data.accessToken ) {
            navigate('/login');
        }
    };


    return (
        <div>
            <input type="text" name="email" placeholder="이메일" onChange={onInputChange} />
            <input type="password" name="password" placeholder="비밀번호" onChange={onInputChange} />
            <button onClick={onSignUp}>회원가입</button>
        </div>
    )
}

export default Register;