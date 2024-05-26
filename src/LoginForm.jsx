import React, { useState } from 'react';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username === 'user' && password === 'password') {
      setStatusMessage('Welcome, admin!');
    } else {
      setStatusMessage('Invalid username or password');
    }
  };

  return (
    <div className="login-page-container">
      <h2>Login Page</h2>
      <form onSubmit={handleSubmit}>
        {statusMessage && <div>{statusMessage}</div>}
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default LoginForm;
