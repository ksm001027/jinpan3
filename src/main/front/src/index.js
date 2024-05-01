import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppRouter from './AppRouter';  // 수정된 부분
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <AppRouter />
    </React.StrictMode>
);

reportWebVitals();
