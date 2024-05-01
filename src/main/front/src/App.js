import React from 'react';
import './App.css'; // 스타일 파일 임포트
import Responses from './Responses';
import FileUploader from './FileUploader';
import FileList from './FileList';
import ResponseForm from './ResponseForm';
import QR from './QR';
import save from './Save';
function App() {
    const handleFileUploadSuccess = () => {
        // 파일 업로드가 성공적으로 완료되었을 때 필요한 동작
    };

    return (
        <div className="container">
            <h1>설문조사 및 파일 관리</h1>
            <ResponseForm />
            <Responses />
            <FileUploader onUpload={handleFileUploadSuccess} />
            <FileList />
            <QR />
        </div>
    );
}

export default App;
