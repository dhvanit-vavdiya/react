import React, { useState } from 'react';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleRegister = async (userData) => {
    // Implement API call to register user (use fetch or axios)
    // After successful registration, you can set the logged-in user state
    console.log('User registered:', userData);
  };

  const handleLogin = async (credentials) => {
    // Implement API call to authenticate user (use fetch or axios)
    // After successful login, you can set the logged-in user state
    console.log('User logged in:', credentials);
  };

  return (
    <div>
      {loggedInUser ? (
        <div>
          <h2>Welcome, {loggedInUser.name}!</h2>
          {/* Display other user information and options here */}
        </div>
      ) : (
        <div>
          <h2>Register</h2>
          <RegisterForm onRegister={handleRegister} />

          <h2>Login</h2>
          <LoginForm onLogin={handleLogin} />
        </div>
      )}
    </div>
  );
};

export default App;
