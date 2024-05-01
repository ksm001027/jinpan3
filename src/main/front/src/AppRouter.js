import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import App from './App';
import LoginForm from './login';

function AppRouter() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLoginSuccess = () => {
        setIsLoggedIn(true);
    };

    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    {isLoggedIn ? <Redirect to="/app" /> : <LoginForm onLogin={handleLoginSuccess} />}
                </Route>
                <Route path="/app" exact>
                    {isLoggedIn ? <App /> : <Redirect to="/" />}
                </Route>
            </Switch>
        </Router>
    );
}

export default AppRouter;
