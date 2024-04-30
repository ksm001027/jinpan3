// QR.js

import React from 'react';
import QRCode from 'qrcode.react';

function QR() {
    // 변경된 URL 가져오기
    const currentUrl = "https://localhost:8080";

    return (
        <div>
            <h1>QR 코드로 변환된 로컬 호스트 URL</h1>
            {/* QR 코드 컴포넌트에 로컬 호스트 URL을 데이터로 전달하여 QR 코드 생성 */}
            <QRCode value={currentUrl} />
        </div>
    );
}

export default QR;
