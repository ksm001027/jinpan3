import axios from 'axios';
import React, { useState } from 'react';

function SignupForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/member/signup', {
                email: email,
                password: password,
                name: name
            });
            console.log('회원가입 성공:', response.data);
            // 로그인 페이지로 리다이렉트 하거나, 로그인 상태 업데이트
        } catch (error) {
            console.error('회원가입 실패:', error.response.data);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                이메일: <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <br />
            <label>
                비밀번호: <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <br />
            <label>
                이름: <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <br />
            <button type="submit">회원가입</button>
        </form>
    );
}

export default SignupForm;
