import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Registration() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [isRegistered, setIsRegistered] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault(); 
    try {
      const response = await axios.post('http://localhost:5000/auth/register', {
        username,
        email,
        password,
      });
      console.log(response.data);
    } catch (error) {
      console.error('Registration error:', error);
    }
    setIsRegistered(true);
  };

  return (
    <div>
      <h2>Registration</h2>
      <label for='username'>UserName: </label>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      /><br/><br/>
      <label for='email'>Email: </label>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      /><br/><br/>
      <label for='password'>Password: </label>
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      /><br/><br/>
      <button onClick={handleRegister}>Register</button>
      {isRegistered && <p>Registered successfully!</p>}
      <p>Already have an account? <Link to="/login">Login</Link></p>
    </div>
  );
}

export default Registration;
