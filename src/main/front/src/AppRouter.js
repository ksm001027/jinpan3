import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import App from './App';
import LoginForm from './login';

function AppRouter() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLoginSuccess = () => {
        setIsLoggedIn(true);
    };

    return (
        <Router>
            <Routes>
                <Route path="/" element={isLoggedIn ? <Navigate to="/app" /> : <LoginForm onLogin={handleLoginSuccess} />} />
                <Route path="/app" element={isLoggedIn ? <App /> : <Navigate to="/" />} />
            </Routes>
        </Router>
    );
}

export default AppRouter;
