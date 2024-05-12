import React, { useState } from 'react'; // useState를 import해야 합니다.
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // navigate 함수를 초기화합니다.

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/member/login', {
                email: email,
                password: password
            });
            if (response && response.data) {
                console.log('로그인 성공:', response.data);
                navigate('/dashboard'); // navigate 함수를 사용하여 이동합니다.
            } else {
                console.error('로그인 실패: 응답 데이터가 없습니다.');
            }
        } catch (error) {
            console.error('로그인 실패:', error.response.data);
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <label>
                이메일: <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </label>
            <br />
            <label>
                비밀번호: <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </label>
            <br />
            <button type="submit">로그인</button>
        </form>
    );
}

export default LoginForm;
