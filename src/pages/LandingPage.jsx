import React, { useState } from 'react';
import Register from '../forms/Register';
import Login from '../forms/Login';
import Welcome from '../components/Welcome';
import TopBar2 from '../components/TopBar2';

const LandingPage = () => {
  const [showLogin, setShowLogin] = useState(true);
  const [showRegister, setShowRegister] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);
  const [showTop, setShowTop] = useState(true);

  const topBar = () => {
    setShowWelcome(false);
  };

  const loginHandler = () => {
    setShowLogin(true);
    setShowRegister(false);
    setShowWelcome(false);
  };

  const registerHandler = () => {
    setShowLogin(false);
    setShowRegister(true);
    setShowWelcome(false);
  };

  const welcomeHandler = () => {
    setShowWelcome(true);
    setShowLogin(false);
    setShowRegister(false);
    setShowTop(false);
  };

  return (
    <div>
      {showTop && <TopBar2 />}
     
        {showLogin && (
         
            <Login welcomeHandler={welcomeHandler} loginHandler={loginHandler} registerHandler={registerHandler} />
         
        )}
        {showRegister && (
        
            <Register  loginHandler={loginHandler}/>
        
        )}
        {showWelcome && <Welcome />}
      </div>

  );
};

export default LandingPage;
