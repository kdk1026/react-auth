import { useRef, useState } from "react";
import { useAxios } from "../utils/http";
import { useNavigate } from "react-router-dom";
import InputField from "../components/InputField";
import { useDispatch } from "react-redux";
import { userAction } from "../store/actions/UserAction";

function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {instance} = useAxios();

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
        if ( !inputValidate() ) {
            return false;
        }

        const { data } = await instance.post('/login', inputValue);

        if ( data.accessToken ) {
            localStorage.setItem('accessToken', data.accessToken);
            navigate('/posts');
        }

        if ( data.user ) {
            userAction.setUserInfo(dispatch, data.user);
        }
    };

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const inputValidate = () => {
        if ( !inputValue.email ) {
            alert("이메일을 입력해주세요.");
            emailRef.current.focus();
            return false;
        }

        if ( !inputValue.password ) {
            alert("비밀번호를 입력해주세요.");
            passwordRef.current.focus();
            return false;
        }

        return true;
    };

    return (
        <>
            <div>
                <InputField
                    type="text"
                    className=""
                    name="email"
                    value={inputValue.email}
                    placeholder="이메일"
                    onChange={onInputChange}
                    inputRef={emailRef}
                />
                <InputField
                    type="password"
                    className=""
                    name="password"
                    value={inputValue.password}
                    placeholder="비밀번호"
                    onChange={onInputChange}
                    inputRef={passwordRef}
                />
                <button onClick={onLogin}>로그인</button>
            </div>
        </>
    )
}

export default Login;