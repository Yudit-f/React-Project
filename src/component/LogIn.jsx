import React, { useContext, useState } from 'react';
import MyContext from '../context';
import { useNavigate } from 'react-router-dom';

const Login = () => {

     const users=useContext(MyContext).users; //רשימה של משתמשים
    const func=useContext(MyContext).userLoggedIn;
    const navigate=useNavigate();


    const [userName,setUserName]=useState("");
    const[password,setPassword]=useState("")
     if (!users || !Array.isArray(users)) {
    alert('רשימת המשתמשים לא זמינה');
    return;
  }
   

  const login = () => {
    const user = users.find(u => u.userName === userName && u.password === password);
    if (!user) {
      alert('אחד הפרטים שגויים');
    } else {
      alert('התחברת בהצלחה');
      func(user);
      navigate('/products');
    }
  };

  return (
    <div>
      <label htmlFor="username">הכנס שם משתמש</label>
      <input
        id="username"
        type="text"
        value={userName}
        onChange={e => setUserName(e.target.value)}
      />
      
      <label htmlFor="password">הכנס סיסמא</label>
      <input
        id="password"
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      
      <button onClick={login}>התחברות</button>
    </div>
  );
};

export default Login;