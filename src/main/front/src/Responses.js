import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Responses() {
    const [responses, setResponses] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchResponses();
    }, []);

    const fetchResponses = async () => {
        setLoading(true);
        try {
            const result = await axios('/api/responses');
            setResponses(result.data);
        } catch (error) {
            console.error('응답을 불러오는 데 실패했다:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="section">
            <h2>응답 결과</h2>
            {loading ? (
                <p>로딩 중...</p>
            ) : (
                <ul>
                    {responses.map((response, index) => (
                        <li key={index}>{response.content}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Responses;
