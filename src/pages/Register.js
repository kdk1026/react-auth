import { useState } from "react";
import instance from "../utils/http";
import { useNavigate } from "react-router-dom";
import InputField from "../components/InputField";

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
            <button onClick={onSignUp}>회원가입</button>
        </div>
    )
}

export default Register;