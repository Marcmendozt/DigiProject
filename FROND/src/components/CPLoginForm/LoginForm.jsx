import React, { useState } from 'react';
import './LoginForm.css';
import { Redirect } from 'react-router-dom';


const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [redirectToForm, setRedirectToForm] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    console.log("Username:", username);
    console.log("Password:", password);
    setRedirectToForm(true);
   
  };

  if (redirectToForm) {
    return <Redirect to="/Home" />;
  }



  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h2>Ingreso de usuario</h2>
      <div className="form-group">
        <label htmlFor="username">Usuario:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleUsernameChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Contraseña:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <button type="submit">Ingresar</button>
    </form>
  );
};

export default LoginForm;
