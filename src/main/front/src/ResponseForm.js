import React, { useState } from 'react';
import axios from 'axios';

function ResponseForm() {
    const [inputResponse, setInputResponse] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!inputResponse) return; // 빈 응답 방지
        try {
            await axios.post('/api/responses', { content: inputResponse });
            setInputResponse(''); // 입력 필드 초기화
        } catch (error) {
            console.error('응답을 저장하는 데 실패했다:', error);
        }
    };

    const handleInputChange = (event) => {
        setInputResponse(event.target.value);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputResponse}
                onChange={handleInputChange}
                placeholder="여기에 응답을 입력하세요"
            />
            <button type="submit">제출</button>
        </form>
    );
}

export default ResponseForm;
