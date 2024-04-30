import React, { useState } from 'react';
import axios from 'axios';

function FileUploader({ onUpload }) {
    const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleUpload = async () => {
        if (!file) {
            alert('파일을 먼저 선택해야 한다');
            return;
        }
        const formData = new FormData();
        formData.append('file', file);
        try {
            await axios.post('/api/files/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            alert('파일이 업로드 되었다');
            onUpload(); // 부모 컴포넌트에 업로드 했다고 알림
        } catch (error) {
            console.error('파일 업로드에 실패했다:', error);
        }
    };

    return (
        <div className="section">
            <h2>파일 업로드</h2>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload}>업로드</button>
        </div>
    );
}

export default FileUploader;
