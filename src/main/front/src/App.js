import React, {useEffect} from 'react';
import './App.css'; // 스타일 파일 임포트
import Responses from './Responses';
import FileUploader from './FileUploader';
import FileList from './FileList';
import ResponseForm from './ResponseForm';
import QR from './QR';
import axios from "axios";

function App() {
    useEffect(() => {
        // 서버에서 렌더링된 HTML 문서에서 CSRF 토큰을 가져오는 로직
        const csrfTokenMeta = document.querySelector("meta[name='_csrf']");

        // CSRF 토큰이 존재하는지 확인 후 요청 헤더에 추가
        if (csrfTokenMeta) {
            axios.defaults.headers.common["X-XSRF-TOKEN"] = csrfTokenMeta.content;
        }
    }, []);

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
