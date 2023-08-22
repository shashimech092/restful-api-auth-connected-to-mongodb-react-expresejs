import React, { useState } from 'react';
import axios from 'axios';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/auth/login', {
        username,
        password,
      });
      console.log(response.data);
    } catch (error) {
      console.error('Login error:', error);
    }
    setIsLoggedIn(true);
  };

  return (
    <div>
      <h2>Login</h2>
      <label for='password'>Username: </label>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      /><br/><br/>
      <label for='password'>Password: </label>
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      /><br/><br/>
      <button onClick={handleLogin}>Login</button>
      {isLoggedIn && <p>Login successful!</p>}
    </div>
  );
}

export default Login;
