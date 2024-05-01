import React, { useState } from 'react';
import axios from 'axios';

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/member/login', {
                email: email,
                password: password
            });
            console.log('로그인 성공:', response.data);
            // 로그인 성공 시, 토큰 저장, 홈페이지나 대시보드로 리다이렉트 등의 조치
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
