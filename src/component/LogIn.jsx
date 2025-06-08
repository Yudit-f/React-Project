import React, { useContext, useState } from 'react';
import MyContext from '../context';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { users, userLoggedIn, setmanager } = useContext(MyContext);
  const navigate = useNavigate();

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  if (!users || !Array.isArray(users)) {
    alert('User list is not available');
    return null;
  }

  const login = () => {
    const user = users.find(u => u.userName === userName && u.password === password);
    if (!user) {
      alert('One of the details is incorrect');
    } else {
      alert('Login successful');
      userLoggedIn(user);
      if (user.userName === "manager" && user.password === "1") {
        setmanager(true);
      }
      navigate('/products');
    }
  };

  return (
    <div className="login-form-container">
      <label htmlFor="username">Username</label>
      <input
        id="username"
        type="text"
        value={userName}
        onChange={e => setUserName(e.target.value)}
      />

      <label htmlFor="password">Password</label>
      <input
        id="password"
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />

      <button onClick={login}>Log In</button>
    </div>
  );
};

export default Login;