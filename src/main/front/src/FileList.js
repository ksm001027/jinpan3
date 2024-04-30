import React, { useEffect, useState } from 'react';
import axios from 'axios';

function FileList() {
    const [files, setFiles] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchFiles();
    }, []);

    const fetchFiles = async () => {
        setLoading(true);
        try {
            const { data } = await axios.get('/api/files');
            setFiles(data);
        } catch (error) {
            console.error('파일 목록을 불러오는 데 실패했다:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="section">
            <h2>파일 목록</h2>
            {loading ? (
                <p>로딩 중...</p>
            ) : (
                <ul>
                    {files.map((file, index) => (
                        <li key={index}>
                            <a href={`/files/download/${file}`} download>{file}</a>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default FileList;
