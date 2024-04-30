import './App.css'; // CSS 스타일 임포트
import React, { useState } from 'react';
import axios from 'axios';
import QR from './QR'; // QR.js 파일을 import

function App() {
    const [responses, setResponses] = useState([]);
    const [inputResponse, setInputResponse] = useState('');

    const fetchResponses = async () => {
        try {
            const result = await axios('/api/responses');
            setResponses(result.data);
        } catch (error) {
            console.error('응답을 불러오는 데 실패했다:', error);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!inputResponse) return; // 빈 응답 방지
        try {
            await axios.post('/api/responses', { content: inputResponse });
            setInputResponse('');
            fetchResponses();  // 응답을 다시 불러옴
        } catch (error) {
            console.error('응답을 저장하는 데 실패했다:', error);
        }
    };

    const handleInputChange = (event) => {
        setInputResponse(event.target.value);
    };

    return (
        <div>
            <h1>설문조사</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={inputResponse}
                    onChange={handleInputChange}
                    placeholder="여기에 응답을 입력하세요"
                />
                <button type="submit">제출</button>
            </form>
            <h2>응답 결과</h2>
            <ul>
                {responses.map((response, index) => (
                    <li key={index}>{response.content}</li>
                ))}
            </ul>
            {/* QR 코드 컴포넌트 추가 */}
            <h2>QR 코드</h2>
            <QR />
        </div>
    );
}

export default App;
